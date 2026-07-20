import {AnimatePresence, motion} from 'motion/react';
import { useState } from "react";

const MotionDiv = motion.create('div');

export interface TabItem {
  title: string
  content: React.ReactNode
}

interface TabsProps {
  tabs?: TabItem[]
}

const defaultTabs: TabItem[] = [
  {
    title: "Draft Tab",
    content: "Content is here and will change."
  },
  {
    title: "Low-Fi Tab",
    content: "Content here is low-fidelity and may change."
  },
  {
    title: "Hi-Fi Tab",
    content: "Content here is high-fidelity and close to final."
  }
]

const Tabs = ({ tabs = defaultTabs }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className = "flex flex-col gap-1">
       <div className = "relative flex flex-row gap-4 py-2 overflow-x-auto border-b border-gray-200">
            {tabs.map((tab, index) => (
            <div key={index}
                onClick={() => setActiveTab(index)}
                className = "relative z-20 flex flex-col flex-shrink-0 cursor-pointer"
                >
                {activeTab === index && (
                    <MotionDiv
                        layoutId = "pill"
                        layout
                        transition = {{ ease: 'easeInOut', duration: 0.3 }}
                        className = "absolute inset-0 z-10 w-full h-auto bg-blue-200 rounded-md"
                    />
                    )}
                    <h3 className = {activeTab === index ? "text-blue-800 font-medium relative z-20 px-2 whitespace-nowrap" : "text-gray-400 relative z-20 px-2 whitespace-nowrap hover:font-medium"}>
                        {tab.title}
                    </h3>

            </div>
        ))}
       </div>
       <AnimatePresence
       mode='wait'
       >
         {tabs[activeTab] && (
            <MotionDiv
             key = {activeTab}
             initial = {{opacity: 0}}
             animate = {{opacity: 1}}
             exit = {{opacity: 0}}
             transition = {{duration: 0.2, ease: "easeOut"}}
            >
                <div>{tabs[activeTab].content}</div>
            </MotionDiv>
         )}
       </AnimatePresence>
    </div>
  )
}

export default Tabs