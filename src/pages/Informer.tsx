
import { Nav } from "@/components/Nav";
import { ArrowLeft, Users, Calendar, Trophy, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

          {/* Introduction */}
          <div className="prose max-w-none mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Le dispositif IDÉE de la région académique Hauts-de-France s'engage à promouvoir et à partager les initiatives d'éducation à l'entrepreneuriat auprès de la communauté éducative. Notre mission est de sensibiliser les équipes éducatives à l'importance cruciale de développer l'esprit d'entreprendre et d'engagement chez les jeunes. À travers des actions ciblées, nous visons à développer les compétences techniques entrepreneuriales et psychosociales, véritables enjeux majeurs de l'éducation d'aujourd'hui.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="mb-16">
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <img 
                    src="/placeholder.svg" 
                    alt="Élèves en activité entrepreneuriale"
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="/placeholder.svg" 
                    alt="Événement entrepreneurial"
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="/placeholder.svg" 
                    alt="Collaboration éducative"
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                </CarouselItem>
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
                href="https://www.linkedin.com/company/idee-hdf/"
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
