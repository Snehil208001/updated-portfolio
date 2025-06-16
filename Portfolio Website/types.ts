export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; // Optional image for the project
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: number; // Optional: proficiency level (e.g., 1-5 or 1-100 for a progress bar)
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages' | 'Other';
}

export interface ContactLink {
  id: string;
  name: string;
  url: string;
  icon?: React.ReactNode; // For social media icons etc.
}