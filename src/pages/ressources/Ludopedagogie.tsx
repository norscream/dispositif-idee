
import { Nav } from "@/components/Nav";
import { ArrowLeft, Send, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const jeux = [
  { id: 1, titre: "LITTLE SECRET", type: "Jeu de société" },
  { id: 2, titre: "THE MIND", type: "Jeu de cartes coopératif" },
  { id: 3, titre: "RECTO VERSO", type: "Jeu d'observation" },
  { id: 4, titre: "KONTOUR", type: "Jeu de dessin" },
  { id: 5, titre: "IMAGIDES", type: "Jeu d'association d'images" },
  { id: 6, titre: "SPLITO", type: "Jeu de logique" },
  { id: 7, titre: "BIOVIVA GRAND JEU DEFI", type: "Jeu de connaissances environnementales" },
  { id: 8, titre: "BIOVIVA JUNIOR", type: "Jeu de connaissances pour enfants" },
  { id: 9, titre: "IMAGINE", type: "Jeu créatif" },
  { id: 10, titre: "TOTEM", type: "Jeu de communication" },
  { id: 11, titre: "TTMC", type: "Jeu de culture générale" },
  { id: 12, titre: "DIXIT", type: "Jeu d'imagination" },
  { id: 13, titre: "LE MONSTRE DES COULEURS", type: "Jeu sur les émotions" },
  { id: 14, titre: "CONCEPT", type: "Jeu de communication" },
  { id: 15, titre: "CONCEPT KIDS", type: "Jeu de communication pour enfants" },
  { id: 16, titre: "MYSTERIUM", type: "Jeu coopératif" },
  { id: 17, titre: "MYSTERIUM KIDS", type: "Jeu coopératif pour enfants" },
  { id: 18, titre: "SPLENDOR", type: "Jeu de stratégie" },
  { id: 19, titre: "CATAN", type: "Jeu de stratégie et négociation" },
  { id: 20, titre: "LOUPS-GAROUS", type: "Jeu de rôle" },
  { id: 21, titre: "7 WONDERS", type: "Jeu de civilisation" },
  { id: 22, titre: "PALEO", type: "Jeu coopératif" },
  { id: 23, titre: "LES AVENTURIERS DU RAIL EUROPE", type: "Jeu de plateau stratégique" },
  { id: 24, titre: "CITADELLES", type: "Jeu de rôle et stratégie" },
  { id: 25, titre: "STORY CUBES", type: "Jeu de création d'histoires" },
  { id: 26, titre: "AGRO CHALLENGES", type: "Jeu pédagogique" },
  { id: 27, titre: "JEU DE LA CO-CREATION", type: "Jeu collaboratif" },
  { id: 28, titre: "JEU ENIGME FRUIT ET LEGUMES", type: "Jeu éducatif Bioviva" },
  { id: 29, titre: "CLIMAT TIC TAC", type: "Jeu environnemental Bioviva" },
  { id: 30, titre: "CRAYONS COOPERATIFS", type: "Jeu de dessin coopératif" },
  { id: 31, titre: "LA TOUR DE FROBEL", type: "Jeu de construction" },
  { id: 32, titre: "AVENTURE ENTREPRENEUR", type: "Jeu pédagogique BDF" },
  { id: 33, titre: "FEELINGS", type: "Jeu sur les émotions" },
  { id: 34, titre: "JEU DE CARTES BESOINS", type: "Jeu pédagogique" }
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
              <CardHeader>
                <CardTitle className="text-xl">{jeu.titre}</CardTitle>
                <CardDescription className="text-sm">{jeu.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to="/#contact"
                  className="w-full inline-flex items-center justify-center bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  Emprunter ce jeu
                  <Send className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
