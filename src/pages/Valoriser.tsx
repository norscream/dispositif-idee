
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Valoriser() {
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
        
        <h1 className="text-4xl font-bold mb-8">Célébrer et valoriser</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            Nous mettons en lumière les réussites et les initiatives des élèves dans leur parcours entrepreneurial. 
            La reconnaissance de leur engagement est essentielle pour encourager l'esprit d'entreprendre.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Nos actions de valorisation</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Organisation de cérémonies de remise de prix</li>
            <li>Publication de témoignages et success stories</li>
            <li>Création d'événements de présentation des projets</li>
            <li>Diffusion des réussites sur nos réseaux</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
