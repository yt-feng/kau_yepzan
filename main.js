const EMAIL = 'info@tiktalk.ac';
const COURSE_KEYS = ['chinese101', 'practice', 'bundle'];
const PRODUCT_PAGE_KEYS = ['videoEnglish', ...COURSE_KEYS];
const SERVICE_KEYS = ['translation', 'zoom'];
const PADDLE_CLIENT_TOKEN = 'live_7a3b2cc0efdae14cdeaf0d91e37';
const PADDLE_BUNDLE_PRICE_ID = 'pri_01m2ht5kd7796zdw5rm8fhxez2';
const PADDLE_SUCCESS_URL = 'https://tiktalk.ac/order-success.html?transaction_id={transaction_id}';
let paddleInitialized = false;

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
    label: 'Course in preparation',
    price: 'USD 149',
    summaryPrice: 'USD 149',
    description: 'A beginner-friendly digital course on Chinese characters, sounds, and how words are built. Final lessons and access details will be published before enrollment opens.',
    features: ['Full recorded lessons', 'Chinese character logic', 'Sound and word formation', 'Strong first step for beginners'],
    cta: 'View course path'
  },
  practice: {
    name: 'Chinese Practice Course',
    label: 'Course in preparation',
    price: 'USD 89 / month',
    summaryPrice: 'USD 89 / month',
    description: 'A self-paced digital course with structured lessons, practice materials, and clear learning checkpoints. Content and access details will be published with the course release.',
    features: ['Goal-based plan', 'Digital materials included', 'Learning checkpoints', 'Self-paced structure'],
    cta: 'View course path'
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
    label: 'Recommended course path',
    price: 'USD 199 one-time',
    summaryPrice: 'USD 199 one-time',
    description: 'The recommended digital course path for serious beginners: foundations first, then self-paced guided practice. Course access instructions follow after payment confirmation.',
    features: ['Chinese Foundations included', 'Digital practice included', 'Structured course sequence', 'Self-paced learning path'],
    cta: 'Enroll securely'
  }
};

const PRODUCT_COPY = {
  zh: {
    videoEnglish: { name: '短视频英语练习', label: '免费预览', price: '开始练习', summaryPrice: '免费预览', description: '面向阿拉伯语学习者的短视频英语练习：看一条短片，答一道小测，继续练习。', features: ['竖屏视频课程', '每条视频配即时小测', '英文内容提供阿拉伯语辅助', '支持手机和电脑'], cta: '开始练习' },
    translation: { name: '阿拉伯语到中文翻译', label: '专业翻译', price: '每个阿拉伯词 USD 0.18 起', summaryPrice: '定制报价', description: '为学术、商业、政策和营销材料提供清晰自然的阿拉伯语到中文翻译。', features: ['项目最低 USD 80', '专业内容 USD 0.24 / 词起', '可提供加急服务', '按字数和领域报价'], cta: '申请报价' },
    chinese101: { name: '中文基础课程', label: '课程准备中', price: 'USD 149', summaryPrice: 'USD 149', description: '从汉字、发音和词语构成开始，建立中文入门基础。完整课件和访问方式会在报名开放前公布。', features: ['完整录播课程', '汉字逻辑', '发音与词语构成', '适合中文初学者'], cta: '查看课程路径' },
    practice: { name: '中文练习课程', label: '课程准备中', price: 'USD 89 / 月', summaryPrice: 'USD 89 / 月', description: '按目标推进的数字中文练习课程，包含结构化课程、练习材料和阶段检查。', features: ['按目标制定计划', '包含数字材料', '阶段性学习检查', '自主学习结构'], cta: '查看课程路径' },
    zoom: { name: 'Zoom 一对一辅导', label: '定制支持', price: 'USD 120 / 小时', summaryPrice: 'USD 120 / 小时', description: '适合需要针对性诊断、纠错或学习规划的学习者。', features: ['个性化诊断', '针对性纠错', '学习计划复盘', '适合具体问题'], cta: '预约咨询' },
    bundle: { name: '中文基础 + 练习课程', label: '推荐课程路径', price: 'USD 199 一次性', summaryPrice: 'USD 199 一次性', description: '为认真学习者设计的完整路径：先学基础，再进行自主练习。付款确认后，我们会发送课程访问说明。', features: ['包含中文基础课程', '练习支持', '结构化课程顺序', '自主学习路径'], cta: '安全报名' }
  },
  ar: {
    videoEnglish: { name: 'تدريب الإنجليزية عبر المقاطع القصيرة', label: 'معاينة مجانية', price: 'ابدأ التدريب', summaryPrice: 'معاينة مجانية', description: 'تدريب سريع على الإنجليزية للناطقين بالعربية: شاهد مقطعاً قصيراً وأجب عن سؤال واحد ثم واصل.', features: ['دروس فيديو عمودية', 'اختبار سريع بعد كل مقطع', 'محتوى إنجليزي مع دعم عربي', 'يعمل على الهاتف والكمبيوتر'], cta: 'ابدأ التدريب' },
    translation: { name: 'ترجمة من العربية إلى الصينية', label: 'ترجمة احترافية', price: 'ابتداءً من 0.18 دولار للكلمة العربية', summaryPrice: 'عرض مخصص', description: 'ترجمة واضحة وطبيعية من العربية إلى الصينية للمواد الأكاديمية والتجارية والسياسات والتسويق.', features: ['الحد الأدنى للمشروع 80 دولاراً', 'المحتوى المتخصص ابتداءً من 0.24 دولار للكلمة', 'خدمة عاجلة متاحة', 'التسعير حسب عدد الكلمات والمجال'], cta: 'اطلب عرضاً' },
    chinese101: { name: 'أساسيات اللغة الصينية', label: 'الدورة قيد الإعداد', price: '149 USD', summaryPrice: '149 USD', description: 'دورة رقمية للمبتدئين عن الحروف الصينية والأصوات وطريقة بناء الكلمات. ستُنشر الدروس وتفاصيل الوصول قبل فتح التسجيل.', features: ['دروس مسجلة كاملة', 'منطق الحروف الصينية', 'الأصوات وبناء الكلمات', 'خطوة أولى قوية للمبتدئين'], cta: 'عرض مسار الدورة' },
    practice: { name: 'دورة التدريب على الصينية', label: 'الدورة قيد الإعداد', price: '89 USD / شهرياً', summaryPrice: '89 USD / شهرياً', description: 'دورة رقمية ذاتية الإيقاع بدروس منظمة ومواد تدريب ونقاط متابعة واضحة.', features: ['خطة حسب الهدف', 'مواد رقمية', 'نقاط متابعة', 'تعلم ذاتي'], cta: 'عرض مسار الدورة' },
    zoom: { name: 'جلسة فردية عبر Zoom', label: 'دعم مخصص', price: '120 USD / ساعة', summaryPrice: '120 USD / ساعة', description: 'تشخيص وتصحيح وتخطيط تعليمي مخصص عندما تحتاج إلى مساعدة مركزة.', features: ['تشخيص مخصص', 'تصحيح متقدم', 'مراجعة خطة التعلم', 'مناسبة للأسئلة المحددة'], cta: 'احجز جلسة' },
    bundle: { name: 'أساسيات الصينية + التدريب', label: 'المسار الموصى به', price: '199 USD دفعة واحدة', summaryPrice: '199 USD دفعة واحدة', description: 'المسار الرقمي الموصى به للمبتدئين الجادين: الأساسيات أولاً ثم التدريب الذاتي الموجه. نرسل تعليمات الوصول بعد تأكيد الدفع.', features: ['أساسيات الصينية مشمولة', 'تدريب موجه', 'تسلسل منظم', 'مسار تعلم ذاتي'], cta: 'سجّل بأمان' }
  }
};

