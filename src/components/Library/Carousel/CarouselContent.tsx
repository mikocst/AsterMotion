import React from 'react'
import { useContext } from 'react';
import { CarouselContext } from './CarouselContext';
import { motion } from 'motion/react';

interface CarouselContentProps {
    children: React.ReactNode
    ref: React.RefObject<HTMLDivElement | null>
}

const CarouselContent = ({children, ref}: CarouselContentProps) => {

  const context = useContext(CarouselContext)
  if(!context) return null;

  return (
    <div 
    ref = {ref}
    className = "h-full w-full overflow-hidden">
        <motion.div 
        animate = {{x: -(context.activeIndex * context.itemWidth)}}
        transition = {{ease: 'easeOut', duration: 0.2}}
        className = "flex flex-row flex-nowrap w-max">
            {children}
        </motion.div>
    </div>
  )
}

export default CarouselContent