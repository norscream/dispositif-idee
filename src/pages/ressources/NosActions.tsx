
import { Nav } from "@/components/Nav";
import { ArrowLeft, MapPin, Clock, BookOpen, Mail, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { actions } from "@/data/actions";

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
          <p className="text-lg text-gray-600 mb-8">
            Nos actions visent à renforcer les compétences psychosociales et à encourager l'esprit d'entreprendre chez les élèves. Sans coût pour les établissements, elles offrent des opportunités concrètes pour gagner en confiance, en autonomie et en capacité à agir.
          </p>

          <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 mb-12">
            <p className="text-xl font-medium mb-4">
              Trouvez l'action qui correspond le mieux à vos besoins en quelques clics !
            </p>
            <Link 
              to="/ressources/recherche-actions"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <Search className="h-5 w-5" />
              Rechercher une action
            </Link>
          </div>
          
          <div className="space-y-8">
            {actions.map((action, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-64 overflow-hidden relative bg-gray-50">
                  <img 
                    src={action.image} 
                    alt={action.title}
                    loading="lazy"
                    width={640}
                    height={256}
                    className="w-full h-full object-contain"
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
                      <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium mb-2">Niveaux :</p>
                        <div className="flex flex-wrap gap-2">
                          {action.niveaux.map((niveau, i) => (
                            <Badge key={i} variant="secondary">{niveau}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="font-medium mb-2">Objectifs :</p>
                        <div className="flex flex-wrap gap-2">
                          {action.objectifs.map((objectif, i) => (
                            <Badge key={i} variant="outline">{objectif}</Badge>
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
