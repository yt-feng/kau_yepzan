const EMAIL = 'yt.feng@foxmail.com';
const COURSE_KEYS = ['chinese101', 'practice', 'bundle'];
const PRODUCT_PAGE_KEYS = ['videoEnglish', ...COURSE_KEYS];
const SERVICE_KEYS = ['translation', 'zoom'];

const PRODUCTS = {
  videoEnglish: {
    name: 'Short-Video English Practice',
    label: 'Free preview',
    price: 'Start practicing',
    summaryPrice: 'Free preview',
    description: 'A fast lesson feed for Arabic speakers: watch one short English clip, answer one question, and keep going.',
    features: ['Vertical video lessons', 'Instant quiz after each clip', 'English-only and Arabic-supported clips', 'Works on mobile and desktop'],
    href: 'learn.html',
    cta: 'Start practicing'
  },
  translation: {
    name: 'Arabic to Chinese Translation',
    label: 'Professional translation',
    price: 'From USD 0.18 / Arabic word',
    summaryPrice: 'Custom quote',
    description: 'Clear, natural Arabic-to-Chinese translation for academic, business, policy, and marketing materials.',
    features: ['Minimum project: USD 80', 'Specialized content from USD 0.24 / word', 'Rush add-on available', 'Quote based on word count and field'],
    href: `mailto:${EMAIL}?subject=Arabic-to-Chinese%20translation%20inquiry`,
    cta: 'Request a quote'
  },
  chinese101: {
    name: 'Chinese Foundations',
    label: 'KAU course shell · publishing soon',
    price: 'USD 149',
    summaryPrice: 'USD 149',
    description: 'A beginner-friendly KAU course shell for Chinese characters, sounds, and how words are built. Final lessons will be uploaded before checkout is activated.',
    features: ['Full recorded lessons', 'Chinese character logic', 'Sound and word formation', 'Strong first step for beginners'],
    cta: 'View course setup',
    paddle: true
  },
  practice: {
    name: 'Chinese Practice Course',
    label: 'KAU course shell · publishing soon',
    price: 'USD 89 / month',
    summaryPrice: 'USD 89 / month',
    description: 'A self-paced KAU course shell with structured digital lessons, practice materials, and clear learning checkpoints. Content and access rules will be published with the KAU release.',
    features: ['Goal-based plan', 'Digital materials included', 'Learning checkpoints', 'Self-paced structure'],
    cta: 'View course setup',
    paddle: true
  },
  zoom: {
    name: 'Zoom 1-to-1 Session',
    label: 'Custom support',
    price: 'USD 120 / hour',
    summaryPrice: 'USD 120 / hour',
    description: 'Personal diagnosis, correction, or learning planning when you need focused help.',
    features: ['Customized diagnosis', 'Advanced correction', 'Learning plan review', 'Best for specific questions'],
    href: `mailto:${EMAIL}?subject=One-to-one%20learning%20inquiry`,
    cta: 'Book a session'
  },
  bundle: {
    name: 'Chinese Foundations + Practice',
    label: 'Recommended KAU path · publishing soon',
    price: 'USD 199 first month',
    summaryPrice: 'USD 199 first month',
    description: 'The recommended digital course path for serious beginners: foundations first, then self-paced guided practice. The course bundle will be activated after the KAU content is uploaded.',
    features: ['Chinese Foundations included', 'First month of digital practice included', 'Structured course sequence', 'Self-paced learning path'],
    cta: 'View course setup',
    paddle: true
  }
};

