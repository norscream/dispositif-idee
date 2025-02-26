
import { Nav } from "@/components/Nav";
import { ArrowLeft, Users, Calendar, Trophy, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: "Présentation du dispositif IDEE et ses partenaires",
    description: "Lors de session de travail collaborative avec des enseignants",
    image: "/lovable-uploads/158335a3-36d1-4880-9ea2-2b2d6916df5d.png"
  },
  {
    name: "Formation IDEE",
    description: "Présentation de nos outils lors d'ateliers destinés aux enseignants",
    image: "/lovable-uploads/babffd42-c973-4990-a206-e07ed816e535.png"
  },
  {
    name: "Ludopédagogie",
    description: "Découverte des outils ludopédagogiques pour l'entrepreneuriat",
    image: "/lovable-uploads/07cd5c26-d413-4265-bc6a-465dd48039c8.png"
  },
  {
    name: "Comité de pilotage partenarial",
    description: "Organisation de groupes de travaux réunissant les acteurs de la sensibilisation à l'entrepreneuriat",
    image: "/lovable-uploads/1949c156-8c29-44f2-9c8e-c047a4a2ae85.png"
  }
];

export default function Informer() {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Informer et promouvoir
            </h1>
            <p className="text-xl text-primary font-medium">
              Ensemble, développons l'esprit d'entreprendre dans l'éducation
            </p>
          </div>

          {/* Image Carousel */}
          <div className="mb-16">
            <Carousel 
              className="w-full max-w-3xl mx-auto"
              plugins={[
                Autoplay({
                  delay: 4000,
                })
              ]}
            >
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Réseau privilégié</CardTitle>
                <CardDescription>Collaboration avec les équipes éducatives</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nous travaillons en étroite collaboration avec les établissements scolaires des Hauts-de-France pour diffuser les bonnes pratiques et ressources pédagogiques, créant ainsi un réseau dynamique d'échange et de partage.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Rendez-vous académiques</CardTitle>
                <CardDescription>Information et sensibilisation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Organisation régulière de rencontres et sessions d'information pour sensibiliser les acteurs éducatifs aux enjeux de l'entrepreneuriat et partager les dernières innovations pédagogiques.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Trophy className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Événements dédiés</CardTitle>
                <CardDescription>Valorisation des initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mise en lumière de l'entrepreneuriat à travers des événements fédérateurs qui rassemblent élèves, enseignants, entrepreneurs et partenaires pour célébrer les réussites et inspirer de nouveaux projets.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Linkedin className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Communication digitale</CardTitle>
                <CardDescription>Présence sur les réseaux sociaux</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Diffusion régulière d'informations, de témoignages et de success stories via nos canaux numériques, particulièrement sur LinkedIn, pour maintenir une communauté active et engagée.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Suivez nos actualités sur LinkedIn
            </h2>
            <p className="text-gray-600 mb-6">
              Restez informé(e) des dernières initiatives et événements en nous suivant sur LinkedIn.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary-dark text-white inline-flex items-center"
            >
              <a 
                href="https://www.linkedin.com/in/dispositifidee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suivre sur LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