const COPY = {
  en: {
    dir: 'ltr', brandName: 'tiktalk academy', brandTagline: 'Learn language from tiktalk short videos',
    navHome: 'Home', navLearn: 'Short videos', navProducts: 'Courses', navServices: 'Services', navCheckout: 'Get started', navContact: 'Contact', langLabel: 'Language', productCta: 'Ask about this', inquiryButton: 'Send inquiry', lessonCountLabel: 'lessons ready',
    hero: {eyebrow: 'Short-video practice · digital language courses', title: 'Practice language in short, useful lessons.', lead: 'Start with bite-sized English practice for Arabic speakers, or choose a structured digital Chinese course.', primary: 'Start video practice', secondary: 'View courses', tertiary: 'Ask a question', panelTitle: 'Recommended first step', panelBody: 'Try the short-video practice first. If you want a structured plan, choose Chinese Foundations + Practice and send your goal.', stats: [['28','practice clips live'],['1','quiz after each video'],['24h','reply target']]},
    proofTitle: 'What You Can Do Here', proofLead: 'Start with short-video practice or preview the KAU digital course paths.', proofCards: [['Practice in minutes','Watch one short clip, answer one question, and keep your momentum.'],['Study with structure','Use the course shells now and add the KAU lessons as they are published.'],['Keep support nearby','Send a question when you need help choosing a course or learning path.']], featuredTitle: 'Choose Your Path', featuredLead: 'Start practicing now, or preview a course path while the KAU lessons are being prepared.', videoTeaserTitle: 'Learn language from tiktalk short videos', videoTeaserLead: 'Short, repeatable English listening and vocabulary practice designed for everyday momentum.', videoTeaserButton: 'Start practicing', methodTitle: 'How It Works', methodCards: [['Watch','Play a short vertical clip and focus on one useful expression.'],['Answer','Lock in the idea with one quick multiple-choice question.'],['Continue','Move to the next lesson and build a small daily habit.']], testimonialTitle: 'Good For', useCards: [['Short-video learners','Build a daily habit with one clip and one quick check.'],['KAU course learners','Use the course shell now and follow the content release path.'],['Learning planners','Send your goal and get pointed to the right next step.']], faqTitle: 'FAQ', faqs: [['Can I start for free?','Yes. The short-video practice page is available as a free preview.'],['When will the KAU courses be available?','The course structure is ready first; final lessons and access details will be added before payment is activated.'],['How do I enroll?','When a course is ready, its enrollment page will show the current price, included materials, and access details before you continue.']], finalTitle: 'Ready to start?', finalLead: 'Practice now, preview the course paths, or send your learning goal.', finalProductsButton: 'Browse courses', finalOrderButton: 'Request course access', footerNote: 'tiktalk academy — Learn language from tiktalk short videos. KAU course content is being prepared for release.', footerContactTitle: 'Contact', footerContactLead: 'For learning plans, course access, or project questions.', footerEmailLabel: 'Email', footerWhatsappLabel: 'WhatsApp', productsPageTitle: 'Courses and learning paths', productsPageLead: 'Start with short videos now, or preview a structured KAU course path while the lessons are being prepared. Translation and one-to-one support are listed separately under Services.', checkoutTitle: 'Choose your course path', checkoutLead: 'Select a course to request access. We will confirm availability, included materials, and the next enrollment step by email.', checkoutEyebrow: 'Course enrollment', productSelectLabel: 'Course path', summaryEyebrow: 'Summary', summarySelectionLabel: 'Selection', summaryPriceLabel: 'Planned price', courseRequestButton: 'Request course access', courseStatus: 'Course materials are being prepared. We will confirm the next release step by email.', enrollmentNote: 'Access details and any payment step will be shown only after the course is published.', servicesPageTitle: 'Independent language services', servicesPageLead: 'Translation and one-to-one learning support are separate inquiry-based services. They are not part of the course enrollment path.', serviceBoundaryTitle: 'Service scope', serviceBoundaryLead: 'Course enrollment is reserved for tiktalk academy digital learning products. Translation is quoted and agreed separately before any work begins.'
  },
  zh: {
    dir: 'ltr', brandName: 'tiktalk academy', brandTagline: 'Learn language from tiktalk short videos',
    navHome: '首页', navLearn: '短视频', navProducts: '课程', navServices: '独立服务', navCheckout: '开始学习', navContact: '联系', langLabel: '语言', productCta: '咨询这个服务', inquiryButton: '发送咨询', lessonCountLabel: '条练习已上线',
    hero: {eyebrow: '短视频练习 · 数字语言课程', title: '用短小、可坚持的方式练语言。', lead: '先从面向阿拉伯学习者的英语短视频练习开始，也可以选择结构化数字中文课程。', primary: '开始视频练习', secondary: '查看课程', tertiary: '邮件咨询', panelTitle: '推荐起步方式', panelBody: '想马上体验，可以先做短视频练习。想系统学习中文，建议从“中文基础 + 练习支持”开始。', stats: [['28','条练习视频'],['1','每条一个小测'],['24h','初步回复目标']]},
    proofTitle: '你可以在这里做什么', proofLead: '先做短视频练习，预览 KAU 数字课程路径，或发送学习咨询。', proofCards: [['几分钟开始练','看一个短视频，答一道题，保持学习节奏。'],['按结构学中文','先看课程架构，KAU 内容会按计划逐步上传。'],['获得下一步建议','告诉我你的目标，我会帮你选择合适的课程路径。']], featuredTitle: '选择你的路径', featuredLead: '现在开始练习；课程内容准备好后，再开放对应的课程报名。', videoTeaserTitle: '从 tiktalk 短视频学习语言', videoTeaserLead: '用短视频练听力、词汇和语感，每条配一个小测。', videoTeaserButton: '开始练习', methodTitle: '练习方式', methodCards: [['看视频','播放一条竖屏短视频，抓住一个表达。'],['答小测','用一道选择题确认刚学到的内容。'],['继续下一条','保持轻量节奏，形成每日练习习惯。']], testimonialTitle: '适合谁', useCards: [['短视频学习者','每天用一条视频和一个小测保持节奏。'],['KAU 课程学习者','先看课程架构，等待内容发布后进入学习。'],['需要规划的人','发送学习目标，获得下一步建议。']], faqTitle: '常见问题', faqs: [['可以免费开始吗？','可以。短视频练习页目前是免费预览。'],['KAU 课程什么时候上线？','课程架构先搭建，具体课件和访问规则会在支付开启前补齐。'],['如何报名？','课程发布后，报名页面会显示当前价格、课程内容和访问方式，再由你确认是否继续。']], finalTitle: '准备开始了吗？', finalLead: '现在练习、预览课程路径，或把学习目标发给我。', finalProductsButton: '查看课程', finalOrderButton: '申请课程访问', footerNote: 'tiktalk academy — Learn language from tiktalk short videos。KAU 课程内容正在准备发布。', footerContactTitle: '联系', footerContactLead: '用于学习计划、课程访问或项目咨询。', footerEmailLabel: '邮箱', footerWhatsappLabel: 'WhatsApp', productsPageTitle: '课程与学习路径', productsPageLead: '先从短视频开始；KAU 课程内容和 课程报名会随课程发布逐步开放。翻译和一对一支持在“独立服务”中单独询价。', checkoutTitle: '课程报名', checkoutLead: '选择数字课程路径，查看报名信息，或用邮件说明你的目标和时间安排。', checkoutEyebrow: '课程报名', productSelectLabel: '数字课程', summaryEyebrow: '摘要', summarySelectionLabel: '已选内容', summaryPriceLabel: '计划价格', courseRequestButton: '申请课程访问', courseStatus: '课程内容准备好后，我们会通过邮件确认下一步。', enrollmentNote: '每个 KAU 课程发布时，会同步公布课程内容和访问规则。', servicesPageTitle: '独立语言服务', servicesPageLead: '翻译和一对一学习支持是单独询价的服务，属于独立询价服务，不进入课程报名流程。', serviceBoundaryTitle: '独立服务范围', serviceBoundaryLead: '课程和独立服务使用不同的报名流程。翻译服务会在开始前单独报价并确认。'
  },
  ar: {
    dir: 'rtl', brandName: 'tiktalk academy', brandTagline: 'Learn language from tiktalk short videos',
    navHome: 'Home', navLearn: 'Short videos', navProducts: 'Courses', navServices: 'Services', navCheckout: 'Get started', navContact: 'Contact', langLabel: 'Language', productCta: 'Ask about this', inquiryButton: 'Send inquiry', lessonCountLabel: 'lessons ready',
    hero: {eyebrow: 'Short-video practice · digital language courses', title: 'Practice language in short, useful lessons.', lead: 'Start with English practice for Arabic speakers, or choose a structured digital Chinese learning path.', primary: 'Start practice', secondary: 'View courses', tertiary: 'Ask a question', panelTitle: 'Recommended start', panelBody: 'Try short-video practice first. For a structured Chinese plan, choose Foundations + Practice.', stats: [['28','practice clips'],['1','quiz per clip'],['24h','reply target']]},
    proofTitle: 'What You Can Do Here', proofLead: 'Start with short-video practice and preview the KAU digital course paths.', proofCards: [['Practice quickly','Watch a short clip and answer one question.'],['Study with structure','Follow the course shell while KAU lessons are prepared.'],['Choose your next step','Send your goal and get a clear learning direction.']], featuredTitle: 'Choose Your Path', featuredLead: 'Start practicing now, or open a digital course setup page.', videoTeaserTitle: 'Learn language from tiktalk short videos', videoTeaserLead: 'Fast listening and vocabulary practice built around short, repeatable clips.', videoTeaserButton: 'Start practicing', methodTitle: 'How It Works', methodCards: [['Watch','Play a short vertical clip.'],['Answer','Check understanding with one question.'],['Continue','Move to the next lesson.']], testimonialTitle: 'Good For', useCards: [['Short-video learners','Keep a light daily learning habit.'],['KAU course learners','Follow the course structure as content is published.'],['Learning planners','Send your goal and get a clear next step.']], faqTitle: 'FAQ', faqs: [['Can I start for free?','Yes. The short-video practice page is a free preview.'],['When will KAU courses be available?','The course shell is ready first; lessons and access details will be added before payment is activated.'],['How do I enroll?','Course enrollment will open after the course is ready.']], finalTitle: 'Ready to start?', finalLead: 'Practice now, preview courses, or send your goal.', finalProductsButton: 'Browse courses', finalOrderButton: 'Request course access', footerNote: 'tiktalk academy — Learn language from tiktalk short videos. KAU course content is being prepared.', footerContactTitle: 'Contact', footerContactLead: 'For learning plans, course access, or project questions.', footerEmailLabel: 'Email', footerWhatsappLabel: 'WhatsApp', productsPageTitle: 'Courses and learning paths', productsPageLead: 'Start with short videos; KAU course content and course enrollment will open as courses are published. Translation and one-to-one support are listed separately under Services.', checkoutTitle: 'Choose your course path', checkoutLead: 'Choose a digital course path, request access information, or send a short email with your goal.', checkoutEyebrow: 'Course enrollment', productSelectLabel: 'Course path', summaryEyebrow: 'Summary', summarySelectionLabel: 'Selection', summaryPriceLabel: 'Planned price', courseRequestButton: 'Request course access', courseStatus: 'Course materials are being prepared. We will confirm the next release step by email.', enrollmentNote: 'Access details and any payment step will be shown only after the course is published.', servicesPageTitle: 'Independent language services', servicesPageLead: 'Translation and one-to-one learning support are separate inquiry-based services. They are not part of the course enrollment path.', serviceBoundaryTitle: 'Service scope', serviceBoundaryLead: 'Course enrollment is reserved for tiktalk academy digital learning products. Translation is quoted and agreed separately before any work begins.'
  }
};

