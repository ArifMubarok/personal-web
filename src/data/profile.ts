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
