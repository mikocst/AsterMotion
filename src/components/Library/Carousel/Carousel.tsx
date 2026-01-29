import Button from "@components/Button";
import { buttonVariant } from "@types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselContent from "./CarouselContent";
import { useState, useRef, useLayoutEffect } from "react";
import React from "react";
import { CarouselContext } from "./CarouselContext";

interface CarouselProps {
    children?: React.ReactNode
}

const Carousel = ({children}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0)
  const widthRef = useRef<HTMLDivElement>(null);

  const handleLeftArrow = () => {
        setActiveIndex(Math.max(activeIndex - 1, 0))  
  }

  const handleRightArrow = () => {
        setActiveIndex(Math.min(activeIndex + 1, totalItems - 1)) 
  }

  const totalItems = React.Children.count(children);

  useLayoutEffect(() => {
        const observer = new ResizeObserver((entries) => {      
        const newWidth = entries[0].contentRect.width;
        if (newWidth > 0 && newWidth < 5000) {
            setItemWidth(newWidth);
        }
            
        })
        observer.observe(widthRef.current)
        return () => observer.disconnect()
  },[])

  console.log(itemWidth)

  return (
    <CarouselContext value = {{activeIndex, setActiveIndex, totalItems, itemWidth}}>
        <div className = "grid grid-cols-[auto_1fr_auto] gap-2 justify-center items-center w-full h-full relative overflow-hidden"
        >
        <Button
        variant = {buttonVariant.Icon}
        onClick={handleLeftArrow}
        >
            <ArrowLeft className = "h-4 w-4"></ArrowLeft>
        </Button>
             <div ref = {widthRef} className = " overflow-hidden h-full">
            <CarouselContent
            >
            {children}
        </CarouselContent>
        </div>
        <Button
        variant = {buttonVariant.Icon}
        onClick={handleRightArrow}
        >
            <ArrowRight className = "h-4 w-4"></ArrowRight>
        </Button>
    </div>
    </CarouselContext>
  )
}

export default Carousel