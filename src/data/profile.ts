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
    "Software Engineer Team Lead with a backend-leaning fullstack background, building retail systems — POS, ERP, and Loyalty platforms — used by hundreds of thousands of active customers.",
  long:
    "I'm a Software Engineer Team Lead based in Jakarta, currently leading a team of up to 3 engineers across concurrent retail projects spanning POS, ERP (Merchandising & HRIS), and Loyalty solutions for clients in Indonesia. I stay hands-on in development while managing team workload, task distribution, and cross-functional alignment with Operations and Project Management. My background is backend-focused fullstack engineering — from digital library platforms handling large file uploads, to compliance-driven integrations like Malaysia's e-Invoice (IRB), to POS systems serving real retail operations at scale.",
};

export type Skill = { category: string; items: string[] };

export const skills: Skill[] = [
  { category: "Languages", items: ["Indonesian (Native)", "English (Passive)"] },
  {
    category: "Frameworks / Libraries",
    items: ["Laravel", "Angular (TypeScript)", "NestJS", "Ionic", "Docker", "TypeORM", "MySQL"],
  },
  { category: "Tools / Platforms", items: ["Cloudflare", "VPS"] },
];

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    company: "IGCY SG",
    role: "Software Engineer Team Lead",
    duration: "September 2025 - Present",
    location: "Jakarta Selatan",
    description: [
      "Led and managed a development team of up to 3 members across multiple concurrent retail projects, including POS, ERP (Merchandising & HRIS), and Loyalty solutions for Indonesia-based clients",
      "Managed the Loyalty program for Indonesia-based clients, supporting 400k+ active customers",
      "Managed Malaysia e-Invoice integration projects, ensuring IRB-compliant data processing from structured data files",
      "Remained hands-on in development while overseeing team workload, task distribution, and deadline adherence",
      "Collaborated cross-functionally with Operations and Project Management teams to align deliverables with client requirements and timelines",
    ],
  },
  {
    company: "IGCY SG",
    role: "Software Engineer",
    duration: "October 2024 - September 2025",
    location: "Jakarta Selatan",
    description: [
      "Developed and maintained retail-focused solutions, including POS systems, ERP modules, and Loyalty programs for Indonesia-based clients",
      "Handled Malaysia e-Invoice integration with IRB-compliant data processing from structured data files",
      "Worked across both frontend and backend to deliver full-cycle feature development",
      "Collaborated with cross-functional teams to gather, implement, and optimize client requirements",
    ],
  },
  {
    company: "Orbit360",
    role: "Software Engineer (Backend Focused)",
    duration: "November 2023 - October 2024",
    location: "Solo, Indonesia",
    description: [
      "Built and maintained a digital library platform that manages e-books with large file sizes, ensuring reliable upload, storage, and delivery",
      "Built API endpoints for frontend consumption across mobile and web",
      "Documented APIs to support frontend development",
      "Deployed, secured, and containerized APIs, the frontend web app, and the database using Docker",
    ],
  },
  {
    company: "Orbit360",
    role: "Software Engineer (Fullstack Focused)",
    duration: "November 2023 - October 2024",
    location: "Solo, Indonesia",
    description: [
      "Implemented a web-based Point of Sales (POS) system",
      "Built and secured APIs for the frontend side",
      "Consumed APIs from the backend side",
      "Worked with Git for version control",
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
  resume: "https://drive.google.com/file/d/1SLIfzLn9F5WltuV5yjZdE18i849H5F15/view?usp=sharing",
};
