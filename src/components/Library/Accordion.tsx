import { ChevronLeft } from "lucide-react";
import {motion} from 'motion/react';
import { useState } from "react";

const accordionItems = [
    {
        title: "Product",
        content: "Product content goes here."
    },
    {
        title: "Design",
        content: "Design content goes here."
    },
    {
        title: "Development",
        content: "Development content goes here."
    }
]

const MotionDiv = motion.create('div');

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordionItem = (index: number) => {
    if(activeIndex === index) {
        setActiveIndex(null);
    } else {
        setActiveIndex(index);
    }
}

  return (
    <div className = "flex flex-col gap-2">
        {accordionItems.map((item, index) => {
            return (
            <div 
             key = {index}
             onClick = {() => toggleAccordionItem(index)}
             className = "flex flex-col justify-between p-2 border-b border-gray-200 cursor-pointer"
             >
                <div className = "flex flex-row justify-between">
                    {item.title}
                    <ChevronLeft className="text-gray-400 w-[20px] h-[20px]" />
                </div>
                {activeIndex === index && (
                    <MotionDiv
                     initial = {{height: 0, opacity: 0}}
                     animate = {{height: 'auto', opacity: 1}}>
                        {item.content}
                    </MotionDiv>
                )}
            </div>
            )
        })}
    </div>
  )
}

export default Accordion