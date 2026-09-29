/* =========================================================
   Maya Mahmoud — Portfolio
   Content (EN / AR) + interactions
   ========================================================= */

const I18N = {
  en: {
    "nav.about": "About", "nav.process": "Process", "nav.skills": "Skills",
    "nav.work": "Work", "nav.journey": "Journey", "nav.contact": "Contact",

    "hero.badge": "Open to new opportunities",
    "hero.greet": "Hi, I'm",
    "hero.name": "Maya Mahmoud",
    "hero.desc": "I take a system the whole way — from requirements and business rules to a tested <strong>Laravel</strong> &amp; <strong>Angular</strong> build, deployed live on a real domain.",
    "hero.cta1": "View my work",
    "hero.cta2": "View CV",

    "about.eyebrow": "About me",
    "about.title": "I build the parts of a system that are <span class=\"grad\">hard to undo.</span>",
    "about.loc": "Tartous, Syria",
    "about.p1": "Full-Stack Web Developer with production experience delivering a <strong>multi-tenant SaaS</strong> for a commercial client — deployed live and now being piloted by its first shops. For every client system I start with the requirements — scope, roles, access rules and business rules — before a single line of code.",
    "about.p2": "Then I build the backend and the frontend, cover the risky paths with automated tests, and deploy the result myself. I care most about <strong>auditability</strong>, <strong>role-based access control</strong> and <strong>data isolation between tenants</strong> — the decisions that are expensive to get wrong later.",
    "about.eduK": "Education",
    "about.eduV": "B.Sc. Electronics &amp; Communications Engineering — Tishreen University",
    "about.langK": "Languages",
    "about.langV": "Arabic (native) · English (proficient)",

    "stats.s1": "Full systems built end to end",
    "stats.s2": "Languages, with full RTL support",
    "stats.s3": "Anti-fraud controls in a single platform",
    "stats.s4": "Of company projects began with written requirements",

    "process.eyebrow": "How I work",
    "process.title": "From the first question <span class=\"grad\">to the live domain.</span>",
    "process.sub": "Most bugs start as a misunderstood rule. So I write the rules down first, then build on them.",

    "skills.eyebrow": "Toolkit",
    "skills.title": "Tools I use to <span class=\"grad\">ship with confidence.</span>",

    "work.eyebrow": "Selected work",
    "work.title": "Systems built for <span class=\"grad\">real users.</span>",
    "work.sub": "A multi-tenant SaaS running on its own domain, a document management system and an AI-powered university platform. Click a screen to watch the demo.",
    "work.demo": "Watch demo",
    "work.hint": "Click to watch the demo",
    "work.code": "Source code",
    "work.case": "Read the case study",
    "case.eyebrow": "Case study",
    "case.psTitle": "The problem &amp; the solution",
    "case.before": "Before",
    "case.after": "With the platform",
    "case.how": "How it works",
    "case.decisions": "Engineering decisions — and why",
    "case.decisionsSub": "The choices the system is built on — and the reasoning behind each.",
    "case.why": "Why",
    "case.features": "Key features",
    "case.steps": "Four steps to start",
    "case.status": "Status",
    "case.roles": "Roles &amp; permissions",
    "work.soon": "Demo video",

    "journey.eyebrow": "Journey",
    "journey.title": "Education, experience <span class=\"grad\">&amp; certifications.</span>",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's build something <span class=\"grad\">that lasts.</span>",
    "contact.sub": "Open to full-time roles, freelance projects and collaborations. The fastest way to reach me is email.",
    "contact.cv": "Résumé",
    "contact.copied": "Email copied to clipboard ✓",
    "contact.mailSubject": "Hello from your portfolio",
    "contact.waMsg": "Hi Maya, I came across your portfolio and would love to connect.",

    "footer.made": "Designed &amp; built with care.",
    "footer.top": "Back to top ↑",
  },

  ar: {
    "nav.about": "نبذة", "nav.process": "أسلوبي", "nav.skills": "المهارات",
    "nav.work": "المشاريع", "nav.journey": "المسيرة", "nav.contact": "تواصل",

    "hero.badge": "أبحث عن فرص جديدة",
    "hero.greet": "مرحباً، أنا",
    "hero.name": "مايا محمود",
    "hero.desc": "أرافق النظام من أول فكرة حتى آخر سطر: أحلّل المتطلبات وقواعد العمل، أبني الواجهتين الخلفية والأمامية بـ <strong>Laravel</strong> و<strong>Angular</strong> مع اختبارات آلية، ثم أنشره بنفسي على نطاق حيّ.",
    "hero.cta1": "شاهد أعمالي",
    "hero.cta2": "عرض السيرة الذاتية",

    "about.eyebrow": "من أنا",
    "about.title": "أبني الأجزاء التي <span class=\"grad\">يصعب التراجع عنها.</span>",
    "about.loc": "طرطوس، سوريا",
    "about.p1": "أعمل في تطوير الويب المتكامل (Full-Stack)، ولدي خبرة فعلية في بيئة الإنتاج بتسليم <strong>منصة SaaS متعددة المستأجرين</strong> لعميل تجاري، منشورة على نطاق حيّ وتجرّبها أولى المتاجر حالياً. في كل نظام أبدأ بالمتطلبات — النطاق، الأدوار، صلاحيات الوصول وقواعد العمل — قبل كتابة أي سطر برمجي.",
    "about.p2": "بعدها أبني الواجهة الخلفية والأمامية، أغطي المسارات الحساسة باختبارات آلية، وأتولى النشر بنفسي. أكثر ما يهمني: <strong>قابلية التدقيق</strong>، <strong>التحكم بالصلاحيات حسب الأدوار</strong>، و<strong>عزل البيانات بين المستأجرين</strong> — القرارات التي يكلّف الخطأ فيها كثيراً لاحقاً.",
    "about.eduK": "التعليم",
    "about.eduV": "بكالوريوس هندسة الإلكترونيات والاتصالات — جامعة تشرين",
    "about.langK": "اللغات",
    "about.langV": "العربية (اللغة الأم) · الإنجليزية (مستوى متقدم)",

    "stats.s1": "أنظمة كاملة من التحليل حتى النشر",
    "stats.s2": "لغتان مع دعم كامل للاتجاه من اليمين لليسار",
    "stats.s3": "آلية لمكافحة الاحتيال في منصة واحدة",
    "stats.s4": "من مشاريع الشركة بدأت بوثيقة متطلبات مكتوبة",

    "process.eyebrow": "أسلوبي في العمل",
    "process.title": "من السؤال الأول <span class=\"grad\">حتى النطاق الحيّ.</span>",
    "process.sub": "معظم الأخطاء تبدأ بقاعدة فُهمت بشكل خاطئ، لذلك أكتب القواعد أولاً ثم أبني عليها.",

    "skills.eyebrow": "أدواتي",
    "skills.title": "أدوات أعتمد عليها <span class=\"grad\">لإطلاق أنظمة موثوقة.</span>",

    "work.eyebrow": "أعمال مختارة",
    "work.title": "أنظمة مبنية <span class=\"grad\">لمستخدمين حقيقيين.</span>",
    "work.sub": "منصة SaaS متعددة المستأجرين تعمل على نطاقها الخاص، ونظام لإدارة الوثائق، ومنصة جامعية مدعومة بالذكاء الاصطناعي. اضغط على الشاشة لمشاهدة العرض.",
    "work.demo": "شاهد العرض",
    "work.hint": "اضغط لمشاهدة العرض",
    "work.code": "الكود المصدري",
    "work.case": "اقرأ تفاصيل المشروع",
    "case.eyebrow": "دراسة حالة",
    "case.psTitle": "المشكلة والحل",
    "case.before": "قبل",
    "case.after": "مع المنصة",
    "case.how": "كيف تعمل المنصة",
    "case.decisions": "القرارات الهندسية — ولماذا",
    "case.decisionsSub": "الخيارات التي بُني عليها النظام — وسبب كل منها.",
    "case.why": "لماذا",
    "case.features": "المزايا الأساسية",
    "case.steps": "أربع خطوات للبدء",
    "case.status": "الحالة",
    "case.roles": "الأدوار والصلاحيات",
    "work.soon": "فيديو العرض",

    "journey.eyebrow": "المسيرة",
    "journey.title": "التعليم والخبرة <span class=\"grad\">والشهادات.</span>",

    "contact.eyebrow": "تواصل",
    "contact.title": "لنبنِ معاً شيئاً <span class=\"grad\">يدوم.</span>",
    "contact.sub": "أرحّب بالوظائف بدوام كامل والمشاريع الحرة والتعاون. أسرع طريقة للتواصل هي البريد الإلكتروني.",
    "contact.cv": "السيرة الذاتية",
    "contact.copied": "تم نسخ البريد الإلكتروني ✓",
    "contact.mailSubject": "تواصل عبر البورتفوليو",
    "contact.waMsg": "مرحباً مايا، اطّلعت على البورتفوليو الخاص بك وأودّ التواصل معك.",

    "footer.made": "صُمّم وبُني بعناية.",
    "footer.top": "العودة للأعلى ↑",
  },
};

