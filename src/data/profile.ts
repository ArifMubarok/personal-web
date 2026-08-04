export const basicInfo = {
  name: "Arif Rahman Mubarok",
  tagline: "Software Engineer",
  location: "Jakarta Selatan, Indonesia",
  email: "arifrm28@gmail.com",
  phone: "+62 899-2600-011",
  photo: "/profile.jpg",
};

export const bio = {
  short:
    "Software Engineer Team Lead specializing in Malaysia's IRB-compliant e-Invoice integration, alongside retail systems — POS, ERP, and Loyalty platforms — used by hundreds of thousands of active customers.",
  long:
    "I'm a Software Engineer Team Lead based in Jakarta, currently leading a team of up to 3 engineers across concurrent retail projects spanning POS, ERP (Merchandising & HRIS), and Loyalty solutions for clients in Indonesia and Malaysia. A core focus of my work is Malaysia's IRB-compliant e-Invoice integration — from processing structured data files to architecting a bulk submission pipeline that batches up to 50 invoices per request, improving throughput while meeting strict regulatory constraints. I stay hands-on in development while managing team workload, task distribution, and cross-functional alignment with Operations and Project Management. My broader background spans backend-focused fullstack engineering, from digital library platforms handling large file uploads to POS systems serving real retail operations at scale.",
};

export type Skill = { category: string; items: string[] };

export const skills: Skill[] = [
  { category: "Languages", items: ["Indonesian (Native)", "English (Work Proficiency)"] },
  {
    category: "Frameworks / Libraries",
    items: ["Laravel", "Angular (TypeScript)", "NestJS", "Ionic", "Docker", "TypeORM", "MySQL"],
  },
  { category: "Tools / Platforms", items: ["Cloudflare", "VPS"] },
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
  roles: ExperienceRole[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "IGCY SG",
    location: "Jakarta Selatan",
    roles: [
      {
        role: "Software Engineer Team Lead",
        duration: "September 2025 - Present",
        description: [
          "Led and managed a development team of up to 3 members across multiple concurrent retail projects, including POS, ERP (Merchandising & HRIS), and Loyalty solutions for Indonesia-based clients",
          "Managed the Loyalty program for Indonesia-based clients, supporting 400k+ active customers",
          "Managed Malaysia e-Invoice integration projects, ensuring IRB-compliant data processing from structured data files",
          "Remained hands-on in development while overseeing team workload, task distribution, and deadline adherence",
          "Collaborated cross-functionally with Operations and Project Management teams to align deliverables with client requirements and timelines",
        ],
        achievements: [
          "**Architected and optimized a bulk e-Invoice processing pipeline**, replacing one-by-one IRB submissions with batched requests of **up to 50 invoices**, improving transaction throughput while enforcing API payload and regulatory constraints.",
          "**Engineered a high-performance reporting pipeline** capable of exporting **6M+ database records in under 10 minutes**, using scalable data retrieval and processing strategies while ensuring complete and consistent datasets.",
          "**Built and scaled a Loyalty Program serving 400K+ active customers**, designing backend workflows and data-processing mechanisms capable of handling large-scale customer transactions and activity.",
          "**Led technical execution across the engineering team**, coordinating implementation, resolving technical dependencies, and driving delivery of multiple initiatives **within defined project deadlines**.",
        ],
        techStack: ["Ionic", "Angular", "JavaScript", "TypeScript", "NodeJS", "PHP", "Laravel", "MySQL"],
      },
      {
        role: "Software Engineer",
        duration: "October 2024 - September 2025",
        description: [
          "Developed and maintained ERP solutions with a focus on HRIS modules, including attendance and payroll systems tailored to the Malaysian market",
          "Handled Malaysia e-Invoice integration with IRB-compliant data processing from structured data files",
          "Worked across both frontend and backend to deliver full-cycle feature development",
          "Collaborated with cross-functional teams to gather, implement, and optimize client requirements",
        ],
        achievements: [
          "**Engineered the HRIS attendance module** to handle **1,000+ concurrent attendance submissions** with high availability and zero downtime, optimizing backend processing and database operations to maintain system stability during peak traffic.",
          "**Engineered the HRIS payroll module for Malaysian payroll**, implementing complex country-specific payroll rules and calculations while maintaining accuracy, consistency, and reliability across payroll processing workflows.",
        ],
        techStack: ["Ionic", "Angular", "JavaScript", "TypeScript", "NodeJS", "PHP", "Laravel", "MySQL"],
      },
    ],
  },
  {
    company: "Orbit360",
    location: "Solo, Indonesia",
    roles: [
      {
        role: "Software Engineer (Backend Focused)",
        duration: "November 2023 - October 2024",
        description: [
          "Built and maintained a digital library platform that manages e-books with large file sizes, ensuring reliable upload, storage, and delivery",
          "Built API endpoints for frontend consumption across mobile and web",
          "Documented APIs to support frontend development",
          "Deployed, secured, and containerized APIs, the frontend web app, and the database using Docker",
        ],
        achievements: [
          "Handled large file uploads with optimized upload times, ensuring fast and reliable delivery of large e-book files.",
        ],
        techStack: ["TypeScript (strict mode)", "NodeJS", "NestJS", "Docker", "Cloudflare", "VPS", "Nginx", "PostgreSQL"],
      },
    ],
  },
  {
    company: "CV. Gudang Media Perkasa",
    location: "Solo, Indonesia",
    roles: [
      {
        role: "Software Engineer (Intern)",
        duration: "November 2023 - October 2024",
        description: [
          "Implemented a web-based Point of Sales (POS) system",
          "Built and secured APIs for the frontend side",
          "Consumed APIs from the backend side",
          "Worked with Git for version control",
        ],
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
  resume: "https://drive.google.com/file/d/1j4Q5Hqlpl3C97o4Vmxjd-DA5RwfbUp0s/view?usp=sharing",
};
