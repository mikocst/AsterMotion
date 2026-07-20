import Carousel from '@components/Library/Carousel/Carousel';
import CarouselItem from '@components/Library/Carousel/CarouselItem';

const slides = ['Slide One', 'Slide Two', 'Slide Three'];

const CarouselDemo = () => (
  <div className="w-full h-40">
    <Carousel>
      {slides.map((slide) => (
        <CarouselItem key={slide} id={slide} item={slide} />
      ))}
    </Carousel>
  </div>
);

export default CarouselDemo;
