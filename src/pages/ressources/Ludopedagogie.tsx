
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            La ludopédagogie est une approche éducative qui utilise le jeu comme 
            vecteur d'apprentissage. Découvrez comment nous intégrons cette méthode 
            dans nos programmes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Nos outils ludiques</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Jeux de rôle entrepreneuriaux</li>
            <li>Simulations d'entreprise</li>
            <li>Serious games</li>
            <li>Ateliers interactifs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
