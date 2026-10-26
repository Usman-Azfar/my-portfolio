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
export const siteUrl = "https://my-portfolio-usman-0a4c.vercel.app";

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
  { label: "Courses", href: "#certifications" },
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
  statement: "Multimodal Edge AI for Integrated Motorcycle Safety",
  interests: [
    "Crash Detection",
    "Driver Drowsiness Monitoring",
    "Edge AI",
    "Computer Vision",
    "Sensor Fusion",
    "Embedded Systems",
    "Voice Interfaces",
    "Connected Safety",
  ],
  featured: {
    id: "helmx",
    title: "HelmX — Multimodal AI Smart Helmet for Road Safety",
    summary:
      "HelmX is a multi-module smart-helmet research and engineering project spanning crash detection, driver drowsiness monitoring, cameras, inertial and environmental sensors, Raspberry Pi edge computing, voice assistance, and connected safety workflows. Its mobile companion supports rider analytics and helmet customization; its web platform presents helmet information, lets visitors configure a build, and provides Stripe checkout in test mode.",
    metrics: [
      { value: "Crash + drowsiness", label: "Two AI research tracks" },
      { value: "Camera + IMU", label: "Primary perception inputs" },
      { value: "On-device", label: "Edge processing goal" },
      { value: "Voice + alerts", label: "Rider interaction" },
    ],
    problem:
      "Rider safety involves different signals and response paths: crashes must be detected from sudden motion, drowsiness develops through changing visual and behavioral cues, and the rider needs local feedback that remains useful when connectivity is poor. A useful helmet system also has to account for cameras, sensors, audio, voice interaction, power, and communication as one constrained platform.",
    motivation:
      "The project explores how complementary sensing and local AI can support motorcycle safety without making every decision depend on a cloud connection. It brings model behavior together with practical concerns such as alert timing, input quality, power limits, voice interaction, and the reliability of hardware and communication services.",
    methodology:
      "The crash-detection track uses accelerometer and gyroscope windows with a temporal Conv1D encoder, a supervised crash classifier, and an unsupervised reconstruction signal; a local alarm gives the rider a cancellation window before a GPS/GSM emergency message. The separate camera-based drowsiness track combines facial appearance with personalized eye-closure, blink, PERCLOS, yawn, head-pose, and input-quality dynamics in a temporal model. Both tracks are developed for edge inference, with subject-disjoint and held-out evaluation used where the datasets support it.",
    architecture:
      "The system design connects helmet cameras and IR illumination, an MPU-compatible IMU, a DHT22 temperature/humidity sensor, an MQ135 air-quality sensor, and NEO-6M GPS and SIM800L GSM modules to a Raspberry Pi-class edge layer. Separate crash and drowsiness pipelines process inertial and visual signals locally. Rider interaction includes a buzzer or vibration warning, voice-command cancellation, a voice assistant with speech recognition and spoken responses, and speaker output. BLE/MQTT, mobile and web software, and emergency messaging provide communication paths. The Android companion app is intended for rider analytics and helmet customization. The web platform presents product information and a 3D configurator, then uses Stripe Checkout in test mode for purchases. The declared hardware setup includes two 10,000 mAh batteries; their wiring and the speaker interface are unspecified. The Pi inventory is a dated configuration snapshot and does not establish end-to-end operation of every module.",
    experiments:
      "The crash model is evaluated on held-out windows and recording sessions, with multi-seed results, event-level alert rates, and additional out-of-distribution two-wheeler datasets used to probe generalization. Drowsiness work uses subject-disjoint development rotations and validation-only selection, then assesses causal video replay, event sensitivity, false alerts per hour, unavailable time, and time to first alert inside labeled clips. Clip-start timing is not treated as physiological drowsiness onset.",
    results:
      "For the crash subsystem, the supplied report records 0.95 ROC-AUC and 0.54 PR-AUC for the classifier on its held-out test split; across five seeds it reports 0.951 ± 0.011 ROC-AUC and 0.317 ± 0.058 F1. External evaluations also exposed transfer limits, including 4–14 false alerts per hour on an external scooter dataset and 0.35 classifier ROC-AUC on unseen DaRUS crashes. These are subsystem- and dataset-specific results, not a performance claim for the complete helmet. The drowsiness track remains exploratory and has no confirmatory performance claim.",
    limitations:
      "Crash data is limited and includes staged maneuvers and simulations; the supervised crash classifier has shown poor generalization to some unseen crash types, and false-alert rates rise on external two-wheeler data. Drowsiness datasets have limited diversity and clip-level labels do not identify event onset. The October 2026 Pi inventory is a configuration snapshot, not end-to-end validation, and does not confirm every sensor, voice, camera, or communication path. HelmX is a research prototype, not a certified safety device.",
    futureWork:
      "Improve and independently confirm both AI tracks, evaluate on more diverse licensed riding data, and measure false alerts, latency, availability, and power on the target hardware. Complete and validate the voice, speaker, sensor, camera, battery, and emergency-response integrations under realistic operating conditions, while documenting which features are implemented and which remain planned.",
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
    authors: "Usman Azfar, Abdul Hanan, Hamza Ahmad, and Awais Imtiaz",
    supervisor: "Dr. Tayyaba Tariq",
    status: "Bachelor's Thesis — Accepted",
    abstract:
      "Describes HelmX as an integrated motorcycle-safety project spanning inertial-sensor crash detection, camera-based drowsiness monitoring, edge AI, embedded sensors, and rider-facing alert and communication features. Its system scope includes voice interaction, GPS/GSM emergency workflows, an Android companion for rider analytics and helmet customization, and a web platform for product information, build configuration, and Stripe test-mode checkout. Research claims are reported by subsystem and evaluation dataset rather than presented as a single accuracy figure for the complete system.",
    researchArea: [
      "Crash Detection",
      "Driver Monitoring",
      "Edge AI",
      "Embedded Systems",
      "Sensor Fusion",
      "Public Safety",
    ],
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
    title: "HelmX - AI-Powered Smart Helmet for Road Safety",
    description:
      "An integrated motorcycle-safety research project combining inertial crash detection, camera-based drowsiness monitoring, embedded sensors, edge AI, rider alerts, voice interaction, and emergency workflows. Its ecosystem also includes an Android companion for rider analytics and helmet customization, plus a web platform for helmet information, configuration, and Stripe test-mode checkout.",
    problem:
      "Motorcycle safety involves distinct risks and response paths: crashes must be detected from sudden motion, drowsiness from visual and behavioral cues, and riders need timely local alerts even when connectivity is limited. Bringing these capabilities together also means accounting for cameras, sensors, audio, power, communication, and useful companion software.",
    solution:
      "HelmX brings together two separate AI tracks: an inertial crash-detection pipeline and a camera-based drowsiness-monitoring pipeline, designed for edge processing. The broader system design includes embedded sensing, rider alerts, voice interaction, and GPS/GSM emergency messaging. The Android companion is intended for rider analytics and helmet customization; the web platform provides product information, a 3D configurator, and Stripe Checkout in test mode.",
    technologies: [
      "Python",
      "Computer Vision",
      "Temporal AI Models",
      "Raspberry Pi",
      "IMU / GPS / GSM",
      "Android Companion",
      "Next.js",
      "Three.js",
      "Stripe",
    ],
    architecture:
      "Helmet cameras and IR illumination, an MPU-compatible IMU, DHT22 and MQ135 sensors, and GPS/GSM modules connect to a Raspberry Pi-class edge layer. Separate pipelines process inertial crash signals and camera-based drowsiness cues. Rider interaction includes buzzer or vibration alerts, voice cancellation and assistance, and speaker output. BLE/MQTT, emergency messaging, and mobile/web software provide connected workflows. Hardware inventory is a configuration snapshot; it does not establish that every integration is complete or validated end to end.",
    results: [
      "Crash subsystem report: 0.95 ROC-AUC and 0.54 PR-AUC on its held-out test split; external evaluations show generalization limits",
      "Drowsiness monitoring remains exploratory, without a confirmatory performance claim",
      "Web platform includes a 3D helmet configurator and Stripe test-mode checkout; Android companion is intended for analytics and customization",
    ],
    images: [],
    videos: [],
    githubUrl: "https://github.com/Usman-Azfar/HelmX-AI-Powered-Smart-Helmet",
    liveUrl: "https://helmx-silk.vercel.app/",
    featured: true,
  },
  {
    id: "campuscore",
    slug: "campuscore-web",
    title: "CampusCore — Campus Management System",
    description:
      "A three-role campus portal for students, teachers, and administrators, covering academic records, attendance, grading, fees, course requests, announcements, messaging, and support.",
    problem:
      "Campus workflows are often split across disconnected processes for enrollment, attendance, results, fees, and communication. Each role needs the right view of shared academic data, with business rules enforced consistently on the server.",
    solution:
      "Built a Java MVC web application with student, teacher, and administration portals. It supports semester and course management, enrollments and add/drop requests, lecture attendance, grade publishing and transcripts, fee challans, announcements, messaging, and a help desk.",
    technologies: [
      "Java 17",
      "Jakarta Servlets 6",
      "JSP",
      "MySQL 8",
      "JDBC",
      "HikariCP",
      "Apache Tomcat 10.1",
      "Maven",
      "JUnit 5",
    ],
    architecture:
      "Requests pass through authentication and role-authorization filters to servlets, which apply ownership checks and validation before calling JDBC DAOs and MySQL. JSP views render escaped output. Transactions protect multi-row operations such as enrollment changes, attendance and grade saves, and bulk fee challans.",
    results: [
      "Role-based portals with server-enforced academic and access-control rules",
      "Includes a live demo populated with fictional data that resets nightly",
      "JUnit coverage for core academic rules and workflows",
    ],
    images: [],
    videos: [],
    githubUrl: "https://github.com/Usman-Azfar/CampusCore-Web",
    liveUrl: "https://campuscore-web-9ehv.onrender.com/",
  },
  {
    id: "moneymate",
    slug: "moneymate-android",
    title: "MoneyMate — Personal Finance Tracker",
    description:
      "A native Android finance app for income, expenses, budgets, and payable or receivable debt, with offline-first Firestore sync, voice-assisted entry, reports, and an app lock.",
    problem:
      "A basic transaction list does not capture debt obligations, budget cycles, or the need to keep recording activity when connectivity drops. Voice entry and AI summaries also need validation and a dependable fallback.",
    solution:
      "Built a Kotlin app with local transaction handling and a replayable queue for Firestore synchronization. It includes an on-device rule-based voice parser, optional Gemini-assisted voice parsing with field validation and fallback, an AI finance advisor grounded in summarized user data, budget alerts, PDF/CSV reports, and PIN/fingerprint app locking.",
    technologies: [
      "Kotlin",
      "Android Views",
      "Firebase Authentication",
      "Cloud Firestore",
      "Google Gemini",
      "Android Speech APIs",
      "Gradle",
    ],
    architecture:
      "The Android app manages finance workflows locally and syncs pending changes to Cloud Firestore through a replayable operation queue when connectivity returns. Voice entry can use a deterministic on-device parser or an optional Gemini parser; model output is schema-checked and validated on-device before it can populate a transaction.",
    results: [
      "Tracks income, expenses, payable debt, and receivable debt with settlement and due-date handling",
      "Offline-first sync with a queued-write fallback",
      "Exports transaction reports as PDF and CSV",
    ],
    images: [],
    videos: [],
    githubUrl: "https://github.com/Usman-Azfar/MoneyMate-Android",
  },
  {
    id: "8086-debugger",
    slug: "8086-register-command-debugger",
    title: "8086 Register Command Debugger",
    description:
      "A machine-level MS-DOS debugger written in 8086 assembly, inspired by DEBUG.COM. It loads a program into an isolated 64 KB segment and can inspect registers, flags, and memory, disassemble code, and single-step real 8086 instructions.",
    problem:
      "Learning low-level debugging requires seeing how instructions change machine state. A simulator can obscure the distinction between emulated behavior and processor execution, while classic DOS tools offer limited guidance and visibility for a learner.",
    solution:
      "Implemented DEBUG-style commands for register and flag inspection/editing, memory dump/edit/fill, hexadecimal arithmetic, and disassembly. The trace command uses the processor Trap Flag to execute one instruction at a time, with breakpoint handling for interrupt instructions. A browser demo runs the DOS executable through DOSBox compiled to WebAssembly.",
    technologies: [
      "8086 Assembly",
      "MS-DOS",
      "JWasm",
      "DOSBox-X",
      "Python",
      "js-dos / WebAssembly",
    ],
    architecture:
      "The DOS program allocates and clears a dedicated 64 KB segment for the debugged program, maintains a register file, and uses DOS interrupt handlers for input, output, and tracing. Trap Flag stepping returns control after each instruction; temporary INT 3 breakpoints handle software interrupts. A Python test harness assembles the program and checks scripted sessions in DOSBox-X.",
    results: [
      "Implements register, flags, memory, trace, and 8086 disassembly commands",
      "Trace executes instructions on the CPU instead of simulating them",
      "Includes a browser-based DOSBox/WebAssembly demo and automated command-session tests",
    ],
    images: [],
    videos: [],
    githubUrl: "https://github.com/Usman-Azfar/8086-assembly-debugger",
    liveUrl: "https://usman-azfar.github.io/8086-assembly-debugger/",
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