const AR_OVERRIDES = {
  navHome: 'الرئيسية', navLearn: 'المقاطع القصيرة', navProducts: 'الدورات', navServices: 'الخدمات', navCheckout: 'ابدأ الآن', navContact: 'تواصل معنا', langLabel: 'اللغة',
  proofTitle: 'ماذا يمكنك أن تفعل هنا', proofLead: 'ابدأ بالتدريب عبر المقاطع القصيرة واستكشف مسارات الدورات الرقمية.',
  featuredTitle: 'اختر مسارك', featuredLead: 'ابدأ التدريب الآن أو استكشف مساراً منظماً بينما نجهز الدروس.',
  methodTitle: 'كيف يعمل', testimonialTitle: 'مناسب لـ', faqTitle: 'الأسئلة الشائعة', finalTitle: 'هل أنت مستعد للبدء؟', finalLead: 'تدرّب الآن أو استكشف الدورات أو أرسل هدفك التعليمي.',
  finalProductsButton: 'استعرض الدورات', finalOrderButton: 'اطلب معلومات التسجيل', footerNote: 'tiktalk academy — تعلم اللغة من مقاطع tiktalk القصيرة. يجري إعداد محتوى الدورات.', footerContactTitle: 'تواصل معنا', footerContactLead: 'لخطط التعلم أو معلومات الدورة أو الأسئلة المتعلقة بالمشروع.', footerEmailLabel: 'البريد الإلكتروني', footerWhatsappLabel: 'واتساب',
  videoTeaserTitle: 'تعلم اللغة من مقاطع tiktalk القصيرة', videoTeaserLead: 'تدريب سريع على الاستماع والمفردات عبر مقاطع قصيرة قابلة للتكرار.', videoTeaserButton: 'ابدأ التدريب', lessonCountLabel: 'مقطع جاهز', productCta: 'اسأل عن هذا', inquiryButton: 'أرسل استفساراً',
  productsPageTitle: 'الدورات ومسارات التعلم', productsPageLead: 'ابدأ بالمقاطع القصيرة أو استكشف مساراً رقمياً منظماً بينما نجهز الدروس.', checkoutTitle: 'اختر مسار الدورة', checkoutLead: 'اختر مساراً رقمياً لطلب معلومات الوصول. سنؤكد التوفر والخطوة التالية عبر البريد الإلكتروني.', checkoutEyebrow: 'التسجيل في الدورة', productSelectLabel: 'مسار الدورة', summaryEyebrow: 'الملخص', summarySelectionLabel: 'الاختيار', summaryPriceLabel: 'السعر المخطط', courseRequestButton: 'اطلب معلومات التسجيل', courseStatus: 'يجري إعداد مواد الدورة. سنؤكد الخطوة التالية عبر البريد الإلكتروني.', enrollmentNote: 'ستظهر تفاصيل الوصول وأي خطوة دفع بعد نشر الدورة.',
  servicesPageTitle: 'خدمات لغوية مستقلة', servicesPageLead: 'الترجمة والدعم التعليمي الفردي خدمتان مستقلتان بطلب وعرض سعر منفصلين.', serviceBoundaryTitle: 'نطاق الخدمة', serviceBoundaryLead: 'يتم التسجيل في الدورات والخدمات المستقلة عبر مسارين مختلفين. تُسعّر الترجمة وتُعتمد بشكل منفصل قبل بدء العمل.',
  hero: { eyebrow: 'تدريب عبر المقاطع القصيرة · دورات لغوية رقمية', title: 'تعلّم اللغة عبر دروس قصيرة ومفيدة.', lead: 'ابدأ بتدريب الإنجليزية للناطقين بالعربية أو اختر مساراً رقمياً منظماً لتعلم الصينية.', primary: 'ابدأ تدريب الفيديو', secondary: 'استعرض الدورات', tertiary: 'أرسل سؤالاً', panelTitle: 'الخطوة الأولى الموصى بها', panelBody: 'جرّب التدريب عبر المقاطع القصيرة أولاً. ولخطة صينية منظمة، اختر أساسيات الصينية + التدريب.', stats: [['28','مقطع تدريب'],['1','اختبار لكل مقطع'],['24h','هدف الرد']] },
  proofCards: [['تدرّب في دقائق', 'شاهد مقطعاً قصيراً وأجب عن سؤال واحد وحافظ على تقدمك.'], ['تعلّم وفق بنية', 'اتبع هيكل الدورة بينما نجهز الدروس وننشرها.'], ['اختر خطوتك التالية', 'أرسل هدفك لتحصل على اتجاه واضح للتعلم.']],
  methodCards: [['شاهد', 'شغّل مقطعاً عمودياً قصيراً.'], ['أجب', 'تحقق من فهمك بسؤال واحد.'], ['تابع', 'انتقل إلى الدرس التالي.']],
  useCards: [['متعلمو المقاطع القصيرة', 'حافظ على عادة تعلم يومية خفيفة.'], ['متعلمو الدورات', 'اتبع بنية الدورة مع نشر المحتوى.'], ['من يخططون لتعلمهم', 'أرسل هدفك واحصل على خطوة تالية واضحة.']],
  faqs: [['هل يمكنني البدء مجاناً؟', 'نعم. صفحة التدريب عبر المقاطع القصيرة متاحة كمعاينة مجانية.'], ['متى تتوفر الدورات؟', 'نجهز هيكل الدورة أولاً، ثم نضيف الدروس وتفاصيل الوصول قبل تفعيل الدفع.'], ['كيف أسجل؟', 'يفتح التسجيل بعد جاهزية الدورة، مع عرض السعر والمحتوى وطريقة الوصول قبل المتابعة.']]
};

