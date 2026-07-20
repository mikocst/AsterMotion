import RadioGroup from '@components/Library/RadioGroup/RadioGroup';
import RadioItem from '@components/Library/RadioGroup/RadioItem';

const RadioGroupDemo = () => (
  <RadioGroup defaultValue="monthly" name="billing-cycle">
    <RadioItem value="monthly">Monthly</RadioItem>
    <RadioItem value="yearly">Yearly</RadioItem>
  </RadioGroup>
);

export default RadioGroupDemo;
