export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  architecture: string[];
  features: string[];
  backendDetails: {
    endpoints: string[];
    security: string[];
    database: string;
  };
  frontendDetails: {
    stateManagement: string;
    styling: string;
    keyComponents: string[];
  };
  challenges: string[];
  futureImprovements: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cs-fundamentals';
  icon?: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  phase: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  keyLearnings: string[];
  technologies: string[];
  highlight: string;
}

export interface TechnicalExpertisePillar {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  coreSubjects: string[];
}
