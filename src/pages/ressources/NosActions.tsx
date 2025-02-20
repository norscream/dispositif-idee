
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NosActions() {
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
        
        <h1 className="text-4xl font-bold mb-8">Nos actions</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            IDÉE s'engage dans de nombreuses actions pour promouvoir l'entrepreneuriat 
            auprès des jeunes. Découvrez nos initiatives et comment nous contribuons 
            à former la prochaine génération d'entrepreneurs.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Actions principales</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Ateliers de sensibilisation à l'entrepreneuriat</li>
            <li>Programmes de mentorat</li>
            <li>Concours et challenges entrepreneuriaux</li>
            <li>Sessions de formation pratique</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
