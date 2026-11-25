export type ProficiencyLevel = 'Comfortable using' | 'Working knowledge' | 'Currently learning';

export type SkillCategory = 'Programming' | 'Web Development' | 'Database' | 'AI / Machine Learning' | 'Python & AI Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: ProficiencyLevel;
  highlight?: string;
}

export type ProjectCategory = 'All' | 'Software Development' | 'Artificial Intelligence' | 'Machine Learning' | 'Data Analytics';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  featured: boolean;
  shortDescription: string;
  fullOverview: string;
  technologies: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl?: string;
  imagePlaceholder: {
    badge: string;
    gradient: string;
  };
  keyFeatures: string[];
  datasetInfo?: {
    name: string;
    size: string;
    details: string;
    classes?: string[];
  };
  architectureDetails?: {
    modelType: string;
    pipeline: string[];
    scope: string;
    experimentalNote?: string;
  };
  evaluationMetrics?: {
    primaryMetric: string;
    scores: { [key: string]: string };
    confusionMatrix?: {
      trueNormal: number;
      falseNormal: number;
      truePneumonia: number;
      falsePneumonia: number;
    };
  };
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  certificateAvailable: boolean;
}

export type CredentialCategory =
  | 'All'
  | 'Artificial Intelligence'
  | 'Generative AI and LLMs'
  | 'Prompt Engineering'
  | 'Responsible AI'
  | 'Database Management'
  | 'Data Analytics'
  | 'Process Intelligence';

export interface Certification {
  id: string;
  title: string;
  issuer: 'Google Cloud' | 'MongoDB' | 'IBM SkillsBuild' | 'Celonis' | 'Novitech';
  category: CredentialCategory[];
  issueDate?: string;
  verifiedDate: boolean;
  isDeprecated?: boolean;
  description: string;
  skillsLearned: string[];
  verificationUrl?: string;
  badgeColor: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  expectedGraduation: string;
  location: string;
  academicPerformance: string;
  keyCoursework: string[];
}
