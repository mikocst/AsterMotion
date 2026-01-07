import {AnimatePresence, motion} from 'motion/react';
import { useState } from "react";

const MotionDiv = motion.create('div');

const TabContent = [
  {
    title: "Draft Tab",
    content: "Content here is a draft and not finalized."
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

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    console.log(activeTab);
  return (
    <div className = "flex flex-col gap-1">
       <div className = "flex flex-row gap-4 py-2 border-b border-gray-200 relative">
            {TabContent.map((tab, index) => (
            <div key={index}
                onClick={() => setActiveTab(index)}
                className = "flex flex-col relative z-20 cursor-pointer"
                >
                {activeTab === index && (
                    <MotionDiv
                        layoutId = "pill"
                        layout
                        initial = {{ scale: 1, }}
                        animate={{ scaleX: [0.1, 1], scaleY: [0.8, 1], }}
                        transition = {{ type: 'spring', stiffness: 100, damping: 15, duration: 0.5 }}
                        className = "absolute inset-0 h-auto bg-blue-200 rounded-md z-10 w-full"
                    />
                    )}
                    <h3 className = {activeTab === index ? "text-blue-800 font-medium relative z-20 px-2" : "text-gray-400 relative z-20 px-2"}>
                        {tab.title}
                    </h3>

            </div>
        ))}
       </div>
       <AnimatePresence
       mode='wait'
       >
         {TabContent[activeTab] && (
            <MotionDiv
             key = {activeTab}
             initial = {{opacity: 0}}
             animate = {{opacity: 1}}
             exit = {{opacity: 0}}
             transition = {{duration: 0.2, ease: "easeOut"}}
            >
                <p>{TabContent[activeTab].content}</p>
            </MotionDiv>
         )}
       </AnimatePresence>
    </div>
  )
}

export default Tabs