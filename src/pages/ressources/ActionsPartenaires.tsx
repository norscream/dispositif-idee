
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ActionsPartenaires() {
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
        
        <h1 className="text-4xl font-bold mb-8">Les actions de nos partenaires</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            Découvrez les initiatives et projets menés par nos partenaires pour 
            soutenir l'éducation entrepreneuriale et l'engagement des jeunes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Collaborations et partenariats</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Projets éducatifs innovants</li>
            <li>Événements collaboratifs</li>
            <li>Programmes d'accompagnement</li>
            <li>Initiatives territoriales</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
