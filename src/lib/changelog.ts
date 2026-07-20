export interface ChangelogEntry {
  /** ISO date string, e.g. '2026-07-20' */
  date: string;
  title: string;
  description?: string;
  tag?: 'release' | 'feature' | 'design' | 'fix';
}

// Add a new entry here whenever you ship an update to the component library.
// Entries are sorted by date automatically, so order doesn't matter.
export const changelog: ChangelogEntry[] = [
  {
    date: '2026-07-20',
    title: 'V1 Launch',
    tag: 'release',
  },
  {
    date: '2026-04-22',
    title: 'Figma Design system created',
    tag: 'design',
  },
];
