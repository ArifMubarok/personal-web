export const basicInfo = {
  name: "Arif Rahman Mubarok",
  tagline: "Software Engineer",
  location: "Jakarta Selatan, Indonesia",
  email: "arifrm28@gmail.com",
  phone: "+62 899-2600-0011",
  photo: "/profile.webp",
};

export const bio = {
  short:
    "Software Engineer specializing in Malaysia’s IRB-compliant e-Invoice integration, alongside retail systems — POS, ERP, and Loyalty platforms — used by hundreds of thousands of active customers.",
  long:
    "I’m a Software Engineer based in Jakarta, currently leading a team of up to 3 engineers across concurrent retail projects spanning POS, ERP (Merchandising & HRIS), and Loyalty solutions for clients in Indonesia and Malaysia. A core focus of my work is Malaysia’s IRB-compliant e-Invoice integration — from processing structured data files to architecting a bulk submission pipeline that batches up to 50 invoices per request, improving throughput while meeting strict regulatory constraints. I stay hands-on in development while managing team workload, task distribution, and cross-functional alignment with Operations and Project Management. My broader background spans backend-focused fullstack engineering, from digital library platforms handling large file uploads to POS systems serving real retail operations at scale.",
  letter: [
    "I’m a Software Engineer based in Jakarta, currently leading a team of up to 3 engineers across concurrent retail projects spanning POS, ERP (Merchandising & HRIS), and Loyalty solutions for clients in Indonesia and Malaysia.",
    "A core focus of my work is Malaysia’s IRB-compliant e-Invoice integration — from processing structured data files to architecting a bulk submission pipeline that batches up to 50 invoices per request, improving throughput while meeting strict regulatory constraints.",
    "I stay hands-on in development while managing team workload, task distribution, and cross-functional alignment with Operations and Project Management.",
    "My broader background spans backend-focused fullstack engineering, from digital library platforms handling large file uploads to POS systems serving real retail operations at scale.",
  ],
};

export type Stat = { value: string; caption: string };

export const stats: Stat[] = [
  { value: "50", caption: "invoices batched into a single IRB e-Invoice submission, instead of filing one by one" },
  { value: "6M+", caption: "database records exported by the reporting pipeline, in under 10 minutes" },
  { value: "400K+", caption: "active customers on the Loyalty platform he built and scaled" },
  { value: "1,000+", caption: "concurrent HRIS attendance submissions handled with zero downtime" },
  { value: "3.7/4.0", caption: "GPA, D3 Informatics Engineering, Sebelas Maret University" },
];

export type Skill = { category: string; items: string[] };

export const skills: Skill[] = [
  { category: "Languages", items: ["Indonesian (Native)", "English (Professional, written)"] },
  {
    category: "Frameworks / Libraries",
    items: ["NestJS", "NodeJS", "TypeScript", "JavaScript", "Laravel", "Angular", "Ionic", "TypeORM"],
  },
  {
    category: "Tools / Platforms",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Cloudflare", "Nginx", "VPS"],
  },
];

export type ExperienceRole = {
  role: string;
  duration: string;
  description: string[];
  achievements?: string[];
  techStack?: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  highlight: string;
  years: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Nimbli",
    location: "Jakarta Selatan, Indonesia",
    highlight: "Batches IRB e-Invoice submissions 50 at a time; leads a 3-engineer team",
    years: "2024—",
    roles: [
      {
        role: "Software Engineer",
        duration: "October 2024 - Present",
        description: [
          "Worked with Operations and Project Management teams to gather client requirements and align deliverables with timelines",
        ],
        achievements: [
          "**Led Malaysia e-Invoice integration and architected a bulk submission pipeline**, processing structured data files in line with IRB requirements and replacing one-by-one submissions with batched requests of **up to 50 invoices** while enforcing API payload limits.",
          "**Engineered a high-performance reporting pipeline** capable of exporting **6M+ database records in under 10 minutes**, using scalable data retrieval and processing strategies while ensuring complete and consistent datasets.",
          "**Built and scaled a Loyalty Program serving 400K+ active customers**, including a subscription feature that lets customers claim free items every week for up to 1 year.",
          "**Engineered the HRIS attendance and payroll modules for the Malaysian market**, handling **1,000+ concurrent attendance submissions** with zero downtime and implementing country-specific payroll rules and calculations.",
          "**Cut CPU usage by 50–60%** across the ERP (Merchandising), Loyalty, and POS websites with lazy loading, caching, removal of unnecessary queries, and memoization.",
          "**Led a team of up to 3 engineers while staying hands-on**, owning workload, task distribution, and deadlines across concurrent retail projects (POS, ERP for Merchandising and HRIS, and Loyalty) for Indonesia-based clients.",
        ],
        techStack: ["Ionic", "Angular", "JavaScript", "TypeScript", "NodeJS", "PHP", "Laravel", "MySQL"],
      },
    ],
  },
  {
    company: "Orbit360",
    location: "Solo, Indonesia",
    highlight: "Digital library platform; optimized large e-book upload pipelines",
    years: "2023–24",
    roles: [
      {
        role: "Software Engineer",
        duration: "November 2023 - October 2024",
        description: [
          "Built and maintained a digital library platform that manages e-books with large file sizes, ensuring reliable upload, storage, and delivery",
          "Built API endpoints for the mobile and web frontends and documented them so the frontend team could build against them",
          "Deployed, secured, and containerized APIs, the frontend web app, and the database using Docker",
        ],
        techStack: ["TypeScript (strict mode)", "NodeJS", "NestJS", "Docker", "Cloudflare", "VPS", "Nginx", "PostgreSQL"],
      },
    ],
  },
  {
    company: "CV. Gudang Media Perkasa",
    location: "Solo, Indonesia",
    highlight: "Web-based POS system for retail transactions and inventory",
    years: "2023",
    roles: [
      {
        role: "Software Engineer Intern",
        duration: "February 2023 - June 2023",
        description: [
          "Implemented a Point of Sales (POS) system with a cashier web app, stock management, promotions, and sales reports",
          "Built and secured APIs for the frontend side, consumed APIs from the backend side, and used Git for version control",
        ],
        techStack: ["PHP", "Laravel", "MySQL"],
      },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  role: string;
  contributions: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: "Smart Edu-5P (Project Management App)",
    description:
      "Manages tasks for the 5P program. Supports two roles — teacher and student — where students can upload or create team tasks, and teachers can review and verify them.",
    stack: ["ExpressJS", "React Native", "VPS"],
    role: "Team Leader & Backend Developer",
    contributions: [
      "Developed 4+ features, including project management, activities, group management, and publishing projects to the public (limited to within the app)",
      "Managed the server infrastructure to keep the app running reliably, including provisioning and maintaining the VPS, configuring the domain and DNS, and handling deployment to ensure consistent uptime",
    ],
    link: "https://github.com/badaso404/smartedu5p",
  },
];

