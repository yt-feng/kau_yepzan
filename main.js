const EMAIL = 'yt.feng@foxmail.com';

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
    cta: 'Request a quote'
  },
  chinese101: {
    name: 'Chinese Foundations',
    label: 'Recorded course',
    price: 'USD 149',
    summaryPrice: 'USD 149',
    description: 'A beginner-friendly recorded course on Chinese characters, sounds, and how words are built.',
    features: ['Full recorded lessons', 'Chinese character logic', 'Sound and word formation', 'Strong first step for beginners'],
    cta: 'Ask about the course'
  },
  practice: {
    name: 'Chinese Practice Course',
    label: 'Guided self-paced',
    price: 'USD 89 / month',
    summaryPrice: 'USD 89 / month',
    description: 'A goal-based practice plan with learning materials and WhatsApp support when you get stuck.',
    features: ['Goal-based plan', 'Materials included', 'WhatsApp Q&A support', 'Self-paced structure'],
    cta: 'Plan my practice'
  },
  zoom: {
    name: 'Zoom 1-to-1 Session',
    label: 'Custom support',
    price: 'USD 120 / hour',
    summaryPrice: 'USD 120 / hour',
    description: 'Personal diagnosis, correction, or learning planning when you need focused help.',
    features: ['Customized diagnosis', 'Advanced correction', 'Learning plan review', 'Best for specific questions'],
    cta: 'Book a session'
  },
  bundle: {
    name: 'Chinese Foundations + Practice',
    label: 'Recommended bundle',
    price: 'USD 199 first month',
    summaryPrice: 'USD 199 first month',
    description: 'The recommended path for serious beginners: foundations first, then guided practice.',
    features: ['Chinese Foundations included', 'First month of practice included', 'Free 30-minute planning session', 'Best first step for serious learners'],
    cta: 'Start this path'
  }
};