const ROLES = {
  en: ["Full-Stack Web Developer", "Laravel & Angular Engineer", "Business Analyst", "Multi-Tenant SaaS Builder"],
  ar: ["تطوير ويب متكامل", "هندسة Laravel وAngular", "تحليل أعمال", "بناء منصات SaaS متعددة المستأجرين"],
};

const ICONS = {
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  layers: '<svg viewBox="0 0 24 24"><path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/></svg>',
  code: '<svg viewBox="0 0 24 24"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
  rocket: '<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/></svg>',
  server: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/></svg>',
  monitor: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 13l2 2 4-4"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="m22 4-10 10-3-3"/></svg>',
  cloud: '<svg viewBox="0 0 24 24"><path d="M18 10h-1.3A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg>',
  playLine: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  building: '<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  chevron: '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  external: '<svg viewBox="0 0 24 24"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  folder: '<svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  grad: '<svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  cardOff: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M3 3l18 18"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M9 9h.01M12 9h.01M15 9h.01"/></svg>',
  question: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',
  receipt: '<svg viewBox="0 0 24 24"><path d="M5 2v20l2.5-1.5L10 22l2-1.5 2 1.5 2.5-1.5L19 22V2l-2.5 1.5L14 2l-2 1.5L10 2 7.5 3.5z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></svg>',
  sliders: '<svg viewBox="0 0 24 24"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>',
  zap: '<svg viewBox="0 0 24 24"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',
  gift: '<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>',
  rotate: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',
  store: '<svg viewBox="0 0 24 24"><path d="M3 9 4.5 3h15L21 9M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 13v8h14v-8M10 21v-5h4v5"/></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M16 3.1a4 4 0 0 1 0 7.8M22 21a7 7 0 0 0-4-6.3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  qr: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg>',
  alert: '<svg viewBox="0 0 24 24"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>',
};

const PROCESS = [
  { icon: "search", en: ["Analyze", "Scope, user roles, a permission matrix and business rules — prioritised with MoSCoW into a written requirements document."],
                    ar: ["التحليل", "تحديد النطاق والأدوار ومصفوفة الصلاحيات وقواعد العمل، وترتيب الأولويات بمنهجية MoSCoW في وثيقة متطلبات مكتوبة."] },
  { icon: "layers", en: ["Model", "Relational data models, tenant boundaries and audit trails designed before the first migration runs."],
                    ar: ["النمذجة", "تصميم نماذج البيانات العلائقية وحدود المستأجرين وسجلات التدقيق قبل تشغيل أول Migration."] },
  { icon: "code",   en: ["Build", "A Laravel REST API and an Angular or Blade frontend, with feature tests over permissions, isolation and money."],
                    ar: ["البناء", "واجهة REST بـ Laravel وواجهة أمامية بـ Angular أو Blade، مع اختبارات آلية للصلاحيات والعزل والعمليات المالية."] },
  { icon: "rocket", en: ["Ship", "Production builds, database setup, HTTPS and rewrite rules on a live domain — then I keep it running."],
                    ar: ["الإطلاق", "بناء نسخة الإنتاج، إعداد قاعدة البيانات، HTTPS وقواعد إعادة التوجيه على نطاق حيّ — ثم الصيانة المستمرة."] },
];

const SKILLS = [
  { icon: "server", en: "Backend", ar: "الواجهة الخلفية",
    items: ["PHP", "Laravel", "MySQL", "Eloquent ORM", "REST API Design", "Multi-Tenancy", "Data Isolation", "RBAC", "Audit Logging", "Relational Modelling", "Node.js"] },
  { icon: "monitor", en: "Frontend", ar: "الواجهة الأمامية",
    items: ["Angular 17", "Standalone Components", "Signals", "RxJS", "TypeScript", "React.js", "JavaScript", "Tailwind CSS", "Angular Material", "Bootstrap", "HTML5 / CSS", "i18n · RTL"] },
  { icon: "clipboard", en: "Business Analysis", ar: "تحليل الأعمال",
    items: {
      en: ["Requirements Gathering", "BRD Authoring", "Use-Case Modelling", "Business Rules", "Permission Matrix", "MoSCoW", "Acceptance Criteria", "Scope Control"],
      ar: ["جمع المتطلبات", "كتابة وثيقة BRD", "نمذجة حالات الاستخدام", "تعريف قواعد العمل", "مصفوفة الصلاحيات", "أولويات MoSCoW", "معايير القبول", "ضبط النطاق"],
    } },
  { icon: "check", en: "Testing & Tools", ar: "الاختبار والأدوات",
    items: ["PHPUnit", "Feature Testing", "Git", "GitHub", "Postman", "Composer", "npm"] },
  { icon: "cloud", en: "Deployment", ar: "النشر",
    items: ["cPanel", "Apache", ".htaccess Rewrites", "Production Builds", "Env Configuration", "Domain & HTTPS", "MySQL Deployment"] },
  { icon: "spark", en: "Integrations", ar: "التكاملات",
    items: { en: ["AI · LLM APIs (Groq, Gemini)", "QR Codes"], ar: ["ذكاء اصطناعي · LLM APIs (Groq, Gemini)", "رموز QR"] } },
];

