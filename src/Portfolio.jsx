import { data } from "autoprefixer";
import { useEffect, useRef, useState } from "react";

// ---------- STATIC / NON-TRANSLATABLE DATA ----------

const expertiseBase = [{ icon: "</>" }, { icon: "▣" }, { icon: "✓" }];

const projectsBase = [
  {
    cat: "coding",
    tag: "Fullstack",
    thumb: "POS Seblak Cinta Bunda",
    image: "/projects/pos.jpg",
    tone: "from-[#E8F1E4] to-[#D7E8CF]",
    darkTone: "from-[#243626] to-[#1B2A1D]",
    githubUrl: "https://github.com/Fadhil04/pos-seblak.git",
    demoUrl: "https://github.com/Fadhil04/pos-seblak.git",
  },
  {
    cat: "coding",
    tag: "Fullstack",
    thumb: "KosKu",
    image: "/projects/kosku.jpg",
    tone: "from-[#F1E9DC] to-[#E6D6BC]",
    darkTone: "from-[#332C1E] to-[#241F15]",
    githubUrl: "https://github.com/Fadhil04/kosku-api.git",
    demoUrl: "https://github.com/Fadhil04/kosku-api.git",
  },
];

const skills = [
  "HTML",
  "CSS",
  "Java Script",
  "PHP",
  "Golang",
  "React.js",
  "Node.js",
  "Express.js",
  "Laravel",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL / PostgreSQL",
  "MongoDB",
  "Python",
  "Postman / API Testing",
  "Selenium",
  "Git & GitHub",
];