const $ = (id) => document.getElementById(id);
const SUPPORTED_LANGS = ['en', 'zh', 'ar'];
function detectBrowserLang() {
  const browserLang = String((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('ar')) return 'ar';
  return 'en';
}
const getLang = () => {
  const saved = localStorage.getItem('lang');
  return SUPPORTED_LANGS.includes(saved) ? saved : detectBrowserLang();
};
const currentLang = getLang();
const baseCopy = COPY[currentLang] || COPY.en;
const t = currentLang === 'ar' ? { ...baseCopy, ...AR_OVERRIDES, hero: { ...baseCopy.hero, ...AR_OVERRIDES.hero } } : baseCopy;
const STATIC_COPY = {
  en: { productsHelpTitle: 'Need help choosing?', productsHelpLead: 'Send your learning goal or project details and I will point you to the best next step.', productsEmailButton: 'Email tiktalk academy', productsInquiryButton: 'Send inquiry', serviceInquiryButton: 'Send a service inquiry', backToCourses: 'Back to courses', contactEmailLabel: 'Email', feedTab: 'For You', taskToggle: 'Tasks', dailyGoalKicker: 'Daily goal', missionsKicker: 'Missions', rankKicker: 'Learning rank', nextClipsKicker: 'Next clips', quickCheckKicker: 'Quick check', levelUpBadge: 'Level up', continueButton: 'Continue' },
  zh: { productsHelpTitle: '需要帮你选择吗？', productsHelpLead: '把你的学习目标或项目需求发来，我会帮你找到合适的下一步。', productsEmailButton: '邮件联系 tiktalk academy', productsInquiryButton: '发送咨询', serviceInquiryButton: '发送服务咨询', backToCourses: '返回课程', contactEmailLabel: '邮箱', feedTab: '为你推荐', taskToggle: '任务', dailyGoalKicker: '每日目标', missionsKicker: '任务', rankKicker: '学习等级', nextClipsKicker: '下一条视频', quickCheckKicker: '快速小测', levelUpBadge: '升级啦', continueButton: '继续' },
  ar: { productsHelpTitle: 'هل تحتاج إلى مساعدة في الاختيار؟', productsHelpLead: 'أرسل هدفك التعليمي أو تفاصيل مشروعك وسأقترح عليك الخطوة التالية المناسبة.', productsEmailButton: 'راسل tiktalk academy', productsInquiryButton: 'أرسل استفساراً', serviceInquiryButton: 'أرسل استفساراً عن الخدمة', backToCourses: 'العودة إلى الدورات', contactEmailLabel: 'البريد الإلكتروني', feedTab: 'لك', taskToggle: 'المهام', dailyGoalKicker: 'الهدف اليومي', missionsKicker: 'المهام', rankKicker: 'رتبة التعلم', nextClipsKicker: 'المقاطع التالية', quickCheckKicker: 'اختبار سريع', levelUpBadge: 'ارتقِ بالمستوى', continueButton: 'متابعة' }
};
const LEARN_COPY = {
  en: { clipsPreparing: 'Practice clips are being prepared.', loadingClip: 'Loading clip', clipUnavailable: 'This clip is unavailable right now.', checked: 'Checked', quickCheck: 'Quick check', watched: 'watched', share: 'Share', quiz: 'Quiz', muted: 'Muted', sound: 'Sound', next: 'Next', paused: 'Paused', correct: 'Correct. Nice work.', tryAgain: 'Good try. The answer is', clipComplete: 'Clip complete', missionComplete: 'Mission complete', chooseBest: 'Choose the best answer.', goalComplete: 'goal complete', clipsToday: 'clips today', ready: 'ready', xp: 'XP', missionTitles: ['Watch 3 clips', 'Answer 3 quizzes', 'Get 2 correct', 'Save a useful clip'] },
  zh: { clipsPreparing: '短视频练习正在准备中。', loadingClip: '正在加载', clipUnavailable: '当前无法播放这条视频。', checked: '已完成', quickCheck: '快速小测', watched: '已观看', share: '分享', quiz: '小测', muted: '静音', sound: '声音', next: '下一条', paused: '已暂停', correct: '回答正确，做得不错。', tryAgain: '再试试。正确答案是', clipComplete: '视频完成', missionComplete: '任务完成', chooseBest: '选择最佳答案。', goalComplete: '目标完成', clipsToday: '今日视频', ready: '待完成', xp: '经验', missionTitles: ['观看 3 条视频', '完成 3 次小测', '答对 2 道题', '收藏一条有用视频'] },
  ar: { clipsPreparing: 'يجري إعداد مقاطع التدريب.', loadingClip: 'جارٍ تحميل المقطع', clipUnavailable: 'هذا المقطع غير متاح حالياً.', checked: 'تم التحقق', quickCheck: 'اختبار سريع', watched: 'تمت المشاهدة', share: 'مشاركة', quiz: 'اختبار', muted: 'صامت', sound: 'الصوت', next: 'التالي', paused: 'متوقف مؤقتاً', correct: 'إجابة صحيحة، أحسنت.', tryAgain: 'حاول مرة أخرى. الإجابة هي', clipComplete: 'اكتمل المقطع', missionComplete: 'اكتملت المهمة', chooseBest: 'اختر أفضل إجابة.', goalComplete: 'اكتمل الهدف', clipsToday: 'مقاطع اليوم', ready: 'جاهزة', xp: 'خبرة', missionTitles: ['شاهد 3 مقاطع', 'أجب عن 3 اختبارات', 'احصل على إجابتين صحيحتين', 'احفظ مقطعاً مفيداً'] }
};
const ui = { ...(STATIC_COPY[currentLang] || STATIC_COPY.en), ...(LEARN_COPY[currentLang] || LEARN_COPY.en) };

const PAYMENT_COPY = {
  en: {
    button: 'Enroll securely',
    lead: 'Select a course path. The available path can be purchased securely; other paths remain inquiry-based until published.',
    note: 'Secure checkout is available for the Chinese Foundations + Practice path. The final tax-inclusive total is shown before confirmation.',
    status: 'This course path is ready for secure checkout. Course access instructions are sent after payment confirmation.',
    enrollment: 'Paddle processes payment securely. Course access instructions are sent after payment confirmation; unreleased paths remain inquiry-based.',
    fallback: 'Secure checkout is temporarily unavailable. Use the email link below and we will help you enroll.',
    completed: 'Checkout completed. Keep the receipt email and transaction reference for your records.'
  },
  zh: {
    button: '安全报名',
    lead: '选择课程路径。当前可用路径支持安全结账，其他路径会在发布前保持咨询报名。',
    note: '“中文基础 + 练习课程”已开放安全结账。确认前会显示最终含税金额。',
    status: '该课程路径已开放安全结账。付款确认后，我们会发送课程访问说明。',
    enrollment: '支付由 Paddle 安全处理。付款确认后发送课程访问说明；尚未发布的课程仍通过邮件咨询。',
    fallback: '安全结账暂时不可用，请使用下方邮件入口，我们会协助你报名。',
    completed: '结账流程已完成。请保留收据邮件和交易编号。'
  },
  ar: {
    button: 'سجّل بأمان',
    lead: 'اختر مساراً للدورة. يمكن شراء المسار المتاح بأمان، بينما تبقى المسارات الأخرى للاستفسار حتى نشرها.',
    note: 'التسجيل الآمن متاح لمسار أساسيات الصينية + التدريب. يظهر المبلغ النهائي شاملاً الضريبة قبل التأكيد.',
    status: 'هذا المسار جاهز للتسجيل الآمن. نرسل تعليمات الوصول بعد تأكيد الدفع.',
    enrollment: 'يعالج Paddle الدفع بأمان. نرسل تعليمات الوصول بعد تأكيد الدفع، بينما تبقى المسارات غير المنشورة للاستفسار.',
    fallback: 'التسجيل الآمن غير متاح مؤقتاً. استخدم رابط البريد أدناه وسنساعدك في التسجيل.',
    completed: 'اكتملت عملية الدفع. احتفظ برسالة الإيصال ومرجع المعاملة.'
  }
};

const SUCCESS_COPY = {
  en: {
    eyebrow: 'Payment flow complete',
    title: 'Thanks — your checkout is complete.',
    lead: 'Paddle has handled the payment flow and sent the receipt. We will send course access instructions to the purchaser email after payment confirmation.',
    reference: 'Transaction reference',
    noReference: 'Not provided',
    note: 'Need a refund? Our 14-day no-conditions refund policy is available here.',
    home: 'Back to home',
    refund: 'Refund policy'
  },
  zh: {
    eyebrow: '支付流程完成',
    title: '谢谢，结账流程已完成。',
    lead: 'Paddle 已处理支付流程并发送收据。付款确认后，我们会将课程访问说明发送到购买时填写的邮箱。',
    reference: '交易编号',
    noReference: '未提供',
    note: '需要退款？请查看我们的 14 天无条件退款政策。',
    home: '返回首页',
    refund: '退款政策'
  },
  ar: {
    eyebrow: 'اكتملت عملية الدفع',
    title: 'شكراً، اكتملت عملية التسجيل.',
    lead: 'عالج Paddle عملية الدفع وأرسل الإيصال. نرسل تعليمات الوصول إلى البريد الإلكتروني المستخدم في الشراء بعد تأكيد الدفع.',
    reference: 'مرجع المعاملة',
    noReference: 'غير متاح',
    note: 'تحتاج إلى استرداد؟ راجع سياسة الاسترداد غير المشروط لمدة 14 يوماً.',
    home: 'العودة إلى الرئيسية',
    refund: 'سياسة الاسترداد'
  }
};

document.documentElement.lang = currentLang;
document.documentElement.dir = t.dir;

const PAGE_TITLES = {
  en: { home: 'tiktalk academy | Learn language from tiktalk short videos', products: 'Courses | tiktalk academy', services: 'Services | tiktalk academy', enrollment: 'Course enrollment | tiktalk academy', success: 'Payment received | tiktalk academy', learn: 'Short videos | tiktalk academy', terms: 'Terms | tiktalk academy', refund: 'Refund policy | tiktalk academy', privacy: 'Privacy | tiktalk academy' },
  zh: { home: 'tiktalk academy｜从短视频学习语言', products: '课程｜tiktalk academy', services: '独立服务｜tiktalk academy', enrollment: '课程报名｜tiktalk academy', success: '支付流程已完成｜tiktalk academy', learn: '短视频｜tiktalk academy', terms: '条款｜tiktalk academy', refund: '退款政策｜tiktalk academy', privacy: '隐私政策｜tiktalk academy' },
  ar: { home: 'tiktalk academy | تعلم اللغة من المقاطع القصيرة', products: 'الدورات | tiktalk academy', services: 'الخدمات المستقلة | tiktalk academy', enrollment: 'التسجيل في الدورة | tiktalk academy', success: 'اكتمل الدفع | tiktalk academy', learn: 'المقاطع القصيرة | tiktalk academy', terms: 'الشروط | tiktalk academy', refund: 'سياسة الاسترداد | tiktalk academy', privacy: 'الخصوصية | tiktalk academy' }
};
const fileKey = (window.location.pathname.split('/').pop() || 'index.html').replace('.html', '');
const pageKey = document.body.dataset.page === 'policy' ? fileKey : (document.body.dataset.page || 'home');
document.title = PAGE_TITLES[currentLang]?.[pageKey] || document.title;

function setText(id, value) { const node = $(id); if (node) node.textContent = value ?? ''; }
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'}[char]));
}
function listItems(items) { return items.map((item) => `<li>${escapeHtml(item)}</li>`).join(''); }
function productFor(key) { return { ...PRODUCTS[key], ...(PRODUCT_COPY[currentLang]?.[key] || {}) }; }
function productCard(key) {
  const product = productFor(key);
  const href = product.href || `order.html?product=${key}`;
  const cta = product.cta || t.productCta || 'Ask about this';
  return `<article class="product-card"><span class="card-topline">${escapeHtml(product.label)}</span><h3>${escapeHtml(product.name)}</h3><div class="price-pill">${escapeHtml(product.price)}</div><p>${escapeHtml(product.description)}</p><ul class="feature-list">${listItems(product.features)}</ul><div class="card-actions"><a class="button button-primary" href="${escapeHtml(href)}">${escapeHtml(cta)}</a></div></article>`;
}