/* Put your videos in assets/videos with these exact names. */
const PROJECTS = [
  {
    id: "loyalty",
    video: "assets/videos/loyalty.mp4",
    url: "loyalty-platform · live",
    github: "https://github.com/Maya-Mahmoud/Customer_Loyalty_Platform",
    icon: "shield",
    live: true,
    glow: "rgba(124,58,237,0.6)",
    screen: "linear-gradient(135deg, #2a1260 0%, #11163f 55%, #073245 100%)",
    stack: ["Angular 17", "Laravel 12", "MySQL", "Tailwind CSS", "PHPUnit", "cPanel"],
    en: {
      kicker: "Multi-Tenant SaaS",
      title: "Customer Loyalty Platform",
      badge: "Live · piloting with shops",
      summary: "A loyalty platform where many shops share one system without ever seeing each other's data — with balances you can defend in a dispute.",
      role: "Full-Stack Developer & Business Analyst",
      client: "Al-Anzima Al-Mutajadida · Damascus",
      date: "Jun 2026 – Present",
      points: [
        "Wrote the requirements first — four user roles, a permission matrix, business rules and MoSCoW-prioritised processes — then built it end to end.",
        "Complete tenant isolation: no shop can reach another shop's customers, invoices or reports through any request path.",
        "Point balances derived from an immutable ledger instead of a stored total, so every balance is reconstructable.",
        "Configurable rules engine — thresholds, rewards, caps, cross-branch accrual, reset and expiry — with versioning so a rule change never applies retroactively.",
        "Twelve anti-fraud controls against internal collusion, including duplicate-invoice constraints, staff-number blocking and separating recording from approval.",
        "No-account lookup: customers check their balance with the shop name and an invoice number from their receipt — proof of purchase instead of a password.",
        "Feature-tested, bilingual Arabic/English with full RTL, deployed and maintained on a live HTTPS domain.",
      ],
    },
    ar: {
      kicker: "منصة SaaS متعددة المستأجرين",
      title: "منصة ولاء العملاء",
      badge: "منشورة · قيد التجربة لدى المتاجر",
      summary: "منصة ولاء تتشارك فيها متاجر عديدة نظاماً واحداً دون أن يرى أي متجر بيانات غيره — وبأرصدة يمكن إثباتها عند أي اعتراض.",
      role: "تطوير متكامل وتحليل أعمال",
      client: "الأنظمة المتجددة · دمشق",
      date: "حزيران 2026 – حتى الآن",
      points: [
        "كتبت وثيقة المتطلبات أولاً — أربعة أدوار، مصفوفة صلاحيات، قواعد العمل وعمليات مرتبة بمنهجية MoSCoW — ثم بنيت النظام بالكامل.",
        "عزل كامل بين المستأجرين: لا يستطيع أي متجر الوصول إلى عملاء أو فواتير أو تقارير متجر آخر عبر أي مسار.",
        "أرصدة النقاط مشتقة من سجل قيود غير قابل للتعديل بدلاً من رقم مخزّن، فيمكن إعادة بناء أي رصيد والدفاع عنه.",
        "محرك قواعد ولاء قابل للتخصيص — العتبات، المكافآت، سقف الخصم، التجميع بين الفروع، التصفير والانتهاء — مع حفظ الإصدارات فلا يُطبّق أي تعديل بأثر رجعي.",
        "اثنتا عشرة آلية لمكافحة الاحتيال الداخلي، منها منع تكرار الفواتير، حظر أرقام الموظفين، وفصل التسجيل عن الاعتماد.",
        "استعلام دون حساب: يعرف العميل رصيده باسم المتجر ورقم فاتورة من إيصاله — إثبات الشراء بدلاً من كلمة المرور.",
        "مغطاة باختبارات آلية، بواجهة عربية/إنجليزية مع دعم RTL كامل، ومنشورة على نطاق حيّ بـ HTTPS مع صيانة مستمرة.",
      ],
    },
  },
  {
    id: "archive",
    image: "assets/img/archive-dashboard.png",
    url: "archive · document-management",
    github: "https://github.com/Maya-Mahmoud/archive",
    icon: "folder",
    live: false,
    glow: "rgba(8,145,178,0.55)",
    screen: "linear-gradient(135deg, #06324a 0%, #0c1a3a 55%, #251150 100%)",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Tailwind CSS", "Alpine.js"],
    en: {
      kicker: "Document Management",
      title: "Electronic Archiving & Document Management System",
      badge: "Technical assessment",
      summary: "A secure home for an organisation's documents — organised, searchable and visible only to the people allowed to see them.",
      role: "Full-Stack Developer & Business Analyst",
      client: "Assessment project · Al-Anzima Al-Mutajadida",
      points: [
        "Requirements analysis first — scope, user roles, access rules and document workflows — used as the reference for implementation.",
        "Custom role-based access control: permissions stored per role and enforced at route, controller and interface — admins create new roles without code changes.",
        "Files kept on private storage under UUID names, previewed and downloaded only through permission-checked routes.",
        "A full audit trail — logins, views, uploads, downloads, deletions and setting changes, with IP and device.",
        "Per-category retention policies applied by a daily scheduled job, and document numbers that are never reused.",
        "Live search across title, number, description, category and owner, with category and date filters — bilingual Arabic/English with RTL.",
      ],
    },
    ar: {
      kicker: "إدارة الوثائق",
      title: "نظام الأرشفة الإلكترونية وإدارة الوثائق",
      badge: "مشروع تقييم تقني",
      summary: "مكان آمن لوثائق المؤسسة — منظّمة، سهلة البحث، ولا يراها إلا المخوّلون بذلك.",
      role: "تطوير متكامل وتحليل أعمال",
      client: "مشروع تقييم · الأنظمة المتجددة",
      points: [
        "تحليل المتطلبات قبل التطوير — النطاق، الأدوار، قواعد الوصول ومسارات الوثائق — واعتماده مرجعاً للتنفيذ.",
        "نظام صلاحيات مبني من الصفر: الصلاحيات محفوظة لكل دور ومفروضة على المسارات والمتحكمات والواجهة — ويستطيع المدير إنشاء أدوار جديدة دون تعديل الكود.",
        "الملفات محفوظة في تخزين خاص بأسماء UUID، ولا تُعرض أو تُحمَّل إلا عبر مسارات تتحقق من الصلاحية.",
        "سجل تدقيق كامل — تسجيل الدخول، العرض، الرفع، التحميل، الحذف وتغيير الإعدادات، مع عنوان IP والجهاز.",
        "سياسات احتفاظ لكل تصنيف تُطبَّق بمهمة مجدولة يومياً، وأرقام وثائق لا تتكرر أبداً.",
        "بحث فوري في العنوان والرقم والوصف والتصنيف والمالك، مع فلترة حسب التصنيف والتاريخ — بواجهة عربية/إنجليزية مع دعم RTL.",
      ],
    },
  },
  {
    id: "unismart",
    video: "assets/videos/unismart.mp4",
    url: "unismart · university-platform",
    github: "https://github.com/Maya-Mahmoud/ManagementSystem",
    icon: "grad",
    live: false,
    glow: "rgba(192,38,211,0.5)",
    screen: "linear-gradient(135deg, #3b0f4f 0%, #1a1240 50%, #0a2c40 100%)",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Livewire 3", "Tailwind CSS", "Groq · Llama 3.3"],
    en: {
      kicker: "EdTech · AI",
      title: "UniSmart — Smart University Management",
      badge: "Graduation project · 93/100",
      summary: "Paper attendance, missed lectures and fully-booked halls — one platform for students, professors and administrators, with an AI assistant that explains lectures and writes quizzes.",
      role: "Solo developer",
      client: "Graduation project · Tishreen University",
      points: [
        "Electronic QR attendance replaces paper sheets: the professor generates a code, students scan it with their phone, and the server checks each student belongs to the lecture's department, year and semester.",
        "Duplicate-proof records — a database-level unique key means a student can never be marked present twice for the same lecture.",
        "Veloria AI: a student who missed a class picks the lecture from a list and gets it explained — text is extracted from lecture files up front, so answers come fast.",
        "For professors, Veloria generates questions from chosen lectures; grades appear the moment a student submits, and the professor exports them in one click.",
        "Hall booking for extra sessions and exams: enter a start and end time, see only the free halls, and book — one overlap rule prevents double-booking.",
        "Automatic reminders before each lecture, an alert when absences pass 55%, and attendance reports with CSV export.",
        "Graded 93/100 — the faculty praised how much it could help the college.",
      ],
    },
    ar: {
      kicker: "تعليم · ذكاء اصطناعي",
      title: "UniSmart — نظام الإدارة الجامعية الذكي",
      badge: "مشروع تخرج · 93/100",
      summary: "حضور ورقي يضيع، ومحاضرات فائتة، وقاعات محجوزة — منصة واحدة للطلاب والأساتذة والإدارة، مع مساعد ذكي يشرح المحاضرات ويكتب الاختبارات.",
      role: "تطوير فردي",
      client: "مشروع تخرج · جامعة تشرين",
      points: [
        "حضور إلكتروني بالـ QR بدل الأوراق: يولّد الأستاذ الرمز، يمسحه الطلاب بموبايلاتهم، ويتحقق السيرفر أن كل طالب ينتمي لقسم المحاضرة وسنتها وفصلها.",
        "سجلات لا تتكرر — قيد فريد على مستوى قاعدة البيانات يمنع تسجيل حضور الطالب مرتين في المحاضرة نفسها.",
        "فيلوريا (Veloria AI): الطالب الغائب يختار المحاضرة من القائمة فتشرحها له — النص مستخرج من ملفات المحاضرات مسبقاً، لذلك الإجابة سريعة.",
        "للأستاذ، تولّد فيلوريا أسئلة من المحاضرات التي يختارها؛ تظهر العلامات فور تسليم الطالب، ويصدّرها الأستاذ بضغطة زر.",
        "حجز القاعات للجلسات الإضافية والامتحانات: حدّد وقت البداية والنهاية، شاهد القاعات المتاحة فقط، واحجز — قاعدة تداخل واحدة تمنع الحجز المزدوج.",
        "تذكيرات تلقائية قبل كل محاضرة، تنبيه عند تجاوز الغياب 55%، وتقارير حضور مع تصدير CSV.",
        "حصل على 93 من 100 — وأشاد الدكاترة بفائدته الكبيرة للكلية.",
      ],
    },
  },
];

