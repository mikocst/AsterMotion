import { createContext } from "react";

export interface CarouselContextProps {
    activeIndex: number;
    registerItem: (itemId: string) => void
    setActiveIndex: (index:number) => void
    itemWidth: number;
    itemIds: string[]
}

export const CarouselContext = createContext<CarouselContextProps | null>(null);
