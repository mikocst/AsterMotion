import React, { useId } from 'react'
import { useRadioGroupContext } from './RadioGroup'
import { AnimatePresence, motion } from 'motion/react';

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    id?: string;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLInputElement>
}

const RadioItem = ({id, value, children, ref, ...props}: RadioItemProps) => {
    const context = useRadioGroupContext();
    const generatedLocalId = useId();
    const radioItemId = id ?? generatedLocalId;

    const isSelected = context.value === value;
    const isHovered = context.hover === value;


  return (
    <div
    onMouseEnter={() => context.onHoverChange(value)}
    className = "flex flex-row gap-2 items-center relative"
    ref = {ref}
    >
        <input
        {...props}
        type = "radio"
        // ref = {ref}
        id = {radioItemId}
        name = {context.name}
        checked = {isSelected}
        onChange = {() => context.onValueChange(value)}
        className = "absolute inset-0 opacity-0 cursor-pointer"
        />
        <div className = "w-4 h-4 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-center overflow-hidden">
            <div className = "w-2 h-2 bg-blue-500 rounded-lg opacity-0"></div>
            <AnimatePresence>
                {isHovered && (
                <motion.div 
                layoutId='bubble'
                animate = {{opacity: 1}}
                className = "w-2 h-2 bg-blue-300 rounded-lg absolute"></motion.div>
                )}
            </AnimatePresence>
        </div>
        <label htmlFor = {radioItemId}>
            {children || value}
        </label>
    </div>
  )
}

export default RadioItem