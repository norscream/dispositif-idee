
import { Nav } from "@/components/Nav";
import { ArrowLeft, Users, Award, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Reseau() {
  const networkPillars = [
    {
      title: "Un réseau engagé pour la jeunesse",
      description: "Nos partenaires participent activement à l'accompagnement des élèves et des enseignants en proposant des actions pédagogiques concrètes et impactantes.",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Des expériences uniques pour inspirer",
      description: "Grâce à l'expertise de nos partenaires, les élèves découvrent le monde professionnel, développent leur esprit d'initiative et se projettent dans des parcours entrepreneuriaux.",
      icon: <Sparkles className="h-8 w-8 text-primary" />
    },
    {
      title: "Une labellisation garante de la qualité",
      description: "Chaque partenaire a reçu une labellisation de la part de la région académique, attestant de la pertinence et de la valeur pédagogique des actions proposées.",
      icon: <Award className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto py-16 px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Mettre en lien</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600">
              Le dispositif IDEE de la région académique Hauts-de-France travaille en étroite collaboration avec un réseau de partenaires engagés dans la sensibilisation à l'entrepreneuriat. Ces partenaires contribuent activement à faire vivre cette politique en proposant des expériences uniques aux élèves, fondées sur leur expertise et leur engagement pour la jeunesse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {networkPillars.map((pillar, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {pillar.icon}
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-600">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Découvrez notre écosystème de partenaires
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link 
                to="/ressources/labellisation"
                className="flex-1 flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow text-center max-w-sm mx-auto"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-4">En savoir plus sur la labellisation</h3>
                <Button className="w-full">
                  Découvrir le processus
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link 
                to="/ressources/actions-partenaires"
                className="flex-1 flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow text-center max-w-sm mx-auto"
              >
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-4">Explorer les actions de nos partenaires</h3>
                <Button className="w-full">
                  Voir les actions
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
