import Badge from '@components/Library/Badge';

const BadgeDemo = () => (
  <div className="flex flex-row flex-wrap gap-2">
    <Badge color="blue" variant="pill">Default</Badge>
    <Badge color="green" variant="pill">Success</Badge>
    <Badge color="red" variant="pill">Error</Badge>
    <Badge color="yellow" variant="pill">Warning</Badge>
    <Badge color="mono" variant="flat">Mono</Badge>
  </div>
);

export default BadgeDemo;
