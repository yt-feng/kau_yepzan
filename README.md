# Yutong Feng language site

This repository contains a lightweight static website for:

- Arabic to Chinese written translation
- Chinese 101 with KAU
- Chinese practice course with WhatsApp support
- Zoom 1-to-1 learning support
- Chinese 101 + Practice bundle
- Short-video language lessons with quiz practice

## Pages

- `index.html` — landing page
- `learn.html` — short-video learning module built from the Zhihu video spreadsheet
- `products.html` — product catalog
- `order.html` — inquiry page that opens an email to `yt.feng@foxmail.com`
- `checkout.html` — lightweight redirect kept for old checkout links
- `styles.css` — optimized static styling with no external font dependency
- `main.js` — product rendering, language switching, navigation, and order email behavior
- `video-data.js` — generated lesson data with refreshed Zhihu mp4 URLs
- `scripts/build_video_data.py` — refreshes lesson data from lens API links; locally it can rebuild from `docs/视频数据表格.xlsx`
- `translations.js` — language config placeholder
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Contact

Use `yt.feng@foxmail.com` for customer questions, learning plans, and translation quotes.

## Deploy

Enable GitHub Pages in repository settings and choose **GitHub Actions** as the source. The deploy workflow refreshes video mp4 URLs from permanent Zhihu lens API links before publishing and also runs every four hours.
