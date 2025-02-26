
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Formation() {
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
        
        <h1 className="text-4xl font-bold mb-8">Nos Formations</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg text-gray-600 mb-6">
            Cette page présentera bientôt le détail de nos formations.
          </p>
        </div>
      </div>
    </div>
  );
}
