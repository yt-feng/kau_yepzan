const EMAIL = 'yt.feng@foxmail.com';

const PRODUCTS = {
  translation: {
    name: 'Arabic to Chinese Translation',
    label: 'Premium service',
    price: 'From USD 0.18 / Arabic word',
    summaryPrice: 'Custom quote',
    description: 'Written Arabic-to-Chinese translation for academic, business, policy, and high-value marketing content.',
    features: ['Minimum project: USD 80', 'Specialized content from USD 0.24 / word', 'Rush add-on: +35%', 'Quote based on word count and field']
  },
  chinese101: {
    name: 'Chinese 101 with KAU',
    label: 'Recorded course',
    price: 'USD 149',
    summaryPrice: 'USD 149',
    description: 'Recorded lectures about Chinese characters, sounds, and how Chinese words are created.',
    features: ['Full recorded lecture', 'History of Chinese characters', 'Sound and word formation', 'Best beginner foundation']
  },
  practice: {
    name: 'Chinese Practice Course',
    label: 'Guided self-paced',
    price: 'USD 89 / month',
    summaryPrice: 'USD 89 / month',
    description: 'Goal-based learning plan with materials and WhatsApp Q&A support when students get stuck.',
    features: ['Goal-based plan', 'Materials included', 'WhatsApp Q&A support', 'Self-paced structure']
  },
  zoom: {
    name: 'Zoom 1-to-1 Session',
    label: 'Custom support',
    price: 'USD 120 / hour',
    summaryPrice: 'USD 120 / hour',
    description: 'Higher-rate customized learning session with experienced teachers trusted by Yutong.',
    features: ['Customized diagnosis', 'Advanced correction', 'Planning session', 'Not the default beginner path']
  },
  bundle: {
    name: 'Chinese 101 + Practice Bundle',
    label: 'Recommended bundle',
    price: 'USD 199 first month',
    summaryPrice: 'USD 199 first month',
    description: 'Recommended path: Chinese 101 foundations plus practice plan and WhatsApp support.',
    features: ['Chinese 101 included', 'First month of practice included', 'Free 30-minute planning Zoom', 'Best first step for serious learners']
  }
};

