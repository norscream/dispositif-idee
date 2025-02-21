
import { Nav } from "@/components/Nav";
import { ArrowLeft, MapPin, Clock, BookOpen, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const actions = [
  {
    title: "Mini-Entreprises",
    description: "Programme de création d'entreprise permettant aux élèves de vivre une expérience entrepreneuriale concrète",
    zones: ["Amiens", "Oise", "MEL"],
    competences: ["Créativité", "Travail d'équipe", "Communication", "Gestion de projet"],
    duree: "1 année scolaire",
    image: "/lovable-uploads/1d7f478b-967c-4c57-b2fa-7a57ce7ff060.png"
  },
  {
    title: "Hackathon de l'innovation",
    description: "Challenge d'innovation sur 2 jours où les élèves développent des solutions à des problématiques réelles d'entreprises",
    zones: ["Valenciennes", "Aisne", "Côte d'Opale"],
    competences: ["Innovation", "Problem solving", "Pitch", "Design thinking"],
    duree: "2 jours",
    image: "/lovable-uploads/34478c1f-75ee-4e13-9a72-4e28d99a3069.png"
  },
  {
    title: "Entrepreneuriat social",
    description: "Programme de sensibilisation à l'entrepreneuriat social et solidaire à travers des projets concrets",
    zones: ["Amiens", "MEL", "Valenciennes"],
    competences: ["Responsabilité sociale", "Innovation sociale", "Gestion de projet", "Communication"],
    duree: "6 mois",
    image: "/lovable-uploads/80178065-322a-4a85-9708-9ff2cef122e6.png"
  }
];

export default function NosActions() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto py-16 px-4">
        <Link 
          to="/ressources" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Nos actions</h1>
          <p className="text-lg text-gray-600 mb-12">
            Découvrez nos différentes actions pédagogiques pour promouvoir l'entrepreneuriat 
            auprès des jeunes. Chaque action est adaptée aux besoins spécifiques des établissements 
            et des élèves.
          </p>
          
          <div className="space-y-8">
            {actions.map((action, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={action.image} 
                    alt={action.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{action.title}</CardTitle>
                  <CardDescription className="text-base">{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium mb-2">Zones d'intervention :</p>
                        <div className="flex flex-wrap gap-2">
                          {action.zones.map((zone, i) => (
                            <Badge key={i} variant="secondary">{zone}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium mb-2">Compétences développées :</p>
                        <div className="flex flex-wrap gap-2">
                          {action.competences.map((comp, i) => (
                            <Badge key={i} variant="outline">{comp}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary shrink-0" />
                      <p><span className="font-medium">Durée :</span> {action.duree}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Je suis intéressé(e) par cette action
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
