import Button from "@components/Button";
import { buttonVariant } from "@types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselContent from "./CarouselContent";
import { useState } from "react";
import React from "react";
import { CarouselContext } from "./CarouselContext";

interface CarouselProps {
    children: React.ReactNode
}

const Carousel = ({children}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftArrow = () => {
        setActiveIndex(Math.max(activeIndex - 1, 0))
        
  }

  const handleRightArrow = () => {
        setActiveIndex(Math.min(activeIndex + 1, totalItems - 1))
        
  }

  const totalItems = React.Children.count(children);

  return (
    <CarouselContext value = {{activeIndex, setActiveIndex, totalItems, itemWidth: 480}}>
        <div className = "flex justify-center items-center h-full relative">
        <Button
        variant = {buttonVariant.Icon}
        onClick={() => handleLeftArrow()}
        >
            <ArrowLeft className = "h-4 w-4"></ArrowLeft>
        </Button>
        <CarouselContent>
            {children}
        </CarouselContent>
        <Button
        variant = {buttonVariant.Icon}
        onClick={() => handleRightArrow()}
        >
            <ArrowRight className = "h-4 w-4"></ArrowRight>
        </Button>
    </div>
    </CarouselContext>
  )
}

export default Carousel