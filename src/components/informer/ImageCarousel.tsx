
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { type Testimonial } from "./types";
import Autoplay from 'embla-carousel-autoplay';
import { useMemo } from 'react';

interface ImageCarouselProps {
  testimonials: Testimonial[];
}

export const ImageCarousel = ({ testimonials }: ImageCarouselProps) => {
  const carouselPlugins = useMemo(() => [
    Autoplay({
      delay: 4000,
    })
  ], []);

  return (
    <div className="mb-16">
      <Carousel 
        className="w-full max-w-3xl mx-auto"
        plugins={carouselPlugins}
        aria-label="Galerie de nos actions"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={`${item.name}-${index}`}>
              <div className="p-1">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="800"
                    height="400"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-lg text-primary">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="Image précédente" />
        <CarouselNext aria-label="Image suivante" />
      </Carousel>
    </div>
  );
};
