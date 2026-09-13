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
- order.html — course selection and inquiry-based enrollment request
- checkout.html — legacy redirect kept for old links
- terms.html, refund.html, privacy.html — public policy pages for learners and payment review
- styles.css — responsive static styling
- main.js — product rendering, language switching, navigation, and inquiry links
- video-data.js — generated lesson data
- .github/workflows/deploy.yml — GitHub Pages deployment workflow

## Payment boundary

The public site intentionally contains no payment-provider SDK, token, price ID, API key, or webhook secret. It currently presents course information and sends an enrollment request to the support address while the lessons and access rules are being prepared.

When the courses are ready, connect the primary enrollment action to a server-side checkout endpoint. Keep payment-provider credentials, checkout creation, webhook verification, order records, and course entitlement writeback on the server. The browser should receive only the customer-facing checkout result.

## Content release

The KAU course cards are currently a public scaffold. Upload the final lesson files, learning outcomes, access rules, and final prices before enabling paid enrollment.

Paid enrollment is reserved for the digital course products. Translation and one-to-one support remain separate inquiry-based services.

## Contact

Use info@tiktalk.ac for customer questions, learning plans, and translation quotes.

## Deploy

GitHub Pages publishes main through .github/workflows/deploy.yml. The workflow also refreshes short-video lesson URLs before publishing.
