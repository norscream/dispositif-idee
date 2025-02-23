
import { Nav } from "@/components/Nav";
import { ArrowLeft, Send, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const games = [
  {
    title: "Créastore",
    description: "Découvrez les étapes de la création d'un magasin grâce à ce jeu coopératif qui vous plonge dans l'entrepreneuriat à travers la mise en place d'un commerce.",
    age: "14-18 ans",
    time: "2-3h",
    players: "4-6",
    type: "Jeu de plateau"
  },
  {
    title: "COOP Challenge",
    description: "Plongez dans l'univers des coopératives en gérant votre propre SCOP. Un jeu qui permet de comprendre les spécificités de l'entrepreneuriat coopératif.",
    age: "16+",
    time: "1-2h",
    players: "3-6",
    type: "Jeu de rôle"
  },
  {
    title: "Startups School",
    description: "Simulez la création d'une startup innovante en équipe. Apprenez à pitcher votre projet et à convaincre des investisseurs.",
    age: "16-25 ans",
    time: "2-3h",
    players: "4-8",
    type: "Serious game"
  },
  {
    title: "Mon Budget",
    description: "Apprenez à gérer un budget personnel ou professionnel de manière ludique. Idéal pour comprendre les bases de la gestion financière.",
    age: "14+",
    time: "1h",
    players: "2-4",
    type: "Jeu de plateau"
  },
  {
    title: "Escape Green",
    description: "Un escape game sur le thème de l'entrepreneuriat vert. Résolvez des énigmes pour créer votre entreprise écologique.",
    age: "15+",
    time: "1h30",
    players: "3-6",
    type: "Escape game"
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
            La ludopédagogie est une approche innovante qui utilise le jeu comme vecteur d'apprentissage. 
            En combinant plaisir et pédagogie, elle permet aux participants de développer des compétences 
            entrepreneuriales de manière engageante et mémorable. À travers nos jeux soigneusement sélectionnés, 
            nous facilitons l'acquisition de connaissances pratiques dans un cadre décontracté et collaboratif.
          </p>
        </div>

        {/* Call to Action Card */}
        <Card className="mb-16 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Empruntez gratuitement nos jeux
                </h3>
                <p className="text-gray-600">
                  Vous souhaitez utiliser l'un de nos jeux pour vos activités pédagogiques ? 
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

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{game.title}</CardTitle>
                <CardDescription>{game.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    <span>Âge recommandé : {game.age}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    <span>Durée : {game.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    <span>Joueurs : {game.players}</span>
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
