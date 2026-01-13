import { ChevronLeft } from "lucide-react";
import {AnimatePresence, motion} from 'motion/react';
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
const MotionChevronLeft = motion.create(ChevronLeft);

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
             className = "flex flex-col justify-between p-2 cursor-pointer"
             >
                <div className = "flex flex-row justify-between">
                    <p className = "text-gray-700 font-medium">{item.title}</p>
                    <MotionChevronLeft
                        animate = {{rotate: activeIndex === index ? -90 : 0}}
                        className="text-gray-400 w-[20px] h-[20px]"
                    >
                    </MotionChevronLeft>
                </div>
                <AnimatePresence>
                    {activeIndex === index && (
                    <MotionDiv
                     initial = {{height: 0, opacity: 0}}
                     animate = {{height: 'auto', opacity: 1}}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3, ease: "easeInOut" }}
                     >
                        <p className = "text-gray-600">
                            {item.content}
                        </p>
                    </MotionDiv>
                )}
                </AnimatePresence>
            </div>
            )
        })}
    </div>
  )
}

export default Accordion