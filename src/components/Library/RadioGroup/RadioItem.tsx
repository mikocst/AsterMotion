import React, { useId, useEffect } from 'react';
import { useRadioGroupContext } from './RadioGroup';
import { AnimatePresence, easeOut, motion } from 'motion/react';
import { cn } from 'src/lib/utils';

interface RadioItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}

const bubbleVariants = {
  initial: (direction: 'up' | 'down' | null) => ({
    opacity: 0,
    y: direction === null ? 0 : (direction === 'up' ? 6 : -6)
  }),
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { ease: easeOut, duration: 0.15 }
  },
  exit: (direction: 'up' | 'down' | null) => ({
    opacity: 0,
    y: direction === null ? 0 : (direction === 'up' ? -6 : 6),
    transition: { ease: easeOut, duration: 0.15 }
  })
};

const RadioItem = ({ id, value, children, ref, ...props }: RadioItemProps) => {
  const context = useRadioGroupContext();
  const generatedLocalId = useId();
  const radioItemId = id ?? generatedLocalId;

  const isSelected = context.value === value;
  const currentIndex = context.registeredIds.indexOf(radioItemId)
  const isHovered = currentIndex !== -1 && context.hoveredIndex === currentIndex;

  useEffect(() => {
    return context.handleRegister(radioItemId)
  },[radioItemId, context.handleRegister])

  return (
    <div
      onMouseEnter={() => context.onHoverChange(currentIndex)}
      onFocus={() => context.onHoverChange(currentIndex)}
      className="flex flex-row gap-2 p-2 rounded-md items-center relative has-[:focus-visible]:ring-2"
    >
      <input
        {...props}
        type="radio"
        ref={ref}
        id={radioItemId}
        name={context.name}
        checked={isSelected}
        onChange={() => context.onValueChange(value)}
        className="absolute inset-0 z-30 opacity-0 cursor-pointer"
      />
      <div className="relative z-20 flex items-center justify-center w-4 h-4 border border-gray-300 rounded-lg cursor-pointer">
        <AnimatePresence>
          {isSelected && (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ ease: easeOut, duration: 0.15 }}
              className="absolute z-20 w-2 h-2 bg-blue-500 rounded-lg"
            />
          )}
        </AnimatePresence>
        
        <AnimatePresence custom={context.direction}>
          {isHovered && (
            <motion.div  
              custom={context.direction}   
              variants={bubbleVariants} 
              initial="initial" 
              animate="animate"
              exit="exit"
              className="absolute z-10 w-2 h-2 bg-gray-300 rounded-lg"
            />
          )}
        </AnimatePresence>
      </div>

      <label 
        htmlFor={radioItemId}
        className={cn("font-regular z-20", isSelected ? "text-black" : "text-gray-500")}
      >
        {children || value}
      </label>
    </div>
  );
};

export default RadioItem;