['brandName','brandTagline','navHome','navLearn','navProducts','navServices','navCheckout','navContact','langLabel','proofTitle','proofLead','featuredTitle','featuredLead','methodTitle','testimonialTitle','faqTitle','finalTitle','finalLead','finalProductsButton','finalOrderButton','footerNote','footerContactTitle','footerContactLead','footerEmailLabel','footerWhatsappLabel','productsPageTitle','productsPageLead','checkoutTitle','checkoutLead','checkoutEyebrow','productSelectLabel','summaryEyebrow','summarySelectionLabel','summaryPriceLabel','courseStatus','enrollmentNote','servicesPageTitle','servicesPageLead','serviceBoundaryTitle','serviceBoundaryLead'].forEach((key) => setText(key, t[key]));
Object.entries(ui).forEach(([key, value]) => setText(key, value));
setText('emailOrderLink', t.courseRequestButton || t.inquiryButton);
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
    videoTeaser.innerHTML = `<div class="video-teaser-copy"><span class="eyebrow">${escapeHtml(t.videoTeaserTitle)}</span><h2>${escapeHtml(t.videoTeaserTitle)}</h2><p>${escapeHtml(t.videoTeaserLead)}</p><div class="hero-actions"><a class="button button-primary" href="learn.html">${escapeHtml(t.videoTeaserButton)}</a><span class="count-pill">${count || 28} ${escapeHtml(t.lessonCountLabel)}</span></div></div><div class="video-teaser-panel"><span>${escapeHtml(t.methodCards[0][0])}</span><span>${escapeHtml(t.methodCards[1][0])}</span><span>${escapeHtml(t.methodCards[2][0])}</span></div>`;
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

