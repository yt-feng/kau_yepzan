#!/usr/bin/env python3
import argparse
import html
import json
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.request
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


NS = {
    "a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}


def column_index(cell_ref):
    match = re.match(r"([A-Z]+)", cell_ref or "")
    if not match:
        return -1
    value = 0
    for char in match.group(1):
        value = value * 26 + ord(char) - ord("A") + 1
    return value - 1


def read_shared_strings(zf):
    try:
        raw = zf.read("xl/sharedStrings.xml")
    except KeyError:
        return []
    root = ET.fromstring(raw)
    strings = []
    for item in root.findall("a:si", NS):
        parts = [node.text or "" for node in item.findall(".//a:t", NS)]
        strings.append("".join(parts))
    return strings


def cell_value(cell, shared_strings):
    cell_type = cell.attrib.get("t")
    if cell_type == "inlineStr":
        return "".join(node.text or "" for node in cell.findall(".//a:t", NS))
    value_node = cell.find("a:v", NS)
    if value_node is None:
        return ""
    raw = value_node.text or ""
    if cell_type == "s":
        try:
            return shared_strings[int(raw)]
        except (ValueError, IndexError):
            return ""
    return raw


def read_first_sheet_rows(path):
    with zipfile.ZipFile(path) as zf:
        shared_strings = read_shared_strings(zf)
        workbook = ET.fromstring(zf.read("xl/workbook.xml"))
        first_sheet = workbook.find("a:sheets/a:sheet", NS)
        if first_sheet is None:
            return []
        rel_id = first_sheet.attrib.get(f"{{{NS['r']}}}id")
        rels = ET.fromstring(zf.read("xl/_rels/workbook.xml.rels"))
        target = None
        for rel in rels:
            if rel.attrib.get("Id") == rel_id:
                target = rel.attrib.get("Target")
                break
        if not target:
            return []
        target = target.lstrip("/")
        sheet_path = target if target.startswith("xl/") else "xl/" + target
        root = ET.fromstring(zf.read(sheet_path))
        rows = []
        for row in root.findall(".//a:sheetData/a:row", NS):
            values = []
            for cell in row.findall("a:c", NS):
                idx = column_index(cell.attrib.get("r", ""))
                while len(values) <= idx:
                    values.append("")
                values[idx] = cell_value(cell, shared_strings)
            rows.append(values)
        return rows


def normalize_rows(rows):
    if not rows:
        return []
    headers = [str(value).strip() for value in rows[0]]
    records = []
    for row in rows[1:]:
        item = {headers[i]: row[i] if i < len(row) else "" for i in range(len(headers))}
        if item.get("ID") and item.get("URL"):
            records.append(item)
    return records


def extract_zvideo_id(url):
    match = re.search(r"/zvideo/(\d+)", url or "")
    return match.group(1) if match else ""


def clean_text(value):
    value = html.unescape(str(value or ""))
    value = re.sub(r"\s+", " ", value).strip()
    return value


def clean_title(record, fallback):
    raw = clean_text(record.get("File name (optional)"))
    raw = re.sub(r"#\S+", "", raw).strip()
    if raw and raw != record.get("ID"):
        title = raw
    else:
        title = clean_text(fallback) or f"Lesson {record.get('ID')}"
    return title[:120]


def fetch_json(url, timeout=10, retries=1):
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; YepZanVideoBuilder/1.0)",
        "Accept": "application/json,text/plain,*/*",
    }
    curl = shutil.which("curl")
    if curl:
        command = [
            curl,
            "-L",
            "-sS",
            "--connect-timeout",
            "8",
            "--max-time",
            "20",
            "-H",
            f"User-Agent: {headers['User-Agent']}",
            "-H",
            f"Accept: {headers['Accept']}",
            url,
        ]
        completed = subprocess.run(command, check=False, capture_output=True, text=True)
        if completed.returncode != 0:
            raise RuntimeError(completed.stderr.strip() or f"curl failed for {url}")
        return json.loads(completed.stdout)

    for attempt in range(retries + 1):
        request = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(request, timeout=timeout) as response:
                charset = response.headers.get_content_charset() or "utf-8"
                return json.loads(response.read().decode(charset))
        except urllib.error.HTTPError as exc:
            if exc.code in (401, 403, 404, 410):
                raise exc
            if attempt >= retries:
                raise exc
            time.sleep(0.8 * (attempt + 1))
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
            if attempt >= retries:
                raise exc
            time.sleep(0.8 * (attempt + 1))
    return None


def pick_playlist_url(playlist):
    for key in ("SD", "LD", "HD", "sd", "ld", "hd"):
        item = playlist.get(key) if isinstance(playlist, dict) else None
        if not item:
            continue
        url = item.get("play_url") or item.get("url")
        if url:
            return url, item
    return "", {}


