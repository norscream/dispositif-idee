
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Introduction } from "@/components/ludopedagogie/Introduction";
import { LoanCTA } from "@/components/ludopedagogie/LoanCTA";
import { GamesGrid } from "@/components/ludopedagogie/GamesGrid";
import { jeux } from "@/data/ludopedagogie";

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
        
        <Introduction />
        <LoanCTA />
        <GamesGrid games={jeux} />
      </div>
    </div>
  );
}