function paddleSettings() {
  return {
    displayMode: 'overlay',
    variant: 'one-page',
    theme: 'light',
    locale: currentLang === 'zh' ? 'zh-Hans' : currentLang === 'ar' ? 'ar' : 'en',
    successUrl: PADDLE_SUCCESS_URL
  };
}

function initializePaddle() {
  if (paddleInitialized) return true;
  if (!window.Paddle?.Initialize) return false;
  try {
    window.Paddle.Initialize({
      token: PADDLE_CLIENT_TOKEN,
      checkout: { settings: paddleSettings() },
      eventCallback: (event) => {
        if (event?.name === 'checkout.completed') setText('courseStatus', (PAYMENT_COPY[currentLang] || PAYMENT_COPY.en).completed);
      }
    });
    paddleInitialized = true;
    return true;
  } catch (error) {
    console.warn('Paddle checkout could not be initialized.', error);
    return false;
  }
}

function openPaddleCheckout() {
  const copy = PAYMENT_COPY[currentLang] || PAYMENT_COPY.en;
  if (!initializePaddle() || !window.Paddle?.Checkout?.open) {
    setText('courseStatus', copy.fallback);
    return;
  }
  try {
    window.Paddle.Checkout.open({
      items: [{ priceId: PADDLE_BUNDLE_PRICE_ID, quantity: 1 }],
      settings: paddleSettings()
    });
  } catch (error) {
    console.warn('Paddle checkout could not be opened.', error);
    setText('courseStatus', copy.fallback);
  }
}

