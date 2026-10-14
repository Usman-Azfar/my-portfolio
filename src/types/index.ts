// Central type definitions for the portfolio's content model.
// Keeping these separate from src/config/site.ts allows future CMS/Supabase
// integrations to type-check against the same shapes without touching UI code.

export interface ThemeConfig {
  background: string;
  backgroundElevated: string;
  surface: string;
  surfaceSecondary: string;
  text: string;
  muted: string;
  mutedDim: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
  borderStrong: string;
  glow: string;
}

export interface PersonConfig {
  name: string;
  shortName: string;
  title: string;
  shortBio: string;
  email: string;
  phone?: string;
  location: string;
  resumeUrl: string;
}

export interface HeroConfig {
  eyebrow: string;
  headline: string;
  statement: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  indicators: { label: string; value: string }[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  parentInstitution?: string;
  location?: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlight?: string;
  resultUrl?: string;
  resultLabel?: string;
  primary?: boolean;
}

export interface TechItem {
  name: string;
  relatedProjectIds?: string[];
  relatedExperienceIds?: string[];
}

export interface TechCategoryData {
  id: string;
  label: string;
  items: TechItem[];
}

export interface MediaImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface MediaVideo {
  src: string;
  provider: "local" | "youtube" | "vimeo";
  poster?: string;
  caption?: string;
}

export interface JournalEntryData {
  id: string;
  experienceId: string;
  date: string; // ISO date, e.g. "2026-08-21"
  title: string;
  category: string;
  context: string;
  problem: string;
  investigation: string;
  solution: string;
  impact: string;
  learning: string;
  technologies: string[];
  images?: MediaImage[];
  videos?: MediaVideo[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  primary?: boolean;
  overview: string;
  responsibilities: string[];
  systems?: string[];
  impact: string[];
  technologies: string[];
}

export interface ResearchMetric {
  value: string;
  label: string;
}

export interface ResearchConfig {
  eyebrow: string;
  statement: string;
  interests: string[];
  featured: {
    id: string;
    title: string;
    summary: string;
    metrics: ResearchMetric[];
    problem: string;
    motivation: string;
    methodology: string;
    architecture: string;
    experiments: string;
    results: string;
    limitations: string;
    futureWork: string;
    images?: MediaImage[];
  };
}

export interface PublicationEntry {
  id: string;
  title: string;
  authors: string;
  status: string;
  abstract: string;
  researchArea: string[];
  journal?: string;
  conference?: string;
  doi?: string;
  pdfUrl?: string;
  citation?: string;
}

export interface ProjectEntry {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  architecture?: string;
  results?: string[];
  images?: MediaImage[];
  videos?: MediaVideo[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface LeadershipEntry {
  id: string;
  category: string;
  title: string;
  role: string;
  date: string;
  description: string;
  peopleImpacted?: string;
  outcome?: string;
  images?: MediaImage[];
  videos?: MediaVideo[];
}

export interface AchievementItem {
  label: string;
  detail?: string;
  documentUrl?: string;
}

export interface AchievementsConfig {
  academic: AchievementItem[];
  competitive: AchievementItem[];
  scholarships: AchievementItem[];
  sports: AchievementItem[];
}

export interface AboutConfig {
  whoIAm: string;
  whatIBuild: string;
  whatIResearch: string;
  whyICare: string;
  beyondTechnology: string;
  interests: string[];
  currently: {
    building: string;
    researching: string;
  };
}

export interface SocialConfig {
  github?: string;
  linkedin?: string;
  email: string;
  cv: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterConfig {
  statement: string;
  copyrightYear: number;
}
