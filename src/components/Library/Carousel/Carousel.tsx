import Button from "@components/Button";
import { buttonVariant } from "@types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CarouselContent from "./CarouselContent";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className = "flex justify-center items-center h-full relative">
        <Button
        variant = {buttonVariant.Icon}
        >
            <ArrowLeft className = "h-4 w-4"></ArrowLeft>
        </Button>
        <CarouselContent>
            <CarouselItem></CarouselItem>
        </CarouselContent>
        <Button
        variant = {buttonVariant.Icon}
        >
            <ArrowRight className = "h-4 w-4"></ArrowRight>
        </Button>
    </div>
  )
}

export default Carousel