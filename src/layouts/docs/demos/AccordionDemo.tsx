import Accordion from '@components/Library/Accordion';

const items = [
  { name: 'What is Aster.motion?', content: 'Aster.motion is an open-source component library. Copy, paste, and edit the components for your own projects.' },
  { name: 'Is it free to use?', content: 'Yes, every component is free to copy, paste, and edit in any project, personal or commercial.' },
  { name: 'Does it use Tailwind?', content: 'Yes, every component is styled with Tailwind CSS utility classes and animated with Motion.' },
];

const AccordionDemo = () => <Accordion items={items} />;

export default AccordionDemo;
