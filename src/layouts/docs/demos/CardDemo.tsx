import Card from '@components/Library/Cards/Card';
import CardHeader from '@components/Library/Cards/CardHeader';
import CardTitle from '@components/Library/Cards/CardTitle';
import CardDescription from '@components/Library/Cards/CardDescription';
import CardFooter from '@components/Library/Cards/CardFooter';
import Button from '@components/Button';
import { buttonCopy, buttonVariant } from '@types';

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

export default CardDemo;
