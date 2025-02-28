
import { Nav } from "@/components/Nav";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ConcoursCard } from "@/components/concours/ConcoursCard";
import { concours } from "@/data/concours";

export default function Concours() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Trophy className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-center">Nos Concours</h1>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-6 text-gray-600">
            <p>Faire défiler pour voir tous nos concours →</p>
          </div>
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {concours.map((concours, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 group">
                  <div className="p-1">
                    <ConcoursCard concours={concours} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious 
                className="relative inset-0 translate-y-0 bg-white hover:bg-gray-100"
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4" />
              </CarouselPrevious>
              <CarouselNext 
                className="relative inset-0 translate-y-0 bg-white hover:bg-gray-100"
                variant="outline"
              >
                <ChevronRight className="w-4 h-4" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
