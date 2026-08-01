import Badge from '@components/Library/Badge';
import type { DocVariant } from 'src/lib/docsRegistry';

const BadgeDemo = () => (
  <div className="flex flex-row flex-wrap gap-2">
    <Badge color="blue" variant="pill">Default</Badge>
    <Badge color="green" variant="pill">Success</Badge>
    <Badge color="red" variant="pill">Error</Badge>
    <Badge color="yellow" variant="pill">Warning</Badge>
    <Badge color="mono" variant="flat">Mono</Badge>
  </div>
);

export const badgeVariants: DocVariant[] = [
  {
    label: 'variant: pill',
    description: "rounded-md, the default shape for status pills.",
    node: (
      <div className="flex flex-row flex-wrap gap-2">
        <Badge color="blue" variant="pill">Blue</Badge>
        <Badge color="green" variant="pill">Green</Badge>
        <Badge color="red" variant="pill">Red</Badge>
        <Badge color="yellow" variant="pill">Yellow</Badge>
      </div>
    ),
  },
  {
    label: 'variant: monoPill',
    description: "same rounded-md shape, meant to pair with color: mono.",
    node: <Badge color="mono" variant="monoPill">Mono Pill</Badge>,
  },
  {
    label: 'variant: flat',
    description: "rounded-sm, a sharper edge for dense filter/tag lists.",
    node: (
      <div className="flex flex-row flex-wrap gap-2">
        <Badge color="mono" variant="flat">Flat</Badge>
        <Badge color="blue" variant="flat">Flat</Badge>
      </div>
    ),
  },
];

export default BadgeDemo;
