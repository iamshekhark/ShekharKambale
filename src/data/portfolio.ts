// ─── Profile ──────────────────────────────────────────────────────────────────
export const profile = {
  name: "Shekhar Kambale",
  role: "CSE student & developer",
  college: "BMS College of Engineering",
  city: "Bengaluru",
  email: "shekharkambale352@gmail.com",
  github: "https://github.com/iamshekhark",
  linkedin: "https://www.linkedin.com/in/shekhar-kambale/",
  photo: "/shekhar-kambale.jpg",
  resume: "https://drive.google.com/file/d/1oXgnP10gTmHCKNVqKTuYYEjoIfi-pwXk/view?usp=sharing",
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  repo: string;
  index: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "FitTracker",
    tagline: "Health & fitness app",
    description:
      "A cross-platform Flutter app for workout logging, health monitoring, AI-powered fitness insights, and diet planning — built with Riverpod state management and MongoDB persistence.",
    stack: ["Flutter", "Dart", "MongoDB", "JWT", "Riverpod", "OpenAI API"],
    repo: "https://github.com/iamshekhark/fit_tracker",
  },
  {
    index: "02",
    name: "ScamShield",
    tagline: "AI scam & phishing defense",
    description:
      "An AI-assisted project aimed at helping people identify scam and phishing attempts before they cause harm.",
    stack: ["AI / API integration", "Web"],
    repo: "https://github.com/iamshekhark/ScamShield",
  },
  {
    index: "03",
    name: "InternLoom JobSwipe",
    tagline: "Internship discovery",
    description:
      "A Flutter app with a swipe-driven internship discovery flow, featuring search and filtering, saved jobs, application tracking, and a Material 3 UI built with Riverpod.",
    stack: ["Flutter", "Dart", "Riverpod", "Material 3"],
    repo: "https://github.com/iamshekhark/InternLoom-JobSwipe",
  },
  {
    index: "04",
    name: "College Event Management",
    tagline: "Event management web app",
    description:
      "A web application for creating, managing, and registering for college events — with an admin panel, REST APIs, and a MongoDB backend.",
    stack: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
    repo: "https://github.com/iamshekhark/Event-Managemment",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
// Sourced from résumé. Owner: review before publishing.
export const skills = [
  { group: "Languages", items: ["C", "Python", "JavaScript", "Dart", "HTML", "CSS"] },
  {
    group: "Frameworks",
    items: ["Flutter", "React", "Node.js", "Express.js", "Riverpod", "Material 3"],
  },
  { group: "Databases", items: ["MongoDB", "MySQL", "Supabase"] },
  { group: "AI & APIs", items: ["OpenAI APIs", "Gemini API"] },
  { group: "Auth & Stack", items: ["JWT", "MERN Stack"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Postman"] },
  { group: "OS", items: ["Linux (RHEL)", "Windows"] },
  { group: "Extensions", items: ["Extension Built", "Chrome Extension"] },
];

// ─── Education ────────────────────────────────────────────────────────────────
// Owner: decide whether to show PUC/SSLC marks publicly.
// Set showMarks: true to display them. CGPA is intentionally hidden — edit README.
export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail?: string; // marks or grade — show only if owner approves
  showMarks: boolean;
};

export const education: EducationEntry[] = [
  {
    degree: "B.E. in Computer Science and Engineering (CSE)",
    institution: "BMS College of Engineering (BMSCE)",
    location: "Bengaluru, Karnataka, India",
    period: "2024 – 2028 (expected)",
    showMarks: false, // CGPA intentionally not displayed publicly
  },
  {
    degree: "Pre-University Course (PCMB)",
    institution: "Tungal Science PU Composite College",
    location: "Jamkhandi",
    period: "2022 – 2024",
    detail: "90%",
    showMarks: true, // set to true to display the mark
  },
  {
    degree: "SSLC",
    institution: "Morarji Desai Residential School",
    location: "Alagawadi",
    period: "Completed 2022",
    detail: "98.88%",
    showMarks: true, // set to true to display the mark
  },
];

// ─── Highlights (hackathons, activities, certifications) ──────────────────────
export type Highlight = {
  category: "Hackathon" | "Activity" | "Certification";
  title: string;
  issuer: string;
  date: string;
  note?: string;
  repo?: string;
  credentialUrl?: string;
};

export const highlights: Highlight[] = [
  {
    category: "Hackathon",
    title: "InternLoom × Unitechie Solutions × BMSCE Hiring Hackathon 2026",
    issuer: "BMSCE, Bengaluru",
    date: "July 18, 2026",
    note: "Individual participation. Problem statement revealed on the day; AI tools allowed. Built InternLoom JobSwipe — a Flutter swipe-driven internship discovery app.",
    repo: "https://github.com/iamshekhark/InternLoom-JobSwipe",
  },
  {
    category: "Hackathon",
    title: "OpenAI Codex Hackathon 2025",
    issuer: "OpenAI × NamasteDev",
    date: "2025",
    note: "Built an AI-powered fitness tracking app using OpenAI APIs.",
  },
  {
    category: "Activity",
    title: "Volunteer — Augment AI, UTSAV 2026",
    issuer: "BMS College of Engineering",
    date: "April 17–19, 2026",
    note: "Certificate of appreciation; 8 activity points under Leadership and Management.",
    credentialUrl:
      "https://drive.google.com/file/d/1qaRZ1zMc5rP6qDUFNLc8vXEESVIz-8je/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Sep 2026",
    credentialUrl:
      "https://drive.google.com/file/d/1d0GBOj306oNJFBIX_ULelXQGfQ1vFroV/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Learning MongoDB",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    credentialUrl:
      "https://drive.google.com/file/d/12_M1-EUNFklyzE9CigDzqbCUApzFp3o9/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Server-side Programming with Node.js for Beginners",
    issuer: "Infosys Springboard",
    date: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1ZGUklv7Di8I1Qu25sX3i_gWrpy3B33eo/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "TechA MERN Stack Developer Certification",
    issuer: "Infosys Springboard",
    date: "Dec 2025",
    credentialUrl:
      "https://drive.google.com/file/d/1AWdq1zROitMUNqJ-EmLGRSnIFdoPFqfk/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "TechA Git Foundation Certification",
    issuer: "Infosys Springboard",
    date: "May 2026",
    credentialUrl:
      "https://drive.google.com/file/d/1ZILtODGe1zKhlQ4P1o8fSqbJzBCc111N/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Mastering Git",
    issuer: "Infosys Springboard",
    date: "2026",
    credentialUrl:
      "https://drive.google.com/file/d/1lFLLR6RMb8MONCZXRdSzoqeXBV_CgzQ2/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Project on Git",
    issuer: "Infosys Springboard",
    date: "2026",
    credentialUrl:
      "https://drive.google.com/file/d/1350jykflhAqOiHaPcZQJZVDyHeiM_H6U/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Getting Started with Linux Fundamentals (RH104 - RHA)",
    issuer: "Red Hat",
    date: "Nov 2025",
    credentialUrl:
      "https://drive.google.com/file/d/1wATqxuaLdZuq6LFQMN5oyXUkumEJjEKk/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Red Hat System Administration I (RH124 - RHA)",
    issuer: "Red Hat",
    date: "Dec 2025",
    credentialUrl:
      "https://drive.google.com/file/d/11s1ofK06f9Xi5wpF_WHUMoEz7VrbsOEw/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Ethics in Engineering Practice",
    issuer: "NPTEL",
    date: "2026",
    credentialUrl:
      "https://drive.google.com/file/d/1lzF4IdtjxC5DlqMIUhJBXT-0AWXqqJEJ/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Entrepreneurship and IP Strategy",
    issuer: "NPTEL",
    date: "2026",
    credentialUrl:
      "https://drive.google.com/file/d/1HxDIjxPScEtN9FUBbJUVehoXVdN6-86O/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "The Complete C Programming Course for Basic to Expert",
    issuer: "Udemy",
    date: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1M-K1RfinswsjD-sjJg4U_ecYFWlRAePb/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Complete Ethical Hacking Course 2025: Go From Zero to Hero",
    issuer: "Udemy",
    date: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1LHTE-RV0pv5Ptk4TICIwSCTkpdAKOWBR/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Master Full Stack Web Development With Games and Application",
    issuer: "Udemy",
    date: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1ETL2XVmD8nsyYqO7lfIemO5cwHmjWD8u/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Python Programming: Build a Strong Foundation in Coding",
    issuer: "Udemy",
    date: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1dzJhM2M-nGNCMVlxB9DtJOu6eQFjA4rX/view?usp=sharing",
  },
  {
    category: "Certification",
    title: "Python",
    issuer: "Kaggle",
    date: "2025",
    credentialUrl:
      "https://drive.google.com/file/d/1cFpyO_qIedgtQQC6KcxBeHtpNoG4Oy1V/view?usp=sharing",
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────
export const process = [
  {
    step: "Understand",
    text: "Start with the real problem and the people who have it — not the tech.",
  },
  { step: "Sketch", text: "Map flows and screens quickly, keeping only what helps the user." },
  { step: "Build", text: "Ship small, working pieces and iterate with clean, readable code." },
  { step: "Refine", text: "Test, polish the details, and learn from what didn't work." },
];
