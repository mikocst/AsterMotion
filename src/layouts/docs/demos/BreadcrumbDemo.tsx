import Breadcrumb from '@components/Library/Breadcrumb/Breadcrumb';
import type { BreadcrumbItem } from '@components/Library/Breadcrumb/types';
import type { DocVariant } from 'src/lib/docsRegistry';

const items = [
  { id: '1', title: 'Home', link: '#' },
  { id: '2', title: 'Docs', link: '#' },
  { id: '3', title: 'Components', link: '#' },
  { id: '4', title: 'Breadcrumb', link: '#' },
];

const renderStaticBreadcrumbItem = (item: BreadcrumbItem) => <span>{item.title}</span>;

const BreadcrumbDemo = () => <Breadcrumb items={items} maxItems={3} renderItem={renderStaticBreadcrumbItem} />;

const longItems: BreadcrumbItem[] = [
  { id: '1', title: 'Home', link: '#' },
  { id: '2', title: 'Docs', link: '#' },
  { id: '3', title: 'Components', link: '#' },
  { id: '4', title: 'Navigation', link: '#' },
  { id: '5', title: 'Breadcrumb', link: '#' },
  { id: '6', title: 'Examples', link: '#' },
];

export const breadcrumbVariants: DocVariant[] = [
  {
    label: 'Short path (no collapse)',
    description: 'Under maxItems, every crumb renders — no ellipsis.',
    node: (
      <Breadcrumb items={items.slice(0, 3)} maxItems={5} renderItem={renderStaticBreadcrumbItem} />
    ),
  },
  {
    label: 'Custom separator',
    description: 'The separator prop accepts any ReactNode in place of the default chevron.',
    node: (
      <Breadcrumb
        items={items}
        maxItems={5}
        separator={<span className="text-gray-300">/</span>}
        renderItem={renderStaticBreadcrumbItem}
      />
    ),
  },
  {
    label: 'Long path (collapsed)',
    description: 'Exceeding maxItems collapses the middle items into the ellipsis menu.',
    node: <Breadcrumb items={longItems} maxItems={3} renderItem={renderStaticBreadcrumbItem} />,
  },
];

export default BreadcrumbDemo;
