export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: 'brain' | 'workflow' | 'chess';
}

export enum SectionId {
  HERO = 'hero',
  PILLARS = 'territory',
  ABOUT = 'about',
  WRITINGS = 'writings',
  AI_DEMO = 'ai-insight',
  CONTACT = 'contact',
}