/* Case studies — opened from "Read the case study" on a project card. */
const CASES = {
  loyalty: {
    problem: [
      { icon: "cardOff", en: "Paper loyalty cards get lost — and the points with them.", ar: "بطاقات الولاء الورقية تضيع، وتضيع معها النقاط." },
      { icon: "chat", en: "Customers and cashiers argue over balances nobody can prove.", ar: "خلاف دائم بين الزبون والكاشير على رصيد لا أحد يستطيع إثباته." },
      { icon: "question", en: "Owners have no idea what the programme actually costs them.", ar: "صاحب المحل لا يعرف كم يكلّفه البرنامج فعلياً." },
    ],
    solution: [
      { icon: "phone", en: "The balance lives on the customer's mobile number — nothing to carry.", ar: "الرصيد محفوظ برقم الموبايل — لا شيء يحمله الزبون." },
      { icon: "receipt", en: "Every point traces back to an invoice — full transparency.", ar: "كل نقطة مرتبطة بفاتورة — شفافية كاملة." },
      { icon: "chart", en: "Accurate reports on programme cost, sales and branch performance.", ar: "تقارير دقيقة عن تكلفة البرنامج والمبيعات وأداء الفروع." },
    ],
    flow: [
      { icon: "sliders", en: ["Set your rule", "Thresholds, reward and discount cap."], ar: ["اضبط قاعدتك", "تحديد الحدود والمكافأة والسقف."] },
      { icon: "zap", en: ["Fast checkout", "The mobile number is enough — recorded in seconds."], ar: ["صندوق سريع", "رقم الموبايل يكفي — تسجيل في ثوانٍ."] },
      { icon: "search", en: ["Customer self-service", "Balance check with phone and invoice number — no account."], ar: ["الزبون يسأل بنفسه", "يعرف رصيده برقم هاتفه وفاتورته — دون حساب."] },
      { icon: "gift", en: ["Redeem the reward", "In one clear step at the counter."], ar: ["صرف المكافأة", "بخطوة واحدة واضحة عند الصندوق."] },
    ],
    decisions: [
      { en: ["Balances are derived, never stored",
             "A stored total can drift or be edited. A sum over an immutable ledger can always be recomputed — and shown entry by entry when a customer disputes it."],
        ar: ["الرصيد يُحسب ولا يُخزَّن",
             "الرقم المخزّن قد ينحرف أو يُعدَّل. أما مجموع سجل قيود غير قابل للتعديل فيمكن إعادة حسابه دائماً، وعرضه قيداً قيداً عند أي اعتراض."] },
      { en: ["The receipt is the password",
             "Accounts and passwords are the main reason customers skip loyalty programmes. An invoice number they already hold proves the purchase — nothing to issue, store or reset."],
        ar: ["الفاتورة هي كلمة المرور",
             "الحسابات وكلمات المرور هي السبب الأول لعزوف الزبائن عن برامج الولاء. رقم فاتورة بيد الزبون يثبت الشراء — لا شيء يُصدَر أو يُخزَّن أو يُعاد تعيينه."] },
      { en: ["Rules are versioned, never overwritten",
             "If an owner changes the reward on Monday, points earned on Sunday still follow Sunday's rule. A rule change never applies retroactively."],
        ar: ["القواعد تُحفظ بإصدارات ولا تُستبدل",
             "إذا غيّر صاحب المحل المكافأة يوم الاثنين، تبقى النقاط المكتسبة يوم الأحد على قاعدة الأحد. لا يسري أي تعديل بأثر رجعي."] },
      { en: ["Isolation on every request path",
             "Many shops share one database, so a single missed filter would leak one shop's customers to another. Isolation is enforced on every path and covered by automated tests."],
        ar: ["العزل على كل مسار",
             "متاجر كثيرة تتشارك قاعدة بيانات واحدة، وفلتر واحد منسيّ يكفي لتسريب عملاء متجر إلى آخر. لذلك العزل مفروض على كل مسار وتغطيه اختبارات آلية."] },
      { en: ["Recording is separated from approval",
             "The biggest fraud risk is internal — a cashier adding points to a friend's number. Whoever records can't approve, staff numbers are blocked, and suspicious patterns are flagged: twelve controls in total."],
        ar: ["فصل التسجيل عن الاعتماد",
             "الخطر الأكبر داخلي — كاشير يضيف نقاطاً لرقم صديقه. من يسجّل لا يعتمد، وأرقام الموظفين محظورة، والأنماط المشبوهة تُرصد: اثنتا عشرة آلية حماية."] },
    ],
    features: [
      { icon: "shield", en: ["Built-in audit", "Fraud-pattern detection and a full audit trail."], ar: ["رقابة مدمجة", "رصد أنماط الاحتيال وسجل تدقيق كامل."] },
      { icon: "chart", en: ["Reports that answer", "Programme cost, sales and branch performance."], ar: ["تقارير تجيب", "تكلفة البرنامج، المبيعات، أداء الفروع."] },
      { icon: "rotate", en: ["Carry forward", "Surplus points roll into the next cycle."], ar: ["ترحيل الفائض", "الفائض يُرحَّل إلى الدورة التالية."] },
      { icon: "sliders", en: ["Flexible rules", "Changes never apply retroactively."], ar: ["قواعد مرنة", "لا يسري التعديل بأثر رجعي."] },
    ],
    steps: [
      { icon: "store", en: ["Register the shop", "Basic details — about a minute."], ar: ["سجّل محلك", "بياناتك الأساسية — دقيقة واحدة."] },
      { icon: "clipboard", en: ["Admin approval", "The request is reviewed and activated."], ar: ["موافقة المشرف", "مراجعة الطلب وتفعيله."] },
      { icon: "sliders", en: ["Set the rule", "Threshold, reward and cap."], ar: ["اضبط قاعدتك", "الحد، المكافأة، السقف."] },
      { icon: "users", en: ["Add branches & staff", "Each employee with their own role and branch."], ar: ["أضف فروعك وموظفيك", "كل موظف بدوره وفرعه."] },
    ],
    status: {
      en: "I deployed the platform myself and maintain it on cPanel — Laravel API, MySQL database, Angular production build, HTTPS and rewrite rules for client-side routing. It's live on its own domain, and the first shops are now piloting it.",
      ar: "نشرت المنصة بنفسي وأتولى صيانتها على cPanel — واجهة Laravel البرمجية، قاعدة بيانات MySQL، نسخة Angular للإنتاج، HTTPS وقواعد إعادة التوجيه. المنصة تعمل على نطاقها الخاص، وتجرّبها أولى المتاجر حالياً.",
    },
  },
};

