import React from 'react'
import { motion } from 'motion/react';

interface CarouselItemProps {
    item: string
}

const CarouselItem = ({item}: CarouselItemProps) => {
  return (
    <div className = "flex justify-center items-center rounded-md border border-gray-300 p-24 w-[480px]">
            <p>{item}</p>
        </div>
  )
}

export default CarouselItem