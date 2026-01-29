import Button from "@components/Button";
import { buttonVariant } from "@types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselContent from "./CarouselContent";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { CarouselContext } from "./CarouselContext";

interface CarouselProps {
    children: React.ReactNode
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

  useEffect(() => {
    if (widthRef.current) {
        const observer = new ResizeObserver((entries) => {
            setItemWidth(entries[0].contentRect.width)
            
        })
        observer.observe(widthRef.current)
        return () => observer.disconnect()
    }
  },[setItemWidth])

  return (
    <CarouselContext value = {{activeIndex, setActiveIndex, totalItems, itemWidth}}>
        <div className = "flex justify-center items-center h-full relative">
        <Button
        variant = {buttonVariant.Icon}
        onClick={handleLeftArrow}
        >
            <ArrowLeft className = "h-4 w-4"></ArrowLeft>
        </Button>
        <CarouselContent
        ref = {widthRef}
        >
            {children}
        </CarouselContent>
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