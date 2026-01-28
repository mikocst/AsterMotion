import Button from "@components/Button";
import { buttonVariant } from "@types";
import { ArrowLeft } from "lucide-react";

const Carousel = () => {
  return (
    <div className = "flex justify-center items-center h-full relative">
        <Button
        variant = {buttonVariant.Icon}
        >
            <ArrowLeft></ArrowLeft>
        </Button>
        <div className = "flex justify-center items-center">
            <p>1</p>
        </div>
        <button>d</button>
    </div>
  )
}

export default Carousel