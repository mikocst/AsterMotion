import Button from "@components/Button";
import { buttonVariant } from "@types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselContent from "./CarouselContent";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import React from "react";
import { CarouselContext } from "./CarouselContext";

interface CarouselProps {
    children?: React.ReactNode
}

const Carousel = ({children}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemIds, setItemIds] = useState<string[]>([]);
  const [itemWidth, setItemWidth] = useState(0)
  const widthRef = useRef<HTMLDivElement>(null);

  const handleLeftArrow = () => {
        setActiveIndex(Math.max(activeIndex - 1, 0))  
  }

  const handleRightArrow = () => {
        setActiveIndex(Math.min(activeIndex + 1, totalItems - 1)) 
  }

  const totalItems = itemIds.length;

   const registerItem = useCallback((newItem: string) => {
    setItemIds(prev => {
        if(!prev.includes(newItem)) {
            return [...prev, newItem]   
        }

        else {
            return prev
        }
    })
  },[]);

  const contextValues = useMemo(() => {
        return {
            activeIndex,
            setActiveIndex,
            registerItem,
            itemWidth,
            itemIds,
        }
  }, [activeIndex, setActiveIndex, registerItem, itemWidth, itemIds,])

  useEffect(() => {
        const observer = new ResizeObserver((entries) => {      
        const newWidth = entries[0].contentRect.width;
        if (newWidth > 0 && newWidth < 5000) {
            setItemWidth(newWidth);
            }
        })
        if(widthRef.current){
            observer.observe(widthRef.current)
        }
        return () => observer.disconnect()
  },[])

  return (
    <CarouselContext value = {contextValues}>
        <div className = "grid grid-cols-[auto_1fr_auto] gap-2 justify-center items-center w-full h-full relative overflow-hidden"
        >
        <Button
        variant = {buttonVariant.Icon}
        onClick={handleLeftArrow}
        >
            <ArrowLeft className = "w-4 h-4 text-gray-600"></ArrowLeft>
        </Button>
             <div ref = {widthRef} className = "h-full overflow-hidden ">
            <CarouselContent
            >
            {children}
        </CarouselContent>
        </div>
        <Button
        variant = {buttonVariant.Icon}
        onClick={handleRightArrow}
        >
            <ArrowRight className = "w-4 h-4 text-gray-600"></ArrowRight>
        </Button>
    </div>
    </CarouselContext>
  )
}

export default Carousel