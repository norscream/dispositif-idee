
import { Nav } from "@/components/Nav";
import { ArrowLeft, MapPin, Clock, BookOpen, Mail, Building, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useActions } from "@/hooks/useActions";

export default function ActionsPartenaires() {
  const { actions, loading, error } = useActions();

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Nav />
        <div className="container mx-auto py-16 px-4">
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Nav />
        <div className="container mx-auto py-16 px-4">
          <div className="text-center py-16">
            <p className="text-red-600 mb-4">Erreur lors du chargement des actions</p>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }
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
          <h1 className="text-4xl font-bold mb-8">Les actions de nos partenaires</h1>
          <p className="text-lg text-gray-600 mb-8">
            Les actions de nos partenaires, tournées vers l'esprit d'entreprendre, viennent enrichir notre offre en proposant 
            aux élèves des expériences variées. Soumises à un processus de{" "}
            <Link to="/ressources/labellisation" className="text-primary hover:text-primary-dark underline">
              labellisation
            </Link>{" "}
            en amont, elles garantissent des opportunités de qualité pour développer confiance, autonomie et capacité à agir.
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
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={action.image} 
                    alt={action.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{action.title}</CardTitle>
                  <CardDescription className="text-base">{action.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
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
                        <p className="font-medium mb-2">Niveaux :</p>
                        <div className="flex flex-wrap gap-2">
                          {action.niveaux.map((niveau, i) => (
                            <Badge key={i} variant="secondary">{niveau}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Building className="h-5 w-5 text-primary mt-1 shrink-0" />
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
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Durée :</span> {action.duree}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary shrink-0" />
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Partenaire :</span> {action.partenaire}
                      </div>
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
