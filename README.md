# Yepzan website starter

This repository now contains a lightweight static website starter meant to replace a simple Wix-style landing page.

## What is included

- `index.html` — the main one-page site structure
- `styles.css` — all page styling and responsive layout rules
- `main.js` — small interactions for the mobile menu and footer year
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## How to customize it

1. Edit the copy in `index.html`
2. Update colors, spacing, and card styles in `styles.css`
3. Replace the placeholder email and social links in the contact section
4. Add your own images if you want a more direct match to the old Wix page

## Local preview

Because this is a plain static site, you can preview it in several simple ways:

- open `index.html` directly in a browser, or
- run a small local server, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

This repo includes a GitHub Actions workflow that deploys the site when you push to `main`.

Typical setup:

1. Open the repository settings on GitHub
2. Go to **Pages**
3. Set the source to **GitHub Actions**
4. Push changes to `main`
5. Wait for the workflow to finish

## Cheap hosting alternatives

If you do not want to use GitHub Pages, this site also works well on:

- Cloudflare Pages
- Netlify
- Vercel

## Suggested next migration step

To make this a closer 1:1 replacement for the Wix website, move over:

- the real homepage headline
- your actual About copy
- any project images or product photos
- social proof, testimonials, or pricing
- the final contact links you want visitors to use
