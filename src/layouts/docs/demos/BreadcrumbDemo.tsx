import Breadcrumb from '@components/Library/Breadcrumb/Breadcrumb';
import type { BreadcrumbItem } from '@components/Library/Breadcrumb/types';

const items = [
  { id: '1', title: 'Home', link: '#' },
  { id: '2', title: 'Docs', link: '#' },
  { id: '3', title: 'Components', link: '#' },
  { id: '4', title: 'Breadcrumb', link: '#' },
];

const renderStaticBreadcrumbItem = (item: BreadcrumbItem) => <span>{item.title}</span>;

const BreadcrumbDemo = () => <Breadcrumb items={items} maxItems={3} renderItem={renderStaticBreadcrumbItem} />;

export default BreadcrumbDemo;
