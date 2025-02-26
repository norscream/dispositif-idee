
import { Nav } from "@/components/Nav";
import { ArrowLeft, Users, Award, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reseau() {
  const networkPillars = [
    {
      title: "Un réseau engagé pour la jeunesse",
      description: "Nos partenaires participent activement à l'accompagnement des élèves et des enseignants en proposant des actions pédagogiques concrètes et impactantes.",
      icon: <Users className="h-8 w-8 text-primary" />,
      image: "/lovable-uploads/b56b9788-f643-46c4-bc89-dbcb2aa22f3b.png"
    },
    {
      title: "Des expériences uniques pour inspirer",
      description: "Grâce à l'expertise de nos partenaires, les élèves découvrent le monde professionnel, développent leur esprit d'initiative et se projettent dans des parcours entrepreneuriaux.",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      image: "/lovable-uploads/88200d9e-4b88-4cca-9e5f-d600c4eec002.png"
    },
    {
      title: "Une labellisation garante de la qualité",
      description: "Chaque partenaire a reçu une labellisation de la part de la région académique, attestant de la pertinence et de la valeur pédagogique des actions proposées.",
      icon: <Award className="h-8 w-8 text-primary" />,
      image: "/lovable-uploads/300b340b-9d6d-4fa2-93ae-0f792e250599.png"
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
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Mettre en lien</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600">
              Le dispositif IDEE de la région académique Hauts-de-France travaille en étroite collaboration avec un réseau de partenaires engagés dans la sensibilisation à l'entrepreneuriat. Ces partenaires contribuent activement à faire vivre cette politique en proposant des expériences uniques aux élèves, fondées sur leur expertise et leur engagement pour la jeunesse.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {networkPillars.map((pillar, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="order-2 md:order-1 p-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        {pillar.icon}
                        <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600">{pillar.description}</p>
                    </CardContent>
                  </div>
                  <div className="order-1 md:order-2 h-64 overflow-hidden">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Découvrez notre écosystème de partenaires
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                to="/ressources/labellisation"
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-medium text-center">En savoir plus sur la labellisation</h3>
                <Button className="mt-2">
                  Découvrir le processus
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link 
                to="/ressources/actions-partenaires"
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-medium text-center">Explorer les actions de nos partenaires</h3>
                <Button className="mt-2">
                  Voir les actions
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Témoignages</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <p className="italic text-gray-600 mb-4">
                    "La collaboration avec IDEE nous permet de toucher un plus grand nombre d'élèves et de proposer des actions vraiment adaptées aux besoins du terrain."
                  </p>
                  <p className="font-medium">Marie D.</p>
                  <p className="text-sm text-gray-500">Partenaire labellisé depuis 2022</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="italic text-gray-600 mb-4">
                    "Les élèves sont plus motivés et développent de vraies compétences entrepreneuriales grâce aux actions proposées par les partenaires d'IDEE."
                  </p>
                  <p className="font-medium">Thomas L.</p>
                  <p className="text-sm text-gray-500">Enseignant en lycée professionnel</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
