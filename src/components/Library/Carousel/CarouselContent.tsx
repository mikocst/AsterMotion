import React from 'react'
import { useContext } from 'react';
import { CarouselContext } from './CarouselContext';
import { motion } from 'motion/react';

interface CarouselContentProps {
    children: React.ReactNode
}

const CarouselContent = ({children}: CarouselContentProps) => {

  const context = useContext(CarouselContext)
  if(!context) return null;

  return (
    <div 
    className = "h-full min-w-0 overflow-hidden">
        <motion.div 
        animate = {{x: -(context.activeIndex * context.itemWidth)}}
        transition = {context.itemWidth === 0 ? { duration: 0 } : { ease: 'easeOut', duration: 0.3 }}
        className = "flex flex-row ">
            {children}
        </motion.div>
    </div>
  )
}

export default CarouselContent