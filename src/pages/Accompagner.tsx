
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Accompagner() {
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
        
        <h1 className="text-4xl font-bold mb-8">Accompagner et former</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            Nous accompagnons et formons les enseignants dans leur démarche d'éducation à l'entrepreneuriat. 
            Notre approche personnalisée permet de répondre aux besoins spécifiques de chaque établissement.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Notre accompagnement</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Formation continue des enseignants</li>
            <li>Accompagnement personnalisé des projets</li>
            <li>Mise à disposition d'outils pédagogiques</li>
            <li>Suivi et évaluation des actions menées</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
