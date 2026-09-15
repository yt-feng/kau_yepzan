# tiktalk academy

Learn language from tiktalk short videos.

This repository contains the multilingual website for:

- interest-led English video practice, expression notes, quick checks, and review
- KAU language courses that can be uploaded and published in stages
- Paddle checkout for the existing digital-course bundle
- email-based learning inquiries and human services

## Pages

- index.html — discovery homepage; video practice is the primary action
- learn.html — personalized feed, interest and starting-point preferences, saved expressions and review
- products.html — course and learning-path catalog
- services.html — separate inquiry-only translation and language support services
- order.html — course selection and secure checkout entry for the published bundle
- order-success.html — post-checkout confirmation and transaction reference page
- checkout.html — legacy redirect kept for old links
- terms.html, refund.html, privacy.html — public policy pages for learners and payment review
- styles.css — responsive static styling
- main.js — product rendering, language switching, navigation, and inquiry links
- experience.js, experience.css — discovery copy, homepage, and shared visual design
- learning-core.js — recommendation, review scheduling, unique progress, and old-record migration
- learning.js, learning-copy.js — video practice and English/Chinese/Arabic interface
- lesson-notes.js — editorial difficulty/topics, glosses, and example sentences for the current library
- video-data.js — generated lesson data
- .github/workflows/deploy.yml — GitHub Pages deployment workflow

## Payment boundary

The published Chinese Foundations + Practice bundle is connected to Paddle Checkout through Paddle.js. The site contains only Paddle's public client-side token and the public price reference for the USD 199 one-time course path. Paddle documents client-side tokens as the browser-safe credential for Paddle.js; API keys and webhook secrets are not included here.

This repository is a static GitHub Pages site, so it does not yet contain a server-side webhook, transaction verification endpoint, order database, or automatic course-entitlement service. The success page is a customer-facing return page, not proof of a server-verified entitlement. Until a backend is added, course access instructions are sent after payment confirmation using the purchaser email.

## Content release

The current catalog has 28 English teaching clips. Topic and difficulty labels are editorial groupings for this catalog, not certified proficiency levels. Chinese and Arabic are also interface/phrase-note languages; they are not additional video-course catalogs. Video-native captions may still contain Arabic. Learning notes are not synchronized subtitles.

Preferences and answers are local to the browser. Ranking combines the chosen topics, three starting bands, recent first attempts, explicit difficulty feedback, and explanation preference. Review includes saved phrases, mistakes, and due expressions. Correct recognition schedules another look after 1, 2, 4, then 7 days; same-day repeats do not create extra progress. Existing saved phrases and answer records migrate from the earlier interface.

See `docs/product-direction.md` for the intended product structure and next content work.

The KAU course cards remain a public scaffold for the lesson content. Upload the final lesson files, learning outcomes, and access rules as they are ready. The bundle price is already configured in Paddle and the other course paths remain inquiry-based until their content and prices are published.

Paid enrollment is reserved for the digital course products. Translation and one-to-one support remain separate inquiry-based services.

## Contact

Use info@tiktalk.ac for customer questions, learning plans, and translation quotes.

## Deploy

GitHub Pages publishes main through .github/workflows/deploy.yml. The workflow also refreshes short-video lesson URLs before publishing.

Run `node --test tests/learning.test.cjs` to check catalog coverage, recommendation behavior, progress counting, review timing, and migration. The same checks run before publishing.
