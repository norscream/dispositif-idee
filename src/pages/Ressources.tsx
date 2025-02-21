
import { Nav } from "@/components/Nav";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Ressources() {
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
        
        <h1 className="text-4xl font-bold mb-8">Créer des ressources</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            Nous développons des ressources pédagogiques innovantes pour faciliter l'apprentissage 
            de l'entrepreneuriat. Nos outils sont conçus en collaboration avec des experts pédagogiques.
          </p>

          <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 mb-12">
            <p className="text-lg mb-4">
              Vous recherchez une action spécifique ? Utilisez notre outil de recherche pour trouver celle qui correspond le mieux à vos besoins.
            </p>
            <Link
              to="/ressources/recherche-actions"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Trouver une action adaptée
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Nos ressources</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Guides pédagogiques détaillés</li>
            <li>Fiches d'activités pratiques</li>
            <li>Outils numériques interactifs</li>
            <li>Supports multimédias</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
