import { useState } from "react";
import Accordion from "./Library/Accordion";
import RadioGroup from "./Library/RadioGroup";
import RadioItem from "./Library/RadioItem";
import Carousel from "./Library/Carousel/Carousel";

interface ComponentCellProps {
      componentName: string;
      componentDemo: string;
}

const dialogContent = `Are you sure you want to make these changes? This action cannot be undone.`;

const accordionItems = [{
  name: 'Product',
  content: 'Product goes here.'
},
{
  name: 'Development',
  content: 'Development goes here.'
},
{
  name: 'Interactions',
  content: 'Interaction goes here.'
}
]

const ComponentCell = () => {
  const [plan, setPlan] = useState("pro");

  return (
    <div className = "flex flex-col gap-2 p-3 border border-gray-200 rounded-lg">
        <h3 className = "text-lg">Component Cell</h3>
        <div className="p-3 border border-gray-100 rounded-md">
          <Carousel/>
        </div>
      </div>
  )
}

export default ComponentCell