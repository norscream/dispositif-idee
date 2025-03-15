
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
import { formations } from "@/data/formations";

export default function Formation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Nav />
      <div className="container mx-auto py-16 px-4">
        <Link 
          to="/ressources" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Link>
        
        <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-8 text-neutral-900">Nos Formations</h1>
          
          <div className="prose max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre programme de formation s'adresse aux équipes éducatives souhaitant renforcer leurs compétences et s'approprier des outils pédagogiques innovants. Qu'il s'agisse de développer des pédagogies entrepreneuriales, d'acquérir une culture professionnelle ou de valoriser les compétences des élèves, nos formations s'adaptent à vos besoins. Animées par des experts, elles offrent une approche expérientielle et concrète, avec des modalités variées : formations en présentiel, à distance, en mode hybride ou sous forme de webinaires.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="flex flex-col hover:shadow-lg transition-shadow duration-300 border-gray-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary mb-3">
                  {formation.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {formation.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6 border-t border-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 text-primary/70" />
                    <span className="text-sm font-medium">{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="h-5 w-5 text-primary/70" />
                    <span className="text-sm font-medium">{formation.public}</span>
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
