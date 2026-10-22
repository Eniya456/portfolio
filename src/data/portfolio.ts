// ─── Portfolio Data ───────────────────────────────────────────────────────────

export const personal = {
  name: 'Eniya V',
  title: 'Computer Science Engineer | Software Developer | AI/ML Enthusiast',
  intro:
    'I build practical software solutions across full-stack development, AI/ML, data processing, and intelligent applications. I enjoy solving engineering problems, debugging complex workflows, and turning ideas into usable products.',
  email: 'eniya2238@gmail.com',
  linkedin: 'https://linkedin.com/in/eniya-v-986aba304',
  github: 'https://github.com/Eniya456',
  location: 'Perambalur, Tamil Nadu, India',
  resumeFile: '/Eniya_V_Resume.pdf',
}

export const highlights = [
  { label: 'CGPA', value: '9.29 / 10' },
  { label: 'Research Intern', value: 'NIT Tiruchirappalli' },
  { label: 'Hackathon', value: '5th Place — QTHack04' },
]

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Programming',
    items: ['C', 'C++', 'Java', 'Python', 'SQL', 'JavaScript'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Backend & APIs',
    items: ['Flask', 'Node.js', 'REST APIs', 'JWT', 'RBAC'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'SQLite', 'MongoDB', 'SQLAlchemy'],
  },
  {
    category: 'AI / ML & Data',
    items: [
      'Pandas',
      'Scikit-learn',
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'Data Preprocessing',
      'Data Validation',
    ],
  },
  {
    category: 'Testing',
    items: ['pytest', 'Playwright', 'API Testing', 'Debugging', 'Root-Cause Analysis'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
]

export interface Experience {
  role: string
  company: string
  period: string
  type: 'intern' | 'research' | 'virtual'
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    role: 'ML / AI / Data Analytics Intern',
    company: 'NoviTech R&D Pvt. Ltd.',
    period: 'January 2026 – March 2026',
    type: 'intern',
    bullets: [
      'Built and tested Python data-validation and machine-learning workflows using Pandas and Scikit-learn.',
      'Automated preprocessing and validation pipelines to improve data reliability.',
      'Investigated data-quality defects through root-cause analysis and Python validation scripts.',
    ],
  },
  {
    role: 'Summer Research Intern',
    company: 'NIT Tiruchirappalli',
    period: 'May 2025 – July 2025',
    type: 'research',
    bullets: [
      'Worked on CTNet EEG motor imagery classification research project.',
      'Debugged data loading, preprocessing, and model-training stages using Python and PyTorch.',
      'Investigated GPU-memory constraints and performed API testing.',
    ],
  },
  {
    role: 'AI/ML Virtual Intern',
    company: 'AICTE',
    period: '2024',
    type: 'virtual',
    bullets: [
      'Completed milestone-based machine-learning modules using TensorFlow and Scikit-learn.',
    ],
  },
]

export interface Project {
  number: string
  title: string
  tag: string
  description: string
  bullets: string[]
  tech: string[]
  sourceUrl?: string   // GitHub repo — only include if real/verified
  demoUrl?: string     // Live demo — only include if verified
  highlight?: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: '8Vaults',
    tag: 'LIVE PRODUCT',
    description:
      'AI Code Audit & Technical Debt Analyzer — LLM-powered platform that detects 250+ issue types across security, performance, and code-quality dimensions.',
    bullets: [
      'Developed the core analysis engine in Java using OOP and REST APIs to surface actionable code insights.',
      'Integrated Generative AI to explain detected issues and suggest contextual fixes in natural language.',
      'Competed at QTHack04 (NQM & SRMIST), placing 5th in the Quantum Systems Track.',
    ],
    tech: ['Java', 'REST APIs', 'Generative AI', 'OOP'],
    sourceUrl: 'https://github.com/Eniya456/TR-163-8vaults',
    demoUrl: 'https://www.8vaults.online/',
    highlight: '🏆 5th Place — QTHack04, Quantum Systems Track, May 2026',
  },
  {
    number: '02',
    title: 'TripSwipe',
    tag: 'LIVE PRODUCT',
    description:
      'Live full-stack travel platform that aggregates flights, trains, buses, and cabs from third-party APIs and presents competitive pricing to travelers.',
    bullets: [
      'Co-founded the product and led frontend development using React and Node.js.',
      'Integrated multiple third-party travel APIs for real-time data aggregation.',
      'Deployed and maintained on a live domain with production traffic.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    demoUrl: 'https://www.tripswipe.in',
  },
  {
    number: '03',
    title: 'Smart Blind Assist & SENCA',
    tag: 'ASSISTIVE TECH',
    description:
      'Real-time obstacle-detection and GPS-guided navigation system to help visually impaired users navigate independently.',
    bullets: [
      'Built obstacle-detection and object-tracking with OpenCV and TensorFlow.js.',
      'Integrated GPS-based voice-guided navigation for turn-by-turn assistance.',
      'Developed the companion web interface in React with MySQL data persistence.',
    ],
    tech: ['C++', 'Python', 'OpenCV', 'TensorFlow.js', 'GPS', 'React', 'MySQL'],
    sourceUrl: 'https://github.com/Eniya456/smart-blind-assist',
  },
  {
    number: '04',
    title: 'RentCare',
    tag: 'FULL-STACK',
    description:
      'Full-stack rental property maintenance management platform with secure authentication, role-based access, and automated testing.',
    bullets: [
      'Built REST API backend with Flask, SQLAlchemy ORM, and SQLite.',
      'Implemented JWT authentication and role-based access control (tenant / landlord / admin).',
      'Achieved full test coverage with pytest unit tests and Playwright end-to-end tests.',
    ],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'React', 'TypeScript', 'JWT', 'pytest', 'Playwright'],
    sourceUrl: 'https://github.com/Eniya456/Rent-Care',
  },
  {
    number: '05',
    title: 'EEG Motor Imagery',
    tag: 'RESEARCH',
    description:
      'Brain-computer interface research project at NIT Tiruchirappalli using the CTNet architecture for EEG motor imagery classification.',
    bullets: [
      'Debugged data loading, preprocessing, and training pipelines using PyTorch.',
      'Investigated and resolved GPU-memory constraints during model training.',
      'Contributed to preprocessing quality improvements for EEG signal datasets.',
    ],
    tech: ['Python', 'PyTorch', 'EEG Signal Processing'],
  },
  {
    number: '06',
    title: 'Hospital Management',
    tag: 'LIVE PRODUCT',
    description:
      'Full-stack hospital management system with backend APIs, database design, and a reporting dashboard for clinical workflows.',
    bullets: [
      'Designed and implemented the MySQL database schema for patients, appointments, and records.',
      'Developed REST API endpoints for patient records, appointment scheduling, and reporting.',
      'Built an admin reporting dashboard in React with data visualization.',
    ],
    tech: ['React', 'Node.js', 'MySQL', 'REST APIs'],
    sourceUrl: 'https://github.com/Eniya456/hospital-management-system',
    demoUrl: 'https://hospital-management-meteor.vercel.app/',
  },
  {
    number: '07',
    title: 'NeuroType AI',
    tag: 'AI / HEALTHCARE',
    description:
      'Digital Parkinson\'s Early Detection System — AI health platform using behavioral biometrics including keystroke dynamics, voice analysis, and motor interaction.',
    bullets: [
      'Captured real-time keystroke dynamics (hold time, flight time, error rate) with high-precision browser APIs.',
      'Designed vocal biomarker pipeline analyzing Jitter, Shimmer, and Harmonics-to-Noise Ratio (HNR).',
      'Built multi-language UI (English, Tamil, Hindi) with Recharts risk trend tracking and localized health assessment.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'Python', 'Scikit-learn'],
    sourceUrl: 'https://github.com/Eniya456/parkinson-detection-technology-',
  },
]