CASES.archive = {
  flow: [
    { icon: "folder", en: ["Add a document", "Title, category, date, owner and several files — the number is generated automatically."], ar: ["أضف وثيقة", "العنوان والتصنيف والتاريخ والمالك وعدة ملفات — والرقم يُولَّد تلقائياً."] },
    { icon: "layers", en: ["Classify it", "Categories, each with its own retention period."], ar: ["صنّفها", "تصنيفات، لكل منها مدة احتفاظ خاصة."] },
    { icon: "search", en: ["Find it", "Live search as you type, with category and date filters."], ar: ["اعثر عليها", "بحث فوري أثناء الكتابة، مع فلترة حسب التصنيف والتاريخ."] },
    { icon: "eye", en: ["Preview & download", "PDFs, images and video open in the browser — every access is logged."], ar: ["اعرض وحمّل", "ملفات PDF والصور والفيديو تُفتح في المتصفح — وكل وصول يُسجَّل."] },
  ],
  roles: [
    { icon: "shield", en: ["System administrator", "Full access: users, roles, settings, retention policies and the audit log."], ar: ["مدير النظام", "صلاحيات كاملة: المستخدمون، الأدوار، الإعدادات، سياسات الاحتفاظ وسجل التدقيق."] },
    { icon: "folder", en: ["Archivist", "Adds and edits documents, uploads and downloads files — but can't delete."], ar: ["أمين الأرشيف", "يضيف الوثائق ويعدّلها، يرفع الملفات ويحمّلها — لكن لا يستطيع الحذف."] },
    { icon: "eye", en: ["Viewer", "Browses documents and downloads files — nothing more."], ar: ["مشاهد", "يتصفح الوثائق ويحمّل الملفات — لا أكثر."] },
    { icon: "sliders", en: ["Custom roles", "Admins build new roles from the system's permission set — no code changes."], ar: ["أدوار مخصصة", "ينشئ المدير أدواراً جديدة من صلاحيات النظام — دون تعديل الكود."] },
  ],
  decisions: [
    { en: ["Files never get a public URL",
           "Files sit on private storage under random UUID names and are served only by the app, so no link can skip the permission check or the audit entry."],
      ar: ["لا رابط عاماً لأي ملف",
           "الملفات محفوظة في تخزين خاص بأسماء UUID عشوائية ولا يقدّمها إلا التطبيق، فلا يوجد رابط يتجاوز فحص الصلاحية أو تسجيل التدقيق."] },
    { en: ["Permissions are data, not code",
           "Each role holds a set of permission keys checked by one middleware. New roles need no deployment — and the same check hides buttons the user can't use."],
      ar: ["الصلاحيات بيانات لا كود",
           "كل دور يحمل مجموعة مفاتيح صلاحيات يفحصها وسيط (Middleware) واحد. الأدوار الجديدة لا تحتاج إعادة نشر — والفحص نفسه يخفي الأزرار غير المسموحة."] },
    { en: ["Retention is automatic but reversible",
           "A daily scheduled job expires documents past their category's retention period using soft deletes — nothing is lost by accident, and every expiry is logged."],
      ar: ["احتفاظ تلقائي قابل للاسترجاع",
           "مهمة مجدولة يومياً تُنهي الوثائق التي تجاوزت مدة احتفاظ تصنيفها بحذف ناعم (Soft Delete) — فلا يضيع شيء بالخطأ، وكل انتهاء يُسجَّل."] },
    { en: ["Document numbers never repeat",
           "Numbers like CON-2026-0001 are generated counting deleted documents too, so a number always points to exactly one document."],
      ar: ["أرقام الوثائق لا تتكرر",
           "أرقام مثل CON-2026-0001 تُولَّد مع احتساب الوثائق المحذوفة أيضاً، فكل رقم يشير دائماً إلى وثيقة واحدة فقط."] },
    { en: ["Every action leaves a trace",
           "Logins, views, uploads, downloads, deletions and setting changes are recorded with IP and device, and the log filters by user, action and date."],
      ar: ["كل إجراء يترك أثراً",
           "تسجيل الدخول والعرض والرفع والتحميل والحذف وتغيير الإعدادات، كلها تُسجَّل مع عنوان IP والجهاز، والسجل قابل للفلترة حسب المستخدم والإجراء والتاريخ."] },
    { en: ["New accounts wait for approval",
           "Self-registered users start as inactive viewers until an administrator activates them — sign-up never grants access on its own."],
      ar: ["الحسابات الجديدة تنتظر الموافقة",
           "من يسجّل بنفسه يبدأ كمشاهد غير مفعّل حتى يفعّله المدير — التسجيل وحده لا يمنح أي وصول."] },
  ],
  features: [
    { icon: "chart", en: ["Dashboard", "Documents, files, storage and users at a glance, plus a category breakdown."], ar: ["لوحة تحكم", "الوثائق والملفات والتخزين والمستخدمون بنظرة واحدة، مع توزيع حسب التصنيف."] },
    { icon: "eye", en: ["In-browser preview", "PDF, images and video without downloading."], ar: ["معاينة في المتصفح", "PDF والصور والفيديو دون تحميل."] },
    { icon: "sliders", en: ["Configurable settings", "Upload size limit, page size, categories and retention periods."], ar: ["إعدادات قابلة للتخصيص", "حد حجم الرفع، عدد العناصر بالصفحة، التصنيفات ومدد الاحتفاظ."] },
    { icon: "globe", en: ["Bilingual", "Arabic and English with full RTL."], ar: ["ثنائي اللغة", "العربية والإنجليزية مع دعم RTL كامل."] },
  ],
  status: {
    en: "Built end to end as a technical assessment for Al-Anzima Al-Mutajadida — requirements analysis, Laravel backend and bilingual interface. As an assessment project, it isn't deployed to production.",
    ar: "بنيته بالكامل كمشروع تقييم تقني لشركة الأنظمة المتجددة — تحليل المتطلبات، الواجهة الخلفية بـ Laravel، والواجهة ثنائية اللغة. ولأنه مشروع تقييم، فهو غير منشور في بيئة إنتاج.",
  },
};

CASES.unismart = {
  problem: [
    { icon: "receipt", en: "Paper attendance sheets get lost — and signing for a friend is easy.", ar: "أوراق الحضور تضيع — والتوقيع عن صديق سهل." },
    { icon: "question", en: "A student who misses a lecture has no quick way to catch up.", ar: "الطالب الغائب لا يملك طريقة سريعة ليعوّض المحاضرة." },
    { icon: "building", en: "During exams and extra sessions, finding a free hall means asking around.", ar: "في الامتحانات والجلسات الإضافية، إيجاد قاعة فارغة يعني السؤال هنا وهناك." },
  ],
  solution: [
    { icon: "qr", en: "Attendance by QR — recorded instantly, one record per student.", ar: "حضور بالـ QR — يُسجَّل فوراً، وسجل واحد لكل طالب." },
    { icon: "spark", en: "Veloria explains any lecture the student picks.", ar: "فيلوريا تشرح أي محاضرة يختارها الطالب." },
    { icon: "calendar", en: "Enter a time range, see the free halls, book.", ar: "حدّد وقت البداية والنهاية، شاهد القاعات المتاحة، واحجز." },
  ],
  flow: [
    { icon: "qr", en: ["Professor opens attendance", "One click generates the lecture's QR code."], ar: ["الأستاذ يفتح الحضور", "ضغطة واحدة تولّد رمز QR للمحاضرة."] },
    { icon: "phone", en: ["Students scan", "With the phone camera — eligibility is checked on the server."], ar: ["الطلاب يمسحون الرمز", "بكاميرا الموبايل — والسيرفر يتحقق من الأحقية."] },
    { icon: "spark", en: ["Missed it? Ask Veloria", "Pick the lecture from the list and get it explained."], ar: ["غبت؟ اسأل فيلوريا", "اختر المحاضرة من القائمة واحصل على شرحها."] },
    { icon: "check", en: ["Quiz & instant grades", "Generated from lectures, graded on submit, exported in one click."], ar: ["اختبار وعلامات فورية", "أسئلة من المحاضرات، تصحيح فور التسليم، وتصدير بضغطة زر."] },
  ],
  roles: [
    { icon: "shield", en: ["Administrator", "Users, halls, subjects and classrooms — plus a dashboard of hall use and today's lectures."], ar: ["المدير", "المستخدمون والقاعات والمواد والصفوف — مع لوحة لاستخدام القاعات ومحاضرات اليوم."] },
    { icon: "user", en: ["Professor", "Lectures, QR attendance, Veloria quizzes, hall booking and attendance reports."], ar: ["الأستاذ", "المحاضرات، الحضور بالـ QR، اختبارات فيلوريا، حجز القاعات وتقارير الحضور."] },
    { icon: "grad", en: ["Student", "Schedule, QR scanning, own attendance, Veloria explanations and quizzes."], ar: ["الطالب", "الجدول، مسح الـ QR، سجل حضوره، شروحات فيلوريا والاختبارات."] },
  ],
  decisions: [
    { en: ["The database refuses duplicates",
           "A unique key on student and lecture, backed by a check in the scan endpoint, means a double scan can never inflate attendance."],
      ar: ["قاعدة البيانات ترفض التكرار",
           "قيد فريد على الطالب والمحاضرة، مع فحص في نقطة المسح، يعني أن المسح المزدوج لا يضخّم الحضور أبداً."] },
    { en: ["Absences are counted up front",
           "When the QR is generated, every eligible student starts as absent and scanning flips them to present — absentees are counted without a separate job."],
      ar: ["الغياب يُحسب مسبقاً",
           "عند توليد الرمز، يبدأ كل طالب مؤهّل كغائب، والمسح يحوّله إلى حاضر — فيُحسب الغائبون دون أي عملية لاحقة."] },
    { en: ["Eligibility is checked on the server",
           "Department, year and semester are verified at scan time, so a QR shared in a group chat can't mark attendance for another cohort."],
      ar: ["الأحقية تُفحص على السيرفر",
           "القسم والسنة والفصل تُفحص لحظة المسح، فرمز QR منشور في مجموعة لا يسجّل حضوراً لدفعة أخرى."] },
    { en: ["One rule for hall conflicts",
           "The same overlap check drives lecture creation, bookings and the free-hall search, so the three can never disagree about whether a hall is taken."],
      ar: ["قاعدة واحدة لتضارب القاعات",
           "فحص التداخل نفسه يُستخدم في إنشاء المحاضرات والحجوزات والبحث عن قاعة متاحة، فلا يختلف الثلاثة أبداً على كون القاعة محجوزة."] },
    { en: ["Text first, so Veloria is fast",
           "Lecture text is extracted up front, so the assistant works on text instead of waiting for files — hence the name, from velocity."],
      ar: ["النص أولاً، لذلك فيلوريا سريعة",
           "نص المحاضرات مستخرج مسبقاً، فيعمل المساعد على النص بدل انتظار تحميل الملفات — ومن هنا الاسم، من السرعة (Velocity)."] },
    { en: ["Time-based work runs in the background",
           "Reminders and hall statuses are scheduled and queued jobs, so none of it slows down a page request."],
      ar: ["المهام الزمنية تعمل في الخلفية",
           "التذكيرات وحالة القاعات مهام مجدولة وفي طابور، فلا شيء منها يبطئ تحميل الصفحات."] },
  ],
  features: [
    { icon: "rotate", en: ["Recurring lectures", "Daily, weekly or monthly in one go."], ar: ["محاضرات متكررة", "يومية أو أسبوعية أو شهرية دفعة واحدة."] },
    { icon: "bell", en: ["Smart reminders", "A day before for students, 30 minutes before for professors, and a \"scan now\" notice at the start."], ar: ["تذكيرات ذكية", "قبل يوم للطالب، وقبل نصف ساعة للأستاذ، وتنبيه \"امسح الآن\" عند البداية."] },
    { icon: "alert", en: ["Absence alerts", "A warning when a student's absences pass 55%."], ar: ["تنبيهات الغياب", "تحذير عندما يتجاوز غياب الطالب 55%."] },
    { icon: "chart", en: ["Reports & export", "Attendance per subject, exported to CSV."], ar: ["تقارير وتصدير", "الحضور لكل مادة، مع تصدير CSV."] },
  ],
  status: {
    en: "My graduation project, built solo. It was graded 93/100, and the faculty praised how much it could help the college. The university doesn't adopt student projects, so it isn't deployed.",
    ar: "مشروع تخرجي، بنيته بمفردي. حصل على 93 من 100، وأشاد الدكاترة بفائدته الكبيرة للكلية. الجامعة لا تتبنى مشاريع الطلاب، لذلك هو غير منشور.",
  },
};

