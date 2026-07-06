import { useState } from "react";
import Accordion from "./Library/Accordion";
import RadioGroup from "./Library/RadioGroup/RadioGroup";
import RadioItem from "./Library/RadioGroup/RadioItem";
import Carousel from "./Library/Carousel/Carousel";
import CarouselItem from "./Library/Carousel/CarouselItem";
import Badge from "./Library/Badge";
import Breadcrumb from "./Library/Breadcrumb/Breadcrumb";
import Pagination from "./Library/Pagination/Pagination";
import PaginationPrevious from "./Library/Pagination/PaginationPrevious";
import PaginationContent from "./Library/Pagination/PaginationContent";
import PaginationNext from "./Library/Pagination/PaginationNext";
import { ToastProvider } from "./Library/Toast/ToastContext";
import Toaster from "./Library/Toast/Toaster";
import Toast from "./Library/Toast/Toast";
import { useToast } from "./Library/Toast/ToastContext";

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

//for toast

const ToastTriggerPanel = () => {
  const { addToast } = useToast()

  return (
    <div className="flex gap-2 mt-4 pt-4 border-gray-100">
      <button 
        onClick={() => addToast( "success", "Changes deployed successfully!")}
        className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
      >
        Trigger Success Toast
      </button>
    </div>
  )
}

const ComponentCell = () => {
  //for radio
  const [plan, setPlan] = useState("pro");
  const [current, setCurrent] = useState(1);


  return (
    <ToastProvider>
       <div className = "flex flex-col gap-2 p-3 border border-gray-200 rounded-lg">
        <h3 className = "text-lg">Component Cell</h3>
        <div className="p-3 border border-gray-100 rounded-md">
           <ToastTriggerPanel/>
        </div>
      </div>
      <Toaster position="top-right" expandedOnHover={true} />
    </ToastProvider>
  )
}

export default ComponentCell