const COPY = {
  en: {
    dir: 'ltr', brandName: 'tiktalk academy', brandTagline: 'Learn language from tiktalk short videos',
    navHome: 'Home', navLearn: 'Short videos', navProducts: 'Courses', navServices: 'Services', navCheckout: 'Checkout', navContact: 'Contact', langLabel: 'Language', productCta: 'Ask about this', inquiryButton: 'Send inquiry', lessonCountLabel: 'lessons ready',
    hero: {eyebrow: 'Short-video practice · digital language courses', title: 'Practice language in short, useful lessons.', lead: 'Start with bite-sized English practice for Arabic speakers, or choose a structured digital Chinese course.', primary: 'Start video practice', secondary: 'View courses', tertiary: 'Ask a question', panelTitle: 'Recommended first step', panelBody: 'Try the short-video practice first. If you want a structured plan, choose Chinese Foundations + Practice and send your goal.', stats: [['28','practice clips live'],['1','quiz after each video'],['24h','reply target']]},
    proofTitle: 'What You Can Do Here', proofLead: 'Start with short-video practice or preview the KAU digital course paths.', proofCards: [['Practice in minutes','Watch one short clip, answer one question, and keep your momentum.'],['Study with structure','Use the course shells now and add the KAU lessons as they are published.'],['Keep support nearby','Send a question when you need help choosing a course or learning path.']], featuredTitle: 'Choose Your Path', featuredLead: 'Start practicing now, or open a digital course setup page while the KAU lessons are being uploaded.', videoTeaserTitle: 'Learn language from tiktalk short videos', videoTeaserLead: 'Short, repeatable English listening and vocabulary practice designed for everyday momentum.', videoTeaserButton: 'Start practicing', methodTitle: 'How It Works', methodCards: [['Watch','Play a short vertical clip and focus on one useful expression.'],['Answer','Lock in the idea with one quick multiple-choice question.'],['Continue','Move to the next lesson and build a small daily habit.']], testimonialTitle: 'Good For', useCards: [['Short-video learners','Build a daily habit with one clip and one quick check.'],['KAU course learners','Use the course shell now and follow the content release path.'],['Learning planners','Send your goal and get pointed to the right next step.']], faqTitle: 'FAQ', faqs: [['Can I start for free?','Yes. The short-video practice page is available as a free preview.'],['When will the KAU courses be available?','The course structure is ready first; final lessons and access details will be added before payment is activated.'],['How will payment work?','Paddle checkout is scaffolded for the digital courses and will be enabled after the account, price IDs, and course content are ready.']], finalTitle: 'Ready to start?', finalLead: 'Practice now, preview the course paths, or send your learning goal.', finalProductsButton: 'Browse courses', finalOrderButton: 'Open checkout', footerNote: 'tiktalk academy — Learn language from tiktalk short videos. KAU course content is being prepared for release.', footerContactTitle: 'Contact', footerContactLead: 'For learning plans, course access, or project questions.', footerEmailLabel: 'Email', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: 'Courses and learning paths', productsPageLead: 'Start with short videos now; KAU course content and Paddle checkout will be added as each course is published. Translation and one-to-one support are listed separately under Services.', checkoutTitle: 'Checkout and inquiry', checkoutLead: 'Choose a digital course path, review the payment setup, or send a short email with your goal and timeline.', checkoutEyebrow: 'Checkout & inquiry', productSelectLabel: 'Digital course', summaryEyebrow: 'Summary', summarySelectionLabel: 'Selection', summaryPriceLabel: 'Typical price', paymentButton: 'Pay with Paddle', paddleStatus: 'Paddle checkout will be enabled after the course and price are configured.', paymentNote: 'Course content and access rules will be published with each KAU course release.', servicesPageTitle: 'Independent language services', servicesPageLead: 'Translation and one-to-one learning support are separate inquiry-based services. They are not Paddle products or checkout items.', serviceBoundaryTitle: 'Paddle boundary', serviceBoundaryLead: 'Paddle checkout is reserved for tiktalk academy digital learning products. Translation is quoted and agreed separately before any work begins.'
  },
  zh: {
    dir: 'ltr', brandName: 'tiktalk academy', brandTagline: 'Learn language from tiktalk short videos',
    navHome: '首页', navLearn: '短视频', navProducts: '课程', navServices: '独立服务', navCheckout: '结账', navContact: '联系', langLabel: '语言', productCta: '咨询这个服务', inquiryButton: '发送咨询', lessonCountLabel: '条练习已上线',
    hero: {eyebrow: '短视频练习 · 数字语言课程', title: '用短小、可坚持的方式练语言。', lead: '先从面向阿拉伯学习者的英语短视频练习开始，也可以选择结构化数字中文课程。', primary: '开始视频练习', secondary: '查看课程', tertiary: '邮件咨询', panelTitle: '推荐起步方式', panelBody: '想马上体验，可以先做短视频练习。想系统学习中文，建议从“中文基础 + 练习支持”开始。', stats: [['28','条练习视频'],['1','每条一个小测'],['24h','初步回复目标']]},
    proofTitle: '你可以在这里做什么', proofLead: '先做短视频练习，预览 KAU 数字课程路径，或发送学习咨询。', proofCards: [['几分钟开始练','看一个短视频，答一道题，保持学习节奏。'],['按结构学中文','先看课程架构，KAU 内容会按计划逐步上传。'],['获得下一步建议','告诉我你的目标，我会帮你选择合适的课程路径。']], featuredTitle: '选择你的路径', featuredLead: '现在开始练习；课程内容上传后，再开启对应的 Paddle 支付。', videoTeaserTitle: '从 tiktalk 短视频学习语言', videoTeaserLead: '用短视频练听力、词汇和语感，每条配一个小测。', videoTeaserButton: '开始练习', methodTitle: '练习方式', methodCards: [['看视频','播放一条竖屏短视频，抓住一个表达。'],['答小测','用一道选择题确认刚学到的内容。'],['继续下一条','保持轻量节奏，形成每日练习习惯。']], testimonialTitle: '适合谁', useCards: [['短视频学习者','每天用一条视频和一个小测保持节奏。'],['KAU 课程学习者','先看课程架构，等待内容发布后进入学习。'],['需要规划的人','发送学习目标，获得下一步建议。']], faqTitle: '常见问题', faqs: [['可以免费开始吗？','可以。短视频练习页目前是免费预览。'],['KAU 课程什么时候上线？','课程架构先搭建，具体课件和访问规则会在支付开启前补齐。'],['之后如何支付？','数字课程已预留 Paddle 支付入口；账号、价格 ID 和课程内容就绪后再开启。']], finalTitle: '准备开始了吗？', finalLead: '现在练习、预览课程路径，或把学习目标发给我。', finalProductsButton: '查看课程', finalOrderButton: '打开结账', footerNote: 'tiktalk academy — Learn language from tiktalk short videos。KAU 课程内容正在准备发布。', footerContactTitle: '联系', footerContactLead: '用于学习计划、课程访问或项目咨询。', footerEmailLabel: '邮箱', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: '课程与学习路径', productsPageLead: '先从短视频开始；KAU 课程内容和 Paddle 支付会随课程发布逐步加入。翻译和一对一支持在“独立服务”中单独询价。', checkoutTitle: '结账与咨询', checkoutLead: '选择数字课程路径，查看支付设置，或用邮件说明你的目标和时间安排。', checkoutEyebrow: '结账与咨询', productSelectLabel: '数字课程', summaryEyebrow: '摘要', summarySelectionLabel: '已选内容', summaryPriceLabel: '当前价格', paymentButton: '使用 Paddle 支付', paddleStatus: '课程和价格配置完成后，Paddle 支付会在这里开启。', paymentNote: '每个 KAU 课程发布时，会同步公布课程内容和访问规则。', servicesPageTitle: '独立语言服务', servicesPageLead: '翻译和一对一学习支持是单独询价的服务，不是 Paddle 商品，也不出现在 Paddle 结账中。', serviceBoundaryTitle: '与 Paddle 的边界', serviceBoundaryLead: 'Paddle 只用于 tiktalk academy 的数字学习产品。翻译服务会在开始前单独报价并确认。'
  },
  ar: {
    dir: 'rtl', brandName: 'tiktalk academy', brandTagline: 'Learn language from tiktalk short videos',
    navHome: 'Home', navLearn: 'Short videos', navProducts: 'Courses', navServices: 'Services', navCheckout: 'Checkout', navContact: 'Contact', langLabel: 'Language', productCta: 'Ask about this', inquiryButton: 'Send inquiry', lessonCountLabel: 'lessons ready',
    hero: {eyebrow: 'Short-video practice · digital language courses', title: 'Practice language in short, useful lessons.', lead: 'Start with English practice for Arabic speakers, or choose a structured digital Chinese learning path.', primary: 'Start practice', secondary: 'View courses', tertiary: 'Ask a question', panelTitle: 'Recommended start', panelBody: 'Try short-video practice first. For a structured Chinese plan, choose Foundations + Practice.', stats: [['28','practice clips'],['1','quiz per clip'],['24h','reply target']]},
    proofTitle: 'What You Can Do Here', proofLead: 'Start with short-video practice and preview the KAU digital course paths.', proofCards: [['Practice quickly','Watch a short clip and answer one question.'],['Study with structure','Follow the course shell while KAU lessons are prepared.'],['Choose your next step','Send your goal and get a clear learning direction.']], featuredTitle: 'Choose Your Path', featuredLead: 'Start practicing now, or open a digital course setup page.', videoTeaserTitle: 'Learn language from tiktalk short videos', videoTeaserLead: 'Fast listening and vocabulary practice built around short, repeatable clips.', videoTeaserButton: 'Start practicing', methodTitle: 'How It Works', methodCards: [['Watch','Play a short vertical clip.'],['Answer','Check understanding with one question.'],['Continue','Move to the next lesson.']], testimonialTitle: 'Good For', useCards: [['Short-video learners','Keep a light daily learning habit.'],['KAU course learners','Follow the course structure as content is published.'],['Learning planners','Send your goal and get a clear next step.']], faqTitle: 'FAQ', faqs: [['Can I start for free?','Yes. The short-video practice page is a free preview.'],['When will KAU courses be available?','The course shell is ready first; lessons and access details will be added before payment is activated.'],['How will payment work?','Paddle checkout is reserved for the digital course products and will be enabled after setup is complete.']], finalTitle: 'Ready to start?', finalLead: 'Practice now, preview courses, or send your goal.', finalProductsButton: 'Browse courses', finalOrderButton: 'Open checkout', footerNote: 'tiktalk academy — Learn language from tiktalk short videos. KAU course content is being prepared.', footerContactTitle: 'Contact', footerContactLead: 'For learning plans, course access, or project questions.', footerEmailLabel: 'Email', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: 'Courses and learning paths', productsPageLead: 'Start with short videos; KAU course content and Paddle checkout will be added as courses are published. Translation and one-to-one support are listed separately under Services.', checkoutTitle: 'Checkout and inquiry', checkoutLead: 'Choose a digital course path, review the payment setup, or send a short email with your goal.', checkoutEyebrow: 'Checkout & inquiry', productSelectLabel: 'Digital course', summaryEyebrow: 'Summary', summarySelectionLabel: 'Selection', summaryPriceLabel: 'Typical price', paymentButton: 'Pay with Paddle', paddleStatus: 'Paddle checkout will be enabled after the course and price are configured.', paymentNote: 'Course content and access rules will be published with each KAU course release.', servicesPageTitle: 'Independent language services', servicesPageLead: 'Translation and one-to-one learning support are separate inquiry-based services. They are not Paddle products or checkout items.', serviceBoundaryTitle: 'Paddle boundary', serviceBoundaryLead: 'Paddle checkout is reserved for tiktalk academy digital learning products. Translation is quoted and agreed separately before any work begins.'
  }
};

