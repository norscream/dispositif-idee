
import { Nav } from "@/components/Nav";
import { useState, useEffect } from 'react';
import { Header } from "@/components/informer/Header";
import { ImageCarousel } from "@/components/informer/ImageCarousel";
import { ActionGrid } from "@/components/informer/ActionGrid";
import { CTASection } from "@/components/informer/CTASection";
import { testimonials, shuffleArray, type Testimonial } from "@/components/informer/types";

export default function Informer() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setShuffledTestimonials(shuffleArray(testimonials));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Header />
          <ImageCarousel testimonials={shuffledTestimonials} />
          <ActionGrid />
          <CTASection />
        </div>
      </div>
    </div>
  );
}
