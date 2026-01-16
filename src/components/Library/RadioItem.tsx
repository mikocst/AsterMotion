import React, { useId, useRef } from 'react'
import { useRadioGroupContext } from './RadioGroup'
import { AnimatePresence, easeOut, motion } from 'motion/react';
import { cn } from 'src/lib/utils';

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    yValue?: number,
    id?: string;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLInputElement>
}

const bubbleVariants = {
    initial: (direction: string) => ({
        opacity: 0,
        y: direction === null ? 0 : (direction === 'up' ? 2 : -2)
    }),

    animate: {opacity:1, y:0},

    exit: (direction: string) => ({
        opacity: 0,
        y:direction === null ? 0 : (direction === 'up' ? -2: 2),
        
    })
};

const RadioItem = ({id, value, yValue, children, ref, ...props}: RadioItemProps) => {
    const context = useRadioGroupContext();
    const generatedLocalId = useId();
    const radioItemId = id ?? generatedLocalId;

    const isSelected = context.value === value;
    const isHovered = context.hover === value;

    const containerRef = useRef(null);

    const handleMouseEnter = () => {
        const container = containerRef?.current;

        yValue = container.getBoundingClientRect().top

        context.onHoverChange(value, yValue)
    }


  return (
    <div
    onMouseEnter={() => handleMouseEnter()}
    className = "flex flex-row gap-2 items-center relative"
    ref = {containerRef}
    >
        <input
        {...props}
        type = "radio"
        ref = {ref}
        id = {radioItemId}
        name = {context.name}
        checked = {isSelected}
        onChange = {() => context.onValueChange(value)}
        className = "absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className = "w-4 h-4 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-center overflow-hidden">
            <AnimatePresence>
                {isSelected && (
                <motion.div 
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                exit = {{opacity: 0}}
                transition = {{ease: easeOut, duration:.2}}
                className = "w-2 h-2 bg-blue-500 rounded-lg relative z-20">
                </motion.div>
            )}
            </AnimatePresence>
            <AnimatePresence
            custom={context.direction}
            >
                {isHovered && (
                <motion.div 
                custom = {context.direction}   
                variants = {bubbleVariants} 
                initial = "initial" 
                animate = "animate"
                exit = "exit"
                className = "w-2 h-2 bg-gray-300 rounded-lg absolute z-10"></motion.div>
                )}
            </AnimatePresence>
        </div>
        <label htmlFor = {radioItemId}
        className = {cn("font-regular",isSelected ? " text-black" : "text-gray-500")}
        >
            {children || value}
        </label>
    </div>
  )
}

export default RadioItem