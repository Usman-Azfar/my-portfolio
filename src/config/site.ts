import type {
  AboutConfig,
  AchievementsConfig,
  EducationEntry,
  ExperienceEntry,
  FooterConfig,
  HeroConfig,
  JournalEntryData,
  LeadershipEntry,
  NavItem,
  PersonConfig,
  ProjectEntry,
  PublicationEntry,
  ResearchConfig,
  SocialConfig,
  TechCategoryData,
  ThemeConfig,
} from "@/types";

// ============================================================================
// THEME — single source of truth for the visual system.
// Change these values to restyle the entire site without touching components.
// ============================================================================
export const theme: ThemeConfig = {
  background: "#04070D",
  backgroundElevated: "#0B1220",
  surface: "#0D1522",
  surfaceSecondary: "#101B2B",
  text: "#EAF3FF",
  muted: "#9AA9BE",
  mutedDim: "#6B7A90",
  primary: "#7CC7FF",
  secondary: "#5EEAD4",
  accent: "#A78BFA",
  border: "rgba(148, 163, 184, 0.14)",
  borderStrong: "rgba(148, 163, 184, 0.2)",
  glow: "rgba(124, 199, 255, 0.22)",
};

// ============================================================================
// PERSON
// ============================================================================
export const person: PersonConfig = {
  name: "Usman Azfar",
  shortName: "Usman Azfar",
  title: "Software Engineer · Researcher · Systems Builder",
  shortBio:
    "I build dependable AI for high-consequence systems — working across AI, software engineering, edge systems, and social impact.",
  email: "usmanazfarshafiq@gmail.com",
  phone: "+923246967670",
  location: "Lahore, Pakistan",
  resumeUrl: "/documents/Usman_Azfar_CV.pdf",
};

// ============================================================================
// NAVIGATION
// ============================================================================
export const navigation: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ============================================================================
// HERO
// ============================================================================
export const hero: HeroConfig = {
  eyebrow: "USMAN AZFAR",
  headline: "Software Engineer . Researcher . Systems Builder",
  statement: "I build dependable AI for high-consequence systems.",
  description:
    "I build reliable software systems for real-world problems, working across financial infrastructure, AI, edge systems, and research—turning complex technical ideas into practical, measurable solutions that perform under real-world constraints.",
  ctaPrimary: { label: "Explore My Work", href: "#experience" },
  ctaSecondary: { label: "Download CV", href: person.resumeUrl },
  indicators: [
    { label: "BS Computer Science", value: "PUCIT" },
    { label: "CGPA", value: "3.93 / 4.00" },
    { label: "Rank", value: "1st in Batch" },
  ],
};

// ============================================================================
// EDUCATION
// ============================================================================
export const education: EducationEntry[] = [
  {
    id: "bscs",
    degree: "BS Computer Science",
    institution: "PUCIT",
    parentInstitution: "University of the Punjab",
    location: "Lahore, Pakistan",
    period: "2022 — 2026",
    score: "3.93 / 4.00",
    scoreLabel: "CGPA",
    highlight: "1st in Batch",
    resultUrl: "/documents/BCSF22M512.pdf",
    resultLabel: "View result card",
    primary: true,
  },
  {
    id: "fsc",
    degree: "FSc Pre-Medical",
    institution: "Punjab College of Science",
    location: "Lahore / Sahiwal, Pakistan",
    period: "2019 — 2021",
    score: "1083 / 1100",
    scoreLabel: "98.5%",
    highlight: "Among top 5 in class",
    resultUrl: "/documents/FSC_Certificate-blurred.png",
    resultLabel: "View result card",
  },
  {
    id: "matric",
    degree: "Matriculation - Science",
    institution: "Hira Public School",
    location: "Nankana Sahib, Pakistan",
    period: "2017 — 2019",
    score: "1080 / 1100",
    scoreLabel: "98.2%",
    highlight: "2nd in District",
    resultUrl: "/documents/Matric_Certificate-blurred.png",
    resultLabel: "View result card",
  },
  {
    id: "elementary",
    degree: "Elementary Education",
    institution: "Al Janoub International School",
    location: "Saudi Arabia",
    period: "2013 — 2017",
    score: "A+",
    scoreLabel: "Result",
    highlight: "Among top 2 in class",
    resultUrl: "/documents/Saudia_modified.pdf",
    resultLabel: "View result card",
  },
];