const $ = (id) => document.getElementById(id);
const getLang = () => localStorage.getItem('lang') || 'en';
const currentLang = getLang();
const t = COPY[currentLang] || COPY.en;

document.documentElement.lang = currentLang;
document.documentElement.dir = t.dir;

function setText(id, value) { const node = $(id); if (node) node.textContent = value ?? ''; }
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'}[char]));
}
function listItems(items) { return items.map((item) => `<li>${escapeHtml(item)}</li>`).join(''); }
function productCard(key) {
  const product = PRODUCTS[key];
  const href = product.href || `order.html?product=${key}`;
  const cta = product.cta || t.productCta || 'Ask about this';
  return `<article class="product-card"><span class="card-topline">${escapeHtml(product.label)}</span><h3>${escapeHtml(product.name)}</h3><div class="price-pill">${escapeHtml(product.price)}</div><p>${escapeHtml(product.description)}</p><ul class="feature-list">${listItems(product.features)}</ul><div class="card-actions"><a class="button button-primary" href="${escapeHtml(href)}">${escapeHtml(cta)}</a></div></article>`;
}

['brandName','brandTagline','navHome','navLearn','navProducts','navServices','navCheckout','navContact','langLabel','proofTitle','proofLead','featuredTitle','featuredLead','methodTitle','testimonialTitle','faqTitle','finalTitle','finalLead','finalProductsButton','finalOrderButton','footerNote','footerContactTitle','footerContactLead','footerEmailLabel','footerWhatsappLabel','footerLinkedinLabel','productsPageTitle','productsPageLead','checkoutTitle','checkoutLead','checkoutEyebrow','productSelectLabel','summaryEyebrow','summarySelectionLabel','summaryPriceLabel','paymentButton','paddleStatus','paymentNote','servicesPageTitle','servicesPageLead','serviceBoundaryTitle','serviceBoundaryLead'].forEach((key) => setText(key, t[key]));
setText('emailOrderLink', t.inquiryButton);
setText('year', new Date().getFullYear());

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}
document.querySelectorAll('.site-nav a').forEach((link) => link.addEventListener('click', () => siteNav?.classList.remove('is-open')));

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.classList.toggle('is-active', button.dataset.lang === currentLang);
  button.addEventListener('click', () => { localStorage.setItem('lang', button.dataset.lang); window.location.reload(); });
});

