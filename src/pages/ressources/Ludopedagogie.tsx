
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
  image?: string;
};

const jeux: Jeu[] = [
  {
    id: 1,
    titre: "CONCEPT",
    description: "Plus besoin de parler pour communiquer. Par équipes, faites deviner des mots aux autres joueurs en plaçant des pions sur différentes icônes du plateau. Grâce aux nombreuses icônes et aux possibilités offertes par leurs interactions, il existe plusieurs façons de faire deviner chaque mot.",
    joueurs: "4-15",
    age: "10+",
    competences: ["Créativité", "Communication"],
    niveau: ["Lycée", "BTS"],
    image: "/lovable-uploads/230fe6fc-6ecf-4dac-b408-17438a968f22.png"
  },
  {
    id: 2,
    titre: "CONCEPT KIDS",
    description: "Formez une pioche de 12 cartes. Un adulte pioche une première carte sans la regarder. Les enfants vont utiliser l'un après l'autre les icônes du plateau de jeu Concept Kids Animaux pour faire deviner à l'adulte l'animal sur la carte.",
    joueurs: "2-15",
    age: "4+",
    competences: ["Communication"],
    niveau: ["Primaire"],
    image: "/lovable-uploads/6e0be2d3-7793-4d11-a6d9-29520d01f0be.png"
  },
  {
    id: 3,
    titre: "TOUR DE FROBEL",
    description: "Un jeu de coopération et de coordination où les joueurs doivent construire une tour en utilisant des blocs de bois, mais avec une contrainte : chaque joueur tient une ficelle reliée à un anneau central qui sert à soulever et placer les blocs. Une collaboration parfaite est nécessaire pour réussir cette construction collective.",
    joueurs: "4-10",
    age: "4+",
    competences: ["Coopération", "Motricité fine", "Coordination", "Patience"],
    niveau: ["Primaire", "Collège", "Lycée"],
    image: "/lovable-uploads/887abcf0-daa6-437f-ba17-b43629d218f5.png"
  },
  {
    id: 4,
    titre: "CRAYON COOPÉRATIF",
    description: "Un jeu créatif où les participants manipulent ensemble un crayon géant attaché à des ficelles. Chaque joueur tient une ficelle et doit coopérer avec les autres pour dessiner des formes ou écrire des mots. Ce jeu renforce la coordination, la communication et la coopération entre les participants.",
    joueurs: "4-8",
    age: "4+",
    competences: ["Coopération", "Coordination", "Communication", "Créativité"],
    niveau: ["Primaire", "Collège", "Lycée"],
    image: "/lovable-uploads/68ff67a6-fbb9-48ad-abcf-b6c010feb575.png"
  },
  {
    id: 5,
    titre: "TOTEM",
    description: "Dans Totem, les joueurs se révèlent mutuellement leurs forces et leurs qualités en formant des totems, des combinaisons d'une carte animal (représentant une force) et d'une carte qualité. Chaque joueur contribue avec une carte animal et une carte de qualité au totem de l'autre joueur.",
    joueurs: "3-8",
    age: "8+",
    competences: ["Confiance en soi", "Estime de soi", "Connaissance de soi", "Connaissance des autres"],
    niveau: ["Primaire", "Collège", "Lycée", "BTS"],
    image: "/lovable-uploads/75a6887f-c73a-4718-8898-7444a311e730.png"
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
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            La ludopédagogie est une approche éducative innovante qui utilise le jeu comme 
            vecteur d'apprentissage. En combinant amusement et pédagogie, elle permet de développer 
            des compétences essentielles de manière naturelle et engageante.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Cette méthode favorise la motivation, la créativité et l'interaction sociale, tout en 
            facilitant l'acquisition de nouvelles connaissances. Les jeux pédagogiques que nous proposons 
            sont spécialement sélectionnés pour leur pertinence éducative et leur capacité à stimuler 
            différentes formes d'apprentissage.
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
                to="/contact"
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
                {jeu.image && (
                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
                    <img 
                      src={jeu.image} 
                      alt={jeu.titre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
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
