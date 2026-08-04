import { useEffect, useRef, useState } from "react";

// ---------- STATIC / NON-TRANSLATABLE DATA ----------

const expertiseBase = [
  { icon: "</>" },
  { icon: "▣" },
  { icon: "✓" },
];

const projectsBase = [
  {
    cat: "coding",
    tag: "AI · FULLSTACK",
    thumb: "Nutrify",
    tone: "from-[#E8F1E4] to-[#D7E8CF]",
    darkTone: "from-[#243626] to-[#1B2A1D]",
  },
  {
    cat: "coding",
    tag: "BACKEND",
    thumb: "Bookshelf",
    tone: "from-[#F1E9DC] to-[#E6D6BC]",
    darkTone: "from-[#332C1E] to-[#241F15]",
  },
  {
    cat: "coding",
    tag: "FULLSTACK",
    thumb: "E-Market",
    tone: "from-[#E4E8F1] to-[#CBD5E8]",
    darkTone: "from-[#1E2433] to-[#161B26]",
  },
  {
    cat: "design",
    tag: "DESIGN",
    thumb: "UI Kit",
    tone: "from-[#F1E9DC] to-[#E6D6BC]",
    darkTone: "from-[#332C1E] to-[#241F15]",
  },
];

const skills = [
  "React.js",
  "Node.js",
  "Express / Hapi",
  "Tailwind CSS",
  "Figma",
  "Postman / API Testing",
  "Selenium / Automation QA",
  "MySQL / MongoDB",
  "Git & GitHub",
];

const socialLinks = [
  { label: "GitHub", short: "GH" },
  { label: "LinkedIn", short: "in" },
  { label: "Email", short: "@" },
  { label: "Spotify", short: "♪" },
];

// ---------- TRANSLATIONS ----------