const TIMELINE = [
  { date: "2026 – Present",
    en: { type: "Experience", title: "Freelance Full-Stack Developer & Business Analyst", org: "Al-Anzima Al-Mutajadida · Damascus",
          text: "Built a multi-tenant customer loyalty SaaS — from requirements to a live production deployment — and an electronic archiving & document management system as a technical assessment for the company." },
    ar: { type: "خبرة عملية", title: "تطوير متكامل وتحليل أعمال (عمل حر)", org: "الأنظمة المتجددة · دمشق",
          text: "بناء منصة ولاء عملاء متعددة المستأجرين — من المتطلبات حتى النشر الفعلي في بيئة الإنتاج — ونظام أرشفة إلكترونية وإدارة وثائق كمشروع تقييم تقني للشركة." } },
  { date: "2025", link: "https://coursera.org/verify/WZLGEPE4JS9",
    en: { type: "Certification", title: "Mastering Laravel Framework and PHP", org: "Coursera",
          text: "Laravel, PHP, Eloquent ORM, authentication and API development, with hands-on work building scalable applications.", linkText: "Verify certificate" },
    ar: { type: "شهادة", title: "إتقان إطار Laravel ولغة PHP", org: "Coursera",
          text: "Laravel وPHP وEloquent ORM والمصادقة وتطوير الـ APIs، مع تطبيق عملي لبناء تطبيقات قابلة للتوسع.", linkText: "التحقق من الشهادة" } },
  { date: "2023",
    en: { type: "Certification", title: "Web Design", org: "",
          text: "UI/UX design, responsive layouts, HTML, CSS and modern web styling, applied to Laravel Blade templates." },
    ar: { type: "شهادة", title: "تصميم الويب", org: "",
          text: "تصميم واجهات وتجربة المستخدم، التصاميم المتجاوبة، HTML وCSS، مطبّقة على قوالب Laravel Blade." } },
  { date: "2021 – 2026",
    en: { type: "Education", title: "B.Sc. in Electronics and Communications Engineering", org: "Tishreen University · Latakia",
          text: "Graduation project: UniSmart, a smart university management platform with an AI assistant — built solo and graded 93/100." },
    ar: { type: "التعليم", title: "بكالوريوس في هندسة الإلكترونيات والاتصالات", org: "جامعة تشرين · اللاذقية",
          text: "مشروع التخرج: UniSmart، منصة إدارة جامعية ذكية مع مساعد ذكاء اصطناعي — عمل فردي، بعلامة 93 من 100." } },
];

const MARQUEE = ["Laravel", "Angular", "PHP", "MySQL", "TypeScript", "Tailwind CSS", "RxJS", "React", "REST APIs", "PHPUnit", "Multi-Tenancy", "RBAC", "LLM Integration", "Git"];

/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

let lang = store.get("lang") || ((navigator.language || "").startsWith("ar") ? "ar" : "en");
const t = (k) => I18N[lang][k] ?? k;

/* ---------------------------------------------------------
   Renderers
   --------------------------------------------------------- */
function renderProcess() {
  const wrap = $("#processList");
  $$(".step", wrap).forEach((n) => n.remove());
  PROCESS.forEach((p, i) => {
    const [title, text] = p[lang];
    wrap.insertAdjacentHTML("beforeend", `
      <div class="step reveal" style="--d:${i * 0.12}s">
        <div class="step__num">${ICONS[p.icon]}</div>
        <small>0${i + 1}</small>
        <h3>${esc(title)}</h3>
        <p>${esc(text)}</p>
      </div>`);
  });
}

function renderSkills() {
  $("#skillsGrid").innerHTML = SKILLS.map((g, i) => {
    const items = Array.isArray(g.items) ? g.items : g.items[lang];
    return `
      <article class="skill card reveal tilt" style="--d:${(i % 3) * 0.1}s">
        <div class="skill__head"><span class="skill__icon">${ICONS[g.icon]}</span><h3>${esc(g[lang])}</h3></div>
        <div class="tags">${items.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      </article>`;
  }).join("");
}

