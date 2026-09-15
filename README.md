# tiktalk academy

Learn language from tiktalk short videos.

This repository contains the static site skeleton for:

- short-video language practice with quick quizzes
- KAU language courses that can be uploaded and published in stages
- a server-backed enrollment path for digital courses
- email-based learning inquiries and human services

## Pages

- index.html — landing page
- learn.html — short-video learning module
- products.html — course and learning-path catalog
- services.html — separate inquiry-only translation and language support services
- order.html — course selection and secure checkout entry for the published bundle
- order-success.html — post-checkout confirmation and transaction reference page
- checkout.html — legacy redirect kept for old links
- terms.html, refund.html, privacy.html — public policy pages for learners and payment review
- styles.css — responsive static styling
- main.js — product rendering, language switching, navigation, and inquiry links
- video-data.js — generated lesson data
- .github/workflows/deploy.yml — GitHub Pages deployment workflow

## Payment boundary

The published Chinese Foundations + Practice bundle is connected to Paddle Checkout through Paddle.js. The site contains only Paddle's public client-side token and the public price reference for the USD 199 one-time course path. Paddle documents client-side tokens as the browser-safe credential for Paddle.js; API keys and webhook secrets are not included here.

This repository is a static GitHub Pages site, so it does not yet contain a server-side webhook, transaction verification endpoint, order database, or automatic course-entitlement service. The success page is a customer-facing return page, not proof of a server-verified entitlement. Until a backend is added, course access instructions are sent after payment confirmation using the purchaser email.

## Content release

The KAU course cards remain a public scaffold for the lesson content. Upload the final lesson files, learning outcomes, and access rules as they are ready. The bundle price is already configured in Paddle and the other course paths remain inquiry-based until their content and prices are published.

Paid enrollment is reserved for the digital course products. Translation and one-to-one support remain separate inquiry-based services.

## Contact

Use info@tiktalk.ac for customer questions, learning plans, and translation quotes.

## Deploy

GitHub Pages publishes main through .github/workflows/deploy.yml. The workflow also refreshes short-video lesson URLs before publishing.
