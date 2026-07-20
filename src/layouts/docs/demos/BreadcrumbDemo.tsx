import Breadcrumb from '@components/Library/Breadcrumb/Breadcrumb';

const items = [
  { id: '1', title: 'Home', link: '#' },
  { id: '2', title: 'Docs', link: '#' },
  { id: '3', title: 'Components', link: '#' },
  { id: '4', title: 'Breadcrumb', link: '#' },
];

const BreadcrumbDemo = () => <Breadcrumb items={items} maxItems={3} />;

export default BreadcrumbDemo;
