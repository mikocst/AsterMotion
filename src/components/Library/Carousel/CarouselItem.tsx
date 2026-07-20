import { useContext, useId, useEffect } from 'react';
import type { ReactNode } from 'react';
import { CarouselContext } from './CarouselContext';
import { motion } from 'motion/react';

interface CarouselItemProps {
    item: ReactNode,
    id: string;
}

const CarouselItem = ({item, id}: CarouselItemProps) => {

  const context = useContext(CarouselContext);
  if(!context) return null;

  const generatedId = useId();
  const itemId = id || generatedId

  const myIndex = context.itemIds.indexOf(itemId)

  useEffect(() => {
    context.registerItem(itemId)
    return(() => context.deregisterItem(itemId))
  }, [])

  return (
    <motion.div 
    id = {itemId}
    animate = {myIndex === context.activeIndex ? {scale: 1 ,filter: 'blur(0px)'} : {scale: 0.95,filter: 'blur(10px)'}}
    transition = {{ease: 'easeInOut', duration: 0.2}}
    style={{width: context.itemWidth, minWidth: context.itemWidth}}
    className = "flex items-center justify-center h-full p-6 border border-gray-300 rounded-md sm:p-12 ">
            {item}
        </motion.div>
  )
}

export default CarouselItem