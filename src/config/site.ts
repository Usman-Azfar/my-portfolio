import type {
  AboutConfig,
  AchievementsConfig,
  CertificationCredential,
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
export const siteUrl = "https://www.usmanazfar.dev";

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
      { name: "Machine Learning", relatedProjectIds: ["helmx"], relatedExperienceIds: ["tekvill"] },
      { name: "Deep Learning", relatedProjectIds: ["helmx"], relatedExperienceIds: ["tekvill"] },
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
    organization: "InfoTech Group",
    period: "March 2026 — Present",
    primary: true,
    overview:
      "Engineer production-grade backend systems for Marlin, an enterprise brokerage and financial-markets platform, building and optimizing financial workflows with Java, Spring Boot, REST APIs, and relational databases — including the integration of Ethiopia's Fayda national digital ID into client onboarding.",
     responsibilities: [
    "Design, develop, and optimize enterprise-scale financial modules — Client Onboarding, Money Market, Cash Management, Fund Withdrawal, Rollover, and Termination — that support core brokerage and market operations.",
    "Engineer end-to-end transaction workflows spanning trade processing, confirmation, cash management, settlement, and client operations.",
    "Build secure backend services with authentication and authorization controls, integrating business logic with relational data systems.",
    "Integrated the Fayda national digital ID (MOSIP eSignet, OpenID Connect) into Marlin's sign-up, online and broker-assisted onboarding, and mobile app: a server-side Authorization Code flow with PKCE and private_key_jwt client authentication, signed-token and UserInfo verification against JWKS, and enforcement of verified identity data, including joint holders and beneficiaries. Extended verification to previously registered clients, joint holders and beneficiaries, with atomic record updates and an account-wide verification status across web, mobile and login.",
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
      "Fayda National ID Integration",
    ],
    impact: [
      "Reduced operational processing time by approximately 30–35% through backend workflow optimization and automation.",
      "Optimized financial workflows and backend processing logic to improve execution efficiency and reduce unnecessary operational overhead.",
      "Delivered production-ready financial workflows spanning client onboarding, money-market operations, cash management, trade processing, and settlement.",
      "Automated previously operationally intensive processes, reducing manual intervention across critical brokerage workflows.",
      "Contributed to end-to-end trade lifecycle processing, from transaction execution and confirmation through cash settlement.",
      "Improved consistency and reliability of financial operations by translating complex business workflows into structured backend services.",
      "Built and integrated reporting and client-communication workflows to streamline operational visibility and follow-up.",
      "Brought national-ID verification to client onboarding on web and mobile, with verified identity data enforced for main holders, joint holders, and beneficiaries."
    ],
    technologies: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "OpenID Connect / OAuth 2.0",
    "SQL",
    "Oracle",
    "Relational Databases",
    "JasperReports",
    "SVN",
  ],
  },
  {
    id: "tekvill",
    role: "AI/ML Intern",
    organization: "Tekvill",
    period: "Sep 2025 — Feb 2026",
    overview:
      "Completed a six-month part-time internship (20 hours per week) within Tekvill's AI & Data Science Engineering Division, contributing to intelligent systems development and production-oriented machine learning workflows — from data preparation and model development to evaluation, optimization, and deployment.",
    credential: {
      label: "Internship completion certificate",
      href: "/documents/certificates/tekvill-ai-ml-internship.pdf",
    },
    responsibilities: [
      "Developed, evaluated, and benchmarked predictive statistical models and deep neural networks using Python, PyTorch, TensorFlow, and Scikit-learn.",
      "Engineered Retrieval-Augmented Generation (RAG) pipelines, integrated semantic vector embeddings using FAISS and ChromaDB, and fine-tuned open-weight language models using Hugging Face Transformers.",
      "Built automated data preprocessing and feature engineering pipelines, including feature normalization, imputation, and outlier detection for large-scale heterogeneous datasets.",
      "Prepared and packaged trained models for production-ready inference using FastAPI, Docker, and ONNX Runtime.",
      "Performed latency profiling and evaluated model performance using F1-score, Precision, Recall, and ROC-AUC metrics.",
      "Contributed to an AI-powered profile automation and enhancement solution using Python, NLP, and LLMs.",
    ],
    impact: [
      "Reduced manual profile-related effort by approximately 85% through AI-powered automation.",
      "Achieved 94% positive user feedback, demonstrating strong adoption and perceived usefulness of the AI solution.",
      "Increased user engagement by approximately 35% following productionization of the platform.",
      "Gained hands-on experience across the full machine learning lifecycle, from data quality and model development to efficient inference and production readiness.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face Transformers",
      "RAG",
      "FAISS",
      "ChromaDB",
      "FastAPI",
      "Docker",
      "ONNX Runtime",
      "NLP",
      "Deep Learning",
      "MLOps",
    ],
  },
  {
    id: "ta-os",
    role: "Teaching Assistant — Operating Systems and Data Structures & Algorithms",
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
// Day-by-day notes from InfoTech Group, newest first.
// ============================================================================
export const engineeringJournal: JournalEntryData[] = [
  {
    id: "journal-2026-11-10",
    experienceId: "infotech",
    date: "2026-11-10",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Gave the frontend each investor's Fayda status at login so it can decide whether to prompt for verification without an extra API call, then tested verification of existing clients end to end with the QA and frontend teams.",
    problem:
      "Login sessions are created and refreshed in several places, and the new lookup must never stop someone from logging in. In testing, a client can only be verified once, so the team needed a way to run the same scenario again and again.",
    investigation:
      "Traced every place a session is issued or refreshed, and checked each test client's data before handing it to QA.",
    solution:
      "Added the status to the login response and recalculated it on every session refresh, designed so a lookup problem never blocks a login. For testing, wrote a reset script that returns a test client and everyone on their account to Pending, touching only the data verification had changed. I dry-ran it in a rolled-back transaction before handing it over.",
    impact:
      "The frontend can drop a status call from every login. The first live verification of an existing client succeeded on the development environment, and QA can now repeat the flow as often as needed. The full suite of 280 automated tests and 125 integration tests passed.",
    learning:
      "Build the tools that make a feature testable as part of the feature. A safe, repeatable reset script did more for testing speed than any single fix.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Oracle SQL (PL/SQL)", "JUnit"],
  },
  {
    id: "journal-2026-11-06",
    experienceId: "infotech",
    date: "2026-11-06",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Let clients, joint holders and beneficiaries who registered before the integration verify their identity with Fayda now, and showed their status in the web screens and the mobile app.",
    problem:
      "Unlike a new registration, there's no save step afterwards: the record already exists, so it has to be updated safely the moment verification completes. An investor and their broker could act on the same account at once, and showing one status for an account is harder than it looks when it holds several people.",
    investigation:
      "Mapped who should be allowed to verify whom across online clients, offline clients, joint holders and beneficiaries before writing any code.",
    solution:
      "Added a verification flow for existing clients with clear permission rules. When verification completes, a single transaction updates the person's identity details, checks the account for duplicates and closes the request; any failure rolls everything back. The status is derived from existing data rather than a new column, and the mobile lists combine everyone on an account into one status: Pending if anyone still needs to verify, Verified only when all have.",
    impact:
      "Existing clients can now verify without re-registering, on web and mobile. 252 automated tests passed, plus 33 new integration tests against the development database that create and clean up their own data.",
    learning:
      "When a status can be derived from data you already have, derive it. Storing a second copy creates a new way for the two to drift apart.",
    technologies: ["Java", "Spring Boot", "Spring Transactions", "JDBC", "Oracle SQL", "JUnit"],
  },
  {
    id: "journal-2026-11-05",
    experienceId: "infotech",
    date: "2026-11-05",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Allowed clients, joint holders and beneficiaries verified through Fayda to be saved without an ID number, since Fayda doesn't provide one, while leaving every other ID type exactly as it was.",
    problem:
      "The ID number was used in places that had nothing to do with onboarding, including features that group a person's accounts together and beneficiary validation. Some downstream processes also genuinely need the number and can't simply skip it.",
    investigation:
      "Searched for every reader of the field, not just the screens that write it, and confirmed which paths were already safe before changing anything.",
    solution:
      "Changed only what needed it: for Fayda records, the features that identify the same person now rely on the verified identity instead of the ID number, and beneficiary validation skips the number check for Fayda beneficiaries only. The processes that still need the number were documented as open items for the business.",
    impact:
      "Fayda records can be saved without an ID number, and no other ID type changed. 217 automated tests and 92 integration tests passed, with no leftover test data.",
    learning:
      "Search for every reader of a field before changing its rules. The risky uses were far from where the change was requested.",
    technologies: ["Java", "Spring Boot", "JPA/Hibernate", "Oracle SQL", "JUnit", "H2"],
  },
  {
    id: "journal-2026-11-04",
    experienceId: "infotech",
    date: "2026-11-04",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Fixed the gaps the frontend team found while testing online applications and broker approval with Fayda-verified investors, and removed an old database rule that conflicted with the new account-limit design.",
    problem:
      "The application details didn't tell the screen whether an investor was verified, and showed no user details for investors who had already been approved. Approval also depended on an optional field some screens didn't send, and an older database rule blocked a valid second account for the same person.",
    investigation:
      "Followed each failing screen back to the API response and compared the old database rule with the new account-limit design.",
    solution:
      "Made the verification state part of every application read, and built the user details from the client record for approved investors. Approval now relies on the data itself instead of an optional flag. I removed the conflicting rule with a reviewed script and a matching rollback, leaving one place responsible for preventing duplicates.",
    impact:
      "The frontend shows the right verification state for pending and approved investors, approvals work from every screen, and a valid second account is no longer blocked. The script was recorded as a deployment step for the other environments.",
    learning:
      "When a rule moves to a new place, remove the old version of it. Two mechanisms enforcing slightly different rules will eventually disagree, and the older one is usually the one nobody remembers.",
    technologies: ["Java", "Spring Boot", "JPA/Hibernate", "Oracle SQL", "REST APIs"],
  },
  {
    id: "journal-2026-11-03",
    experienceId: "infotech",
    date: "2026-11-03",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Looked into a broker approval in online client onboarding that was failing with HTTP 400, and reviewed the existing account rules so the business could decide on the next changes.",
    problem:
      "At first it looked like the new identity checks might be the cause. The logs said otherwise: the screen was sending data in a slightly different shape than the API expected. I also needed to give the business a clear, evidence-backed picture of the current rules.",
    investigation:
      "Confirmed the root cause in the server logs and reproduced the failing request locally.",
    solution:
      "Confirmed the cause from the logs and reproduced it locally. Wrote a small reusable fix on the backend so the API accepts the format the screen sends while still rejecting malformed input, with no change to responses or other screens. For the review, I traced the existing validation and summarised what the business needs to decide before the new rules are built.",
    impact:
      "Broker approvals are unblocked without waiting for a frontend release. The fix went in with 10 new tests and the full suite of 189 passed.",
    learning:
      "Check the logs before blaming the newest code. Accepting small variations in input while staying strict about bad data gets rid of a whole class of integration bugs.",
    technologies: ["Java", "Spring Boot", "Jackson", "JUnit", "Oracle SQL"],
  },
  {
    id: "journal-2026-11-02",
    experienceId: "infotech",
    date: "2026-11-02",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Helped the frontend team hook the new screens up to the identity and account features, and tested the full flows end to end on the dev environment.",
    problem:
      "Things that pass automated tests can still break once a real UI sends real requests: a missing field, a different data shape, steps in an unexpected order. Several of the rules depend on account type, so each combination had to be run through the actual screens.",
    investigation:
      "Checked the database after each scenario to confirm what had been recorded.",
    solution:
      "Went through the main account-opening and approval scenarios with the frontend team. After each one I checked the database to confirm everything was saved as designed. Questions from the team went back into the handoff doc.",
    impact:
      "The new features are confirmed working through the real UI. The testing also raised a few questions about the business rules, which fed into the next requirement.",
    learning:
      "Testing alongside the people who use your API is its own kind of testing. Real requests show up assumptions that unit tests never question.",
    technologies: ["Java", "Spring Boot", "Oracle SQL", "Postman", "Browser DevTools"],
  },
  {
    id: "journal-2026-10-30",
    experienceId: "infotech",
    date: "2026-10-30",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Extended Fayda verification to joint account holders and beneficiaries, and added a new business rule on account limits.",
    problem:
      "The existing code rewrites joint-holder and beneficiary records on every update, so a verification link stored the usual way would be lost on the next save. The new limit also had to stay correct when an account's details changed.",
    investigation:
      "Read through how joint holders and beneficiaries get saved, which is where the rewrite-on-update pattern showed up.",
    solution:
      "Stored each person's verification in a way that survives those updates, and added checks so the same person can't appear twice on one account. Enforced the new limit in the database, and wrote a handoff doc so the UI team could integrate without guessing.",
    impact:
      "Everyone on an account can now be identity-verified, not just the main holder. 178 local tests and all the related integration suites passed against the dev database.",
    learning:
      "Check how legacy code actually saves data before building on it. The rewrite-on-update pattern would have quietly broken the obvious design.",
    technologies: ["Java", "Spring Boot", "JPA/Hibernate", "Oracle SQL", "Technical Documentation"],
  },
  {
    id: "journal-2026-10-29",
    experienceId: "infotech",
    date: "2026-10-29",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Made account saves respect verified identity: lock verified details like legal name, prevent duplicate accounts for the same person, and keep that working through the broker approval workflow.",
    problem:
      "Account data goes through several existing save paths, each with its own transaction behaviour. The checks had to hold up even when saves happen at the same time, and a failure halfway through couldn't leave records out of step.",
    investigation:
      "Used the save-path map from the 23rd to see where each path starts and finishes its transaction.",
    solution:
      "Enforced uniqueness in the database itself rather than relying on application checks alone. Wrapped the existing saves in a single transaction so an account and its identity link are always written together or not at all, and made sure the link follows the record correctly through approval and rejection.",
    impact:
      "Verified details are now protected and duplicate identities are blocked at the database level. 152 tests passing locally and 64 integration tests passing against the dev database, with no test data left behind.",
    learning:
      "Put the rules that matter where they can't be bypassed. A database constraint holds up better than application code, and wrapping the legacy saves was safer than rewriting them.",
    technologies: ["Java", "Spring Boot", "Spring Transactions", "JPA/Hibernate", "JDBC", "Oracle SQL"],
  },
  {
    id: "journal-2026-10-28",
    experienceId: "infotech",
    date: "2026-10-28",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Wrote the integration guide the mobile team needed for the new Fayda flow, and reviewed the revised plan for enforcing verified identities in account records.",
    problem:
      "The mobile team had to test a browser-to-app redirect before the provider-side mobile setup was in place, and testing on physical devices needed some non-obvious workarounds. The enforcement plan also had to cover cases the first draft missed.",
    investigation:
      "Checked each point of the revised plan against the code.",
    solution:
      "Wrote a step-by-step mobile guide covering the API contract, the handover back into the app, error and cancellation handling, and how to test locally on Android and iOS. Then went through the revised enforcement plan point by point, checked each decision against the code, and recorded what was out of scope and why.",
    impact:
      "The mobile team could build and test without waiting on us, and enforcement work started the next day from a plan everyone had agreed on.",
    learning:
      "Docs are part of the deliverable. Explaining a flow clearly enough for another team to follow is a good way to find the gaps in it.",
    technologies: ["Technical Writing", "REST API Design", "Deep Linking", "Android/iOS Testing"],
  },
  {
    id: "journal-2026-10-27",
    experienceId: "infotech",
    date: "2026-10-27",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Let users verify with Fayda at sign-up and finish registering later, and extended the flow to the Flutter mobile app.",
    problem:
      "Verification results are short-lived by design, but people often come back much later to finish registering. On mobile, the result had to get from the browser back into the app securely, without a separate provider setup.",
    investigation:
      "Looked at how results expire and how the existing web flow could hand control back to a native app.",
    solution:
      "Added a way to link a completed verification to the user's account once they confirm their sign-up, so they can finish later and only ever see their own result. For mobile I reused the existing web flow and added a secure handover back into the app instead of building a second integration. Also brought the implementation in line with the provider's latest integration guide.",
    impact:
      "Users can verify once and register whenever they're ready, on web or mobile. 127 automated tests passing, and the mobile changes checked on the dev database.",
    learning:
      "Reusing one well-secured flow across platforms beats building a second one. The handover between them is the tricky part, so that's where the design time should go.",
    technologies: ["Java", "Spring Boot", "OAuth 2.0", "Deep Linking", "Flutter", "Oracle SQL"],
  },
  {
    id: "journal-2026-10-26",
    experienceId: "infotech",
    date: "2026-10-26",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Added confirmation emails for verified identities across the three onboarding paths (self sign-up, online registration and broker-assisted registration), then ran the real endpoints against staging for the first time.",
    problem:
      "Each path had different needs. Broker-assisted registrations often take longer to finish than online ones, so one fixed rule didn't fit everyone. The dev network connection was also unreliable at times, which broke the default timeouts.",
    investigation:
      "Worked out what each onboarding path needed, and looked at how the connection was behaving during the slow periods.",
    solution:
      "Built a templated confirmation email for each flow, with the timing rules kept in configuration so each flow can be tuned separately. Tuned the network timeouts, then ran the full flow live against staging.",
    impact:
      "First full run of the real endpoints against the identity provider's staging environment. Every step worked and the returned data mapped correctly.",
    learning:
      "Same feature, different rules for different users. Keeping those rules in config saved a few rounds of rework when requirements changed.",
    technologies: ["Java", "Spring Boot", "HTML Email Templates", "Oracle SQL", "Postman"],
  },
  {
    id: "journal-2026-10-23",
    experienceId: "infotech",
    date: "2026-10-23",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Before enforcing verified identities in account records, I mapped how client data actually gets created, updated, approved and rejected across the existing onboarding paths.",
    problem:
      "The onboarding logic is spread over several older endpoints, each with its own conventions, and approval works differently depending on how a client was onboarded. Some of the naming in the code was misleading too, so I couldn't take anything at face value.",
    investigation:
      "Traced each save path from the controller down to the database.",
    solution:
      "Traced each save path end to end and wrote down how each flow really works, from validation through approval and error handling. From that I put together a list of design decisions and open questions for the team to review.",
    impact:
      "The enforcement design is based on how the system really behaves. We found and settled several edge cases before writing any code.",
    learning:
      "In a big legacy codebase, careful reading up front is the cheapest testing you can do. The one-page data flow map paid for itself quickly.",
    technologies: ["Java", "Spring Boot", "JPA/Hibernate", "Oracle SQL", "Technical Design Documentation"],
  },
  {
    id: "journal-2026-10-22",
    experienceId: "infotech",
    date: "2026-10-22",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Made the Fayda database scripts safe to run in every environment, and built an integration suite to prove the code behaves the same on Oracle as on the in-memory test database.",
    problem:
      "H2, which we use for fast unit tests, doesn't support everything Oracle does, like time-zone-aware timestamps and function-based indexes. So tests could pass locally while the real schema behaved differently. The scripts also get run by hand on a shared database, so they had to be re-runnable and fully reversible.",
    investigation:
      "Went through the scripts object by object to find what relied on Oracle-only features.",
    solution:
      "Switched the verification time columns to time-zone-aware timestamps with database-side defaults and added the remaining indexes. Every script now has pre-checks and a matching rollback that removes everything it creates. Then wrote an Oracle integration suite that's skipped by default, only runs when you switch it on, and deletes every row it inserts.",
    impact:
      "Schema changes are now predictable and easy to undo. The Oracle suite became the safety net for every database change after this.",
    learning:
      "Fast tests on a stand-in database only get you so far. A small opt-in run against the real engine catches what they miss.",
    technologies: ["Oracle SQL", "Java", "JUnit", "JDBC", "H2"],
  },
  {
    id: "journal-2026-10-21",
    experienceId: "infotech",
    date: "2026-10-21",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Turned yesterday's proof of concept into real backend endpoints for the web frontend: start a verification, complete it, and fetch the verified result.",
    problem:
      "Partway through, verifications against staging started failing because of a change on the provider's side, and I needed to pin down the exact cause before raising it with them. The API design also had to fit within our existing security setup.",
    investigation:
      "Tested the failing responses step by step until I could show the problem was on the provider's side.",
    solution:
      "Once I'd confirmed the issue was on the provider's side, I kept verification strict and reported it with evidence instead of loosening the check. Designed the endpoints so a verification result can only be read by the session that started it. Also wrote the database migration and rollback scripts, with constraints so the same identity can't be attached twice.",
    impact:
      "Shipped with 89 automated tests. The integration suite against the shared dev database passed 28/28 and cleaned up its own data.",
    learning:
      "When something outside your control breaks, collect proof and fail closed. That's much easier to defend than a quick workaround.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Oracle SQL", "JUnit", "H2"],
  },
  {
    id: "journal-2026-10-20",
    experienceId: "infotech",
    date: "2026-10-20",
    title: "Client Onboarding Validation (National ID (Fayda) Integration)",
    category: "Marlin ESX (Ethiopia)",
    context:
      "Started on the Fayda integration, so investors on our back-office platform can prove their identity with Ethiopia's national digital ID during sign-up and account registration. Today was about getting the security groundwork in place.",
    problem:
      "The staging environment didn't behave exactly the way its published configuration described, so I couldn't rely on the docs alone to know what the real integration would need.",
    investigation:
      "Ran real test logins against staging and noted every point where the behaviour differed from the spec.",
    solution:
      "Built the core security pieces first using standard OpenID Connect building blocks, all behind a feature flag so nothing touched production. Then ran real test logins against staging and wrote every difference from the spec, plus the failure cases I hit, into a findings doc for the team. Most of the later design ended up based on that doc.",
    impact:
      "We had a working end-to-end test login by the end of the first day, and a written list of the differences so nobody has to rediscover them later.",
    learning:
      "Provider docs are a starting point. A few hours testing against the real system answered things I'd never have got from reading.",
    technologies: ["Java", "Spring Boot", "OpenID Connect", "OAuth 2.0", "JWT"],
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
      "HelmX is my bachelor's thesis, which received the highest evaluation in its cohort (59/60 among 15–20 projects): a smart-helmet research system spanning crash detection, driver drowsiness monitoring, Raspberry Pi edge computing, voice assistance, and connected safety workflows. Its hybrid crash detector — a Conv1D autoencoder with a supervised classifier over inertial-sensor windows — reaches ROC-AUC ~0.95 on held-out data and runs as an ~82 KB INT8 model on real Raspberry Pi hardware. The deployment study behind it has been submitted to IEEE Sensors Journal.",
    metrics: [
      { value: "~0.95", label: "Crash classifier ROC-AUC (held-out)" },
      { value: "~82 KB", label: "INT8 model on Raspberry Pi 4" },
      { value: "180 min", label: "Live soak, zero deadline misses" },
      { value: "99.65%", label: "Decision agreement after deployment" },
    ],
    problem:
      "Rider safety involves different signals and response paths: crashes must be detected from sudden motion, drowsiness develops through changing visual and behavioral cues, and the rider needs local feedback that remains useful when connectivity is poor. A useful helmet system also has to account for cameras, sensors, audio, voice interaction, power, and communication as one constrained platform.",
    motivation:
      "The project explores how complementary sensing and local AI can support motorcycle safety without making every decision depend on a cloud connection. It brings model behavior together with practical concerns such as alert timing, input quality, power limits, voice interaction, and the reliability of hardware and communication services.",
    methodology:
      "The crash-detection track uses accelerometer and gyroscope windows with a temporal Conv1D encoder, a supervised crash classifier, and an unsupervised reconstruction signal; a local alarm gives the rider a cancellation window before a GPS/GSM emergency message. The separate camera-based drowsiness track (MediaPipe + MobileNetV3 + a temporal network, exported to ONNX) combines facial appearance with personalized eye-closure, blink, PERCLOS, yawn, head-pose, and input-quality dynamics. Both tracks are developed for edge inference, with subject-disjoint and held-out evaluation used where the datasets support it.",
    architecture:
      "The system design connects helmet cameras and IR illumination, an MPU-compatible IMU, a DHT22 temperature/humidity sensor, an MQ135 air-quality sensor, and NEO-6M GPS and SIM800L GSM modules to a Raspberry Pi-class edge layer. Separate crash and drowsiness pipelines process inertial and visual signals locally. Rider interaction includes a buzzer or vibration warning, voice-command cancellation, a voice assistant with speech recognition and spoken responses, and speaker output. BLE/MQTT, mobile and web software, and emergency messaging provide communication paths. The Android companion app is intended for rider analytics and helmet customization. The web platform presents product information and a 3D configurator, then uses Stripe Checkout in test mode for purchases. The declared hardware setup includes two 10,000 mAh batteries; their wiring and the speaker interface are unspecified. The Pi inventory is a dated configuration snapshot and does not establish end-to-end operation of every module.",
    experiments:
      "The crash model is evaluated on held-out windows and recording sessions, with multi-seed results, event-level alert rates, and additional out-of-distribution two-wheeler datasets used to probe generalization. Drowsiness work uses subject-disjoint development rotations and validation-only selection, then assesses causal video replay, event sensitivity, false alerts per hour, unavailable time, and time to first alert inside labeled clips. Clip-start timing is not treated as physiological drowsiness onset.",
    results:
      "For the crash subsystem, the supplied report records 0.95 ROC-AUC and 0.54 PR-AUC for the classifier on its held-out test split; across five seeds it reports 0.951 ± 0.011 ROC-AUC and 0.317 ± 0.058 F1. External evaluations also exposed transfer limits, including 4–14 false alerts per hour on an external scooter dataset and 0.35 classifier ROC-AUC on unseen DaRUS crashes. On a Raspberry Pi 4, the ~82 KB INT8 model ran through a 180-minute live soak with no sensor failures and no processing deadline misses, and the deployed pipeline agreed with its offline reference on 99.65% of 5,437 held-out decisions (90.21% on crash-like windows), as reported in the IEEE Sensors Journal submission. These are subsystem- and dataset-specific results, not a performance claim for the complete helmet. The drowsiness track remains exploratory and has no confirmatory performance claim.",
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
    id: "helmx-sensors-journal",
    title: "Sensor-Stream Integrity and Decision Fidelity in Helmet-Mounted IMU Crash Detection",
    authors: "Usman Azfar",
    status: "Submitted · Nov 2026",
    venueNote: "Manuscript submitted to IEEE Sensors Journal, November 3, 2026",
    abstract:
      "Studies whether a learned crash-detection policy keeps its offline behaviour once it runs continuously on a helmet-mounted IMU and a Raspberry Pi 4. The paper measures class-conditional decision fidelity, temporal validity, and decision-opportunity coverage across sensor acquisition, operating-system scheduling, causal preprocessing, and INT8 quantization, isolates a train/serve feature discrepancy, and checks the procedure against three simple baseline policies. The result is a reproducible method that separates successful sensor communication from temporally valid samples and usable decisions.",
    highlights: [
      { value: "267,891", label: "Error-free I²C reads in a 90-min run" },
      { value: "99.65%", label: "Overall decision agreement (90.21% on crash-like windows)" },
      { value: "80.99%", label: "Decision coverage in the same 90-min run" },
    ],
    researchArea: [
      "Inertial Sensing",
      "Sensor-Stream Integrity",
      "Decision Fidelity",
      "Edge AI",
      "Deployment Validation",
    ],
    links: [
      { label: "Author preprint, updated Nov 2026 (PDF)", href: "/documents/research/HelmX_IEEE_Sensors_Preprint.pdf" },
      { label: "Research artifacts (Zenodo v1.1.0)", href: "https://doi.org/10.5281/zenodo.23770989" },
      { label: "Source code", href: "https://github.com/Usman-Azfar/HelmX-AI-Powered-Smart-Helmet/tree/crash-detection" },
    ],
    statusNote:
      "Author preprint, submitted for peer review and not yet accepted or published by the journal. The Zenodo DOI identifies the research software and data, not the article.",
  },
  {
    id: "helmx-thesis",
    title:
      "HelmX: An AI-Powered Smart Helmet — Edge Crash Detection, Driver-State Monitoring and Connected Rider Services",
    authors: "Usman Azfar (Group Leader), Hamza Ahmad, Abdul Hanan, and Awais Imtiaz",
    supervisor: "Dr. Tayyaba Tariq",
    status: "Bachelor's Thesis — Accepted",
    venueNote:
      "Final Year Project Report, BS Computer Science, Department of Computer Science, FCIT, University of the Punjab, Lahore · Session 2025–2026",
    links: [
      { label: "Thesis (PDF)", href: "/documents/research/HelmX_Bachelor_Thesis_2026.pdf" },
      { label: "Source code", href: "https://github.com/Usman-Azfar/HelmX-AI-Powered-Smart-Helmet" },
    ],
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
    id: "openboxes",
    slug: "openboxes-open-source-contribution",
    title: "OpenBoxes — Open-Source Contribution",
    description:
      "Authored and merged a new REST API endpoint for OpenBoxes, an open-source supply-chain and inventory platform, exposing a user's roles with facility-level filtering. While investigating a follow-on issue, I also found a high-severity access-control vulnerability, reported it through a private GitHub Security Advisory, and confirmed it with a runtime proof of concept; I'm credited as the reporter and am coordinating the fix with the maintainers.",
    problem:
      "OpenBoxes had no API for fetching all the roles assigned to a user, and role data in a multi-facility inventory system has to respect facility scope and access control. Changes to a widely used open-source codebase also have to fit its existing architecture and pass maintainer review.",
    solution:
      "Built the endpoint with DTO and mapper layering and role-based access control, so callers can fetch a user's roles and filter them by facility. Covered it with full unit and HTTP integration tests, and worked with maintainers through issue discussion and code review until it was merged as PR #6221.",
    technologies: [
      "Java",
      "Grails",
      "Spring Boot",
      "Hibernate",
      "REST APIs",
      "Role-Based Access Control",
      "Unit & Integration Testing",
      "Security Research",
      "Responsible Disclosure",
    ],
    architecture:
      "The endpoint uses DTO and mapper layering to keep the API response separate from the platform's Java/Grails, Spring Boot and Hibernate domain model, with role-based access control and facility-level filtering applied to the returned roles. It is covered by unit tests and HTTP integration tests.",
    results: [
      "Merged into the OpenBoxes develop branch as PR #6221",
      "Reported a high-severity access-control vulnerability privately through a GitHub Security Advisory and was credited as the reporter",
      "Confirmed the issue with a runtime proof of concept in an isolated, throwaway test environment, documented the root cause, and proposed a fix for the maintainers",
      "Technical details stay private until a patch is released, in line with coordinated disclosure",
      "Followed the project's contribution and security-disclosure guidelines throughout, collaborating with maintainers via issue discussion and code review",
    ],
    images: [],
    videos: [],
    githubUrl: "https://github.com/openboxes/openboxes/pull/6221",
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
// FEATURED CERTIFICATION
// ============================================================================
export const featuredCertification: CertificationCredential = {
  title: "AWS Certified Solutions Architect - Associate",
  issuer: "Amazon Web Services",
  label: "International Certification",
  status: "Active",
  activeSince: "2026-06-17",
  expiresOn: "2029-06-17",
  verificationUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
  verificationCode: "b5f73e5355da404ab9fd8a6ce0b69977",
  image: "/documents/certificates/aws-solutions-architect-associate.png",
};

// ============================================================================
// LEADERSHIP & SERVICE
// ============================================================================
export const leadership: LeadershipEntry[] = [
  {
    id: "ta-academics",
    category: "Academics",
    title: "Teaching Assistant — Operating Systems and Data Structures & Algorithms",
    role: "Teaching Assistant · PUCIT",
    date: "12 months",
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
    title: "Co-Founder & Technology Contributor — Aetarix",
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
    { label: "1st in BSCS Batch", detail: "PUCIT — CGPA 3.93/4.00, University Gold Medal expected" },
    { label: "98.5% in FSc (Pre-Medical)", detail: "1083/1100, among the top 5 in class" },
    { label: "2nd position in district", detail: "Matriculation — 1080/1100 (98.2%)" },
  ],
  competitive: [
    { label: "99.6 Percentile", detail: "HEC National Skills Competency Test", documentUrl: "/documents/NSCT_cropped.pdf" },
    { label: "Top 50 of 15,000", detail: "NSTC-17 Qualifier", documentUrl: "/documents/Stem-ezremove.png" },
    { label: "30th of 208 Teams", detail: "ICPC Regional Programming Contest — Round 1", documentUrl: "/documents/ICPC_2024_Scoreboard.pdf#page=2" },
    { label: "Runner-up", detail: "COMSATS Technoverse'24 Coding Spree Competition", documentUrl: "/documents/Comsats.jpeg" },
    { label: "AI Hackathon Participant", detail: "PF-PUCon'25 — FCIT, University of the Punjab", documentUrl: "/documents/PUCON_2025_AI_Hackathon.jpg" },
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
    "I'm a Software engineer and researcher from Lahore, Pakistan, have completed my BS in Computer Science at PUCIT, University of the Punjab,Lahore and currently working as an Associate Software Engineer at InfoTech Group. I'm drawn to problems where getting the engineering right actually matters to someone's safety or livelihood.",
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
    building: "Production backend systems at InfoTech Group, alongside Aetarix—an early-stage software and AI automation venture I co-founded.",
    researching: "Trustworthy AI for high-consequence, edge-deployed systems, extending my HelmX thesis work into the broader challenge of reliable AI in the real world.",
  },
};

// ============================================================================
// SOCIAL
// ============================================================================
export const social: SocialConfig = {
  github: "https://github.com/Usman-Azfar/",
  linkedin: "https://www.linkedin.com/in/usman-azfar-75867a20b",
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
  featuredCertification,
  leadership,
  achievements,
  about,
  social,
  footer,
  seo: {
    title: "Usman Azfar — Software Engineer & AI Researcher",
    description:
      "Usman Azfar is a software engineer and AI researcher in Lahore, Pakistan: backend engineer at InfoTech Group, HelmX edge-AI researcher, AWS Certified, PUCIT.",
  },
};

export default siteConfig;
