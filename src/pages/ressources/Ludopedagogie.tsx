import { Nav } from "@/components/Nav";
import { ArrowLeft, Send, Info, Users, Clock, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const jeux = [
  {
    id: 1,
    titre: "CONCEPT",
    editeur: "ASMODEE",
    description: "Plus besoin de parler pour communiquer. Par équipes, faites deviner des mots aux autres joueurs en plaçant des pions sur différentes icônes du plateau.",
    type: "Jeu de société",
    duree: "40 min",
    joueurs: "4-12",
    age: "10+",
    competences: ["Créativité", "Communication"],
    niveau: ["Lycée", "BTS"],
    image: "/placeholder.svg",
    video: "https://youtu.be/HXG_azOnris"
  },
  {
    id: 2,
    titre: "CONCEPT KIDS",
    editeur: "ASMODEE",
    description: "Une version adaptée aux enfants du célèbre jeu Concept, où les joueurs font deviner des animaux à l'aide d'icônes.",
    type: "Jeu éducatif",
    duree: "20 min",
    joueurs: "2-12",
    age: "4+",
    competences: ["Communication"],
    niveau: ["Primaire"],
    image: "/placeholder.svg",
    video: "https://youtu.be/8y9kM8YfSps"
  },
  {
    id: 3,
    titre: "LITTLE SECRET",
    editeur: "ATM GAMING",
    description: "Un jeu d'ambiance et de déduction où les joueurs doivent identifier qui appartient à quelle organisation secrète.",
    type: "Jeu de société",
    duree: "20 min",
    joueurs: "3-10",
    age: "10+",
    competences: ["Créativité", "Communication"],
    niveau: ["Collège", "Lycée", "BTS"],
    image: "/placeholder.svg",
    video: "https://youtu.be/bZr6WT34MSo"
  },
  {
    id: 4,
    titre: "THE MIND",
    editeur: "OYA",
    description: "Un jeu coopératif unique où les joueurs doivent jouer leurs cartes dans l'ordre croissant sans communiquer.",
    type: "Jeu de cartes coopératif",
    duree: "20 min",
    joueurs: "2-4",
    age: "8+",
    competences: ["Coopération", "Communication", "Ecoute de l'autre"],
    niveau: ["Primaire", "Collège", "Lycée", "BTS"],
    image: "/placeholder.svg",
    video: "https://youtu.be/QvEfUdi3vo4"
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jeux.map((jeu) => (
            <Card key={jeu.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={jeu.image || "/placeholder.svg"}
                  alt={`Image du jeu ${jeu.titre}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{jeu.titre}</CardTitle>
                    {jeu.editeur && (
                      <CardDescription className="text-sm">{jeu.editeur}</CardDescription>
                    )}
                  </div>
                </div>
                {jeu.description && (
                  <p className="text-sm text-gray-600 mt-2">{jeu.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jeu.duree && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Durée : {jeu.duree}</span>
                    </div>
                  )}
                  
                  {jeu.joueurs && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Nombre de joueurs : {jeu.joueurs}</span>
                    </div>
                  )}
                  
                  {jeu.age && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Gamepad2 className="h-4 w-4 text-primary" />
                      <span>Âge recommandé : {jeu.age}</span>
                    </div>
                  )}
                  
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