const socialLinks = [
  { label: "GitHub", icon: "github", href: "https://github.com/Fadhil04" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/fadhil-wicaksono-740686291" },
  { label: "Email", icon: "email", href: "mailto:mailto:fadhilwicaksono425@gmail.com" },
];

// Small inline icon set (currentColor-based so it follows the hover text color)
function SocialIcon({ type }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor" };
  switch (type) {
    case "github":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 .5C5.73.5.5 5.73.5 12.03c0 5.05 3.29 9.33 7.86 10.85.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.78.12 3.07.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12.03C23.5 5.73 18.27.5 12 .5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      );
    case "email":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 5.5h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm.9 1.7 7.62 5.94a.8.8 0 0 0 .96 0L20.1 7.2H3.9Zm16.6 1.35-6.98 5.44a2.4 2.4 0 0 1-2.94 0L3.6 8.55v8.45h16.9V8.55Z" />
        </svg>
      );
    default:
      return null;
  }
}

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
      badge: "👋 Currently learning by building real projects",
      roleLabel: "Information Systems @ Gunadarma University",
      headlinePre:
        "I'm Fadhil, an Information Systems student who learns quickly through real projects, with an interest in",
      headlineItalic: "Fullstack Development, Data Engineering, and QA Engineering",
      headlinePost: "",
      bio: "I'm still a student, and I split my curiosity between three things that don't usually sit in one head: building fullstack features from front to back, exploring how data is structured and moved, and writing the test cases that catch what I missed. Always looking for opportunities to learn, contribute, and grow.",
      ctaWork: "See what I've built →",
      ctaResume: "Resume ↗",
    },
    expertiseSection: {
      tag: "About Me",
      heading: "Three interests, one curious mind",
      items: [
        {
          title: "Fullstack Developer",
          desc: "I like understanding how a feature works end-to-end — React on the front, Node on the back, and everything that connects them in between.",
        },
        {
          title: "Data Engineer",
          desc: "I'm learning how data gets structured, stored, and moved — from designing schemas to building small pipelines that turn raw data into something usable.",
        },
        {
          title: "QA Engineer",
          desc: "If it can break, I'd rather be the one who finds out first. Scripts handle the repeatable checks; I handle the cases that like to surprise people.",
        },
      ],
    },
    projectsSection: {
      tag: "Selected Work",
      heading: "Projects I've learned the most from",
      filters: { all: "All", coding: "Coding", data: "Data", qa: "QA" },
      seeProject: "See Project ↗",
      github: "GitHub",
      items: [
        {
          title: "POS Seblak Cinta Bunda",
          desc: "A point-of-sale system for a seblak food stall — handles the order queue, calculates the bill, tracks stock, and prints a receipt so the cashier isn't doing it all by hand.",
        },
        {
          title: "KosKu",
          desc: "A boarding-house (kos) management app — landlords list rooms and track availability, tenants book and pay rent online, and everyone can see who owes what and when.",
        },
      ],
    },
    skillsSection: {
      tag: "Stack",
      heading: "What I'm currently learning and using",
    },
    contactSection: {
      headingPre: "Got a project, an idea, or just want to talk",
      headingItalic: "learning and growing together?",
      body: "I read every message — reach out, I'm always open to opportunities to learn, collaborate, and grow.",
      cta: "Send a message ↗",
    },
    footer:
      "© 2026 Fadhil Wicaksono. Built with care — and a lot of learning along the way.",
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
      badge: "👋 Lagi belajar lewat proyek-proyek nyata",
      roleLabel: "Sistem Informasi @ Universitas Gunadarma",
      headlinePre:
        "Saya Fadhil, mahasiswa Sistem Informasi yang cepat belajar lewat proyek nyata, yang memiliki ketertarikan terhadap",
      headlineItalic: "Fullstack Developer, Data Engineer, dan QA Engineer",
      headlinePost: "",
      bio: "Saya masih mahasiswa, dan rasa ingin tahu saya kebagi ke tiga hal yang biasanya nggak nyatu di satu kepala: bikin fitur fullstack dari depan sampai belakang, eksplorasi cara data disusun dan dipindahkan, dan nulis test case yang nangkep hal-hal yang saya lewatkan. Selalu terbuka sama kesempatan buat belajar, berkontribusi, dan berkembang.",
      ctaWork: "Lihat Karyaku →",
      ctaResume: "Resume ↗",
    },
    expertiseSection: {
      tag: "Tentang Saya",
      heading: "Tiga minat, satu rasa ingin tahu",
      items: [
        {
          title: "Fullstack Developer",
          desc: "Saya suka paham gimana satu fitur jalan dari ujung ke ujung — React di depan, Node di belakang, dan semua yang menghubungkan keduanya.",
        },
        {
          title: "Data Engineer",
          desc: "Saya lagi belajar gimana data disusun, disimpan, dan dipindahkan — dari merancang skema sampai bikin pipeline kecil yang mengubah data mentah jadi sesuatu yang berguna.",
        },
        {
          title: "QA Engineer",
          desc: "Kalau sesuatu bisa rusak, saya maunya jadi yang pertama tahu. Script buat pengecekan yang berulang; saya yang tangani kasus-kasus yang suka bikin kejutan.",
        },
      ],
    },
    projectsSection: {
      tag: "Karya Pilihan",
      heading: "Proyek yang paling banyak ngajarin saya",
      filters: { all: "Semua", coding: "Coding", data: "Data", qa: "QA" },
      seeProject: "Lihat Proyek ↗",
      github: "GitHub",
      items: [
        {
          title: "POS Seblak Cinta Bunda",
          desc: "Aplikasi kasir (POS) buat warung seblak — kelola antrian pesanan, hitung total belanja, pantau stok bahan, dan cetak struk otomatis biar kasir nggak repot itung manual.",
        },
        {
          title: "KosKu",
          desc: "Aplikasi manajemen kos — pemilik kos bisa daftarin kamar dan pantau ketersediaannya, penyewa bisa booking dan bayar sewa online, dan semua bisa lihat siapa yang belum bayar dan kapan jatuh temponya.",
        },
      ],
    },
    skillsSection: {
      tag: "Perkakas",
      heading: "Yang lagi saya pelajari dan pakai",
    },
    contactSection: {
      headingPre: "Ada proyek, ide, atau cuma mau ngobrolin soal",
      headingItalic: "belajar dan berkembang bareng?",
      body: "Saya baca setiap pesan — hubungi saja, saya selalu terbuka sama kesempatan buat belajar, kolaborasi, dan berkembang.",
      cta: "Kirim Pesan ↗",
    },
    footer:
      "© 2026 Fadhil Wicaksono. Dibuat dengan hati-hati — dan banyak proses belajar di sepanjang jalan.",
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
      { threshold: 0.15 },
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
      { rootMargin: "-40% 0px -50% 0px" },
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
      <section id="about" className="max-w-[1180px] mx-auto px-6 pt-10 pb-10">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center text-center md:text-left">
          <div>
            <p
              className={`text-[12px] ${t.textMuted} mb-3 uppercase tracking-[0.14em] font-display font-semibold`}
            >
              {c.hero.roleLabel}
            </p>
            <h1 className="font-display text-[26px] md:text-[36px] leading-[1.2] font-semibold tracking-tight mb-4">
              {c.hero.headlinePre}{" "}
              <span className="font-serif italic font-normal">
                {c.hero.headlineItalic}
              </span>{" "}
              {c.hero.headlinePost}
            </h1>
            <p
              className={`${t.textMuted} text-[14px] leading-[1.65] max-w-[520px] mx-auto md:mx-0 mb-6`}
            >
              {c.hero.bio}
            </p>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start mb-6">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("projects");
                }}
                className={`bg-ink text-white px-5 py-3 rounded-full text-[13.5px] font-medium inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform ${focusRing}`}
              >
                {c.hero.ctaWork}
              </a>
              <a
                href="#"
                className={`border ${t.border} px-5 py-3 rounded-full text-[13.5px] font-medium inline-flex items-center gap-2 hover:${t.chipBg} transition-all ${focusRing}`}
              >
                {c.hero.ctaResume}
              </a>
            </div>
            <div className="flex gap-2.5 justify-center md:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-full border ${t.border} flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all ${focusRing}`}
                >
                  <SocialIcon type={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-[300px] h-[360px] rounded-[28px] border border-line shadow-[0_30px_60px_-20px_rgba(18,19,15,0.18)] relative overflow-hidden -rotate-3">
            <img
              src="foto-rapih.png"
              alt="Fadhil Wicaksono"
              className="w-full h-full object-cover"
            />
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
              style={{
                transitionDelay: expertiseVisible ? `${i * 80}ms` : "0ms",
              }}
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
          {["all", "coding", "data","qa"].map((f) => (
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
              <div className="h-[180px] relative overflow-hidden">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div
                    className={`h-full flex items-center justify-center font-serif italic text-2xl bg-gradient-to-br ${
                      dark ? p.darkTone + " text-white/20" : p.tone + " text-ink/30"
                    }`}
                  >
                    {p.thumb}
                  </div>
                )}
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
                <p
                  className={`text-[13.8px] ${t.textMuted} leading-relaxed mb-4`}
                >
                  {p.desc}
                </p>
                <div className="flex gap-4 text-[13px] font-medium">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline ${focusRing}`}
                  >
                    {c.projectsSection.seeProject}
                  </a>
                  {p.cat === "coding" && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${focusRing}`}
                    >
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
          skillsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
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
          contactVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
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
            href="mailto:fadhilwicaksono425@gmail.com"
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
