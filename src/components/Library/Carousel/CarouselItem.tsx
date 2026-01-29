import { useContext } from 'react';
import { CarouselContext } from './CarouselContext';
import { motion } from 'motion/react';

interface CarouselItemProps {
    item: string,
    index: number;
}

const CarouselItem = ({item, index}: CarouselItemProps) => {

  const context = useContext(CarouselContext);
  if(!context) return null;

  const isActive = context.activeIndex === index

  return (
    <motion.div 
    style={{width: context.itemWidth, minWidth: context.itemWidth}}
    className = "flex flex-shrink-0 h-full justify-center items-center rounded-md border border-gray-300 p-24">
            <p>{item}</p>
        </motion.div>
  )
}

export default CarouselItem