const content = {
  en: {
    nav: {
      about: "About",
      expertise: "Expertise",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      getInTouch: "Get in touch ↗",
    },
    a11y: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toDark: "Switch to dark theme",
      toLight: "Switch to light theme",
      toIndonesian: "Switch to Indonesian",
      toEnglish: "Switch to English",
    },
    hero: {
      badge: "👋 Currently turning bug reports into changelog entries",
      roleLabel: "Informatics @ Gunadarma University",
      headlinePre: "I'm Iqbal — I write code that survives real users,",
      headlineItalic: "then I break it on purpose",
      headlinePost: "before they do.",
      bio: "I split my attention between three things that don't usually sit in one head: shipping fullstack features, designing interfaces that don't need a manual, and writing the test cases nobody wants to write but everybody's glad exist.",
      ctaWork: "See the work →",
      ctaResume: "Resume ↗",
      stats: ["Years Learning", "Projects Shipped", "Test Coverage Mindset"],
    },
    expertiseSection: {
      tag: "About Me",
      heading: "Three roles, one brain",
      items: [
        {
          title: "Fullstack Dev",
          desc: "I turn Figma frames and API specs into working software — React on the front, Node wherever the front needs backup.",
        },
        {
          title: "Product Designer",
          desc: "Wireframes, prototypes, and the occasional argument with myself about button placement — all worked out in Figma before a line of code exists.",
        },
        {
          title: "QA Engineer",
          desc: "If it can break, I'd rather be the one who finds out first. Scripts handle the repeatable checks; I handle the cases that like to surprise people.",
        },
      ],
    },
    projectsSection: {
      tag: "Selected Work",
      heading: "Projects I'd defend in an interview",
      filters: { all: "All", coding: "Coding", design: "Design" },
      seeProject: "See Project ↗",
      github: "GitHub",
      items: [
        {
          title: "Nutrify Scan",
          desc: "Point a camera at a meal, get a nutrition breakdown back. Uses AI to log calories and suggest what to eat differently tomorrow.",
        },
        {
          title: "Bookshelf API",
          desc: "A REST API for managing a book catalog, built on Node.js and Hapi — query the shelf, add a title, and trust the automated test suite to catch what I miss.",
        },
        {
          title: "E-Commerce Market",
          desc: "A storefront with a working cart, live price math, and a login flow that doesn't fall over — the boring parts of e-commerce, done properly.",
        },
        {
          title: "Mobile Banking Concept",
          desc: "A prototype exploring what a banking app looks like when accessibility isn't an afterthought — from first wireframe to a clickable Figma flow.",
        },
      ],
    },
    skillsSection: {
      tag: "Stack",
      heading: "What's actually in rotation",
    },
    contactSection: {
      headingPre: "Got a bug, a project, or just want to talk",
      headingItalic: "QA strategy?",
      body: "I read every message — reach out and let's figure out if we should work together.",
      cta: "Send a message ↗",
    },
    footer: "© 2026 Iqbal Apriand Juartono. Built with care — and a few automated tests.",
  },

  id: {
    nav: {
      about: "Tentang",
      expertise: "Keahlian",
      projects: "Proyek",
      skills: "Skill",
      contact: "Kontak",
      getInTouch: "Hubungi Saya ↗",
    },
    a11y: {
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      toDark: "Ganti ke tema gelap",
      toLight: "Ganti ke tema terang",
      toIndonesian: "Ganti ke Bahasa Indonesia",
      toEnglish: "Ganti ke Bahasa Inggris",
    },
    hero: {
      badge: "👋 Lagi sibuk ubah bug report jadi changelog",
      roleLabel: "Informatika @ Universitas Gunadarma",
      headlinePre: "Saya Iqbal — saya nulis kode yang tahan dipakai user asli,",
      headlineItalic: "lalu saya rusak sendiri duluan",
      headlinePost: "sebelum mereka sempat.",
      bio: "Perhatian saya kebagi ke tiga hal yang biasanya nggak nyatu di satu kepala: ngerjain fitur fullstack, mendesain antarmuka yang nggak perlu buku panduan, dan nulis test case yang nggak ada yang mau nulis tapi semua orang bersyukur itu ada.",
      ctaWork: "Lihat Karyanya →",
      ctaResume: "Resume ↗",
      stats: ["Tahun Belajar", "Proyek Selesai", "Mindset Test Coverage"],
    },
    expertiseSection: {
      tag: "Tentang Saya",
      heading: "Tiga peran, satu kepala",
      items: [
        {
          title: "Fullstack Dev",
          desc: "Saya ubah frame Figma dan spek API jadi software yang jalan — React di depan, Node kalau bagian depan butuh bala bantuan.",
        },
        {
          title: "Product Designer",
          desc: "Wireframe, prototipe, dan sesekali debat sendiri soal posisi tombol — semua dirampungkan di Figma sebelum satu baris kode pun ditulis.",
        },
        {
          title: "QA Engineer",
          desc: "Kalau sesuatu bisa rusak, saya maunya jadi yang pertama tahu. Script buat pengecekan yang berulang; saya yang tangani kasus-kasus yang suka bikin kejutan.",
        },
      ],
    },
    projectsSection: {
      tag: "Karya Pilihan",
      heading: "Proyek yang berani saya bela saat interview",
      filters: { all: "Semua", coding: "Coding", design: "Desain" },
      seeProject: "Lihat Proyek ↗",
      github: "GitHub",
      items: [
        {
          title: "Nutrify Scan",
          desc: "Arahkan kamera ke makanan, langsung dapat rincian nutrisinya. Pakai AI buat mencatat kalori dan menyarankan menu besok.",
        },
        {
          title: "Bookshelf API",
          desc: "REST API buat mengelola katalog buku, dibangun pakai Node.js dan Hapi — query rak buku, tambah judul, dan percayakan ke automated test suite buat nangkep yang saya lewatkan.",
        },
        {
          title: "E-Commerce Market",
          desc: "Toko online dengan keranjang yang beneran jalan, hitungan harga real-time, dan alur login yang nggak gampang rubuh — bagian membosankan dari e-commerce, dikerjakan dengan benar.",
        },
        {
          title: "Mobile Banking Concept",
          desc: "Prototipe yang mengeksplorasi tampilan aplikasi banking kalau aksesibilitas nggak jadi PR belakangan — dari wireframe pertama sampai alur Figma yang bisa diklik.",
        },
      ],
    },
    skillsSection: {
      tag: "Perkakas",
      heading: "Yang beneran sering dipakai",
    },
    contactSection: {
      headingPre: "Ada bug, proyek, atau cuma mau ngobrolin",
      headingItalic: "strategi QA?",
      body: "Saya baca setiap pesan — hubungi saja dan kita cari tahu apa kita cocok kerja bareng.",
      cta: "Kirim Pesan ↗",
    },
    footer: "© 2026 Iqbal Apriand Juartono. Dibuat dengan hati-hati — dan beberapa automated test.",
  },
};

