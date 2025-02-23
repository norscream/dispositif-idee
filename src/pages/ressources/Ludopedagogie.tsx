
import { Nav } from "@/components/Nav";
import { ArrowLeft, Send, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const jeux = [
  {
    id: 1,
    titre: "Sustainable Start-Up",
    description: "Jeu de plateau permettant de découvrir les enjeux de la création d'une start-up dans le domaine de la transition écologique.",
    type: "Jeu de plateau coopératif",
    duree: "1h30 - 2h",
    joueurs: "3 à 6",
    age: "13+",
    competences: ["Créativité", "Travail en équipe", "Gestion de projet"]
  },
  {
    id: 2,
    titre: "E=Entrepreneur",
    description: "Faites vivre à vos élèves l'expérience unique d'un entrepreneur à travers des défis pédagogiques et ludiques.",
    type: "Serious game",
    duree: "1h - 1h30",
    joueurs: "4 à 8",
    age: "15+",
    competences: ["Prise de décision", "Gestion financière", "Innovation"]
  },
  {
    id: 3,
    titre: "Innov'Action",
    description: "Un jeu de rôle qui plonge les participants dans des situations réelles d'innovation et d'entrepreneuriat.",
    type: "Jeu de rôle",
    duree: "2h",
    joueurs: "6 à 12",
    age: "16+",
    competences: ["Communication", "Résolution de problèmes", "Leadership"]
  },
  {
    id: 4,
    titre: "Mini-Entreprise Simulator",
    description: "Simulez la création et la gestion d'une mini-entreprise de A à Z avec ce jeu collaboratif.",
    type: "Simulation",
    duree: "2h - 3h",
    joueurs: "4 à 8",
    age: "14+",
    competences: ["Organisation", "Gestion d'équipe", "Marketing"]
  }
];

export default function Ludopedagogie() {
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
        
        <h1 className="text-4xl font-bold mb-8">Ludopédagogie</h1>
        
        <div className="prose max-w-3xl mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            La ludopédagogie est une approche éducative innovante qui utilise le jeu comme 
            vecteur d'apprentissage. En combinant plaisir et pédagogie, elle permet de développer 
            des compétences entrepreneuriales de manière naturelle et engageante. Cette méthode 
            favorise la créativité, la collaboration et l'apprentissage actif tout en maintenant 
            la motivation des participants.
          </p>
        </div>

        {/* Call to Action */}
        <Card className="mb-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">
                  Empruntez gratuitement nos jeux pédagogiques
                </h2>
                <p className="text-gray-600">
                  Vous souhaitez utiliser nos outils pour sensibiliser vos élèves à l'entrepreneuriat ? 
                  Contactez-nous pour emprunter gratuitement un exemplaire ou obtenir plus d'informations 
                  sur nos jeux pédagogiques.
                </p>
              </div>
              <Link
                to="/#contact"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Nous contacter
                <Send className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Grid des jeux */}
        <div className="grid md:grid-cols-2 gap-8">
          {jeux.map((jeu) => (
            <Card key={jeu.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{jeu.titre}</CardTitle>
                <CardDescription className="text-base">{jeu.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{jeu.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Info className="h-4 w-4 text-primary" />
                    <span>Durée : {jeu.duree}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Info className="h-4 w-4 text-primary" />
                    <span>Nombre de joueurs : {jeu.joueurs}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Info className="h-4 w-4 text-primary" />
                    <span>Âge recommandé : {jeu.age}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Compétences développées :</p>
                    <div className="flex flex-wrap gap-2">
                      {jeu.competences.map((competence, index) => (
                        <Badge key={index} variant="secondary">
                          {competence}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