function renderHome() {
  const hero = $('heroMount');
  if (!hero) return;
  hero.outerHTML = `<div class="hero-copy-shell"><span class="eyebrow">${escapeHtml(t.hero.eyebrow)}</span><h1>${escapeHtml(t.hero.title)}</h1><p class="hero-lead">${escapeHtml(t.hero.lead)}</p><div class="hero-actions"><a class="button button-primary" href="learn.html">${escapeHtml(t.hero.primary)}</a><a class="button button-secondary" href="products.html">${escapeHtml(t.hero.secondary)}</a><a class="button button-secondary" href="mailto:${EMAIL}">${escapeHtml(t.hero.tertiary)}</a></div></div><aside class="glass-card"><span class="card-topline">${escapeHtml(t.hero.panelTitle)}</span><p>${escapeHtml(t.hero.panelBody)}</p><div class="hero-metrics">${t.hero.stats.map((s) => `<div class="stat-card"><strong>${escapeHtml(s[0])}</strong><span>${escapeHtml(s[1])}</span></div>`).join('')}</div></aside>`;
  const proof = $('proofGrid');
  if (proof) proof.innerHTML = t.proofCards.map(([title, body]) => `<article class="glass-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join('');
  const videoTeaser = $('videoLearnTeaser');
  if (videoTeaser) {
    const data = window.LEARN_VIDEO_DATA || {};
    const count = Array.isArray(data.items) ? data.items.length : 0;
    videoTeaser.innerHTML = `<div class="video-teaser-copy"><span class="eyebrow">${escapeHtml(t.videoTeaserTitle)}</span><h2>${escapeHtml(t.videoTeaserTitle)}</h2><p>${escapeHtml(t.videoTeaserLead)}</p><div class="hero-actions"><a class="button button-primary" href="learn.html">${escapeHtml(t.videoTeaserButton)}</a><span class="count-pill">${count || 28} ${escapeHtml(t.lessonCountLabel)}</span></div></div><div class="video-teaser-panel"><span>Watch</span><span>Quiz</span><span>Repeat</span></div>`;
  }
  const featured = $('featuredGrid');
  if (featured) featured.innerHTML = ['videoEnglish','bundle','chinese101'].map(productCard).join('');
  const method = $('methodGrid');
  if (method) method.innerHTML = t.methodCards.map(([title, body]) => `<article class="step-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join('');
  const testimonial = $('testimonialGrid');
  if (testimonial) testimonial.innerHTML = t.useCards.map(([title, body]) => `<article class="quote-card"><p>${escapeHtml(body)}</p><div class="quote-meta"><strong>${escapeHtml(title)}</strong></div></article>`).join('');
  const faq = $('faqList');
  if (faq) faq.innerHTML = t.faqs.map(([q, a], i) => `<details class="faq-item" ${i===0?'open':''}><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join('');
}

function renderProducts() { const grid = $('productCatalog'); if (grid) grid.innerHTML = PRODUCT_PAGE_KEYS.map(productCard).join(''); }

function renderServices() { const grid = $('serviceCatalog'); if (grid) grid.innerHTML = SERVICE_KEYS.map(productCard).join(''); }

function renderCheckout() {
  const select = $('productSelect');
  if (!select) return;
  select.innerHTML = COURSE_KEYS.map((key) => `<option value="${key}">${PRODUCTS[key].name}</option>`).join('');
  const params = new URLSearchParams(window.location.search);
  select.value = COURSE_KEYS.includes(params.get('product')) ? params.get('product') : 'bundle';
  const update = () => {
    const product = PRODUCTS[select.value];
    setText('summaryProduct', product.name);
    setText('summaryTotal', product.summaryPrice);
    const link = $('emailOrderLink');
    if (link) link.href = `mailto:${EMAIL}?subject=Inquiry: ${encodeURIComponent(product.name)}&body=${encodeURIComponent('I am interested in: ' + product.name + '\n\nMy name:\nContact:\nGoal or project details:\nTimeline:')}`;
    window.tiktalkPaddle?.sync?.(select.value);
  };
  select.addEventListener('change', update);
  update();
  const form = $('orderForm');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const product = PRODUCTS[select.value];
    const body = encodeURIComponent(`I am interested in: ${product.name}\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nWhatsApp: ${data.get('whatsapp')}\nGoal or project details: ${data.get('goal')}`);
    window.location.href = `mailto:${EMAIL}?subject=Inquiry: ${encodeURIComponent(product.name)}&body=${body}`;
  });
}

const LEGACY_LEARN_PROGRESS_KEY = 'yepzanVideoProgress';
const SHORTS_STATE_KEY = 'yepzanShortsState.v2';
const DAILY_GOAL = 5;
const RATE_STEPS = [0.75, 1, 1.25, 1.5];

function formatDuration(seconds) {
  const value = Number(seconds) || 0;
  const minutes = Math.floor(value / 60);
  const rest = String(value % 60).padStart(2, '0');
  return `${minutes}:${rest}`;
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function safeJson(value, fallback) {
  try { return JSON.parse(value || ''); }
  catch { return fallback; }
}

function hashString(value) {
  let hash = 0;
  const text = String(value || '');
  for (let i = 0; i < text.length; i += 1) hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
  return Math.abs(hash);
}

function compactCount(value) {
  const number = Math.max(0, Number(value) || 0);
  if (number >= 1000000) return `${(number / 1000000).toFixed(1)}m`;
  if (number >= 1000) return `${(number / 1000).toFixed(number >= 10000 ? 0 : 1)}k`;
  return String(number);
}

function defaultShortsState() {
  return {
    xp: 0,
    streak: 0,
    lastActiveDate: '',
    activeId: '',
    seed: Math.floor(Math.random() * 1000000),
    muted: true,
    captions: true,
    rate: 1,
    completed: {},
    answers: {},
    likes: {},
    favorites: {},
    rewards: {},
    migratedLegacy: false
  };
}

function normalizeShortsState(input) {
  const state = {...defaultShortsState(), ...(input || {})};
  ['completed', 'answers', 'likes', 'favorites', 'rewards'].forEach((key) => {
    if (!state[key] || typeof state[key] !== 'object' || Array.isArray(state[key])) state[key] = {};
  });
  state.xp = Math.max(0, Number(state.xp) || 0);
  state.streak = Math.max(0, Number(state.streak) || 0);
  state.rate = RATE_STEPS.includes(Number(state.rate)) ? Number(state.rate) : 1;
  state.muted = state.muted !== false;
  state.captions = state.captions !== false;
  state.seed = Number(state.seed) || Math.floor(Math.random() * 1000000);
  return state;
}

function readShortsState() {
  const state = normalizeShortsState(safeJson(localStorage.getItem(SHORTS_STATE_KEY), null));
  if (!state.migratedLegacy) {
    const legacy = safeJson(localStorage.getItem(LEGACY_LEARN_PROGRESS_KEY), {});
    Object.keys(legacy || {}).forEach((id) => {
      if (!state.answers[id]) {
        state.answers[id] = {
          selected: Number(legacy[id].selected),
          correct: Boolean(legacy[id].correct),
          date: dateKey(),
          at: Date.now()
        };
      }
    });
    state.migratedLegacy = true;
    writeShortsState(state);
  }
  return state;
}

function writeShortsState(state) {
  localStorage.setItem(SHORTS_STATE_KEY, JSON.stringify(state));
}

function recordDate(record) {
  if (!record) return '';
  if (typeof record === 'string') return record;
  return record.date || '';
}

function cleanLessonTitle(item) {
  const rawTitle = String(item?.title || '').replace(/^A\d+\s*/, '').trim();
  if (rawTitle && !/^Lesson\s+A\d+$/i.test(rawTitle)) return rawTitle;
  const prompt = String(item?.prompt || '');
  const quoted = prompt.match(/"([^"]+)"/);
  if (quoted?.[1]) return quoted[1];
  return prompt.replace(/\?$/, '') || 'Daily expression';
}

function voiceLabel(item) {
  return item?.voice === 'Pure English' ? 'English only' : 'Arabic support';
}

function getDeviceProfile(state) {
  const language = (navigator.language || currentLang || 'en').toLowerCase();
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
  const answers = Object.values(state.answers || {});
  const answeredCount = answers.length;
  const correctCount = answers.filter((answer) => answer.correct).length;
  const accuracy = answeredCount ? correctCount / answeredCount : 0;
  const narrow = window.matchMedia?.('(max-width: 720px)').matches || window.innerWidth <= 720;
  const touch = window.matchMedia?.('(pointer: coarse)').matches || 'ontouchstart' in window;
  return {
    prefersSupport: language.startsWith('ar') || currentLang === 'ar' || accuracy < 0.55,
    pureEnglishReady: answeredCount > 2 && accuracy > 0.72,
    mobileLike: narrow || touch,
    slowConnection: Boolean(connection.saveData) || ['slow-2g', '2g', '3g'].includes(connection.effectiveType),
    localHour: new Date().getHours()
  };
}

function rankShorts(items, state, profile) {
  return items.map((item, index) => {
    const duration = Number(item.durationSeconds) || 30;
    let score = 1000 - index * 0.8;
    if (!state.completed[item.id]) score += 80;
    else score -= 40;
    if (!state.answers[item.id]) score += 38;
    if (state.likes[item.id]) score += 30;
    if (state.favorites[item.id]) score += 42;
    if (profile.prefersSupport && item.voice === 'Mixed') score += 26;
    if (profile.pureEnglishReady && item.voice === 'Pure English') score += 18;
    if (profile.mobileLike || profile.slowConnection) score += Math.max(0, 75 - duration) * 0.55;
    else score += Math.min(duration, 90) * 0.12;
    if (profile.localHour >= 6 && profile.localHour <= 10 && duration <= 30) score += 10;
    score += (hashString(`${item.id}:${state.seed}`) % 100) / 100;
    return {item, score};
  }).sort((a, b) => b.score - a.score).map(({item}) => item);
}

function touchLearningDay(state) {
  const today = dateKey();
  if (state.lastActiveDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  state.streak = state.lastActiveDate === dateKey(yesterday) ? state.streak + 1 : 1;
  state.lastActiveDate = today;
}

function todayMetrics(state) {
  const today = dateKey();
  const completed = Object.values(state.completed || {}).filter((record) => recordDate(record) === today).length;
  const answers = Object.values(state.answers || {}).filter((record) => recordDate(record) === today);
  const likes = Object.values(state.likes || {}).filter((record) => recordDate(record) === today).length;
  return {
    completed,
    answered: answers.length,
    correct: answers.filter((record) => record.correct).length,
    likes
  };
}

function buildMissions(state) {
  const metrics = todayMetrics(state);
  return [
    {id: 'watch3', title: 'Watch 3 clips', current: metrics.completed, target: 3, xp: 20},
    {id: 'answer3', title: 'Answer 3 quizzes', current: metrics.answered, target: 3, xp: 24},
    {id: 'correct2', title: 'Get 2 correct', current: metrics.correct, target: 2, xp: 30},
    {id: 'like1', title: 'Save a useful clip', current: metrics.likes, target: 1, xp: 10}
  ];
}

function grantMissionRewards(state) {
  const today = dateKey();
  const earned = [];
  buildMissions(state).forEach((mission) => {
    const key = `${today}:${mission.id}`;
    if (mission.current >= mission.target && !state.rewards[key]) {
      state.rewards[key] = true;
      state.xp += mission.xp;
      earned.push(`${mission.title} +${mission.xp} XP`);
    }
  });
  const metrics = todayMetrics(state);
  const goalKey = `${today}:daily-goal`;
  if (metrics.completed >= DAILY_GOAL && !state.rewards[goalKey]) {
    state.rewards[goalKey] = true;
    state.xp += 50;
    earned.push(`Daily goal +50 XP`);
  }
  return earned;
}

function renderLearn() {
  const feedTrack = $('feedTrack');
  const feedViewport = $('feedViewport');
  if (!feedTrack || !feedViewport) return;

  const data = window.LEARN_VIDEO_DATA || {items: []};
  const sourceItems = Array.isArray(data.items) ? data.items.filter((item) => item.videoUrl) : [];
  if (!sourceItems.length) {
    feedTrack.innerHTML = '<article class="feed-slide feed-empty"><h1>Practice clips are being prepared.</h1></article>';
    return;
  }

  let state = readShortsState();
  const deviceProfile = getDeviceProfile(state);
  const orderedItems = rankShorts(sourceItems, state, deviceProfile);
  const hashId = decodeURIComponent(window.location.hash.replace('#', ''));
  let activeIndex = Math.max(0, orderedItems.findIndex((item) => item.id === (hashId || state.activeId)));
  let activeQuizId = '';
  let toastTimer = 0;
  let preloadCursor = 0;
  const coverPreloads = new Set();

  function itemNumber(item) {
    return Math.max(sourceItems.findIndex((candidate) => candidate.id === item?.id) + 1, 1);
  }

  function baseCount(item, salt, minimum) {
    return minimum + (hashString(`${item.id}:${salt}`) % 900);
  }

  function slides() {
    return Array.from(feedTrack.querySelectorAll('.feed-slide'));
  }

  function slideAt(index) {
    return feedTrack.querySelector(`.feed-slide[data-index="${index}"]`);
  }

  function activeItem() {
    return orderedItems[activeIndex] || orderedItems[0];
  }

  function showToast(message) {
    const toast = $('shortsToast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2200);
  }

  function showMilestone(title, body) {
    setText('milestoneTitle', title);
    setText('milestoneBody', body);
    const modal = $('milestoneModal');
    if (modal) modal.hidden = false;
  }

  function addXp(amount) {
    state.xp = Math.max(0, (Number(state.xp) || 0) + amount);
  }

  function rewardFeedback(defaultMessage, rewards) {
    if (rewards.length) showMilestone('Mission complete', rewards.join('  '));
    else if ($('quizSheet')?.hidden !== false) showToast(defaultMessage);
  }

  function renderFeed() {
    feedTrack.innerHTML = orderedItems.map((item, index) => {
      const liked = Boolean(state.likes[item.id]);
      const saved = Boolean(state.favorites[item.id]);
      const answered = state.answers[item.id];
      const completed = Boolean(state.completed[item.id]);
      const lesson = String(itemNumber(item)).padStart(2, '0');
      const likeCount = baseCount(item, 'likes', 120) + (liked ? 1 : 0);
      const saveCount = baseCount(item, 'saves', 35) + (saved ? 1 : 0);
      return `<article class="feed-slide ${index === activeIndex ? 'is-active' : ''}" data-id="${escapeHtml(item.id)}" data-index="${index}">
        <video class="feed-video" playsinline loop muted preload="none" poster="${escapeHtml(item.coverUrl || '')}"></video>
        <div class="feed-shade"></div>
        <div class="feed-loader">Loading clip</div>
        <div class="feed-error">This clip is unavailable right now.</div>
        <div class="feed-progress"><span data-progress></span></div>
        <div class="feed-copy">
          <div class="feed-meta"><span>${lesson}</span><span>${escapeHtml(voiceLabel(item))}</span><span>${formatDuration(item.durationSeconds)}</span></div>
          <h1>${escapeHtml(cleanLessonTitle(item))}</h1>
          <p class="caption-line ${state.captions ? '' : 'is-hidden'}">${escapeHtml(item.prompt || '')}</p>
          <button class="quiz-chip ${answered ? 'is-done' : ''}" type="button" data-action="quiz">${answered ? 'Checked' : 'Quick check'}${completed ? ' · watched' : ''}</button>
        </div>
        <div class="action-rail">
          <button class="rail-button ${liked ? 'is-active' : ''}" type="button" data-action="like" aria-label="Like clip"><span aria-hidden="true">${liked ? '♥' : '♡'}</span><small>${compactCount(likeCount)}</small></button>
          <button class="rail-button ${saved ? 'is-active' : ''}" type="button" data-action="save" aria-label="Save clip"><span aria-hidden="true">${saved ? '★' : '☆'}</span><small>${compactCount(saveCount)}</small></button>
          <button class="rail-button" type="button" data-action="share" aria-label="Share clip"><span aria-hidden="true">↗</span><small>Share</small></button>
          <button class="rail-button ${answered ? 'is-active' : ''}" type="button" data-action="quiz" aria-label="Open quiz"><span aria-hidden="true">?</span><small>Quiz</small></button>
        </div>
        <div class="bottom-menu">
          <button class="${state.captions ? 'is-on' : ''}" type="button" data-action="captions" aria-label="Toggle captions">CC</button>
          <button type="button" data-action="rate" aria-label="Change speed">${state.rate}x</button>
          <button type="button" data-action="mute" aria-label="Toggle sound">${state.muted ? 'Muted' : 'Sound'}</button>
          <button type="button" data-action="next" aria-label="Next clip">Next</button>
        </div>
        <div class="pause-indicator" hidden>Paused</div>
      </article>`;
    }).join('');
  }

  function ensureCover(item) {
    if (!item?.coverUrl || coverPreloads.has(item.coverUrl)) return;
    coverPreloads.add(item.coverUrl);
    const image = new Image();
    image.src = item.coverUrl;
  }

  function ensureVideoLoaded(index, preload = 'metadata') {
    const item = orderedItems[index];
    const slide = slideAt(index);
    if (!item || !slide) return;
    ensureCover(item);
    const video = slide.querySelector('video');
    if (!video || video.dataset.loaded) return;
    video.dataset.loaded = 'true';
    video.preload = preload;
    video.src = item.videoUrl;
    video.poster = item.coverUrl || '';
    video.muted = state.muted;
    video.playbackRate = state.rate;
    video.load();
  }

  function preloadAround(index) {
    [-1, 0, 1, 2, 3].forEach((offset, order) => {
      window.setTimeout(() => ensureVideoLoaded(index + offset, offset <= 1 ? 'auto' : 'metadata'), order * 180);
    });
  }

  function startBackgroundPreload() {
    const interval = deviceProfile.slowConnection ? 2600 : 1300;
    const timer = window.setInterval(() => {
      if (preloadCursor >= orderedItems.length) {
        window.clearInterval(timer);
        return;
      }
      ensureVideoLoaded(preloadCursor, preloadCursor <= activeIndex + 2 ? 'auto' : 'metadata');
      preloadCursor += 1;
    }, interval);
  }

  function pauseInactiveVideos() {
    slides().forEach((slide, index) => {
      const video = slide.querySelector('video');
      if (video && index !== activeIndex) video.pause();
      slide.classList.toggle('is-active', index === activeIndex);
    });
  }

  function playActiveVideo() {
    const slide = slideAt(activeIndex);
    const video = slide?.querySelector('video');
    if (!slide || !video || document.hidden) return;
    ensureVideoLoaded(activeIndex, 'auto');
    video.muted = state.muted;
    video.playbackRate = state.rate;
    const pause = slide.querySelector('.pause-indicator');
    slide.classList.add('is-loading');
    video.play().then(() => {
      slide.classList.remove('is-paused');
      if (pause) pause.hidden = true;
    }).catch(() => {
      slide.classList.add('is-paused');
      if (pause) pause.hidden = false;
    });
  }

  function setActiveIndex(index, options = {}) {
    const nextIndex = Math.min(Math.max(index, 0), orderedItems.length - 1);
    activeIndex = nextIndex;
    state.activeId = orderedItems[activeIndex]?.id || '';
    writeShortsState(state);
    pauseInactiveVideos();
    preloadAround(activeIndex);
    playActiveVideo();
    renderDashboard();
    updateControls();
    if (options.updateHash && state.activeId) history.replaceState(null, '', `#${encodeURIComponent(state.activeId)}`);
  }

  function scrollToIndex(index, behavior = 'smooth') {
    const target = slideAt(index);
    if (!target) return;
    target.scrollIntoView({block: 'start', behavior});
    setActiveIndex(index, {updateHash: true});
  }

  function moveFeed(delta) {
    scrollToIndex(activeIndex + delta);
  }

  function updateControls() {
    slides().forEach((slide, index) => {
      const item = orderedItems[index];
      if (!item) return;
      const liked = Boolean(state.likes[item.id]);
      const saved = Boolean(state.favorites[item.id]);
      const answered = Boolean(state.answers[item.id]);
      const completed = Boolean(state.completed[item.id]);
      slide.querySelector('[data-action="like"]')?.classList.toggle('is-active', liked);
      slide.querySelector('[data-action="save"]')?.classList.toggle('is-active', saved);
      slide.querySelectorAll('[data-action="quiz"]').forEach((button) => button.classList.toggle('is-active', answered));
      const chip = slide.querySelector('.quiz-chip');
      if (chip) {
        chip.classList.toggle('is-done', answered);
        chip.textContent = `${answered ? 'Checked' : 'Quick check'}${completed ? ' · watched' : ''}`;
      }
      slide.querySelectorAll('[data-action="captions"]').forEach((button) => button.classList.toggle('is-on', state.captions));
      slide.querySelectorAll('[data-action="rate"]').forEach((button) => { button.textContent = `${state.rate}x`; });
      slide.querySelectorAll('[data-action="mute"]').forEach((button) => { button.textContent = state.muted ? 'Muted' : 'Sound'; });
      slide.querySelectorAll('.caption-line').forEach((caption) => caption.classList.toggle('is-hidden', !state.captions));
      const video = slide.querySelector('video');
      if (video) {
        video.muted = state.muted;
        video.playbackRate = state.rate;
      }
    });
  }

  function renderDashboard() {
    const metrics = todayMetrics(state);
    setText('shortsXp', compactCount(state.xp));
    setText('shortsStreak', state.streak);
    setText('dailyGoalText', `${Math.min(metrics.completed, DAILY_GOAL)} / ${DAILY_GOAL}`);
    setText('dailyGoalLabel', metrics.completed >= DAILY_GOAL ? 'goal complete' : 'clips today');
    const dailyGoalBar = $('dailyGoalBar');
    if (dailyGoalBar) dailyGoalBar.style.width = `${Math.min(100, (metrics.completed / DAILY_GOAL) * 100)}%`;

    const missions = buildMissions(state);
    const completeCount = missions.filter((mission) => mission.current >= mission.target).length;
    setText('missionSummary', `${completeCount} / ${missions.length}`);
    const missionList = $('missionList');
    if (missionList) {
      missionList.innerHTML = missions.map((mission) => {
        const current = Math.min(mission.current, mission.target);
        const percent = Math.min(100, (current / mission.target) * 100);
        return `<div class="mission-row ${current >= mission.target ? 'is-done' : ''}">
          <div><strong>${escapeHtml(mission.title)}</strong><small>+${mission.xp} XP</small></div>
          <span>${current} / ${mission.target}</span>
          <div class="mission-bar"><i style="width:${percent}%"></i></div>
        </div>`;
      }).join('');
    }

    const rank = state.xp >= 500 ? 'Gold' : state.xp >= 220 ? 'Silver' : state.xp >= 80 ? 'Bronze' : 'Rising';
    setText('rankLabel', rank);
    const leaderboard = [
      {name: 'Mariam', xp: 430},
      {name: 'Omar', xp: 315},
      {name: 'You', xp: state.xp, you: true},
      {name: 'Noura', xp: 140},
      {name: 'Ali', xp: 80}
    ].sort((a, b) => b.xp - a.xp);
    const leaderboardList = $('leaderboardList');
    if (leaderboardList) {
      leaderboardList.innerHTML = leaderboard.map((entry, index) => `<div class="rank-row ${entry.you ? 'is-you' : ''}">
        <span>${index + 1}</span><strong>${escapeHtml(entry.name)}</strong><small>${compactCount(entry.xp)} XP</small>
      </div>`).join('');
    }

    const queueList = $('queueList');
    if (queueList) {
      const nextItems = orderedItems.slice(activeIndex, activeIndex + 6);
      queueList.innerHTML = nextItems.map((item) => {
        const index = orderedItems.findIndex((candidate) => candidate.id === item.id);
        return `<button class="queue-row ${index === activeIndex ? 'is-active' : ''}" type="button" data-index="${index}">
          <span>${String(itemNumber(item)).padStart(2, '0')}</span>
          <strong>${escapeHtml(cleanLessonTitle(item))}</strong>
          <small>${escapeHtml(voiceLabel(item))}</small>
        </button>`;
      }).join('');
    }
  }

  function markWatched(item) {
    if (!item || state.completed[item.id]) return;
    touchLearningDay(state);
    state.completed[item.id] = {date: dateKey(), at: Date.now()};
    addXp(6);
    const rewards = grantMissionRewards(state);
    writeShortsState(state);
    renderDashboard();
    updateControls();
    rewardFeedback('Clip complete +6 XP', rewards);
  }

  function handleTimeUpdate(index, video) {
    const item = orderedItems[index];
    const slide = slideAt(index);
    if (!item || !slide || !video.duration) return;
    const progress = Math.min(1, video.currentTime / video.duration);
    const bar = slide.querySelector('[data-progress]');
    if (bar) bar.style.width = `${progress * 100}%`;
    if (progress > 0.62) markWatched(item);
  }

  function renderQuizSheet() {
    const item = orderedItems.find((candidate) => candidate.id === activeQuizId) || activeItem();
    if (!item) return;
    activeQuizId = item.id;
    const record = state.answers[item.id];
    setText('quizSheetTitle', cleanLessonTitle(item));
    setText('quizSheetPrompt', item.prompt || 'Choose the best answer.');
    const answers = $('quizSheetAnswers');
    const feedback = $('quizSheetFeedback');
    if (!answers) return;
    answers.innerHTML = (item.answers || []).map((answer, index) => {
      const selected = record?.selected === index;
      const correct = Number(item.correctIndex) === index;
      const stateClass = record ? (correct ? 'is-correct' : selected ? 'is-wrong' : '') : '';
      return `<button class="answer-option ${stateClass}" type="button" data-answer="${index}" ${record ? 'disabled' : ''}><span>${String.fromCharCode(65 + index)}</span>${escapeHtml(answer)}</button>`;
    }).join('');
    if (feedback) {
      if (!record) feedback.textContent = '';
      else feedback.textContent = record.correct ? 'Correct. Nice work.' : `Good try. The answer is ${String.fromCharCode(65 + Number(item.correctIndex))}.`;
    }
  }

  function openQuiz(item = activeItem()) {
    if (!item) return;
    activeQuizId = item.id;
    renderQuizSheet();
    const sheet = $('quizSheet');
    if (sheet) sheet.hidden = false;
  }

  function closeQuiz() {
    const sheet = $('quizSheet');
    if (sheet) sheet.hidden = true;
  }

  function answerQuiz(index) {
    const item = orderedItems.find((candidate) => candidate.id === activeQuizId) || activeItem();
    if (!item || state.answers[item.id]) return;
    const correct = Number(index) === Number(item.correctIndex);
    touchLearningDay(state);
    state.answers[item.id] = {selected: Number(index), correct, date: dateKey(), at: Date.now()};
    addXp(correct ? 12 : 4);
    const rewards = grantMissionRewards(state);
    writeShortsState(state);
    renderQuizSheet();
    renderDashboard();
    updateControls();
    rewardFeedback(correct ? 'Correct +12 XP' : 'Answered +4 XP', rewards);
  }

  async function shareItem(item) {
    const url = `${window.location.origin}${window.location.pathname}#${encodeURIComponent(item.id)}`;
    const shareData = {title: 'tiktalk academy', text: cleanLessonTitle(item), url};
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard) await navigator.clipboard.writeText(url);
      showToast('Practice link ready');
    } catch {
      showToast('Share canceled');
    }
  }

  function handleAction(action, index) {
    const item = orderedItems[index];
    if (!item) return;
    if (action === 'like') {
      if (state.likes[item.id]) delete state.likes[item.id];
      else state.likes[item.id] = {date: dateKey(), at: Date.now()};
      const rewards = grantMissionRewards(state);
      writeShortsState(state);
      renderDashboard();
      updateControls();
      rewardFeedback(state.likes[item.id] ? 'Liked' : 'Like removed', rewards);
      return;
    }
    if (action === 'save') {
      const wasSaved = Boolean(state.favorites[item.id]);
      if (wasSaved) delete state.favorites[item.id];
      else {
        touchLearningDay(state);
        state.favorites[item.id] = {date: dateKey(), at: Date.now()};
        addXp(2);
      }
      writeShortsState(state);
      renderDashboard();
      updateControls();
      showToast(wasSaved ? 'Removed from review' : 'Saved for review +2 XP');
      return;
    }
    if (action === 'share') {
      shareItem(item);
      return;
    }
    if (action === 'quiz') {
      openQuiz(item);
      return;
    }
    if (action === 'captions') {
      state.captions = !state.captions;
      writeShortsState(state);
      updateControls();
      return;
    }
    if (action === 'rate') {
      const nextIndex = (RATE_STEPS.indexOf(state.rate) + 1) % RATE_STEPS.length;
      state.rate = RATE_STEPS[nextIndex];
      writeShortsState(state);
      updateControls();
      showToast(`${state.rate}x speed`);
      return;
    }
    if (action === 'mute') {
      state.muted = !state.muted;
      writeShortsState(state);
      updateControls();
      playActiveVideo();
      return;
    }
    if (action === 'next') moveFeed(1);
  }

  renderFeed();
  renderDashboard();
  preloadAround(activeIndex);
  startBackgroundPreload();

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible || visible.intersectionRatio < 0.58) return;
    const index = Number(visible.target.dataset.index);
    if (Number.isFinite(index) && index !== activeIndex) setActiveIndex(index, {updateHash: true});
  }, {root: feedViewport, threshold: [0.58, 0.72, 0.9]});

  slides().forEach((slide, index) => {
    observer.observe(slide);
    const video = slide.querySelector('video');
    video?.addEventListener('timeupdate', () => handleTimeUpdate(index, video));
    video?.addEventListener('click', () => {
      if (video.paused) {
        video.play().catch(() => {});
        slide.querySelector('.pause-indicator').hidden = true;
      } else {
        video.pause();
        slide.querySelector('.pause-indicator').hidden = false;
      }
    });
    video?.addEventListener('canplay', () => slide.classList.remove('is-loading'));
    video?.addEventListener('error', () => slide.classList.add('has-error'));
  });

  feedTrack.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const slide = button.closest('.feed-slide');
    handleAction(button.dataset.action, Number(slide?.dataset.index));
  });

  $('queueList')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-index]');
    if (button) scrollToIndex(Number(button.dataset.index));
  });

  $('quizSheetAnswers')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-answer]');
    if (button) answerQuiz(Number(button.dataset.answer));
  });

  $('closeQuiz')?.addEventListener('click', closeQuiz);
  $('closeMilestone')?.addEventListener('click', () => { const modal = $('milestoneModal'); if (modal) modal.hidden = true; });
  $('milestoneModal')?.addEventListener('click', (event) => {
    if (event.target.id === 'milestoneModal') event.currentTarget.hidden = true;
  });
  $('quizSheet')?.addEventListener('click', (event) => {
    if (event.target.id === 'quizSheet') closeQuiz();
  });
  $('taskToggle')?.addEventListener('click', () => {
    const dashboard = $('learnDashboard');
    const isOpen = dashboard?.classList.toggle('is-open') || false;
    $('taskToggle')?.classList.toggle('is-active', isOpen);
    $('feedTab')?.classList.toggle('is-active', !isOpen);
  });
  $('feedTab')?.addEventListener('click', () => {
    $('learnDashboard')?.classList.remove('is-open');
    $('taskToggle')?.classList.remove('is-active');
    $('feedTab')?.classList.add('is-active');
  });

  feedViewport.addEventListener('keydown', (event) => {
    if (['ArrowDown', 'PageDown'].includes(event.key)) {
      event.preventDefault();
      moveFeed(1);
    }
    if (['ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      moveFeed(-1);
    }
    if (event.key === ' ') {
      event.preventDefault();
      const video = slideAt(activeIndex)?.querySelector('video');
      video?.click();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) slides().forEach((slide) => slide.querySelector('video')?.pause());
    else playActiveVideo();
  });

  window.setTimeout(() => {
    scrollToIndex(activeIndex, 'auto');
    feedViewport.focus({preventScroll: true});
  }, 80);
}

renderHome();
renderProducts();
renderServices();
renderCheckout();
renderLearn();
