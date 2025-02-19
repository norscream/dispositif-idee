
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Informer() {
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
        
        <h1 className="text-4xl font-bold mb-8">Informer et promouvoir</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            Notre mission est de promouvoir l'éducation à l'entrepreneuriat auprès des jeunes et des enseignants. 
            Nous sensibilisons à l'importance de développer l'esprit d'entreprendre dès le plus jeune âge.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Nos actions</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Organisation de conférences et d'événements de sensibilisation</li>
            <li>Production de contenus pédagogiques sur l'entrepreneuriat</li>
            <li>Animation de réseaux sociaux et communication digitale</li>
            <li>Partenariats avec des acteurs clés de l'éducation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
