
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Reseau() {
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
        
        <h1 className="text-4xl font-bold mb-8">Mettre en lien</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            Nous facilitons les connexions entre les différents acteurs de la pédagogie entrepreneuriale. 
            Notre réseau permet de créer des synergies et de partager les bonnes pratiques.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Notre réseau</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Organisation de rencontres professionnelles</li>
            <li>Animation de communautés thématiques</li>
            <li>Partage d'expériences et de bonnes pratiques</li>
            <li>Mise en relation des acteurs du territoire</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
