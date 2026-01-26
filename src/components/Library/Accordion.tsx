import { ChevronLeft } from "lucide-react";
import {AnimatePresence, motion} from 'motion/react';
import { useState, useId } from "react";

interface AccordionProps {
    items: Array<{
        name: string
        content: string
    }>
}

const MotionDiv = motion.create('div');
const MotionChevronLeft = motion.create(ChevronLeft);

const Accordion = ({ items}: AccordionProps) => {
  const generatedId = useId();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordionItem = (index:number) => {
    if(activeIndex === index) {
        setActiveIndex(null);
    } else {
        setActiveIndex(index);
    }
}

  return (
    <div className = "flex flex-col gap-2">
        {items.map((item, index) => {
            const triggerId = `${generatedId}-trigger-${index}`
            const contentId = `${generatedId}-content-${index}`
    
            return (
            <div 
             key = {triggerId}
             className = "flex flex-col justify-between py-2 border-b border-gray-200"
             >
                <button 
                aria-controls = {contentId}
                id = {triggerId}
                aria-expanded = {activeIndex === index ? true : false   }
                className = "flex flex-row justify-between py-1 focus-visible:rounded-md cursor-pointer"
                onClick = {() => toggleAccordionItem(index)}
                >
                    <p className = "text-gray-700 font-medium">{item.name}</p>
                    <MotionChevronLeft
                        animate = {{rotate: activeIndex === index ? -90 : 0}}
                        transition = {{ease: 'easeOut', duration: 0.2}}
                        className="text-gray-400 w-[20px] h-[20px]"
                    >
                    </MotionChevronLeft>
                </button>
                <AnimatePresence>
                    {activeIndex === index && (
                    <MotionDiv
                    role="region"
                     id = {contentId}
                     aria-labelledby= {triggerId}   
                     initial = {{height: 0}}
                     animate = {{height: 'auto'}}
                     exit={{ height: 0 }}
                     transition={{ duration: 0.2, ease: "easeOut" }}
                     className = "overflow-hidden"
                     >
                        <div className = "py-2">
                            <p className = "text-gray-600">
                            {item.content}
                            </p>
                        </div>
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