const COPY = {
  en: {
    dir: 'ltr', brandName: 'Yutong Feng', brandTagline: 'Language practice · Chinese courses',
    navHome: 'Home', navLearn: 'Practice', navProducts: 'Courses', navCheckout: 'Inquiry', navContact: 'Contact', langLabel: 'Language', productCta: 'Ask about this', inquiryButton: 'Send inquiry', lessonCountLabel: 'lessons ready',
    hero: {eyebrow: 'Short-video practice · Chinese courses · Arabic-to-Chinese translation', title: 'Practice language in short, useful lessons.', lead: 'Start with bite-sized English practice for Arabic speakers, or choose a structured Chinese course and professional Arabic-to-Chinese translation support.', primary: 'Start video practice', secondary: 'View courses', tertiary: 'Ask a question', panelTitle: 'Recommended first step', panelBody: 'Try the short-video practice first. If you want a structured plan, choose Chinese Foundations + Practice and send your goal.', stats: [['28','practice clips live'],['1','quiz after each video'],['24h','reply target']]},
    proofTitle: 'What You Can Do Here', proofLead: 'Choose quick practice, a structured Chinese learning path, or professional translation help.', proofCards: [['Practice in minutes','Watch one short clip, answer one question, and keep your momentum.'],['Study with structure','Use foundations, guided practice, and optional 1-to-1 help when you need it.'],['Translate with context','Send Arabic materials and get clear Chinese writing for real-world use.']], featuredTitle: 'Choose Your Path', featuredLead: 'Start practicing now, or send a short inquiry for a course or translation project.', videoTeaserTitle: 'Short-video English practice', videoTeaserLead: 'Built for Arabic speakers who want fast, repeatable English listening and vocabulary practice.', videoTeaserButton: 'Start practicing', methodTitle: 'How It Works', methodCards: [['Watch','Play a short vertical clip and focus on one useful expression.'],['Answer','Lock in the idea with one quick multiple-choice question.'],['Continue','Move to the next lesson and build a small daily habit.']], testimonialTitle: 'Good For', useCards: [['Arabic speakers learning English','Short clips with quick checks make daily practice easier to keep.'],['Chinese beginners','Start with foundations, then use guided practice to keep moving.'],['Translation clients','Send project details and receive a clear quote before work begins.']], faqTitle: 'FAQ', faqs: [['Can I start for free?','Yes. The short-video practice page is available as a free preview.'],['How do I choose a Chinese course?','Start with Chinese Foundations if you are new, or choose the bundle if you want practice support too.'],['How do translation quotes work?','Send the text, topic, deadline, and target use. I will reply with a quote and timeline.']], finalTitle: 'Ready to start?', finalLead: 'Practice now, browse courses, or send your learning goal/project details.', finalProductsButton: 'Browse courses', finalOrderButton: 'Send inquiry', footerNote: 'Language practice, Chinese learning support, and Arabic-to-Chinese translation by Yutong Feng.', footerContactTitle: 'Contact', footerContactLead: 'For learning plans, translation quotes, or project questions.', footerEmailLabel: 'Email', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: 'Courses and Services', productsPageLead: 'Pick the path that matches what you need today.', checkoutTitle: 'Send an Inquiry', checkoutLead: 'Choose a course or service and send a short email with your goal, deadline, or project details.'
  },
  zh: {
    dir: 'ltr', brandName: '冯宇通', brandTagline: '语言练习 · 中文课程',
    navHome: '首页', navLearn: '练习', navProducts: '课程', navCheckout: '咨询', navContact: '联系', langLabel: '语言', productCta: '咨询这个服务', inquiryButton: '发送咨询', lessonCountLabel: '条练习已上线',
    hero: {eyebrow: '短视频练习 · 中文课程 · 阿语译中文', title: '用短小、可坚持的方式练语言。', lead: '先从面向阿拉伯学习者的英语短视频练习开始，也可以选择结构化中文课程，或提交阿语译中文项目需求。', primary: '开始视频练习', secondary: '查看课程', tertiary: '邮件咨询', panelTitle: '推荐起步方式', panelBody: '想马上体验，可以先做短视频练习。想系统学习中文，建议从“中文基础 + 练习支持”开始。', stats: [['28','条练习视频'],['1','每条一个小测'],['24h','初步回复目标']]},
    proofTitle: '你可以在这里做什么', proofLead: '快速练习、系统学中文，或提交阿语译中文项目。', proofCards: [['几分钟开始练','看一个短视频，答一道题，保持学习节奏。'],['按结构学中文','先打基础，再用练习计划和答疑支持推进。'],['把阿语材料译成中文','用于学术、商务、政策或高价值内容场景。']], featuredTitle: '选择你的路径', featuredLead: '现在开始练习，或为课程/翻译项目发送咨询。', videoTeaserTitle: '英语短视频练习', videoTeaserLead: '面向阿拉伯学习者：用短视频练听力、词汇和语感，每条配一个小测。', videoTeaserButton: '开始练习', methodTitle: '练习方式', methodCards: [['看视频','播放一条竖屏短视频，抓住一个表达。'],['答小测','用一道选择题确认刚学到的内容。'],['继续下一条','保持轻量节奏，形成每日练习习惯。']], testimonialTitle: '适合谁', useCards: [['阿拉伯英语学习者','短视频 + 小测，适合每天快速练一点。'],['中文初学者','先学基础，再用练习支持坚持下去。'],['翻译客户','发送材料和用途后，先确认报价与时间。']], faqTitle: '常见问题', faqs: [['可以免费开始吗？','可以。短视频练习页目前是免费预览。'],['中文课程怎么选？','新手先选中文基础；如果想要练习支持，选基础 + 练习组合。'],['翻译如何报价？','发送文本、主题、截止时间和用途，我会回复报价和交付时间。']], finalTitle: '准备开始了吗？', finalLead: '现在练习、查看课程，或把学习目标/项目需求发给我。', finalProductsButton: '查看课程', finalOrderButton: '发送咨询', footerNote: '冯宇通提供语言练习、中文学习支持和阿语译中文服务。', footerContactTitle: '联系', footerContactLead: '用于学习计划、翻译报价或项目咨询。', footerEmailLabel: '邮箱', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: '课程与服务', productsPageLead: '根据你现在最需要解决的问题选择。', checkoutTitle: '发送咨询', checkoutLead: '选择课程或服务，并用邮件说明你的目标、截止时间或项目细节。'
  },
  ar: {
    dir: 'rtl', brandName: 'Yutong Feng', brandTagline: 'Language practice · Chinese courses',
    navHome: 'Home', navLearn: 'Practice', navProducts: 'Courses', navCheckout: 'Inquiry', navContact: 'Contact', langLabel: 'Language', productCta: 'Ask about this', inquiryButton: 'Send inquiry', lessonCountLabel: 'lessons ready',
    hero: {eyebrow: 'Short-video practice · Chinese courses · translation', title: 'Practice language in short, useful lessons.', lead: 'Start with English practice for Arabic speakers, choose a Chinese learning path, or ask for Arabic-to-Chinese translation help.', primary: 'Start practice', secondary: 'View courses', tertiary: 'Ask a question', panelTitle: 'Recommended start', panelBody: 'Try short-video practice first. For a structured Chinese plan, choose Foundations + Practice.', stats: [['28','practice clips'],['1','quiz per clip'],['24h','reply target']]},
    proofTitle: 'What You Can Do Here', proofLead: 'Choose quick practice, structured Chinese learning, or translation help.', proofCards: [['Practice quickly','Watch a short clip and answer one question.'],['Study Chinese','Learn foundations and keep practicing with support.'],['Translate clearly','Send Arabic materials and get natural Chinese writing.']], featuredTitle: 'Choose Your Path', featuredLead: 'Start practicing now, or send a short inquiry.', videoTeaserTitle: 'Short-video English practice', videoTeaserLead: 'Fast English listening and vocabulary practice for Arabic speakers.', videoTeaserButton: 'Start practicing', methodTitle: 'How It Works', methodCards: [['Watch','Play a short vertical clip.'],['Answer','Check understanding with one question.'],['Continue','Move to the next lesson.']], testimonialTitle: 'Good For', useCards: [['Arabic speakers learning English','Short clips make daily practice easier.'],['Chinese beginners','Start with foundations and guided practice.'],['Translation clients','Send details and get a clear quote.']], faqTitle: 'FAQ', faqs: [['Can I start for free?','Yes. The short-video practice page is a free preview.'],['How do I choose a Chinese course?','Start with Chinese Foundations, or choose the bundle for practice support.'],['How do translation quotes work?','Send the text, deadline, and target use to receive a quote.']], finalTitle: 'Ready to start?', finalLead: 'Practice now, browse courses, or send your goal.', finalProductsButton: 'Browse courses', finalOrderButton: 'Send inquiry', footerNote: 'Language practice, Chinese learning support, and Arabic-to-Chinese translation by Yutong Feng.', footerContactTitle: 'Contact', footerContactLead: 'For learning plans, translation quotes, or project questions.', footerEmailLabel: 'Email', footerWhatsappLabel: 'WhatsApp', footerLinkedinLabel: 'LinkedIn', productsPageTitle: 'Courses and Services', productsPageLead: 'Choose the path that matches what you need today.', checkoutTitle: 'Send an Inquiry', checkoutLead: 'Choose a course or service and send a short email with your goal or project details.'
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

['brandName','brandTagline','navHome','navLearn','navProducts','navCheckout','navContact','langLabel','proofTitle','proofLead','featuredTitle','featuredLead','methodTitle','testimonialTitle','faqTitle','finalTitle','finalLead','finalProductsButton','finalOrderButton','footerNote','footerContactTitle','footerContactLead','footerEmailLabel','footerWhatsappLabel','footerLinkedinLabel','productsPageTitle','productsPageLead','checkoutTitle','checkoutLead'].forEach((key) => setText(key, t[key]));
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
  if (featured) featured.innerHTML = ['videoEnglish','bundle','translation'].map(productCard).join('');
  const method = $('methodGrid');
  if (method) method.innerHTML = t.methodCards.map(([title, body]) => `<article class="step-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join('');
  const testimonial = $('testimonialGrid');
  if (testimonial) testimonial.innerHTML = t.useCards.map(([title, body]) => `<article class="quote-card"><p>${escapeHtml(body)}</p><div class="quote-meta"><strong>${escapeHtml(title)}</strong></div></article>`).join('');
  const faq = $('faqList');
  if (faq) faq.innerHTML = t.faqs.map(([q, a], i) => `<details class="faq-item" ${i===0?'open':''}><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join('');
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
    if (link) link.href = `mailto:${EMAIL}?subject=Inquiry: ${encodeURIComponent(product.name)}&body=${encodeURIComponent('I am interested in: ' + product.name + '\n\nMy name:\nContact:\nGoal or project details:\nTimeline:')}`;
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

  function lessonNumber(item) {
    return Math.max(items.findIndex((lesson) => lesson.id === item?.id) + 1, 1);
  }

  function voiceLabel(item) {
    return item?.voice === 'Pure English' ? 'English only' : 'With Arabic support';
  }

  function cleanLessonTitle(item) {
    const title = String(item?.title || '').replace(/^A\d+\s*/, '').trim();
    if (!title || /^Lesson\s+A\d+$/i.test(title)) return 'Quick practice clip';
    return title;
  }

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
    setText('practiceMode', 'Quiz');
  }

  function renderLessonList() {
    if (!list) return;
    list.innerHTML = filteredItems.map((item) => {
      const done = progress[item.id];
      const number = lessonNumber(item);
      return `<button class="lesson-row ${item.id === currentId ? 'is-active' : ''}" type="button" data-id="${escapeHtml(item.id)}"><span><strong>${number}</strong><em>${escapeHtml(cleanLessonTitle(item))}</em></span><small>${escapeHtml(voiceLabel(item))} · ${formatDuration(item.durationSeconds)}${done ? ' · completed' : ''}</small></button>`;
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
      else feedback.textContent = selected === item.correctIndex ? 'Correct. Ready for the next lesson.' : `Good try. The correct answer is ${String.fromCharCode(65 + item.correctIndex)}.`;
    }
  }

  function renderPlayer() {
    const item = selectedItem();
    if (!item) return;
    currentId = item.id;
    setText('lessonTrack', item.track);
    setText('lessonTitle', `Lesson ${lessonNumber(item)}`);
    setText('lessonMeta', `${cleanLessonTitle(item)} · ${voiceLabel(item)} · ${formatDuration(item.durationSeconds)}`);
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
  $('fallbackNext')?.addEventListener('click', () => move(1));
  $('replayLesson')?.addEventListener('click', () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });
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