// ============================================================================
// TECH STACK
// ============================================================================
export const techStack: TechCategoryData[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { name: "Java", relatedExperienceIds: ["infotech"] },
      { name: "Python", relatedExperienceIds: ["tekvill"] },
      { name: "Kotlin", relatedProjectIds: ["finance-tracker"] },
      { name: "C / C++" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Systems",
    items: [
      { name: "Spring Boot", relatedExperienceIds: ["infotech"] },
      { name: "REST APIs", relatedExperienceIds: ["infotech"] },
      { name: "SQL", relatedExperienceIds: ["infotech"] },
      { name: "Databases", relatedProjectIds: ["course-management"] },
      { name: "System Programming" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    items: [
      { name: "Machine Learning", relatedProjectIds: ["helmx"] },
      { name: "Deep Learning", relatedProjectIds: ["helmx"] },
      { name: "CNN", relatedProjectIds: ["helmx"] },
      { name: "NLP", relatedExperienceIds: ["tekvill"] },
      { name: "LLMs", relatedExperienceIds: ["tekvill"] },
      { name: "Computer Vision", relatedProjectIds: ["helmx"] },
      { name: "Edge AI", relatedProjectIds: ["helmx"] },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: [
      { name: "Android", relatedProjectIds: ["finance-tracker"] },
      { name: "Kotlin", relatedProjectIds: ["finance-tracker"] },
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud / DevOps",
    items: [
      { name: "AWS" },
      { name: "Docker", relatedExperienceIds: ["tekvill"] },
      { name: "Git" },
      { name: "Linux" },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    items: [
      { name: "System Design", relatedProjectIds: ["helmx"] },
      { name: "API Design", relatedExperienceIds: ["infotech"] },
      { name: "Database Design", relatedProjectIds: ["course-management"] },
      { name: "Software Architecture" },
    ],
  },
];

// ============================================================================
// WORK EXPERIENCE
// ============================================================================
export const experience: ExperienceEntry[] = [
  {
    id: "infotech",
    role: "Associate Software Engineer — Java Spring Boot",
    organization: "InfoTech",
    period: "March 2026 — Present",
    primary: true,
    overview:
      "Engineer production-grade backend systems for Marlin, an enterprise brokerage and financial-markets platform, building and optimizing financial workflows with Java, Spring Boot, REST APIs, and relational databases.",
     responsibilities: [
    "Design and develop production financial modules that support core brokerage and market operations.",
    "Engineer end-to-end transaction workflows spanning trade processing, confirmation, cash management, settlement, and client operations.",
    "Build secure backend services with authentication and authorization controls, integrating business logic with relational data systems.",
    "Automate and optimize operational workflows for cash settlement, reporting, and client communications to reduce manual intervention and processing overhead.",
  ],
    systems: [
      "Client Onboarding",
      "Money Market",
      "Cash Management",
      "Rollover & Termination",
      "Trade Processing",
      "Trade Confirmation",
      "Cash Settlement",
      "JasperReports",
      "Client Email Workflows",
      "Funds Withdrawal & Deposit",
      "Authentication / Authorization",
    ],
    impact: [
      "Reduced operational processing time by approximately 30–35% through backend workflow optimization and automation.",
      "Optimized financial workflows and backend processing logic to improve execution efficiency and reduce unnecessary operational overhead.",
      "Delivered production-ready financial workflows spanning client onboarding, money-market operations, cash management, trade processing, and settlement.",
      "Automated previously operationally intensive processes, reducing manual intervention across critical brokerage workflows.",
      "Contributed to end-to-end trade lifecycle processing, from transaction execution and confirmation through cash settlement.",
      "Improved consistency and reliability of financial operations by translating complex business workflows into structured backend services.",
      "Built and integrated reporting and client-communication workflows to streamline operational visibility and follow-up."
    ],
    technologies: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "SQL",
    "Relational Databases",
    "JasperReports",
    "SVN",
  ],
  },
  {
    id: "tekvill",
    role: "AI/ML Intern",
    organization: "Tekvill",
    period: "6 months",
    overview:
      "Built and productionized AI-powered solutions spanning NLP, LLM-based automation, and applied machine learning, taking models and intelligent workflows from development toward real-world use.",
    responsibilities: [
      "Developed an AI-powered profile automation and enhancement platform using Python, NLP, and LLM prompting to automate and improve content generation workflows.",
      "Contributed across the ML lifecycle, including model development, experimentation, testing, optimization, and deployment.",
      "Containerized and productionized AI services using Docker, improving deployment consistency and integration with the broader platform.",
      "Collaborated with engineering and product teams to translate AI capabilities into practical user-facing features."
   ],
    impact: [
       "Reduced manual profile-related effort by approximately 85% through AI-powered automation.",
      "Achieved 94% positive user feedback, demonstrating strong adoption and perceived usefulness of the AI solution.",
      "Increased user engagement by approximately 35% following productionization of the platform.",
      "Helped transition AI capabilities from experimentation into a deployable product workflow."
    ],
    technologies: ["Python", "Machine Learning", "NLP", "LLM Prompting", "Docker","Prompt Engineering"],
  },
  {
    id: "ta-os",
    role: "Teaching Assistant — Operating Systems & Data Structures",
    organization: "PUCIT",
    period: "12 months",
    overview:
      "Mentored 160+ students in Operating Systems and Data Structures, translating complex systems and algorithmic concepts into practical implementation skills through labs, debugging, and one-to-one guidance.",
    responsibilities: [
      "Led practical lab sessions covering processes, threads, CPU scheduling, memory management, synchronization, file systems, and core data structures.",
      "Provided one-to-one guidance on debugging, algorithm design, and systems programming, helping students bridge the gap between theoretical concepts and working implementations.",
      "Supported students in developing stronger problem-solving and systems-level reasoning through hands-on programming exercises.",
    ],
    impact: ["Mentored 160+ students in operating systems, data structures, and systems-level programming.",
              "Helped students translate theoretical concepts into working implementations through practical labs and debugging support.",
              "Strengthened students' algorithmic problem-solving and systems-thinking skills through individualized mentorship."],
    technologies: ["Operating Systems", "Data Structures", "C/Cpp", "Systems Programming","Algorithm Design"],
  },
];

// ============================================================================
// DAILY ENGINEERING JOURNAL
// Seeded with representative entries — fill in the narrative fields as real
// daily notes are recorded. Marked [ADD CONTENT] where specifics are pending.
// ============================================================================
export const engineeringJournal: JournalEntryData[] = [
  {
    id: "journal-2026-08-21",
    experienceId: "infotech",
    date: "2026-08-21",
    title: "Client Onboarding Validation Issue",
    category: "Trade Processing",
    context: "[ADD CONTENT]",
    problem: "[ADD CONTENT]",
    investigation: "[ADD CONTENT]",
    solution: "[ADD CONTENT]",
    impact: "[ADD CONTENT]",
    learning: "[ADD CONTENT]",
    technologies: ["Java", "Spring Boot", "SQL"],
  },
  {
    id: "journal-2026-08-20",
    experienceId: "infotech",
    date: "2026-08-20",
    title: "Database Query Optimization",
    category: "Performance",
    context: "[ADD CONTENT]",
    problem: "[ADD CONTENT]",
    investigation: "[ADD CONTENT]",
    solution: "[ADD CONTENT]",
    impact: "[ADD CONTENT]",
    learning: "[ADD CONTENT]",
    technologies: ["SQL", "Spring Boot"],
  },
  {
    id: "journal-2026-08-19",
    experienceId: "infotech",
    date: "2026-08-19",
    title: "Authentication Issue",
    category: "Security",
    context: "[ADD CONTENT]",
    problem: "[ADD CONTENT]",
    investigation: "[ADD CONTENT]",
    solution: "[ADD CONTENT]",
    impact: "[ADD CONTENT]",
    learning: "[ADD CONTENT]",
    technologies: ["Java", "Spring Security"],
  },
  {
    id: "journal-2026-08-18",
    experienceId: "infotech",
    date: "2026-08-18",
    title: "Trade Processing Workflow",
    category: "Trade Processing",
    context: "[ADD CONTENT]",
    problem: "[ADD CONTENT]",
    investigation: "[ADD CONTENT]",
    solution: "[ADD CONTENT]",
    impact: "[ADD CONTENT]",
    learning: "[ADD CONTENT]",
    technologies: ["Java", "Spring Boot", "REST APIs"],
  },
];

// ============================================================================
// RESEARCH
// ============================================================================
export const research: ResearchConfig = {
  eyebrow: "RESEARCH",
  statement: "Dependable AI for High-Consequence Systems",
  interests: [
    "Dependable AI",
    "Edge AI",
    "Trustworthy AI",
    "Computer Vision",
    "Public Safety",
    "Software Engineering",
    "AI for Societal Impact",
  ],
  featured: {
    id: "helmx",
    title: "HelmX — AI-Powered Smart Helmet for Road Safety",
    summary:
      "An end-to-end edge-AI road-safety ecosystem that brings intelligent sensing, real-time risk detection, proactive rider assistance, and automated emergency response together across resource-constrained hardware, intelligent software, and mobile/web applications.",
    metrics: [
      { value: "~92%", label: "Crash anomaly detection" },
      { value: "~94%", label: "Drowsiness detection" },
      { value: "~80ms", label: "Inference" },
      { value: "~1.5MB", label: "Model footprint" },
    ],
    problem:
      "Motorcycle riders face safety risks that unfold in seconds—drowsiness, sudden crashes, navigation-related distraction, and delayed emergency response. Existing solutions typically address these risks separately, leaving riders without a unified system that can detect danger in real time, provide immediate assistance, and automatically respond when a rider can no longer call for help",
    motivation:
      "Real-world crash data is scarce and difficult to collect, making fully supervised crash detection challenging. At the same time, safety-critical systems cannot depend entirely on cloud connectivity or powerful remote infrastructure; intelligence needs to operate locally, quickly, and reliably on resource-constrained hardware.",
    methodology:
      "Developed HelmX as an end-to-end intelligent safety system, beginning with multi-sensor data acquisition from IMU, cameras, GPS, and environmental sensors. An unsupervised crash-anomaly detector was developed to address the scarcity of labeled crash data, while a CNN-based computer-vision model was developed for real-time drowsiness detection. Both models were optimized for low-latency edge inference and integrated with navigation, voice interaction, environmental monitoring, and automated emergency response, with mobile and web applications providing analytics, configuration, and system monitoring.",
    architecture:
      "HelmX follows a four-layer architecture: helmet-mounted sensors and cameras capture real-time rider and environmental data; an edge AI layer processes safety-critical signals locally for low-latency crash and drowsiness detection; cloud infrastructure handles data storage, synchronization, and emergency coordination; and mobile and web applications provide rider analytics, system configuration, monitoring, and control. Together, these layers form a connected safety pipeline from sensing and on-device intelligence to real-time response and user interaction.",
    experiments:
      "Evaluated the AI models for detection performance and real-time edge inference, while designing the broader system around measurable constraints including detection accuracy, emergency-alert latency, GPS accuracy, usability, battery life, and application stability.",
    results:
      "~92% crash-anomaly detection accuracy, ~94% drowsiness detection accuracy, ~80ms on-device inference latency, and a ~1.5MB combined model footprint, demonstrating the feasibility of real-time AI inference on resource-constrained edge hardware.",
    limitations: "The system is limited by the scarcity of real-world crash data, connectivity requirements for cloud-dependent features, power and hardware constraints on the helmet, and voice-recognition degradation in noisy environments.",
    futureWork: "Future work includes developing lighter and more efficient edge models, reducing connectivity dependence, expanding multilingual voice support, integrating with government traffic and emergency-response infrastructure, and progressing from an academic prototype toward a commercial-grade safety platform.",
    images: [],
  },
};

// ============================================================================
// PUBLICATIONS
// ============================================================================
export const publications: PublicationEntry[] = [
  {
    id: "helmx-thesis",
    title: "HelmX: AI-Powered Smart Helmet for Road Safety",
    authors: "Usman Azfar, et al.",
    status: "Bachelor's Thesis — Under Peer Review",
    abstract:
      "Presents an unsupervised crash-anomaly detector and a CNN-based drowsiness detector, both optimized for edge deployment, as part of an end-to-end intelligent road-safety prototype integrating hardware sensors, edge AI, cloud infrastructure, mobile applications, and a web dashboard.",
    researchArea: ["Dependable AI", "Edge AI", "Public Safety"],
  },
];

// ============================================================================
// PROJECTS
// ============================================================================
export const projects: ProjectEntry[] = [
  {
    id: "marlin",
    slug: "marlin-brokerage-platform",
    title: "Marlin — Brokerage & Trade Platform",
    description:
      "An enterprise-grade financial platform for brokerage operations, trade processing, client onboarding, settlements, and reporting across complex market workflows.",
    problem:
      "Brokerage workflows involve high-risk operational complexity—client onboarding, trade confirmations, settlement processing, reporting, and secure access control all need to work reliably under strict financial-processing requirements.",
    solution:
      "Built and optimized production backend modules for Marlin using Java and Spring Boot, delivering secure APIs, financial workflow automation, and reporting capabilities that simplify operational processing while preserving reliability and traceability.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "SQL",
      "JasperReports",
      "Trade Processing",
      "Cash Settlement",
      "Client Onboarding",
      "Authentication / Authorization",
      "Financial Systems"
    ],
    architecture:
      "The platform follows a modular backend architecture organized around trade lifecycle workflows, client onboarding, cash management, settlement handling, and reporting. Services are structured to support secure request flows, data integrity checks, and finance-specific communication and reporting workflows across the brokerage lifecycle.",
    results: [
      "Reduced operational processing time by approximately 30–35%",
      "Automated core brokerage workflows including onboarding, settlement, and reporting",
      "Improved reliability in client communication and financial processing pipelines",
    ],
    images: [],
    videos: [],
    featured: true,
  },
  {
    id: "helmx",
    slug: "helmx",
    title: "HelmX- AI Powered Smart Helmet",
    description:
      "An AI-powered smart helmet for road safety, combining edge infrastructure, hardware sensors, machine learning models and mobile/web applications into a unified proactive mobility-safety platform.",
    problem:
      "Motorcycle riders face safety risks that unfold in seconds—drowsiness, sudden crashes, navigation-related distraction, and delayed emergency response. Existing solutions typically address these risks separately, leaving riders without a unified system that can detect danger in real time, provide immediate assistance, and automatically respond when a rider can no longer call for help.",
    solution:
      "HelmX addresses this gap through an integrated AI-powered safety ecosystem that continuously monitors the rider using on-device sensors and computer vision, detects crashes and drowsiness in real time, provides hands-free navigation and voice assistance, and automatically shares location and triggers emergency alerts when a crash is detected. A dedicated mobile app provides rider analytics and system configuration, while a web application enables broader monitoring and management—bringing these capabilities together into a unified, proactive road-safety solution.",
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Computer Vision",
      "Edge AI",
      "IoT",
      "Embedded Systems",
      "TensorFlow",
      "OpenCV",
      "AWS IoT Core",
      "MongoDB",
      "Firebase",
      "Kotlin",
      "React.js",
      "Next JS",
      "REST APIs",
      "Cloud"
  ],
    architecture:
      "HelmX follows a four-layer architecture: helmet-mounted sensors and cameras capture real-time rider and environmental data; an edge AI layer processes safety-critical signals locally for low-latency crash and drowsiness detection; cloud infrastructure handles data storage, synchronization, and emergency coordination; and mobile and web applications provide rider analytics, system configuration, monitoring, and control. Together, these layers form a connected safety pipeline from sensing and on-device intelligence to real-time response and user interaction.",
    results: [
      "~92% crash-anomaly detection accuracy",
      "~94% drowsiness detection accuracy",
      "~80ms on-device inference",
      "~1.5MB combined model footprint",
      "Recognized among the top projects (15–20) with the highest evaluation score (59/60)",
    ],
    images: [],
    videos: [],
    featured: true,
  },
  {
    id: "course-management",
    slug: "university-course-management-system",
    title: "University Course Management System",
    description:
      "A full-featured, role-based Course Management System built with Java and MySQL, replicating core university academic workflows for students, teachers, and administrators.",
    problem:
      "Having encountered some inefficiencies in my university’s content management system—from course enrollment and attendance to grades, transcripts,fee records, announcements and student support—I wanted to explore how a centralized system could make these processes more organized, accessible, and efficient for students, teachers, and administrators.",
    solution:
      "Designed and built an MVC-based university CMS that unifies academic workflows across Student, Teacher, and Admin roles, enabling course enrollment, attendance and grade management, transcript generation, announcements, messaging, help-desk support, and centralized administrative management through role-based access control.",
    technologies: [
    "Java",
    "Jakarta EE",
    "Servlets",
    "JSP",
    "MySQL",
    "MVC",
    "JavaScript",
    "Role-Based Authorization"
],
    images: [],
    videos: [],
  },
  {
    id: "finance-tracker",
    slug: "finance-expense-management-app",
    title: "Finance & Expense Management App",
    description:
      "A lightweight Android finance management app built for everyday use, helping users track income and expenses with live balance summaries, search, filtering, and persistent local records.",
    problem:
      "Managing everyday expenses manually can make it difficult to maintain an accurate running balance, find past transactions, and understand where money is being spent.",
    solution:
      "Built a Kotlin-based Android app with real-time income and expense summaries, categorized transaction management, search and filtering, and persistent local storage using SharedPreferences and Gson.",
    technologies: [
  "Kotlin",
  "Android",
  "Material Components",
  "RecyclerView",
  "SharedPreferences",
  "Gson"
],
    images: [],
    videos: [],
  },
];

// ============================================================================
// LEADERSHIP & SERVICE
// ============================================================================
export const leadership: LeadershipEntry[] = [
  {
    id: "ta-academics",
    category: "Academics",
    title: "Teaching Assistant — Operating Systems & Data Structures & Algorithms",
    role: "Teaching Assistant",
    date: "PUCIT",
    description:
      "Mentored students in core systems and DSA concepts through lab support, guided problem-solving, and one-to-one debugging assistance to build stronger academic confidence and implementation skills.",
    peopleImpacted: "160+ students",
    outcome: "Improved students' practical understanding of systems and algorithmic problem-solving.",
  },
  {
    id: "class-rep",
    category: "Academics",
    title: "Class Representative — PUCIT",
    role: "Class Representative",
    date: "PUCIT",
    description:
      "Served as the bridge between students and faculty, helping coordinate academic communication, resolve concerns, and support a smoother learning experience for the class while maintaining an inclusive and responsive student voice.",
    peopleImpacted: "60–70 students",
  },
  {
    id: "aetarix-co-founder",
    category: "Entrepreneurship",
    title: "Co-Founder & Software Engineer — Aetarix",
    role: "Custom Software & AI Automation Company | Aetarix",
    date: "Early-stage venture",
    description:
      "Co-founded an early-stage technology venture serving three active clients across custom software, AI automation, and digital transformation; driving engineering, system architecture, AI integration, and cloud strategy while translating client needs into production-ready solutions.",
    peopleImpacted: "3 active clients",
  },
  {
    id: "international-sourcing-sales",
    category: "Entrepreneurship",
    title: "International Sourcing & Sales",
    role: "Entrepreneurship",
    date: "1 year",
    description:
      "Sourced products from China for resale in Pakistan, independently managing supplier negotiation, logistics, pricing, and sales while building early entrepreneurial and financial decision-making skills.",
    peopleImpacted: "10+ suppliers · 60+ customers",
  },
  {
    id: "sports-registration",
    category: "Sports Leadership",
    title: "Registration Head — Sports Society",
    role: "Registration Head",
    date: "PUCIT",
    description:
      "Digitized the sports registration process and streamlined participant intake for university sports events, reducing manual overhead and improving efficiency.",
    peopleImpacted: "450+ students · 1,000+ participants",
    outcome: "Improved the registration process and supported higher turnout across events.",
  },
  {
    id: "sports-senior-coordinator",
    category: "Sports Leadership",
    title: "Senior Coordinator — Sports Society",
    role: "Senior Coordinator",
    date: "PUCIT",
    description:
      "Coordinated 8+ team members across 2 major sports events, helping manage planning, communication, and execution under a structured workflow.",
    peopleImpacted: "8+ coordinators · 2 major sports events",
    outcome: "Improved team coordination and event delivery across multiple campus-level activities.",
  },
  {
    id: "community-service",
    category: "Community Service",
    title: "Volunteer Group Lead",
    role: "Volunteer Group Lead",
    date: "Community Service",
    description:
      "Led a 5-member volunteer group delivering life-saving injections to thalassemia patients, running blood donation drives, and providing food and stationery for orphaned children.",
    peopleImpacted: "100+ injections · 150+ orphaned children",
  },
  {
    id: "education-support",
    category: "Community Service",
    title: "Educational Assistance Program",
    role: "Volunteer Group Lead",
    date: "Community Service",
    description:
      "Delivered structured educational assistance as part of a volunteer-led community service initiative, helping students improve academic confidence and continuity in learning.",
    peopleImpacted: "50+ students",
  },
];

// ============================================================================
// ACHIEVEMENTS
// ============================================================================
export const achievements: AchievementsConfig = {
  academic: [
    { label: "1st in BSCS Batch", detail: "PUCIT" },
    { label: "Among Top 5 in Class", detail: "FSc (Pre-Medical)" },
    { label: "2nd position in district", detail: "Matriculation" },
  ],
  competitive: [
    { label: "99.6 Percentile", detail: "HEC National Skills Competency Test", documentUrl: "/documents/NSCT_cropped.pdf" },
    { label: "Top 50 of 15,000", detail: "NSTC-17 Qualifier", documentUrl: "/documents/Stem-ezremove.png" },
    { label: "13th of 100 Teams", detail: "ICPC Regional Programming Contest — Round 1" },
    { label: "Runner-up", detail: "COMSATS Speed Programming Competition", documentUrl: "/documents/Comsats.jpeg" },
    { label: "ISSB Qualifier — Air Force", detail: "Qualified for the Air Force selection process through disciplined evaluation and interview stages", documentUrl: "/documents/ISSB_cropped_cropped.pdf" },
  ],
  scholarships: [
    { label: "CM Punjab Honhaar Scholarship", detail: "100% waiver of university fees" },
    { label: "Prime Minister Laptop Scheme", detail: "Latest-generation Lenovo laptop" },
    { label: "Punjab College High Merit Scholarship", detail: "100% waiver of college fees" },
    { label: "Lahore Board Merit / National Talent Scholarship", detail: "Generous stipend for 2 years" },
    { label: "Punjab Benevolent Fund Scholarship", detail: "Generous stipend for 6 years" },
    { label: "Student of the Month for 2 consecutive years", detail: "Monthly stipend for 2 years" },
  ],
  sports: [
    { label: "Wushu", detail: "2nd position, District level", documentUrl: "/documents/Wushu.jpg" },
    { label: "Football", detail: "Two-time winning team, Annual Sports Fiesta" },
    { label: "Cricket", detail: "Runner-up, Winter League" },
    { label: "Foosball", detail: "2nd position, Annual Sports Fiesta" },
    { label: "Handball", detail: "Gold medal, Annual Sports Fiesta" },
    { label: "Badminton", detail: "2nd position, League" },
    { label: "Indoor Games", detail: "Gold medal, Call of Duty Mobile; 2nd position, Ludo; 2nd position, Carrom; prominent positions in Tekken and FIFA across major events such as Annual Sports Fiesta and Winter League" },
  ],
};

// ============================================================================
// ABOUT
// ============================================================================
export const about: AboutConfig = {
  whoIAm:
    "I'm a Software engineer and researcher from Lahore, Pakistan, have completed my BS in Computer Science at PUCIT, University of the Punjab,Lahore and currently working as an Associate Software Engineer at Infotech. I'm drawn to problems where getting the engineering right actually matters to someone's safety or livelihood.",
  whatIBuild:
    "Production backend systems for financial infrastructure, AI-powered automation platforms, and edge AI systems like HelmX—where success isn’t just about model accuracy, but about making intelligence reliable, efficient, and deployable in the real world, even on a tiny footprint.",
  whatIResearch:
    "Trustworthy AI for high-consequence, edge-deployed systems—building models that remain robust under uncertainty, operate within tight compute and energy budgets, and perform reliably in the complexity of the real world rather than only on clean benchmark data.",
  whyICare:
    "I have seen how deeply people depend on systems they often have little control over—and how quickly things can fall apart when those systems aren’t designed for their reality. I want to build technology that is practical, resilient, and accessible, especially in the places where reliable systems can make the greatest difference.",
  beyondTechnology:
    "Outside of engineering, I’m usually chasing a new view in the north, experimenting with a new cuisine in the kitchen, or finding a competitive game of football or badminton.",
  interests: ["Travelling", "Exploring new places and cultures", "Sports", "Cooking"],
  currently: {
    building: "Production backend systems at InfoTech, alongside Aetarix—an early-stage software and AI automation venture I co-founded.",
    researching: "Trustworthy AI for high-consequence, edge-deployed systems, extending my HelmX thesis work into the broader challenge of reliable AI in the real world.",
  },
};

// ============================================================================
// SOCIAL
// ============================================================================
export const social: SocialConfig = {
  github: "https://github.com/Usman-Azfar/",
  linkedin: undefined, // [ADD CONTENT] — add LinkedIn profile URL
  email: person.email,
  cv: person.resumeUrl,
};

// ============================================================================
// FOOTER
// ============================================================================
export const footer: FooterConfig = {
  statement: "I build systems that turn technical ideas into measurable impact.",
  copyrightYear: 2026,
};

// ============================================================================
// AGGREGATE EXPORT
// ============================================================================
export const siteConfig = {
  theme,
  person,
  navigation,
  hero,
  education,
  techStack,
  experience,
  engineeringJournal,
  research,
  publications,
  projects,
  leadership,
  achievements,
  about,
  social,
  footer,
  seo: {
    title: "Usman Azfar — AI Engineer, Researcher & Systems Builder",
    description:
      "Personal portfolio of Usman Azfar — AI engineer, researcher and systems builder working across dependable AI, software engineering, edge systems and social impact.",
  },
};

export default siteConfig;
