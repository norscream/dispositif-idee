
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
    nom: "Skillbot",
    objectif: "Le Challenge Skillbot est une initiative des académies d'Amiens et de Lille, en partenariat avec l'UIMM Hauts-de-France, visant à promouvoir les sciences, la technologie et l'innovation auprès des élèves. En concevant un robot personnalisé, les participants développent des compétences en créativité, autonomie, travail d'équipe et gestion de projet, tout en découvrant les métiers industriels.",
    public: ["CM1", "CM2", "6ème", "5ème", "4ème", "3ème"],
    presentation: "L'édition 2024-2025 met l'accent sur l'énergie de demain, en lien avec l'essor de l'électromobilité dans la région. Avec l'implantation de trois gigafactories (ACC, Envision, Verkor), plus de 13 000 emplois qualifiés seront créés d'ici 2026. Skillbot s'inscrit ainsi dans cette transformation industrielle en sensibilisant les jeunes aux opportunités du secteur.",
    livrables: [
      "Fiche de progression à renseigner sur le site",
      "Carnet de bord numérique sur l'Espace membre",
      "Point d'avancement avec présentation du projet",
      "Récit d'expérience sous format libre",
      "Vidéo de présentation du robot de 5 minutes maximum",
      "Démonstration et mise en scène sur le thème L'énergie de demain",
      "Visite d'un site industriel ou technique",
      "Travail interdisciplinaire",
      "Personnalisation du robot avec des pièces spécifiques",
      "Activité spécifique pour le cycle 4"
    ],
    logo: "/lovable-uploads/d8fb6b95-dc32-47b0-927c-cd99291ba590.png",
    partenaires: [
      {
        nom: "UIMM",
        logo: "/lovable-uploads/bb1de82e-2f89-4c74-b37a-ae31bf2e0f1f.png"
      },
      {
        nom: "Région Académique Hauts-de-France",
        logo: "/lovable-uploads/2c57a758-2b10-4be6-b7d1-feabaad1d0a9.png"
      }
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
                      <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                          <img 
                            src={concours.logo} 
                            alt={`Logo ${concours.nom}`} 
                            className="h-24 object-contain"
                          />
                        </div>
                        <CardTitle className="text-xl">{concours.nom}</CardTitle>
                        <CardDescription>
                          Public : {concours.public.join(", ")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 text-center">
                        <div>
                          <h4 className="font-semibold mb-2">Objectif</h4>
                          <p className="text-sm text-gray-600">{concours.objectif}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Présentation</h4>
                          <p className="text-sm text-gray-600">{concours.presentation}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Livrables attendus</h4>
                          <ul className="text-sm text-gray-600 list-none">
                            {concours.livrables.map((livrable, index) => (
                              <li key={index} className="mb-1">{livrable}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4">Concours porté par</h4>
                          <div className="flex justify-center items-center gap-8">
                            {concours.partenaires.map((partenaire, index) => (
                              <img 
                                key={index}
                                src={partenaire.logo} 
                                alt={`Logo ${partenaire.nom}`}
                                className="h-16 object-contain"
                              />
                            ))}
                          </div>
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
