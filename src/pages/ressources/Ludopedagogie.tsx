import { Nav } from "@/components/Nav";
import { ArrowLeft, Send, Users, Clock, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Jeu = {
  id: number;
  titre: string;
  description: string;
  joueurs: string;
  age: string;
  competences: string[];
  niveau: string[];
};

const jeux: Jeu[] = [
  {
    id: 1,
    titre: "CONCEPT",
    description: "Plus besoin de parler pour communiquer. Par équipes, faites deviner des mots aux autres joueurs en plaçant des pions sur différentes icônes du plateau. Grâce aux nombreuses icônes et aux possibilités offertes par leurs interactions, il existe plusieurs façons de faire deviner chaque mot.",
    joueurs: "4-15",
    age: "10+",
    competences: ["Créativité", "Communication"],
    niveau: ["Lycée", "BTS"]
  },
  {
    id: 2,
    titre: "CONCEPT KIDS",
    description: "Formez une pioche de 12 cartes. Un adulte pioche une première carte sans la regarder. Les enfants vont utiliser l'un après l'autre les icônes du plateau de jeu Concept Kids Animaux pour faire deviner à l'adulte l'animal sur la carte.",
    joueurs: "2-15",
    age: "4+",
    competences: ["Communication"],
    niveau: ["Primaire"]
  },
  {
    id: 3,
    titre: "LITTLE SECRET",
    description: "Le Grand Maître organise une réunion : il souhaite vérifier l'appartenance des Disciples à son organisation secrète ! Il confie à tous les membres un mot de passe que seuls les Disciples peuvent comprendre, et ainsi démasquer les Infiltrés et Journaliste.",
    joueurs: "3-15",
    age: "10+",
    competences: ["Créativité", "Communication"],
    niveau: ["Collège", "Lycée", "BTS"]
  },
  {
    id: 4,
    titre: "THE MIND",
    description: "Un jeu coopératif unique où les joueurs doivent jouer leurs cartes dans l'ordre croissant sans communiquer.",
    joueurs: "2-4",
    age: "8+",
    competences: ["Coopération", "Communication", "Ecoute de l'autre"],
    niveau: ["Primaire", "Collège", "Lycée", "BTS"]
  },
  {
    id: 25,
    titre: "PARACHUTE COOPERATIF",
    description: "Le parachute est une grande toile résistante de forme circulaire constitué de fuseaux de couleurs différents, de diamètre variable, avec ou sans ouverture centrale et poignées. Cet outil permet de développer la coopération et l'esprit d'équipe.",
    joueurs: "6-12",
    age: "6+",
    competences: ["Coopération", "Stratégie", "Communication", "Observation"],
    niveau: ["Primaire", "Collège"]
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
            vecteur d'apprentissage.
          </p>
        </div>

        <Card className="mb-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">
                  Empruntez gratuitement nos jeux pédagogiques
                </h2>
                <p className="text-gray-600">
                  Contactez-nous pour emprunter gratuitement un exemplaire ou obtenir plus d'informations.
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jeux.map((jeu) => (
            <Card key={jeu.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{jeu.titre}</CardTitle>
                </div>
                <p className="text-sm text-gray-600 mt-2">{jeu.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Nombre de joueurs : {jeu.joueurs}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Gamepad2 className="h-4 w-4 text-primary" />
                    <span>Âge recommandé : {jeu.age}</span>
                  </div>
                  
                  {jeu.competences && jeu.competences.length > 0 && (
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
                  )}

                  {jeu.niveau && jeu.niveau.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Public cible :</p>
                      <div className="flex flex-wrap gap-2">
                        {jeu.niveau.map((niv, index) => (
                          <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                            {niv}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
