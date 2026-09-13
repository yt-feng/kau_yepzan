# tiktalk academy

Learn language from tiktalk short videos.

This repository contains the static site skeleton for:

- short-video language practice with quick quizzes
- KAU language courses that can be uploaded and published in stages
- Paddle-ready digital course checkout
- email-based learning inquiries and human services

## Pages

- index.html — landing page
- learn.html — short-video learning module
- products.html — course and learning-path catalog
- order.html — course selection, Paddle checkout placeholder, and inquiry fallback
- checkout.html — legacy redirect kept for old links
- terms.html, refund.html, privacy.html — public policy pages for learners and payment-provider review
- paddle-config.js — public Paddle.js configuration placeholders
- paddle.js — Paddle.js initialization and checkout launcher
- styles.css — responsive static styling
- main.js — product rendering, language switching, navigation, and inquiry links
- video-data.js — generated lesson data
- .github/workflows/deploy.yml — GitHub Pages deployment workflow

## Paddle setup

The site intentionally ships with Paddle in sandbox mode and blank values. Before enabling payments:

1. Create the digital course products and prices in Paddle.
2. Create a client-side token in Paddle’s Developer tools > Authentication.
3. Add the sandbox token and pri_... price IDs to paddle-config.js for testing.
4. Test the overlay checkout from the published site with Paddle’s sandbox card.
5. Complete Paddle account, identity, payout, tax, and domain review.
6. Replace the sandbox token with the approved live client-side token, change the environment to production, and add live price IDs.

Never put Paddle API keys or webhook secrets in this static repository. Course entitlement, paid-access writeback, and webhook handling should be added through a server-side endpoint when the course delivery flow is finalized.

## Content release

The KAU course cards are currently a public scaffold. Upload the final lesson files, learning outcomes, access rules, and prices before enabling the corresponding Paddle price IDs and live checkout.

## Contact

Use yt.feng@foxmail.com for customer questions, learning plans, and translation quotes.

## Deploy

GitHub Pages publishes main through .github/workflows/deploy.yml. The workflow also refreshes short-video lesson URLs before publishing.
