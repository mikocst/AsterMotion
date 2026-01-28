import { createContext } from "react";

export interface CarouselContextProps {
    totalItems: number;
    activeIndex: number;
    setActiveIndex: (index:number) => void
    itemWidth: number;
}

export const CarouselContext = createContext<CarouselContextProps | null>(null)