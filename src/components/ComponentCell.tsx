import { useState } from "react";
import Accordion from "./Library/Accordion";
import RadioGroup from "./Library/RadioGroup/RadioGroup";
import RadioItem from "./Library/RadioGroup/RadioItem";
import Carousel from "./Library/Carousel/Carousel";
import CarouselItem from "./Library/Carousel/CarouselItem";
import Badge from "./Library/Badge";
import Breadcrumb from "./Library/Breadcrumb/Breadcrumb";

interface ComponentCellProps {
      componentName: string;
      componentDemo: string;
}

const dialogContent = `Are you sure you want to make these changes? This action cannot be undone.`;

//for accordions
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
];


//for the breadcrumb also needs maxItems and renderItem if needed
const breadcrumbItems = [
  {
    id: 'id1',
    title: 'test 1',
    link: 'https://github.com/'
  },
  {
    id: 'id2',
    title: 'test 2',
    link: 'https://github.com/'
  },
  {
    id: 'id3',
    title: 'test 3',
    link: 'https://github.com/'
  },
  {
    id: 'id4',
    title: 'test 4',
    link: 'https://github.com/'
  },
]

const ComponentCell = () => {
  const [plan, setPlan] = useState("pro");

  return (
    <div className = "flex flex-col gap-2 p-3 border border-gray-200 rounded-lg">
        <h3 className = "text-lg">Component Cell</h3>
        <div className="p-3 border border-gray-100 rounded-md">
          <RadioGroup
          onValueChange = {setPlan}
          >
            <RadioItem
            value="hobby"
            index = {1}
            />
            <RadioItem
            value="pro"
            index={2}
            />
            <RadioItem
            value = "enterprise"
            index = {3}
            />
          </RadioGroup>
        </div>
      </div>
  )
}

export default ComponentCell