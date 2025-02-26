
import { Nav } from "@/components/Nav";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const formations = [
  {
    title: "Yes We Code",
    description: "Apprenez à gérer un projet robotique entrepreneurial en classe et maîtrisez les bases de la programmation en Python.",
    duration: "9h (6h en présentiel, 3h en distanciel)",
    public: "Enseignants de STI, ST2D ou SNT"
  },
  {
    title: "La pédagogie de projet par la robotique",
    description: "Menez un projet robotique avec une approche entrepreneuriale et découvrez les outils numériques associés.",
    duration: "6h (Présentiel et distanciel)",
    public: "Personnel éducatif engagé dans le projet SKILLBOT"
  },
  {
    title: "FOLIOS et l'esprit d'entreprendre",
    description: "Utilisez le portfolio numérique FOLIOS pour valoriser les expériences et apprentissages des élèves.",
    duration: "9h (6h en présentiel, 3h en distanciel)",
    public: "Enseignants, CPE, Psy-EN"
  },
  {
    title: "Outil de créativité et de réflexion - 6 chapeaux de Bono",
    description: "Apprenez à animer des séances de créativité et de réflexion avec la méthode des 6 chapeaux de Bono.",
    duration: "6h (Présentiel)",
    public: "Personnel éducatif du secondaire"
  },
  {
    title: "Outil d'analyse et de réflexivité avec le CoDéveloppement (CoDev)",
    description: "Initiez-vous à la méthode du CoDéveloppement pour animer des séances de résolution de problèmes et de gestion de conflits.",
    duration: "6h (Présentiel)",
    public: "Personnel éducatif du secondaire"
  }
];

export default function Formation() {
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
        
        <h1 className="text-4xl font-bold mb-8">Nos Formations</h1>
        
        <div className="prose max-w-3xl mb-12">
          <p className="text-lg text-gray-600">
            Notre programme de formation s'adresse aux équipes éducatives souhaitant renforcer leurs compétences et s'approprier des outils pédagogiques innovants. Qu'il s'agisse de développer des pédagogies entrepreneuriales, d'acquérir une culture professionnelle ou de valoriser les compétences des élèves, nos formations s'adaptent à vos besoins. Animées par des experts, elles offrent une approche expérientielle et concrète, avec des modalités variées : formations en présentiel, à distance, en mode hybride ou sous forme de webinaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map((formation, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{formation.title}</CardTitle>
                <CardDescription className="text-base">
                  {formation.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{formation.public}</span>
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