function renderCheckout() {
  const select = $('productSelect');
  if (!select) return;
  select.innerHTML = COURSE_KEYS.map((key) => `<option value="${key}">${escapeHtml(productFor(key).name)}</option>`).join('');
  const params = new URLSearchParams(window.location.search);
  select.value = COURSE_KEYS.includes(params.get('product')) ? params.get('product') : 'bundle';
  const paddleButton = $('paddleCheckoutButton');
  const paymentNote = $('paymentNote');
  const paymentCopy = PAYMENT_COPY[currentLang] || PAYMENT_COPY.en;
  const update = () => {
    const product = productFor(select.value);
    setText('checkoutLead', paymentCopy.lead);
    setText('summaryProduct', product.name);
    setText('summaryTotal', product.summaryPrice);
    const link = $('emailOrderLink');
    if (link) link.href = `mailto:${EMAIL}?subject=Course access request: ${encodeURIComponent(product.name)}&body=${encodeURIComponent('I would like to request access information for: ' + product.name + '\n\nMy name:\nContact:\nLearning goal:\nPreferred start date:')}`;
    const isBundle = select.value === 'bundle';
    if (paddleButton) {
      paddleButton.hidden = !isBundle;
      setText('paddleCheckoutButton', paymentCopy.button);
      if (isBundle) setText('courseStatus', initializePaddle() ? paymentCopy.status : paymentCopy.fallback);
      else setText('courseStatus', t.courseStatus || 'Course materials are being prepared.');
    }
    if (paymentNote) paymentNote.textContent = isBundle ? paymentCopy.note : (t.enrollmentNote || 'Course access details will be confirmed by email.');
    setText('enrollmentNote', isBundle ? paymentCopy.enrollment : (t.enrollmentNote || 'Course access details will be confirmed by email.'));
  };
  select.addEventListener('change', update);
  paddleButton?.addEventListener('click', (event) => { event.preventDefault(); openPaddleCheckout(); });
  window.addEventListener('load', update, { once: true });
  update();
  const form = $('orderForm');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const product = productFor(select.value);
    const body = encodeURIComponent(`I am interested in: ${product.name}\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nWhatsApp: ${data.get('whatsapp')}\nGoal or project details: ${data.get('goal')}`);
    window.location.href = `mailto:${EMAIL}?subject=Inquiry: ${encodeURIComponent(product.name)}&body=${body}`;
  });
}