export const education = {
  school: "Sebelas Maret University, Surakarta",
  degree: "D3 Teknik Informatika / Associate Degree in Informatics Engineering",
  gpa: "3.7 / 4.0",
  honors: [
    "Participated in PKM (Program Kreativitas Mahasiswa), secured funding, and advanced to PIMNAS (National Student Creativity Week)",
    "Competed in GEMASTIK, programming category",
    "Built the official website for the Vocational School faculty (Web Developer, Sekolah Vokasi UNS, Aug 2022 - Jan 2023)",
    "Completed internships at 3 companies over a 2-year period, gaining hands-on experience in POS, ERP, and backend development",
  ],
};

export type Certification = { name: string; issuer: string; date: string };

export const certifications: Certification[] = [
  { name: "The Complete JavaScript Course 2023: From Zero to Expert!", issuer: "Udemy", date: "Issued Jun 2023" },
  { name: "JavaScript Intermediate", issuer: "Sololearn", date: "Issued Jun 2023" },
  { name: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", date: "Issued May 2023 · Expires May 2026" },
  { name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)", issuer: "Dicoding Indonesia", date: "Issued May 2023 · Expires May 2026" },
  { name: "SQL Course", issuer: "Sololearn", date: "Issued Apr 2021" },
];

export const socials = {
  github: "https://github.com/ArifMubarok",
  linkedin: "https://www.linkedin.com/in/arifrm",
  resume: "https://drive.google.com/file/d/1XgxKmApPg6TSJkssqh07Py79F0XVMbiL/view?usp=sharing",
};

// ---- Content for the dark editorial layout ----

export const hero = {
  intro: "Hi, I'm Arif Rahman Mubarok. I build retail and e-invoice systems that run at scale.",
  aside: "Open to full-time roles and contract work, in Indonesia or remote.",
  // Each line is split into [before, icon, after] so an icon can sit inside the word.
  lines: [
    { before: "BACKEND &", after: "" },
    { before: "SOFT", icon: "bolt", after: "WARE" },
    { before: "EN", icon: "bracket", after: "GINEER" },
  ] as { before: string; icon?: "bolt" | "bracket"; after: string }[],
  place: "Jakarta, ID",
};

export const coreFocus = {
  quote: { strong: "Retail at scale.", muted: "Compliant by design.", italic: "hands-on engineering" },
  lead: { before: "I build the", italic: "back-office systems", after: "that retail runs on, and keep them fast under load." },
  columns: [
    {
      title: "Scope & Platform",
      body: "POS, ERP (Merchandising and HRIS), and Loyalty platforms for clients in Indonesia and Malaysia, used by hundreds of thousands of customers.",
      note: "Built for real stores, not demos.",
    },
    {
      title: "Integration",
      body: "Malaysia's IRB-compliant e-Invoice: structured data files in, batched submissions out, inside strict API payload limits.",
    },
  ],
  signature: "Arif",
};

export const headlineStats = [
  { label: "GPA", value: 3.7, decimals: 1, suffix: "/4.0" },
  { label: "Professional exp", value: 3, decimals: 0, suffix: "+ Years" },
  { label: "Records exported", value: 6, decimals: 0, suffix: "M+" },
  { label: "Loyalty customers", value: 400, decimals: 0, suffix: "K+" },
];

export type Feature = {
  title: string;
  body: string;
  tags: string[];
  faces: { label: string; color: string }[];
};

export const features: Feature[] = [
  {
    title: "Retail Platforms",
    body: "POS, ERP and Loyalty systems that stores depend on every day: cashier apps, stock and promotions, attendance and payroll, and a loyalty program with 400K+ active customers.",
    tags: ["POS", "ERP", "Loyalty", "HRIS & Payroll", "Reporting", "E-Invoice"],
    faces: [
      { label: "POS", color: "#2563eb" },
      { label: "ERP", color: "#7c3aed" },
      { label: "LOYAL", color: "#ca8a04" },
      { label: "HRIS", color: "#059669" },
      { label: "INV", color: "#dc2626" },
      { label: "RPT", color: "#0891b2" },
    ],
  },
  {
    title: "Scalable Backends",
    body: "Backend-focused fullstack work in NestJS, Node and Laravel: APIs documented for the frontend team, pipelines that export 6M+ rows in under 10 minutes, and CPU use cut by 50–60%.",
    tags: ["API Design", "NestJS", "Docker", "PostgreSQL", "Caching", "Nginx"],
    faces: [
      { label: "API", color: "#dc2626" },
      { label: "SQL", color: "#ca8a04" },
      { label: "NODE", color: "#16a34a" },
      { label: "CACHE", color: "#0891b2" },
      { label: "OPS", color: "#7c3aed" },
      { label: "CODE", color: "#2563eb" },
    ],
  },
  {
    title: "Team Leadership",
    body: "Leading up to 3 engineers across concurrent projects while staying hands-on: workload and task distribution, deadlines, and alignment with Operations and Project Management.",
    tags: ["Team Lead", "Planning", "Code Review", "Requirements", "Communication", "Delivery"],
    faces: [
      { label: "TEAM", color: "#7c3aed" },
      { label: "PLAN", color: "#ca8a04" },
      { label: "SHIP", color: "#16a34a" },
      { label: "TALK", color: "#2563eb" },
      { label: "LEAD", color: "#dc2626" },
      { label: "GOAL", color: "#0891b2" },
    ],
  },
];

export type Work = {
  title: string;
  category: string;
  year: string;
  summary: string;
  detail: string;
  image?: string;
  imageAlt?: string;
  visual?: string; // big word shown when there is no picture
  link?: string;
};

export const work: Work[] = [
  {
    title: "IRB e-Invoice Bulk Pipeline",
    category: "Integration · Nimbli",
    year: "2024",
    summary: "batched e-invoice submission for malaysia's irb.",
    detail: "Replaced one-by-one filing with batched requests of up to 50 invoices, inside the API's payload limits.",
    image: "/img/account-book-ledger.webp",
    imageAlt: "A 19th-century account book ledger with handwritten columns",
  },
  {
    title: "Reporting Export Pipeline",
    category: "Data · Nimbli",
    year: "2025",
    summary: "6m+ database records exported in under 10 minutes.",
    detail: "Scalable retrieval and processing strategies that keep datasets complete and consistent at volume.",
    image: "/img/servers-in-a-rack.webp",
    imageAlt: "Rack-mounted servers with blinking status lights",
  },
  {
    title: "Loyalty Program",
    category: "Retail · Nimbli",
    year: "2025",
    summary: "400k+ active customers, weekly free-item subscriptions.",
    detail: "Built and scaled the loyalty platform, including a subscription that lets customers claim free items every week for up to a year.",
    visual: "400K+",
  },
  {
    title: "HRIS Attendance & Payroll",
    category: "ERP · Malaysia",
    year: "2025",
    summary: "1,000+ concurrent attendance submissions, zero downtime.",
    detail: "Attendance and payroll modules for the Malaysian market, with country-specific payroll rules and calculations.",
    visual: "1,000+",
  },
  {
    title: "Smart Edu-5P",
    category: "Edtech · Team lead",
    year: "2023",
    summary: "project management app for teachers and students.",
    detail: "Led the team and built the backend: 4+ features, plus the VPS, domain, DNS and deployment behind it.",
    visual: "5P",
    link: "https://github.com/badaso404/smartedu5p",
  },
];

export const techStack: { row: string[] } [] = [
  { row: ["NestJS", "Node.js", "TypeScript", "JavaScript", "Laravel", "PHP", "Angular", "Ionic", "TypeORM", "Express"] },
  { row: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "Cloudflare", "Nginx", "Git", "Linux", "Postman", "React"] },
];

export const ribbons = {
  roles: ["Software Engineer", "Backend Engineer", "Fullstack Engineer", "Team Lead", "E-Invoice Integration"],
  stack: ["NestJS", "Node.js", "TypeScript", "Laravel", "Angular", "PostgreSQL", "MySQL", "Docker", "Nginx"],
};