def build_item(record, lens_map=None, resolve_missing=False):
    zvideo_id = extract_zvideo_id(record.get("URL"))
    if not zvideo_id:
        return None

    zvideo_api_url = f"https://www.zhihu.com/api/v4/zvideos/{zvideo_id}"
    record_id = clean_text(record.get("ID"))
    lens_map = lens_map or {}
    lens_video_id = clean_text(lens_map.get(record_id) or lens_map.get(zvideo_id))
    zvideo = {}
    video = {}
    if not lens_video_id and resolve_missing:
        zvideo = fetch_json(zvideo_api_url)
        video = zvideo.get("video") or {}
        lens_video_id = clean_text(video.get("video_id"))
    if not lens_video_id:
        return None

    lens_api_url = f"https://lens.zhihu.com/api/v4/videos/{lens_video_id}"
    lens = fetch_json(lens_api_url)
    video_url, playlist_item = pick_playlist_url(lens.get("playlist") or {})
    if not video_url:
        video_url, playlist_item = pick_playlist_url(video.get("playlist") or {})

    answers = [
        clean_text(record.get("Quiz ans1")),
        clean_text(record.get("quiz ans2")),
        clean_text(record.get("Quiz ans3")),
        clean_text(record.get("Quiz ans4")),
    ]
    if not any(answers) or not clean_text(record.get("quiz question")):
        return None

    try:
        correct_index = int(float(str(record.get("Correct ans") or "0"))) - 1
    except ValueError:
        correct_index = -1

    duration = playlist_item.get("duration") or video.get("duration") or 0
    try:
        duration = round(float(duration))
    except (TypeError, ValueError):
        duration = 0

    return {
        "id": record_id,
        "title": clean_title(record, zvideo.get("title")),
        "sourceUrl": clean_text(record.get("URL")),
        "zvideoApiUrl": zvideo_api_url,
        "lensApiUrl": lens_api_url,
        "zvideoId": zvideo_id,
        "lensVideoId": lens_video_id,
        "videoUrl": video_url,
        "coverUrl": clean_text(lens.get("cover_url") or video.get("thumbnail") or zvideo.get("image_url")),
        "durationSeconds": duration,
        "voice": "Pure English" if clean_text(record.get("Pure English voice? (code Y if yes, code N if no)")).upper() == "Y" else "Mixed",
        "track": "English for Arabic speakers",
        "prompt": clean_text(record.get("quiz question")),
        "answers": answers,
        "correctIndex": correct_index,
    }


def js_string(data):
    body = json.dumps(data, ensure_ascii=False, indent=2)
    return "window.LEARN_VIDEO_DATA = " + body + ";\n"


def read_existing_data(path):
    text = path.read_text(encoding="utf-8")
    prefix = "window.LEARN_VIDEO_DATA = "
    if text.startswith(prefix):
        text = text[len(prefix):]
    text = text.strip()
    if text.endswith(";"):
        text = text[:-1]
    data = json.loads(text)
    return data.get("items") or []


def refresh_existing_item(item):
    lens_api_url = item.get("lensApiUrl")
    if not lens_api_url and item.get("lensVideoId"):
        lens_api_url = f"https://lens.zhihu.com/api/v4/videos/{item['lensVideoId']}"
    if not lens_api_url:
        return item
    lens = fetch_json(lens_api_url)
    video_url, playlist_item = pick_playlist_url(lens.get("playlist") or {})
    refreshed = dict(item)
    if video_url:
        refreshed["videoUrl"] = video_url
    if lens.get("cover_url"):
        refreshed["coverUrl"] = clean_text(lens.get("cover_url"))
    if playlist_item.get("duration"):
        try:
            refreshed["durationSeconds"] = round(float(playlist_item.get("duration")))
        except (TypeError, ValueError):
            pass
    return refreshed


def main():
    parser = argparse.ArgumentParser(description="Build static video lesson data from the YepZan spreadsheet and Zhihu APIs.")
    parser.add_argument("--source", default="docs/视频数据表格.xlsx")
    parser.add_argument("--output", default="video-data.js")
    parser.add_argument("--lens-map", default="docs/video-lens-map.json")
    parser.add_argument("--limit", type=int, default=36)
    parser.add_argument("--start", type=int, default=0)
    parser.add_argument("--resolve-missing", action="store_true")
    parser.add_argument("--quiet", action="store_true")
    args = parser.parse_args()

    source = Path(args.source)
    output = Path(args.output)
    lens_map_path = Path(args.lens_map)
    lens_map = {}
    if lens_map_path.exists():
        lens_map = json.loads(lens_map_path.read_text(encoding="utf-8"))
    items = []
    errors = []

    if source.exists():
        records = normalize_rows(read_first_sheet_rows(source))
        for record in records[args.start:]:
            if len(items) >= args.limit:
                break
            try:
                item = build_item(record, lens_map=lens_map, resolve_missing=args.resolve_missing)
            except Exception as exc:
                errors.append({"id": clean_text(record.get("ID")), "error": str(exc)[:180]})
                continue
            if item and item["videoUrl"]:
                items.append(item)
                if not args.quiet:
                    print(f"added {item['id']} {item['lensVideoId']}", file=sys.stderr)
    elif output.exists():
        for item in read_existing_data(output)[:args.limit]:
            try:
                items.append(refresh_existing_item(item))
            except Exception as exc:
                errors.append({"id": clean_text(item.get("id")), "error": str(exc)[:180]})
    else:
        print(f"Source workbook not found: {source}", file=sys.stderr)
        return 1

    data = {
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "sourceWorkbook": str(source) if source.exists() else str(output),
        "refreshNote": "Video URLs are refreshed from permanent Zhihu API links during GitHub Pages deployment.",
        "items": items,
        "errors": errors[:12],
    }
    output.write_text(js_string(data), encoding="utf-8")
    print(f"Wrote {len(items)} videos to {output}")
    if len(items) == 0:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
