
import { Nav } from "@/components/Nav";
import { ArrowLeft, Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const eventImages = [
  "/lovable-uploads/d25323b1-8a8e-4c7f-9271-16284835c250.webp",
  "/lovable-uploads/2b3c612b-b068-47d2-b8f9-1d4c10f88540.webp",
  "/lovable-uploads/29594d33-1cce-4a12-bf1c-2dd7787ec5de.webp",
  "/lovable-uploads/667ef80a-5fb0-4319-bf8a-f0cb881fa8db.webp",
  "/lovable-uploads/da6a8351-8cc7-4b05-90c8-b5eace2be8ca.webp",
  "/lovable-uploads/3c41785b-130c-47c0-88b7-786af814c934.webp",
  "/lovable-uploads/ee21d5b1-59e5-4d84-a7d5-576f1274d7dd.webp",
  "/lovable-uploads/87ca8540-88af-4e1a-83f4-dc3ccb4093f4.webp",
  "/lovable-uploads/c47322fa-c9e4-4ab6-9c47-60694edb21a9.webp",
  "/lovable-uploads/b3a85764-b287-439e-b02c-d010943becd0.webp",
  "/lovable-uploads/911149dd-8c50-4d33-b8e3-eeac78fd6022.webp",
  "/lovable-uploads/4e1dd86d-d102-4fc1-af69-ae45447a75aa.webp"
];

export default function Valoriser() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: string[]) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    setShuffledImages(shuffleArray(eventImages));
  }, []);

  const labelBenefits = [
    {
      title: "Un label pour récompenser l'audace des jeunes",
      description: "Le label \"Jeunes et Audacieux\" distingue les élèves qui participent activement à des projets mettant en avant l'esprit d'initiative, la créativité et l'engagement.",
    },
    {
      title: "Une reconnaissance régionale",
      description: "Attribué par la région académique Hauts-de-France, ce label valorise les parcours inspirants des élèves et leur permet de gagner en visibilité.",
    },
    {
      title: "Un tremplin pour l'avenir",
      description: "Les événements \"Jeunes et Audacieux\", sont l'opportunité de rencontrer des acteurs du monde professionnel, de participer à des événements régionaux et d'intégrer un réseau dynamique via des événements multi partenariaux.",
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto py-16 px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Célébrer et valoriser</h1>
          <p className="text-xl text-neutral-dark mb-8 font-medium">
            Osez entreprendre, innovez, et transformez vos idées en actions concrètes !
          </p>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-600">
              La région Hauts-de-France a créé le label "Jeunes et Audacieux" pour reconnaître et valoriser l'engagement des élèves dans des projets entrepreneuriaux et citoyens. Ce label met en lumière les jeunes qui osent entreprendre, innover et s'investir pour transformer leurs idées en actions concrètes.
            </p>
          </div>

          <div className="text-center mb-12">
            <Button 
              onClick={() => {
                const eventsSection = document.getElementById('events-2025-2026');
                eventsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Découvrir les événements près de chez vous
            </Button>
          </div>


          <div className="mb-8">
            <Carousel 
              className="w-full"
              plugins={[autoplayPlugin]}
            >
              <CarouselContent>
                {shuffledImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video">
                      <img
                        src={image}
                        alt={`Événement Jeunes et Audacieux ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {labelBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <img 
                      src="/lovable-uploads/636abdb5-7a0d-4125-9a06-33a8ea2c0298.webp"
                      alt="Label Jeunes et Audacieux"
                      className="w-24 h-24 object-contain"
                    />
                    <h3 className="text-xl font-semibold text-center">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div id="events-2025-2026" className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Découvrez les événements près de chez vous</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Vous souhaitez connaître les prochains événements "Jeunes et Audacieux" organisés près de chez vous ? Contactez-nous pour en savoir plus et participer aux rencontres de votre territoire.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              Nous contacter
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
