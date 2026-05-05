# Yutong Feng product storefront

This repository contains a lightweight static product website for:

- Arabic to Chinese written translation
- Chinese 101 with KAU
- Chinese practice course with WhatsApp support
- Zoom 1-to-1 learning support
- Chinese 101 + Practice bundle

## Pages

- `index.html` — landing page
- `products.html` — product catalog
- `order.html` — order draft page that opens an email to `yt.feng@foxmail.com`
- `checkout.html` — lightweight redirect kept for old checkout links
- `styles.css` — optimized static styling with no external font dependency
- `main.js` — product rendering, language switching, navigation, and order email behavior
- `translations.js` — language config placeholder
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow

## Current payment status

The site is ready to show products and collect order intent by email. It does not collect payment yet. After Creem approval, replace the order links with live Creem links.

## Contact

Use `yt.feng@foxmail.com` for all customer and payment-provider communication.

## Deploy

Enable GitHub Pages in repository settings and choose **GitHub Actions** as the source.
