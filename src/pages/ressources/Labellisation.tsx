
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Labellisation() {
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
        
        <h1 className="text-4xl font-bold mb-8">Labellisation</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            Notre processus de labellisation garantit la qualité et la pertinence 
            des projets entrepreneuriaux. Découvrez les critères et les avantages 
            de notre label.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Processus de labellisation</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Critères d'éligibilité</li>
            <li>Étapes de la certification</li>
            <li>Avantages du label</li>
            <li>Renouvellement et suivi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