function renderProjects() {
  $("#projectsList").innerHTML = PROJECTS.map((p, i) => {
    const c = p[lang];
    const meta = [
      c.role && `<span>${ICONS.user}${esc(c.role)}</span>`,
      c.client && `<span>${ICONS.building}${esc(c.client)}</span>`,
      c.date && `<span>${ICONS.calendar}${esc(c.date)}</span>`,
    ].filter(Boolean).join("");

    return `
      <article class="project" data-id="${p.id}">
        <div class="project__media reveal">
          <div class="browser tilt" style="--glow:${p.glow}">
            <div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${esc(p.url)}</span></div>
            ${p.image ? `<div class="browser__screen browser__screen--image" style="--screen:${p.screen}">
              <img src="${p.image}" alt="${esc(c.title)}" loading="lazy" />
            </div>` : `<div class="browser__screen" style="--screen:${p.screen}" data-video="${p.video}" data-title="${esc(c.title)}" role="button" tabindex="0" aria-label="${esc(t("work.demo"))}: ${esc(c.title)}">
              <video src="${p.video}#t=1" muted loop playsinline preload="metadata"></video>
              <div class="browser__placeholder">${ICONS[p.icon]}<span>${esc(c.title)}</span></div>
              <span class="play">${ICONS.play}</span>
            </div>`}
          </div>
          ${p.image ? "" : `<button class="project__hint js-demo" type="button" data-video="${p.video}" data-title="${esc(c.title)}">${ICONS.playLine}<span>${t("work.hint")}</span></button>`}
          <span class="project__badge">${p.live ? "<i></i>" : ""}${esc(c.badge)}</span>
        </div>
        <div class="project__body">
          <span class="project__index reveal">0${i + 1} / 0${PROJECTS.length}</span>
          <span class="project__kicker reveal">${esc(c.kicker)}</span>
          <h3 class="reveal">${esc(c.title)}</h3>
          <p class="project__summary reveal">${esc(c.summary)}</p>
          <div class="project__meta reveal">${meta}</div>
          <ul class="project__list reveal">${c.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="tags reveal">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
          <div class="project__links reveal">
            ${CASES[p.id] ? `<button class="btn btn--primary magnetic js-case" type="button" data-case="${p.id}">${ICONS.book}<span>${t("work.case")}</span></button>` : ""}
            <a class="btn btn--ghost magnetic" href="${p.github}" target="_blank" rel="noopener">${ICONS.github}<span>${t("work.code")}</span></a>
          </div>
        </div>
      </article>`;
  }).join("");

  // Detect which videos actually exist
  $$(".browser__screen[data-video]").forEach((screen) => {
    const v = $("video", screen);
    const btn = $(`.js-demo[data-video="${screen.dataset.video}"]`);
    const ok = () => { screen.classList.add("has-video"); if (btn) btn.hidden = false; };
    const fail = () => { screen.classList.remove("has-video"); if (btn) btn.hidden = true; };
    if (v.readyState >= 1) ok();
    v.addEventListener("loadedmetadata", ok, { once: true });
    v.addEventListener("error", fail, { once: true });
    if (finePointer) {
      screen.addEventListener("mouseenter", () => { if (screen.classList.contains("has-video")) v.play().catch(() => {}); });
      screen.addEventListener("mouseleave", () => v.pause());
    }
  });
}

function renderTimeline() {
  $("#timeline").innerHTML = TIMELINE.map((e, i) => {
    const c = e[lang];
    return `
      <li class="tl reveal" style="--d:${i * 0.08}s">
        <span class="tl__dot"></span>
        <div class="tl__card card">
          <div class="tl__top"><span class="tl__type">${esc(c.type)}</span><span class="tl__date">${esc(e.date)}</span></div>
          <h3>${esc(c.title)}</h3>
          ${c.org ? `<div class="tl__org">${esc(c.org)}</div>` : ""}
          ${c.text ? `<p>${esc(c.text)}</p>` : ""}
          ${e.link ? `<a class="tl__link" href="${e.link}" target="_blank" rel="noopener">${esc(c.linkText)} ${ICONS.external}</a>` : ""}
        </div>
      </li>`;
  }).join("");
}

function renderMarquee() {
  const items = MARQUEE.map((m) => `<span class="marquee__item">${m}</span>`).join("");
  $("#marquee").innerHTML = items + items;
}

/* ---------------------------------------------------------
   Language
   --------------------------------------------------------- */
function applyLang(first = false) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = lang === "ar" ? "مايا محمود — تطوير ويب متكامل" : "Maya Mahmoud — Full-Stack Web Developer";

  $$("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  renderProcess();
  renderSkills();
  renderProjects();
  renderTimeline();
  bindDynamic();
  startTyping();
  updateContactLinks();
  if (openCaseId) renderCase(openCaseId);
  if (!first) $$(".reveal").forEach((el) => revealObs.observe(el));
}

$("#langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  store.set("lang", lang);
  document.body.classList.add("lang-switching");
  setTimeout(() => {
    applyLang();
    requestAnimationFrame(() => document.body.classList.remove("lang-switching"));
  }, 280);
});

/* ---------------------------------------------------------
   Typing effect
   --------------------------------------------------------- */
let typingTimer;
function startTyping() {
  clearTimeout(typingTimer);
  const el = $("#typed");
  const words = ROLES[lang];
  if (reduceMotion) { el.textContent = words[0]; return; }
  let w = 0, c = 0, deleting = false;
  el.textContent = "";
  (function tick() {
    const word = words[w];
    c += deleting ? -1 : 1;
    el.textContent = word.slice(0, c);
    let delay = deleting ? 35 : 75;
    if (!deleting && c === word.length) { deleting = true; delay = 2000; }
    else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
    typingTimer = setTimeout(tick, delay);
  })();
}

/* ---------------------------------------------------------
   Reveal on scroll + counters + process line
   --------------------------------------------------------- */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in");
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

const countObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
    const dur = 1600, t0 = performance.now();
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
    countObs.unobserve(el);
  });
}, { threshold: 0.6 });

const processObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); processObs.unobserve(e.target); } });
}, { threshold: 0.3 });

/* ---------------------------------------------------------
   Tilt, spotlight, magnetic — (re)bound after renders
   --------------------------------------------------------- */
