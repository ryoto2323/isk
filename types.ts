export interface Project {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  size: 'large' | 'medium' | 'small';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}