// Reveals a section with a fade + slide-up once it enters the viewport.
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Portfolio() {
  const [lang, setLang] = useState("id");
  const [filter, setFilter] = useState("all");
  const [transitioning, setTransitioning] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const c = content[lang];

  const expertise = expertiseBase.map((base, i) => ({
    ...base,
    ...c.expertiseSection.items[i],
  }));

  const projects = projectsBase.map((base, i) => ({
    ...base,
    ...c.projectsSection.items[i],
  }));

  const navItems = [
    { id: "about", label: c.nav.about },
    { id: "expertise", label: c.nav.expertise },
    { id: "projects", label: c.nav.projects },
    { id: "skills", label: c.nav.skills },
    { id: "contact", label: c.nav.contact },
  ];

  const [expertiseRef, expertiseVisible] = useReveal();
  const [projectsRef, projectsVisible] = useReveal();
  const [skillsRef, skillsVisible] = useReveal();
  const [contactRef, contactVisible] = useReveal();

  // Track which section is in view to highlight the matching nav link.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ["about", "expertise", "projects", "skills", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  function handleFilterChange(f) {
    if (f === filter) return;
    setTransitioning(true);
    setTimeout(() => {
      setFilter(f);
      setTransitioning(false);
    }, 180);
  }

  function goTo(id) {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  // Theme tokens — swapped by hand instead of Tailwind's dark: variant,
  // so no extra config file is needed for the toggle to work.
  const t = dark
    ? {
        page: "#141310",
        surface: "bg-[#1B1A16] border-[#2E2C25]",
        surfaceSolid: "bg-[#1B1A16]",
        navBg: "bg-[#1B1A16]/85",
        text: "text-[#F5F3EC]",
        textMuted: "text-[#A8A69C]",
        border: "border-[#2E2C25]",
        pillOff: "bg-[#1B1A16] text-[#A8A69C] border-[#2E2C25]",
        chipBg: "bg-[#242219]",
      }
    : {
        page: "#FAFAF7",
        surface: "bg-white border-line",
        surfaceSolid: "bg-white",
        navBg: "bg-white/85",
        text: "text-ink",
        textMuted: "text-inkmuted",
        border: "border-line",
        pillOff: "bg-white text-inkmuted border-line",
        chipBg: "bg-bgsoft",
      };

  const focusRing =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sageink";

  return (
    <div
      className={`min-h-screen font-sans ${t.text} transition-colors duration-300`}
      style={{ backgroundColor: t.page }}
    >
      {/* NAV */}
      <div className="sticky top-5 z-50 flex justify-center px-5">
        <nav
          className={`flex items-center gap-1.5 ${t.navBg} backdrop-blur-md border ${t.border} rounded-full pl-4 pr-2 py-2 shadow-[0_8px_24px_rgba(18,19,15,0.08)] transition-colors duration-300`}
        >
          <div className="w-[34px] h-[34px] rounded-full bg-ink text-white flex items-center justify-center text-sm font-display font-bold mr-2">
            IA
          </div>

          <div className="hidden md:flex gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(item.id);
                }}
                className={`px-3.5 py-2 rounded-full text-sm transition-all ${focusRing} ${
                  activeSection === item.id
                    ? "bg-sage text-sageink font-medium"
                    : `${t.textMuted} hover:${t.chipBg}`
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goTo("contact");
            }}
            className={`hidden md:flex items-center gap-1.5 bg-ink text-white px-4 py-2 rounded-full text-[13.5px] ml-2 whitespace-nowrap ${focusRing}`}
          >
            {c.nav.getInTouch}
          </a>

          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            aria-label={lang === "en" ? c.a11y.toIndonesian : c.a11y.toEnglish}
            className={`px-3 h-[34px] rounded-full border ${t.border} ${t.chipBg} flex items-center justify-center ml-1.5 text-[12px] font-mono font-medium ${focusRing}`}
          >
            {lang === "en" ? "EN" : "ID"}
          </button>

          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? c.a11y.toLight : c.a11y.toDark}
            className={`w-[34px] h-[34px] rounded-full border ${t.border} ${t.chipBg} flex items-center justify-center ml-1.5 ${focusRing}`}
          >
            {dark ? "☀" : "◐"}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? c.a11y.closeMenu : c.a11y.openMenu}
            aria-expanded={mobileOpen}
            className={`md:hidden w-[34px] h-[34px] rounded-full border ${t.border} ${t.chipBg} flex items-center justify-center ml-1.5 ${focusRing}`}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-5 top-[76px] z-40">
          <div
            className={`${t.surface} border rounded-3xl p-3 shadow-xl flex flex-col gap-1`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`text-left px-4 py-3 rounded-2xl text-sm ${focusRing} ${
                  activeSection === item.id
                    ? "bg-sage text-sageink font-medium"
                    : t.textMuted
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="about" className="max-w-[1180px] mx-auto px-6 pt-16 pb-10">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-sage text-sageink px-4 py-2 rounded-full text-[13px] mb-8 w-fit font-medium">
            {c.hero.badge}
          </div>
        </div>

        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center text-center md:text-left">
          <div>
            <p
              className={`text-[14px] ${t.textMuted} mb-4 uppercase tracking-[0.14em] font-display font-semibold`}
            >
              {c.hero.roleLabel}
            </p>
            <h1 className="font-display text-[34px] md:text-[50px] leading-[1.15] font-semibold tracking-tight mb-5">
              {c.hero.headlinePre}{" "}
              <span className="font-serif italic font-normal">
                {c.hero.headlineItalic}
              </span>{" "}
              {c.hero.headlinePost}
            </h1>
            <p
              className={`${t.textMuted} text-base leading-[1.75] max-w-[520px] mx-auto md:mx-0 mb-8`}
            >
              {c.hero.bio}
            </p>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start mb-10">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("projects");
                }}
                className={`bg-ink text-white px-6 py-3.5 rounded-full text-[14.5px] font-medium inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform ${focusRing}`}
              >
                {c.hero.ctaWork}
              </a>
              <a
                href="#"
                className={`border ${t.border} px-6 py-3.5 rounded-full text-[14.5px] font-medium inline-flex items-center gap-2 hover:${t.chipBg} transition-all ${focusRing}`}
              >
                {c.hero.ctaResume}
              </a>
            </div>
            <div className="flex gap-2.5 justify-center md:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-full border ${t.border} flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all ${focusRing}`}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-[300px] h-[360px] rounded-[28px] bg-gradient-to-br from-[#EFEAE0] to-[#DDD6C6] border border-line shadow-[0_30px_60px_-20px_rgba(18,19,15,0.18)] relative overflow-hidden -rotate-3">
              <div className="absolute inset-0 flex items-center justify-center font-serif italic text-[120px] text-ink/10">
                IJ
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute w-[42px] h-[42px] rounded-full bg-white border border-line shadow-lg flex items-center justify-center -top-3.5 right-6 rotate-3 text-sm"
            >
              ↗
            </div>
            <div
              aria-hidden="true"
              className="absolute w-[42px] h-[42px] rounded-full bg-white border border-line shadow-lg flex items-center justify-center top-[44%] -right-4.5 rotate-3 text-sm"
            >
              ▣
            </div>
            <div
              aria-hidden="true"
              className="absolute w-[42px] h-[42px] rounded-full bg-white border border-line shadow-lg flex items-center justify-center bottom-9 -left-4.5 rotate-3 text-sm"
            >
              ◎
            </div>
            <div
              aria-hidden="true"
              className="absolute w-[42px] h-[42px] rounded-full bg-white border border-line shadow-lg flex items-center justify-center -bottom-3.5 right-16 rotate-3 text-sm"
            >
              ✎
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center gap-16 flex-wrap pt-10 mt-8 border-t ${t.border}`}
        >
          {[
            ["3+", c.hero.stats[0]],
            ["6", c.hero.stats[1]],
            ["100%", c.hero.stats[2]],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="font-serif italic text-[42px]">{num}</div>
              <div
                className={`font-mono text-[11px] tracking-[0.08em] ${t.textMuted} uppercase mt-1`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        ref={expertiseRef}
        className={`max-w-[1180px] mx-auto px-6 py-24 transition-all duration-700 ${
          expertiseVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-sageink bg-sage px-3.5 py-1.5 rounded-full inline-block mb-4">
            {c.expertiseSection.tag}
          </span>
          <h2 className="font-display text-[28px] md:text-[38px] font-semibold tracking-tight">
            {c.expertiseSection.heading}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {expertise.map((item, i) => (
            <div
              key={item.title}
              style={{ transitionDelay: expertiseVisible ? `${i * 80}ms` : "0ms" }}
              className={`${t.surface} border rounded-[18px] p-8 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(18,19,15,0.15)] transition-all duration-500`}
            >
              <div
                className={`w-[46px] h-[46px] rounded-xl ${t.chipBg} flex items-center justify-center mb-5 font-display`}
              >
                {item.icon}
              </div>
              <h3 className="font-display text-[18px] font-semibold mb-2.5">
                {item.title}
              </h3>
              <p className={`text-[14.5px] ${t.textMuted} leading-relaxed`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        ref={projectsRef}
        className={`max-w-[1180px] mx-auto px-6 py-24 transition-all duration-700 ${
          projectsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-sageink bg-sage px-3.5 py-1.5 rounded-full inline-block mb-4">
            {c.projectsSection.tag}
          </span>
          <h2 className="font-display text-[28px] md:text-[38px] font-semibold tracking-tight">
            {c.projectsSection.heading}
          </h2>
        </div>

        <div className="flex justify-center gap-2 mb-11">
          {["all", "coding", "design"].map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-5 py-2.5 rounded-full border text-[13.5px] font-medium transition-all ${focusRing} ${
                filter === f ? "bg-ink text-white border-ink" : t.pillOff
              }`}
            >
              {c.projectsSection.filters[f]}
            </button>
          ))}
        </div>

        <div
          className={`grid md:grid-cols-3 gap-6 transition-opacity duration-200 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredProjects.map((p) => (
            <div
              key={p.title}
              className={`${t.surface} border rounded-[18px] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(18,19,15,0.15)] transition-all duration-300`}
            >
              <div
                className={`h-[180px] relative flex items-center justify-center font-serif italic text-2xl bg-gradient-to-br ${
                  dark ? p.darkTone + " text-white/20" : p.tone + " text-ink/30"
                }`}
              >
                {p.thumb}
                <span
                  className={`absolute top-3.5 right-3.5 ${t.surfaceSolid} border ${t.border} font-mono not-italic text-[11px] px-2.5 py-1 rounded-full`}
                >
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[16px] font-semibold mb-2">
                  {p.title}
                </h3>
                <p className={`text-[13.8px] ${t.textMuted} leading-relaxed mb-4`}>
                  {p.desc}
                </p>
                <div className="flex gap-4 text-[13px] font-medium">
                  <a href="#" className={`hover:underline ${focusRing}`}>
                    {c.projectsSection.seeProject}
                  </a>
                  {p.cat === "coding" && (
                    <a href="#" className={`hover:underline ${focusRing}`}>
                      {c.projectsSection.github}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        ref={skillsRef}
        className={`max-w-[1180px] mx-auto px-6 py-24 transition-all duration-700 ${
          skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-sageink bg-sage px-3.5 py-1.5 rounded-full inline-block mb-4">
            {c.skillsSection.tag}
          </span>
          <h2 className="font-display text-[28px] md:text-[38px] font-semibold tracking-tight">
            {c.skillsSection.heading}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((s) => (
            <div
              key={s}
              className={`${t.surface} border px-5 py-2.5 rounded-full text-sm flex items-center gap-2 font-mono`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sageink" />
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        ref={contactRef}
        className={`max-w-[1180px] mx-auto px-6 py-24 transition-all duration-700 ${
          contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="bg-ink text-white rounded-[36px] px-10 py-16 text-center">
          <h2 className="font-display text-[26px] md:text-[40px] font-semibold mb-4">
            {c.contactSection.headingPre}{" "}
            <span className="font-serif italic font-normal text-[#C9C4B4]">
              {c.contactSection.headingItalic}
            </span>
          </h2>
          <p className="text-[#B8B6AB] max-w-[480px] mx-auto mb-8 text-[15px]">
            {c.contactSection.body}
          </p>
          <a
            href="mailto:hello@iqbalapriand.my.id"
            className={`bg-white text-ink px-6 py-3.5 rounded-full text-[14.5px] font-medium inline-flex items-center gap-2 ${focusRing}`}
          >
            {c.contactSection.cta}
          </a>
        </div>
      </section>

      <footer
        className={`text-center py-9 px-6 ${t.textMuted} text-[13px] font-mono`}
      >
        {c.footer}
      </footer>
    </div>
  );
}
