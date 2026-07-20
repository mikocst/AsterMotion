export interface ChangelogEntry {
  date: string;
  title: string;
  description?: string;
  tag?: 'release' | 'feature' | 'design' | 'fix';
}

export const changelog: ChangelogEntry[] = [
  {
    date: '2026-07-20',
    title: 'V1 Launch',
    description: 'V1 launches with the base UI components that are most commonly used throughout the type of work I want to create. V2 is being planned to extend to more components and polishing v1 animations.',
    tag: 'release',
  },
  {
    date: '2026-04-22',
    title: 'Figma Design system created',
    description: 'Branding and philosophies defined in Figma and are now being implemented into code.',
    tag: 'design',
  },
];