export interface Certificate {
  id: string
  code: string
  title: string
  issuer: string
  platform?: string
  date?: string
  status: 'VERIFIED' | 'COMPLETED'
  skills: string[]
  credentialUrl?: string
  imagePath: string
  color: string        // Accent color
  badgeText?: string
}

export const certificates: Certificate[] = [
  {
    id: 'cert-sap',
    code: 'CERT_SAP_CLOUD',
    title: 'SAP Certified - Back-End Developer - ABAP Cloud',
    issuer: 'SAP',
    platform: 'Credly',
    date: 'Mar 28, 2026',
    status: 'VERIFIED',
    skills: ['ABAP Cloud', 'Clean Core Principles', 'SAP BTP', 'SAP S/4HANA', 'RESTful App Model (RAP)'],
    credentialUrl: 'https://www.credly.com/badges/bfd3765d-9428-4209-9737-955a1f90cfe9',
    imagePath: '/certificates/sap-abap-cloud.png',
    badgeText: 'SAP Certified',
    color: '#0ea5e9',
  },
  {
    id: 'cert-deloitte',
    code: 'CERT_DELOITTE',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    platform: 'Forage',
    date: 'June 17th, 2025',
    status: 'VERIFIED',
    skills: ['Data Analysis', 'Forensic Technology', 'Data Cleansing', 'Dashboard Modeling'],
    credentialUrl: 'https://forage-recruiting-api.herokuapp.com/verify/GSYW5m3vSChsQcBf8',
    imagePath: '/certificates/deloitte-analytics.png',
    badgeText: 'Deloitte Certified',
    color: '#10b981',
  },
  {
    id: 'cert-infosys',
    code: 'CERT_INFOSYS',
    title: 'Full Stack Swift Development',
    issuer: 'Infosys',
    platform: 'Infosys Springboard',
    date: 'June 24, 2025',
    status: 'VERIFIED',
    skills: ['Swift', 'Full Stack Development', 'RESTful Architecture', 'Mobile & Web Integration'],
    credentialUrl: 'https://verify.onwingspan.com',
    imagePath: '/certificates/infosys-swift.png',
    badgeText: 'Infosys Springboard',
    color: '#0284c7',
  },
  {
    id: 'cert-ibm',
    code: 'CERT_IBM_AI',
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    platform: 'Coursera',
    date: 'Apr 21, 2025',
    status: 'VERIFIED',
    skills: ['Artificial Intelligence', 'Machine Learning Concepts', 'Deep Learning', 'Generative AI Applications'],
    credentialUrl: 'https://coursera.org/verify/4Y3F5Y00WYBF',
    imagePath: '/certificates/ibm-ai.png',
    badgeText: 'IBM Authorized',
    color: '#4f46e5',
  },
  {
    id: 'cert-meta',
    code: 'CERT_META_DB',
    title: 'Database Structures and Management with MySQL',
    issuer: 'Meta',
    platform: 'Coursera',
    date: 'Apr 21, 2025',
    status: 'VERIFIED',
    skills: ['MySQL', 'Database Architecture', 'Normalization', 'Relational Schemas', 'SQL Queries'],
    credentialUrl: 'https://coursera.org/verify/6X4EXE9PRD6R',
    imagePath: '/certificates/meta-mysql.png',
    badgeText: 'Meta Authorized',
    color: '#2563eb',
  },
]
