import {AnimatePresence, motion} from 'motion/react';
import { useState } from "react";

const MotionDiv = motion.create('div');

const Switch = () => {

const [isOn, setIsOn] = useState(true);

const toggleSwitch = () => {
    setIsOn(!isOn);
}

  return (
    <MotionDiv
    className = "w-10 h-5 bg-black rounded-full flex items-center cursor-pointer relative p-1"
    onClick={toggleSwitch}
    animate = {{backgroundColor: isOn ? '#0f327c' : '#e5e7eb'}}
    >
            <MotionDiv 
                initial = {{left: -2}}
                animate = {{left: isOn ? 0: 20,}}
                transition = {{type: 'spring', stiffness: 700, damping: 30}}
                className = "bg-white w-5 h-5 rounded-full absolute left-0"
            />
        </MotionDiv>
  )
}

export default Switch