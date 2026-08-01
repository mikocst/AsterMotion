import Card from '@components/Library/Cards/Card';
import CardHeader from '@components/Library/Cards/CardHeader';
import CardTitle from '@components/Library/Cards/CardTitle';
import CardDescription from '@components/Library/Cards/CardDescription';
import CardFooter from '@components/Library/Cards/CardFooter';
import Button from '@components/Button';
import { buttonCopy, buttonVariant } from '@types';
import type { DocVariant } from 'src/lib/docsRegistry';

const CardDemo = () => (
  <Card size="md" variant="elevated" className="w-full max-w-sm bg-white border-gray-200 shadow-sm">
    <CardHeader>
      <CardTitle>Team Plan</CardTitle>
      <CardDescription>Everything you need to collaborate with your team.</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button buttonCopy={buttonCopy.SELECT_PLAN} variant={buttonVariant.Primary} />
    </CardFooter>
  </Card>
);

interface VariantCardProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'bordered' | 'flat' | 'elevated';
  behavior?: 'static' | 'interactive';
}

const variantCard = (label: string, description: string, className: string, props: VariantCardProps) => (
  <Card {...props} className={`w-full max-w-sm bg-white ${className}`}>
    <CardHeader>
      <CardTitle>{label}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

export const cardVariants: DocVariant[] = [
  {
    label: 'variant: bordered (default)',
    node: variantCard('Bordered', 'A simple border, no shadow.', 'border-gray-200', { size: 'sm', variant: 'bordered' }),
  },
  {
    label: 'variant: flat',
    node: variantCard('Flat', 'Muted background, no border.', '', { size: 'sm', variant: 'flat' }),
  },
  {
    label: 'variant: elevated',
    node: variantCard('Elevated', 'Border plus a soft shadow.', 'border-gray-200/50 shadow-sm', {
      size: 'sm',
      variant: 'elevated',
    }),
  },
  {
    label: 'behavior: interactive',
    description: 'Hover to see the lift + shadow transition.',
    node: variantCard('Interactive', 'Hover over this card.', 'border-gray-200', {
      size: 'sm',
      variant: 'bordered',
      behavior: 'interactive',
    }),
  },
];

export default CardDemo;
