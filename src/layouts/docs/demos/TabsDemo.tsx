import Tabs from '@components/Library/Tabs';
import type { DocVariant } from 'src/lib/docsRegistry';

const TabsDemo = () => <Tabs />;

export const tabsVariants: DocVariant[] = [
  {
    label: 'Two tabs',
    description: 'The pill and content transitions work the same regardless of tab count.',
    node: (
      <Tabs
        tabs={[
          { title: 'Overview', content: 'A short summary lives here.' },
          { title: 'Details', content: 'Longer, more specific content goes here instead.' },
        ]}
      />
    ),
  },
  {
    label: 'Long tab labels',
    description: 'The header row scrolls horizontally (overflow-x-auto) instead of wrapping.',
    node: (
      <Tabs
        tabs={[
          { title: 'General Settings', content: 'General settings content.' },
          { title: 'Notification Preferences', content: 'Notification preferences content.' },
          { title: 'Billing & Invoices', content: 'Billing content.' },
        ]}
      />
    ),
  },
];

export default TabsDemo;
