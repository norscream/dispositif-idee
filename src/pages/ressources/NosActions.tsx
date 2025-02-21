import { Nav } from "@/components/Nav";
import { ArrowLeft, MapPin, Clock, BookOpen, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const actions = [
  {
    title: "Cultiver sa confiance en soi",
    description: "Cet atelier aide les élèves à renforcer leur estime d'eux-mêmes, à mieux gérer leurs émotions et à s'exprimer avec assurance. À travers des exercices pratiques et interactifs, ils développent leurs compétences en communication et gagnent en aisance pour aborder sereinement leurs projets académiques et professionnels.",
    zones: ["Académie de Lille"],
    niveaux: ["Collège", "Lycée"],
    competences: [
      "Estime de soi",
      "Gestion de stress et émotions",
      "Prise de parole et affirmation de soi",
      "Pensée critique et prise de décision",
      "Compétence relationelle"
    ],
    duree: "2 heures",
    image: "/lovable-uploads/b4dc5c3d-611e-4b86-bdf8-b7239716ea55.png"
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
            Nos actions visent à renforcer les compétences psychosociales et à encourager l'esprit d'entreprendre chez les élèves. Sans coût pour les établissements, elles offrent des opportunités concrètes pour gagner en confiance, en autonomie et en capacité à agir.
          </p>
          
          <div className="space-y-8">
            {actions.map((action, index) => (
              <Card key={index} className="overflow-hidden">
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
