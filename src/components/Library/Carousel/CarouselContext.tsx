import { createContext } from "react";

interface CarouselContextProps {
    items: string[];
    activeIndex: number;
}

export const CarouselContext = createContext('CarouselContext')