
import { Nav } from "@/components/Nav";
import { ArrowLeft, Search } from "lucide-react";
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
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Les actions de nos partenaires</h1>
          <p className="text-lg text-gray-600 mb-8">
            Les actions de nos partenaires, tournées vers l'esprit d'entreprendre, viennent enrichir notre offre en proposant 
            aux élèves des expériences variées. Soumises à un processus de{" "}
            <Link to="/ressources/labellisation" className="text-primary hover:text-primary-dark underline">
              labellisation
            </Link>{" "}
            en amont, elles garantissent des opportunités de qualité pour développer confiance, autonomie et capacité à agir.
          </p>

          <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 mb-12">
            <p className="text-xl font-medium mb-4">
              Trouvez l'action qui correspond le mieux à vos besoins en quelques clics !
            </p>
            <Link 
              to="/ressources/recherche-actions"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <Search className="h-5 w-5" />
              Rechercher une action
            </Link>
          </div>
          
          {/* La liste des actions sera ajoutée ici une fois que vous me l'aurez transmise */}
        </div>
      </div>
    </div>
  );
}
