import { Nav } from "@/components/Nav";
import { ArrowLeft, Send, Info, Users, Clock, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const jeux = [
  { id: 1, titre: "LITTLE SECRET", type: "Jeu de société", duree: "30 min", joueurs: "2-6", age: "8+", competences: ["Communication", "Observation"], image: "/placeholder.svg" },
  { id: 2, titre: "THE MIND", type: "Jeu de cartes coopératif", duree: "20 min", joueurs: "2-4", age: "8+", competences: ["Coopération", "Intuition"], image: "/placeholder.svg" },
  { id: 3, titre: "RECTO VERSO", type: "Jeu d'observation", duree: "15 min", joueurs: "2-6", age: "7+", competences: ["Observation", "Rapidité"], image: "/placeholder.svg" },
  { id: 4, titre: "KONTOUR", type: "Jeu de dessin", duree: "30 min", joueurs: "3-8", age: "8+", competences: ["Créativité", "Communication visuelle"], image: "/placeholder.svg" },
  { id: 5, titre: "IMAGIDES", type: "Jeu d'association d'images", duree: "20 min", joueurs: "2-8", age: "6+", competences: ["Association", "Imagination"], image: "/placeholder.svg" },
  { id: 6, titre: "SPLITO", type: "Jeu de logique", duree: "25 min", joueurs: "2-4", age: "8+", competences: ["Logique", "Réflexion"], image: "/placeholder.svg" },
  { id: 7, titre: "BIOVIVA GRAND JEU DEFI", type: "Jeu de connaissances environnementales", duree: "45 min", joueurs: "2-6", age: "10+", competences: ["Culture environnementale", "Sensibilisation"], image: "/placeholder.svg" },
  { id: 8, titre: "BIOVIVA JUNIOR", type: "Jeu de connaissances pour enfants", duree: "30 min", joueurs: "2-6", age: "5+", competences: ["Découverte", "Apprentissage"], image: "/placeholder.svg" },
  { id: 9, titre: "IMAGINE", type: "Jeu créatif", duree: "30 min", joueurs: "3-8", age: "12+", competences: ["Créativité", "Expression"], image: "/placeholder.svg" },
  { id: 10, titre: "TOTEM", type: "Jeu de communication", duree: "45 min", joueurs: "3-8", age: "8+", competences: ["Communication", "Empathie"], image: "/placeholder.svg" },
  { id: 11, titre: "TTMC", type: "Jeu de culture générale", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Culture générale", "Savoir-faire"], image: "/placeholder.svg" },
  { id: 12, titre: "DIXIT", type: "Jeu d'imagination", duree: "20 min", joueurs: "2-4", age: "8+", competences: ["Imagination", "Réalisation"], image: "/placeholder.svg" },
  { id: 13, titre: "LE MONSTRE DES COULEURS", type: "Jeu sur les émotions", duree: "30 min", joueurs: "2-6", age: "8+", competences: ["Emotions", "Expression"], image: "/placeholder.svg" },
  { id: 14, titre: "CONCEPT", type: "Jeu de communication", duree: "30 min", joueurs: "2-6", age: "8+", competences: ["Communication", "Empathie"], image: "/placeholder.svg" },
  { id: 15, titre: "CONCEPT KIDS", type: "Jeu de communication pour enfants", duree: "20 min", joueurs: "2-4", age: "5+", competences: ["Communication", "Découverte"], image: "/placeholder.svg" },
  { id: 16, titre: "MYSTERIUM", type: "Jeu coopératif", duree: "30 min", joueurs: "2-6", age: "8+", competences: ["Coopération", "Intuition"], image: "/placeholder.svg" },
  { id: 17, titre: "MYSTERIUM KIDS", type: "Jeu coopératif pour enfants", duree: "20 min", joueurs: "2-4", age: "5+", competences: ["Coopération", "Découverte"], image: "/placeholder.svg" },
  { id: 18, titre: "SPLENDOR", type: "Jeu de stratégie", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Stratégie", "Résolution de problèmes"], image: "/placeholder.svg" },
  { id: 19, titre: "CATAN", type: "Jeu de stratégie et négociation", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Stratégie", "Négociation"], image: "/placeholder.svg" },
  { id: 20, titre: "LOUPS-GAROUS", type: "Jeu de rôle", duree: "30 min", joueurs: "2-6", age: "8+", competences: ["Rôle", "Imagination"], image: "/placeholder.svg" },
  { id: 21, titre: "7 WONDERS", type: "Jeu de civilisation", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Civilisation", "Résolution de problèmes"], image: "/placeholder.svg" },
  { id: 22, titre: "PALEO", type: "Jeu coopératif", duree: "30 min", joueurs: "2-6", age: "8+", competences: ["Coopération", "Intuition"], image: "/placeholder.svg" },
  { id: 23, titre: "LES AVENTURIERS DU RAIL EUROPE", type: "Jeu de plateau stratégique", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Stratégie", "Résolution de problèmes"], image: "/placeholder.svg" },
  { id: 24, titre: "CITADELLES", type: "Jeu de rôle et stratégie", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Rôle", "Stratégie"], image: "/placeholder.svg" },
  { id: 25, titre: "STORY CUBES", type: "Jeu de création d'histoires", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Création", "Imagination"], image: "/placeholder.svg" },
  { id: 26, titre: "AGRO CHALLENGES", type: "Jeu pédagogique", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Pédagogie", "Apprentissage"], image: "/placeholder.svg" },
  { id: 27, titre: "JEU DE LA CO-CREATION", type: "Jeu collaboratif", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Collaboration", "Résolution de problèmes"], image: "/placeholder.svg" },
  { id: 28, titre: "JEU ENIGME FRUIT ET LEGUMES", type: "Jeu éducatif Bioviva", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Éducation", "Apprentissage"], image: "/placeholder.svg" },
  { id: 29, titre: "CLIMAT TIC TAC", type: "Jeu environnemental Bioviva", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Environnement", "Sensibilisation"], image: "/placeholder.svg" },
  { id: 30, titre: "CRAYONS COOPERATIFS", type: "Jeu de dessin coopératif", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Dessin", "Collaboration"], image: "/placeholder.svg" },
  { id: 31, titre: "LA TOUR DE FROBEL", type: "Jeu de construction", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Construction", "Résolution de problèmes"], image: "/placeholder.svg" },
  { id: 32, titre: "AVENTURE ENTREPRENEUR", type: "Jeu pédagogique BDF", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Pédagogie", "Apprentissage"], image: "/placeholder.svg" },
  { id: 33, titre: "FEELINGS", type: "Jeu sur les émotions", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Emotions", "Expression"], image: "/placeholder.svg" },
  { id: 34, titre: "JEU DE CARTES BESOINS", type: "Jeu pédagogique", duree: "30 min", joueurs: "2-6", age: "10+", competences: ["Pédagogie", "Apprentissage"], image: "/placeholder.svg" }
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jeux.map((jeu) => (
            <Card key={jeu.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={jeu.image}
                  alt={`Image du jeu ${jeu.titre}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{jeu.titre}</CardTitle>
                <CardDescription className="text-sm">{jeu.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Durée : {jeu.duree}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Nombre de joueurs : {jeu.joueurs}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Gamepad2 className="h-4 w-4 text-primary" />
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