const COPY = {
  en: {
    dir: 'ltr', brandName: 'Yutong Feng', brandTagline: 'Arabic to Chinese · Chinese courses',
    navHome: 'Home', navLearn: 'Learn', navProducts: 'Products', navCheckout: 'Order', navContact: 'Contact', langLabel: 'Language',
    hero: {eyebrow: 'KAU-informed Chinese education · premium translation', title: 'Learn Chinese with structure. Translate Arabic into Chinese with native-level precision.', lead: 'A ready-to-order product site for Arabic-to-Chinese written translation, Chinese 101 recorded lectures, practice coaching, and optional 1-to-1 Zoom sessions.', primary: 'View products', secondary: 'Start order draft', tertiary: 'Email Yutong', panelTitle: 'Best first choice', panelBody: 'Most learners should start with Chinese 101 plus the practice course. 1-to-1 Zoom is higher priced and best for customization.', stats: [['KAU','Chinese teaching context'],['3','course paths'],['24h','reply target']]},
    proofTitle: 'Why this is credible', proofLead: 'Built for serious Chinese learning and Arabic-to-Chinese language service.', featuredTitle: 'Featured products', featuredLead: 'These offers can be shown during payment-provider onboarding.', videoTeaserTitle: 'Learn language through short videos', videoTeaserLead: 'A YepZan-style lesson feed using your Zhihu clips: watch one vertical video, answer one question, keep moving.', videoTeaserButton: 'Open video lessons', methodTitle: 'Learning method', testimonialTitle: 'Use cases', faqTitle: 'FAQ', finalTitle: 'Ready to order?', finalLead: 'Browse products, open the order draft, or email Yutong.', finalProductsButton: 'Browse products', finalOrderButton: 'Order draft', footerNote: 'Fast static product website for KAU-informed Chinese education and Arabic-to-Chinese translation.', footerContactTitle: 'Contact', footerContactLead: 'For orders, quotes, or payment-provider review.', footerEmailLabel: 'Email', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: 'Product catalog', productsPageLead: 'Choose a service and open the order draft. The order buttons can later be replaced with live Creem links.', checkoutTitle: 'Order draft', checkoutLead: 'This page prepares an order email. It does not collect money yet.'
  },
  zh: {
    dir: 'ltr', brandName: '冯宇通', brandTagline: '阿语译中文 · 中文课程',
    navHome: '首页', navLearn: '学习', navProducts: '产品', navCheckout: '下单', navContact: '联系', langLabel: '语言',
    hero: {eyebrow: 'KAU 中文教学背景 · 高质量阿语译中文', title: '结构化学习中文。把阿语内容准确、自然地翻译成中文。', lead: '可用于申请支付通道的产品网站，包含笔译、Chinese 101、中文练习课和一对一 Zoom。', primary: '查看产品', secondary: '进入订单草稿', tertiary: '邮件联系', panelTitle: '推荐起步路径', panelBody: '大多数学习者建议从 Chinese 101 + 中文练习课开始。一对一 Zoom 价格更高，用于定制化诊断。', stats: [['KAU','中文教学背景'],['3','课程路径'],['24h','初步回复目标']]},
    proofTitle: '为什么值得信任', proofLead: '面向严肃中文学习和高质量阿语译中文服务。', featuredTitle: '主推产品', featuredLead: '这些产品可以直接展示给支付服务审核。', videoTeaserTitle: '用短视频学习语言', videoTeaserLead: '参考 YepZan 的学习流：刷一个竖屏视频，答一道题，马上进入下一条。当前先上线阿拉伯人学英语的视频。', videoTeaserButton: '打开视频学习', methodTitle: '学习方法', testimonialTitle: '适用场景', faqTitle: '常见问题', finalTitle: '准备好下单了吗？', finalLead: '查看产品页、打开订单草稿，或把项目细节发邮件给我。', finalProductsButton: '查看产品', finalOrderButton: '订单草稿', footerNote: '快速静态产品网站，展示 KAU 中文教学背景和阿语译中文服务。', footerContactTitle: '联系', footerContactLead: '用于下单、询价或支付通道审核。', footerEmailLabel: '邮箱', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: '产品目录', productsPageLead: '选择服务并打开订单草稿。之后可以替换成 Creem 真实支付链接。', checkoutTitle: '订单草稿', checkoutLead: '这个页面生成邮件订单草稿，目前不会收款。'
  },
  ar: {
    dir: 'rtl', brandName: 'Yutong Feng', brandTagline: 'Arabic to Chinese · Chinese courses',
    navHome: 'Home', navLearn: 'Learn', navProducts: 'Products', navCheckout: 'Order', navContact: 'Contact', langLabel: 'Language',
    hero: {eyebrow: 'KAU Chinese education · premium translation', title: 'Learn Chinese with structure. Translate Arabic into Chinese with precision.', lead: 'A ready-to-order product site for translation, Chinese 101, practice coaching, and Zoom sessions.', primary: 'View products', secondary: 'Start order draft', tertiary: 'Email Yutong', panelTitle: 'Best first choice', panelBody: 'Most learners should start with Chinese 101 plus the practice course.', stats: [['KAU','Chinese teaching context'],['3','course paths'],['24h','reply target']]},
    proofTitle: 'Why this is credible', proofLead: 'Built for serious Chinese learning and Arabic-to-Chinese service.', featuredTitle: 'Featured products', featuredLead: 'These offers can be shown during payment-provider onboarding.', videoTeaserTitle: 'Learn with short videos', videoTeaserLead: 'Watch one vertical clip, answer one question, and continue your language practice.', videoTeaserButton: 'Open lessons', methodTitle: 'Learning method', testimonialTitle: 'Use cases', faqTitle: 'FAQ', finalTitle: 'Ready to order?', finalLead: 'Browse products, open the order draft, or email Yutong.', finalProductsButton: 'Browse products', finalOrderButton: 'Order draft', footerNote: 'Fast static product website for Chinese education and Arabic-to-Chinese translation.', footerContactTitle: 'Contact', footerContactLead: 'For orders, quotes, or payment-provider review.', footerEmailLabel: 'Email', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: 'Product catalog', productsPageLead: 'Choose a service and open the order draft. The order buttons can later be replaced with live Creem links.', checkoutTitle: 'Order draft', checkoutLead: 'This page prepares an order email. It does not collect money yet.'
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
  return `<article class="product-card"><span class="card-topline">${escapeHtml(product.label)}</span><h3>${escapeHtml(product.name)}</h3><div class="price-pill">${escapeHtml(product.price)}</div><p>${escapeHtml(product.description)}</p><ul class="feature-list">${listItems(product.features)}</ul><div class="card-actions"><a class="button button-primary" href="order.html?product=${key}">Order</a></div></article>`;
}

['brandName','brandTagline','navHome','navLearn','navProducts','navCheckout','navContact','langLabel','proofTitle','proofLead','featuredTitle','featuredLead','methodTitle','testimonialTitle','faqTitle','finalTitle','finalLead','finalProductsButton','finalOrderButton','footerNote','footerContactTitle','footerContactLead','footerEmailLabel','footerWhatsappLabel','footerLinkedinLabel','productsPageTitle','productsPageLead','checkoutTitle','checkoutLead'].forEach((key) => setText(key, t[key]));
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
  hero.outerHTML = `<div class="hero-copy-shell"><span class="eyebrow">${t.hero.eyebrow}</span><h1>${t.hero.title}</h1><p class="hero-lead">${t.hero.lead}</p><div class="hero-actions"><a class="button button-primary" href="products.html">${t.hero.primary}</a><a class="button button-secondary" href="order.html?product=bundle">${t.hero.secondary}</a><a class="button button-secondary" href="mailto:${EMAIL}">${t.hero.tertiary}</a></div></div><aside class="glass-card"><span class="card-topline">${t.hero.panelTitle}</span><p>${t.hero.panelBody}</p><div class="hero-metrics">${t.hero.stats.map((s) => `<div class="stat-card"><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join('')}</div></aside>`;
  const proof = $('proofGrid');
  if (proof) proof.innerHTML = ['KAU-facing education','Native learning logic','Productized support'].map((title) => `<article class="glass-card"><h3>${title}</h3><p>${t.proofLead}</p></article>`).join('');
  const videoTeaser = $('videoLearnTeaser');
  if (videoTeaser) {
    const data = window.LEARN_VIDEO_DATA || {};
    const count = Array.isArray(data.items) ? data.items.length : 0;
    videoTeaser.innerHTML = `<div class="video-teaser-copy"><span class="eyebrow">${escapeHtml(t.videoTeaserTitle)}</span><h2>${escapeHtml(t.videoTeaserTitle)}</h2><p>${escapeHtml(t.videoTeaserLead)}</p><div class="hero-actions"><a class="button button-primary" href="learn.html">${escapeHtml(t.videoTeaserButton)}</a><span class="count-pill">${count || 28} lessons live</span></div></div><div class="video-teaser-panel"><span>Watch</span><span>Quiz</span><span>Repeat</span></div>`;
  }
  const featured = $('featuredGrid');
  if (featured) featured.innerHTML = ['bundle','translation','chinese101'].map(productCard).join('');
  const method = $('methodGrid');
  if (method) method.innerHTML = ['Foundation first','Self-paced with help','Use 1-to-1 carefully'].map((title) => `<article class="step-card"><h3>${title}</h3><p>${t.proofLead}</p></article>`).join('');
  const testimonial = $('testimonialGrid');
  if (testimonial) testimonial.innerHTML = ['Beginner learner','Busy professional','Translation client'].map((title) => `<article class="quote-card"><p class="quote-mark">“</p><p>${t.featuredLead}</p><div class="quote-meta"><strong>${title}</strong></div></article>`).join('');
  const faq = $('faqList');
  if (faq) faq.innerHTML = ['Is ordering live?','What email should I use?','Which course should I start with?'].map((q, i) => `<details class="faq-item" ${i===0?'open':''}><summary>${q}</summary><p>${i===1 ? EMAIL : t.checkoutLead}</p></details>`).join('');
}

function renderProducts() { const grid = $('productCatalog'); if (grid) grid.innerHTML = Object.keys(PRODUCTS).map(productCard).join(''); }

function renderCheckout() {
  const select = $('productSelect');
  if (!select) return;
  select.innerHTML = Object.keys(PRODUCTS).map((key) => `<option value="${key}">${PRODUCTS[key].name}</option>`).join('');
  const params = new URLSearchParams(window.location.search);
  select.value = params.get('product') || 'bundle';
  const update = () => {
    const product = PRODUCTS[select.value];
    setText('summaryProduct', product.name);
    setText('summaryTotal', product.summaryPrice);
    const link = $('emailOrderLink');
    if (link) link.href = `mailto:${EMAIL}?subject=Order inquiry: ${encodeURIComponent(product.name)}&body=${encodeURIComponent('Product: ' + product.name + '\nPlease include your name, contact, and project details.')}`;
  };
  select.addEventListener('change', update);
  update();
  const form = $('orderForm');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const product = PRODUCTS[select.value];
    const body = encodeURIComponent(`Product: ${product.name}\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nWhatsApp: ${data.get('whatsapp')}\nDetails: ${data.get('goal')}`);
    window.location.href = `mailto:${EMAIL}?subject=Order inquiry: ${encodeURIComponent(product.name)}&body=${body}`;
  });
}

const LEARN_PROGRESS_KEY = 'yepzanVideoProgress';

function readProgress() {
  try { return JSON.parse(localStorage.getItem(LEARN_PROGRESS_KEY) || '{}'); }
  catch { return {}; }
}

function writeProgress(progress) {
  localStorage.setItem(LEARN_PROGRESS_KEY, JSON.stringify(progress));
}

function formatDuration(seconds) {
  const value = Number(seconds) || 0;
  const minutes = Math.floor(value / 60);
  const rest = String(value % 60).padStart(2, '0');
  return `${minutes}:${rest}`;
}

function formatRefreshDate(value) {
  if (!value) return 'Now';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Now';
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function renderLearn() {
  const video = $('lessonVideo');
  if (!video) return;

  const data = window.LEARN_VIDEO_DATA || { items: [] };
  const items = Array.isArray(data.items) ? data.items : [];
  const progress = readProgress();
  let currentId = items[0]?.id || '';
  let filteredItems = items.slice();

  const search = $('lessonSearch');
  const voiceFilter = $('voiceFilter');
  const list = $('lessonList');
  const fallback = $('videoFallback');
  const fallbackLink = $('sourceFallbackLink');

  function selectedItem() {
    return filteredItems.find((item) => item.id === currentId) || filteredItems[0] || items[0];
  }

  function refreshFiltered() {
    const term = (search?.value || '').trim().toLowerCase();
    const voice = voiceFilter?.value || 'all';
    filteredItems = items.filter((item) => {
      const text = `${item.id} ${item.title} ${item.prompt}`.toLowerCase();
      const matchesText = !term || text.includes(term);
      const matchesVoice = voice === 'all' || item.voice === voice;
      return matchesText && matchesVoice;
    });
    if (!filteredItems.some((item) => item.id === currentId)) currentId = filteredItems[0]?.id || items[0]?.id || '';
  }

  function updateSummary() {
    const answered = items.filter((item) => progress[item.id]).length;
    setText('answeredCount', answered);
    setText('lessonCount', items.length);
    setText('refreshDate', formatRefreshDate(data.generatedAt));
  }

  function renderLessonList() {
    if (!list) return;
    list.innerHTML = filteredItems.map((item) => {
      const done = progress[item.id];
      return `<button class="lesson-row ${item.id === currentId ? 'is-active' : ''}" type="button" data-id="${escapeHtml(item.id)}"><span><strong>${escapeHtml(item.id)}</strong>${escapeHtml(item.title)}</span><small>${escapeHtml(item.voice)} · ${formatDuration(item.durationSeconds)}${done ? ' · done' : ''}</small></button>`;
    }).join('') || '<p class="inline-note">No matching lessons.</p>';
  }

  function renderQuiz(item) {
    setText('quizQuestion', item?.prompt || 'Question');
    const answers = $('quizAnswers');
    const feedback = $('quizFeedback');
    if (!answers || !item) return;
    const selected = progress[item.id]?.selected;
    answers.innerHTML = item.answers.map((answer, index) => {
      const isSelected = selected === index;
      const isCorrect = item.correctIndex === index;
      const state = selected === undefined ? '' : isCorrect ? 'is-correct' : isSelected ? 'is-wrong' : '';
      return `<button class="answer-option ${state}" type="button" data-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${escapeHtml(answer)}</button>`;
    }).join('');
    if (feedback) {
      if (selected === undefined) feedback.textContent = '';
      else feedback.textContent = selected === item.correctIndex ? 'Correct. Nice, go to the next clip.' : `Answer ${String.fromCharCode(65 + item.correctIndex)} is correct.`;
    }
  }

  function renderPlayer() {
    const item = selectedItem();
    if (!item) return;
    currentId = item.id;
    setText('lessonTrack', item.track);
    setText('lessonTitle', `${item.id} · ${item.title}`);
    setText('lessonMeta', `${item.voice} · ${formatDuration(item.durationSeconds)} · Zhihu video ${item.lensVideoId}`);
    const api = $('lessonApiLink');
    if (api) api.href = item.lensApiUrl || item.zvideoApiUrl || item.sourceUrl;
    if (fallbackLink) fallbackLink.href = item.sourceUrl;
    if (item.videoUrl) {
      if (video.src !== item.videoUrl) {
        video.src = item.videoUrl;
        video.poster = item.coverUrl || '';
        video.load();
      }
      if (fallback) fallback.hidden = true;
    } else if (fallback) {
      fallback.hidden = false;
    }
    renderQuiz(item);
    renderLessonList();
    updateSummary();
  }

  function move(delta) {
    const index = filteredItems.findIndex((item) => item.id === currentId);
    const nextIndex = Math.min(Math.max(index + delta, 0), filteredItems.length - 1);
    currentId = filteredItems[nextIndex]?.id || currentId;
    renderPlayer();
  }

  $('prevLesson')?.addEventListener('click', () => move(-1));
  $('nextLesson')?.addEventListener('click', () => move(1));
  list?.addEventListener('click', (event) => {
    const row = event.target.closest('.lesson-row');
    if (!row) return;
    currentId = row.dataset.id;
    renderPlayer();
  });
  $('quizAnswers')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-answer]');
    const item = selectedItem();
    if (!button || !item) return;
    const selected = Number(button.dataset.answer);
    progress[item.id] = { selected, correct: selected === item.correctIndex };
    writeProgress(progress);
    renderQuiz(item);
    renderLessonList();
    updateSummary();
  });
  search?.addEventListener('input', () => { refreshFiltered(); renderPlayer(); });
  voiceFilter?.addEventListener('change', () => { refreshFiltered(); renderPlayer(); });
  video.addEventListener('error', () => { if (fallback) fallback.hidden = false; });

  refreshFiltered();
  renderPlayer();
}

renderHome();
renderProducts();
renderCheckout();
renderLearn();