function bindDynamic() {
  if (finePointer && !reduceMotion) {
    $$(".tilt:not([data-bound])").forEach((el) => {
      el.dataset.bound = "1";
      const max = el.classList.contains("browser") || el.classList.contains("code-window") ? 5 : 7;
      el.addEventListener("mousemove", (ev) => {
        const r = el.getBoundingClientRect();
        const x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
        el.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg)`;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });

    $$(".magnetic:not([data-mag])").forEach((el) => {
      el.dataset.mag = "1";
      el.addEventListener("mousemove", (ev) => {
        const r = el.getBoundingClientRect();
        const x = ev.clientX - r.left - r.width / 2, y = ev.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  // Case study triggers
  $$(".js-case:not([data-b])").forEach((b) => {
    b.dataset.b = "1";
    b.addEventListener("click", () => openCase(b.dataset.case));
  });

  // Demo triggers
  $$(".browser__screen[data-video]:not([data-b]), .js-demo:not([data-b])").forEach((el) => {
    el.dataset.b = "1";
    const open = () => {
      const screen = el.classList.contains("browser__screen") ? el : null;
      if (screen && !screen.classList.contains("has-video")) return;
      openVideo(el.dataset.video, el.dataset.title);
    };
    el.addEventListener("click", open);
    el.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); open(); } });
  });

  bindCursorTargets();
}

/* ---------------------------------------------------------
   Video modal
   --------------------------------------------------------- */
const modal = $("#videoModal"), modalVideo = $("#modalVideo");
function openVideo(src, title) {
  $("#modalTitle").textContent = title;
  modalVideo.src = src;
  modal.showModal();
  modalVideo.play().catch(() => {});
}
function closeVideo() { modalVideo.pause(); modalVideo.removeAttribute("src"); modalVideo.load(); modal.close(); }
$("#modalClose").addEventListener("click", closeVideo);
modal.addEventListener("click", (e) => { if (e.target === modal) closeVideo(); });
modal.addEventListener("cancel", (e) => { e.preventDefault(); closeVideo(); });

/* ---------------------------------------------------------
   Case study modal
   --------------------------------------------------------- */
const caseModal = $("#caseModal"), caseBody = $("#caseBody");
let openCaseId = null;

function renderCase(id) {
  const p = PROJECTS.find((x) => x.id === id), c = p[lang], cs = CASES[id];
  const pick = (o) => o[lang];
  const sec = (title, inner, sub = "") => `
    <section class="cs-section cs-anim">
      <h3 class="cs-title">${title}</h3>${sub ? `<p class="cs-sub">${sub}</p>` : ""}
      ${inner}
    </section>`;
  const list = (items) => items.map((x) => `<li><span class="cs-ico">${ICONS[x.icon]}</span><span>${esc(pick(x))}</span></li>`).join("");
  const cards = (items, cls) => items.map((x, i) => {
    const [h, txt] = pick(x);
    return `<div class="${cls}"><span class="cs-ico">${ICONS[x.icon]}</span>${cls === "cs-flow__item" || cls === "cs-step" ? `<small>0${i + 1}</small>` : ""}<h4>${esc(h)}</h4><p>${esc(txt)}</p></div>`;
  }).join("");

  caseBody.innerHTML = `
    <header class="cs-hero">
      <span class="eyebrow">${t("case.eyebrow")}</span>
      <h2>${esc(c.title)}</h2>
      <p class="cs-lead">${esc(c.summary)}</p>
      <div class="cs-hero__meta">
        <span class="project__badge project__badge--static">${p.live ? "<i></i>" : ""}${esc(c.badge)}</span>
        <div class="tags">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      </div>
    </header>

    ${cs.problem ? sec(t("case.psTitle"), `
      <div class="cs-ps">
        <div class="cs-box cs-box--before"><span class="cs-box__label">${t("case.before")}</span><ul>${list(cs.problem)}</ul></div>
        <div class="cs-ps__arrow flip-rtl">${ICONS.arrow}</div>
        <div class="cs-box cs-box--after"><span class="cs-box__label">${t("case.after")}</span><ul>${list(cs.solution)}</ul></div>
      </div>`) : ""}

    ${cs.flow ? sec(t("case.how"), `<div class="cs-flow">${cards(cs.flow, "cs-flow__item")}</div>`) : ""}

    ${cs.roles ? sec(t("case.roles"), `<div class="cs-features">${cards(cs.roles, "cs-feature")}</div>`) : ""}

    ${cs.decisions ? sec(t("case.decisions"), `
      <div class="cs-decisions">${cs.decisions.map((d, i) => {
        const [h, why] = pick(d);
        return `<article class="cs-decision card"><span class="cs-decision__n">0${i + 1}</span><h4>${esc(h)}</h4><p><b>${t("case.why")}:</b> ${esc(why)}</p></article>`;
      }).join("")}</div>`, t("case.decisionsSub")) : ""}

    ${cs.features ? sec(t("case.features"), `<div class="cs-features">${cards(cs.features, "cs-feature")}</div>`) : ""}

    ${cs.steps ? sec(t("case.steps"), `<div class="cs-steps">${cards(cs.steps, "cs-step")}</div>`) : ""}

    ${sec(t("case.status"), `
      <div class="cs-status${p.live ? "" : " cs-status--idle"}"><span class="cs-status__dot"></span><p>${esc(pick(cs.status))}</p></div>
      <div class="project__links">
        <button class="btn btn--primary magnetic js-case-demo" type="button">${ICONS.playLine}<span>${t("work.demo")}</span></button>
        <a class="btn btn--ghost magnetic" href="${p.github}" target="_blank" rel="noopener">${ICONS.github}<span>${t("work.code")}</span></a>
      </div>`)}
  `;

  $(".js-case-demo", caseBody).addEventListener("click", () => openVideo(p.video, c.title));
  const hasVideo = $(`.browser__screen[data-video="${p.video}"]`)?.classList.contains("has-video");
  if (!hasVideo) $(".js-case-demo", caseBody).hidden = true;

  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  }), { root: caseBody, threshold: 0.1 });
  $$(".cs-anim", caseBody).forEach((el) => io.observe(el));
  bindCursorTargets();
}

function openCase(id) {
  openCaseId = id;
  renderCase(id);
  caseModal.showModal();
  caseBody.scrollTop = 0;
  document.body.style.overflow = "hidden";
}
function closeCase() {
  openCaseId = null;
  caseModal.close();
  document.body.style.overflow = "";
}
$("#caseClose").addEventListener("click", closeCase);
caseModal.addEventListener("click", (e) => { if (e.target === caseModal) closeCase(); });
caseModal.addEventListener("cancel", (e) => { e.preventDefault(); closeCase(); });

/* ---------------------------------------------------------
   Cursor
   --------------------------------------------------------- */
const cursor = $(".cursor");
function bindCursorTargets() {
  if (!finePointer) return;
  $$("a, button, .browser__screen, .tag, [data-cursor]").forEach((el) => {
    if (el.dataset.cur) return;
    el.dataset.cur = "1";
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
  });
}
if (finePointer) {
  const dot = $(".cursor__dot"), ring = $(".cursor__ring");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px)`; cursor.classList.remove("is-hidden"); });
  addEventListener("mousedown", () => cursor.classList.add("is-down"));
  addEventListener("mouseup", () => cursor.classList.remove("is-down"));
  document.addEventListener("mouseleave", () => cursor.classList.add("is-hidden"));
  (function loop() {
    rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------------------------------------------------------
   Nav: scrolled state, hide on scroll down, active link, progress
   --------------------------------------------------------- */
const nav = $("#nav"), bar = $("#progress");
let lastY = 0;
function onScroll() {
  const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
  nav.classList.toggle("is-scrolled", y > 30);
  nav.classList.toggle("is-hidden", y > lastY && y > 500 && !$("#navLinks").classList.contains("is-open"));
  bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  lastY = y;
}
addEventListener("scroll", onScroll, { passive: true });

const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    $$(".nav__links a").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${e.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("section[id]").forEach((s) => sectionObs.observe(s));

const burger = $("#burger"), links = $("#navLinks");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
});
$$("a", links).forEach((a) => a.addEventListener("click", () => { links.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }));

/* ---------------------------------------------------------
   Email & WhatsApp
   --------------------------------------------------------- */
const EMAIL = "mahmoudmaya689@gmail.com";
const WHATSAPP = "963980143058";
const toast = $("#toast");
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-show"), 2600);
}


// mailto: does nothing on machines without a mail app,
// so email links open Gmail's composer directly.
function updateContactLinks() {
  const su = encodeURIComponent(t("contact.mailSubject"));
  $$(".js-mail").forEach((a) => {
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${su}`;
    a.target = "_blank";
    a.rel = "noopener";
  });
  const msg = encodeURIComponent(t("contact.waMsg"));
  $$(".js-wa").forEach((a) => { a.href = `https://wa.me/${WHATSAPP}?text=${msg}`; });
}

/* ---------------------------------------------------------
   Background: twinkling stars
   --------------------------------------------------------- */
(function stars() {
  const canvas = $("#network"), ctx = canvas.getContext("2d");
  let w, h, dpr, list = [], running = true;
  const count = () => Math.round(Math.min(innerWidth * innerHeight / 9000, 150));
  const tints = ["255,255,255", "196,181,253", "165,243,252"];

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.width = innerWidth * dpr; h = canvas.height = innerHeight * dpr;
    list = Array.from({ length: count() }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: (Math.random() * 1.1 + 0.3) * dpr,
      vy: (Math.random() * 0.12 + 0.03) * dpr,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.012 + 0.004,
      tint: tints[Math.floor(Math.random() * tints.length)],
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const s of list) {
      if (!reduceMotion) {
        s.y -= s.vy;
        s.phase += s.speed;
        if (s.y < -4) { s.y = h + 4; s.x = Math.random() * w; }
      }
      const a = 0.15 + (Math.sin(s.phase) + 1) * 0.35;
      ctx.fillStyle = `rgba(${s.tint},${a})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      if (s.r > 1.1 * dpr && a > 0.7) {
        ctx.fillStyle = `rgba(${s.tint},${(a - 0.7) * 0.5})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2); ctx.fill();
      }
    }
    if (running && !reduceMotion) requestAnimationFrame(draw);
  }

  resize();
  addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(draw);
  });
  draw();
})();

/* ---------------------------------------------------------
   Boot
   --------------------------------------------------------- */
document.body.classList.add("is-loading");
$("#year").textContent = new Date().getFullYear();
renderMarquee();
applyLang(true);
$$(".reveal").forEach((el) => revealObs.observe(el));
$$("[data-count]").forEach((el) => countObs.observe(el));
processObs.observe($("#processList"));
onScroll();

let booted = false;
function hideLoader() {
  if (booted) return;
  booted = true;
  $("#preloader").classList.add("is-done");
  document.body.classList.remove("is-loading");
}
addEventListener("load", () => setTimeout(hideLoader, 500));
setTimeout(hideLoader, 2600);