function renderSuccess() {
  if (document.body.dataset.page !== 'success') return;
  const copy = SUCCESS_COPY[currentLang] || SUCCESS_COPY.en;
  setText('successEyebrow', copy.eyebrow);
  setText('successTitle', copy.title);
  setText('successLead', copy.lead);
  setText('successReferenceLabel', copy.reference);
  setText('successRefund', copy.note);
  setText('successHome', copy.home);
  setText('successRefundLink', copy.refund);
  const transactionId = new URLSearchParams(window.location.search).get('transaction_id');
  setText('successTransactionValue', transactionId || copy.noReference);
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
  const missionTitles = ui.missionTitles || LEARN_COPY.en.missionTitles;
  return [
    {id: 'watch3', title: missionTitles[0], current: metrics.completed, target: 3, xp: 20},
    {id: 'answer3', title: missionTitles[1], current: metrics.answered, target: 3, xp: 24},
    {id: 'correct2', title: missionTitles[2], current: metrics.correct, target: 2, xp: 30},
    {id: 'like1', title: missionTitles[3], current: metrics.likes, target: 1, xp: 10}
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
    earned.push(`${ui.dailyGoalKicker || 'Daily goal'} +50 ${ui.xp || 'XP'}`);
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
    feedTrack.innerHTML = `<article class="feed-slide feed-empty"><h1>${escapeHtml(ui.clipsPreparing || 'Practice clips are being prepared.')}</h1></article>`;
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
    if (rewards.length) showMilestone(ui.missionComplete || 'Mission complete', rewards.join('  '));
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
        <div class="feed-loader">${escapeHtml(ui.loadingClip)}</div>
        <div class="feed-error">${escapeHtml(ui.clipUnavailable)}</div>
        <div class="feed-progress"><span data-progress></span></div>
        <div class="feed-copy">
          <div class="feed-meta"><span>${lesson}</span><span>${escapeHtml(voiceLabel(item))}</span><span>${formatDuration(item.durationSeconds)}</span></div>
          <h1>${escapeHtml(cleanLessonTitle(item))}</h1>
          <p class="caption-line ${state.captions ? '' : 'is-hidden'}">${escapeHtml(item.prompt || '')}</p>
          <button class="quiz-chip ${answered ? 'is-done' : ''}" type="button" data-action="quiz">${answered ? escapeHtml(ui.checked) : escapeHtml(ui.quickCheck)}${completed ? ` · ${escapeHtml(ui.watched)}` : ''}</button>
        </div>
        <div class="action-rail">
          <button class="rail-button ${liked ? 'is-active' : ''}" type="button" data-action="like" aria-label="Like clip"><span aria-hidden="true">${liked ? '♥' : '♡'}</span><small>${compactCount(likeCount)}</small></button>
          <button class="rail-button ${saved ? 'is-active' : ''}" type="button" data-action="save" aria-label="Save clip"><span aria-hidden="true">${saved ? '★' : '☆'}</span><small>${compactCount(saveCount)}</small></button>
          <button class="rail-button" type="button" data-action="share" aria-label="${escapeHtml(ui.share)}"><span aria-hidden="true">↗</span><small>${escapeHtml(ui.share)}</small></button>
          <button class="rail-button ${answered ? 'is-active' : ''}" type="button" data-action="quiz" aria-label="${escapeHtml(ui.quiz)}"><span aria-hidden="true">?</span><small>${escapeHtml(ui.quiz)}</small></button>
        </div>
        <div class="bottom-menu">
          <button class="${state.captions ? 'is-on' : ''}" type="button" data-action="captions" aria-label="Toggle captions">CC</button>
          <button type="button" data-action="rate" aria-label="Change speed">${state.rate}x</button>
          <button type="button" data-action="mute" aria-label="${escapeHtml(ui.sound)}">${state.muted ? escapeHtml(ui.muted) : escapeHtml(ui.sound)}</button>
          <button type="button" data-action="next" aria-label="${escapeHtml(ui.next)}">${escapeHtml(ui.next)}</button>
        </div>
        <div class="pause-indicator" hidden>${escapeHtml(ui.paused)}</div>
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
        chip.textContent = `${answered ? ui.checked : ui.quickCheck}${completed ? ` · ${ui.watched}` : ''}`;
      }
      slide.querySelectorAll('[data-action="captions"]').forEach((button) => button.classList.toggle('is-on', state.captions));
      slide.querySelectorAll('[data-action="rate"]').forEach((button) => { button.textContent = `${state.rate}x`; });
      slide.querySelectorAll('[data-action="mute"]').forEach((button) => { button.textContent = state.muted ? ui.muted : ui.sound; });
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
    setText('dailyGoalLabel', metrics.completed >= DAILY_GOAL ? ui.goalComplete : ui.clipsToday);
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
    rewardFeedback(`${ui.clipComplete} +6 ${ui.xp}`, rewards);
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
    setText('quizSheetPrompt', item.prompt || ui.chooseBest);
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
      else feedback.textContent = record.correct ? ui.correct : `${ui.tryAgain} ${String.fromCharCode(65 + Number(item.correctIndex))}.`;
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
renderSuccess();
renderLearn();
