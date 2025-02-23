
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const concours = [
  {
    nom: "Concours Innovation Junior",
    objectif: "Développer l'esprit d'innovation et la créativité des jeunes",
    public: ["Collégiens", "Lycéens"],
    presentation: "Une série d'épreuves stimulantes où les participants devront identifier un besoin, concevoir une solution innovante et la présenter devant un jury d'experts.",
    epreuves: [
      "Phase 1 : Identification d'un besoin sociétal",
      "Phase 2 : Développement d'un prototype",
      "Phase 3 : Présentation finale"
    ]
  },
  {
    nom: "Challenge Entreprendre",
    objectif: "Initier les jeunes à l'entrepreneuriat et au monde de l'entreprise",
    public: ["Lycéens", "Étudiants"],
    presentation: "Un parcours complet pour découvrir l'entrepreneuriat à travers des cas pratiques et des mises en situation réelles.",
    epreuves: [
      "Étude de marché",
      "Business plan",
      "Pitch final"
    ]
  },
  {
    nom: "Défi Créativité",
    objectif: "Stimuler la créativité et l'innovation collaborative",
    public: ["Collégiens", "Lycéens", "Étudiants"],
    presentation: "Un concours qui met l'accent sur la créativité et la collaboration pour résoudre des défis du monde réel.",
    epreuves: [
      "Brainstorming collectif",
      "Développement de solution",
      "Démonstration créative"
    ]
  }
];

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
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {concours.map((concours, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-xl">{concours.nom}</CardTitle>
                        <CardDescription>
                          Public : {concours.public.join(", ")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Objectif</h4>
                          <p className="text-sm text-gray-600">{concours.objectif}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Présentation</h4>
                          <p className="text-sm text-gray-600">{concours.presentation}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Épreuves</h4>
                          <ul className="text-sm text-gray-600 list-disc list-inside">
                            {concours.epreuves.map((epreuve, index) => (
                              <li key={index}>{epreuve}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          S'inscrire au concours
                        </Button>
                      </CardFooter>
                    </Card>
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
