
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link 
        to="/" 
        className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors"
        aria-label="Retour à l'accueil"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour
      </Link>
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Informer et promouvoir
        </h1>
        <p className="text-xl text-primary font-medium mb-8">
          Ensemble, développons l'esprit d'entreprendre dans l'éducation
        </p>
        <div className="prose mx-auto text-gray-600 max-w-3xl">
          <p className="text-lg">
            Le dispositif IDEE de la région académique Hauts-de-France a pour mission de promouvoir et partager les initiatives d'éducation à l'entrepreneuriat au sein de notre territoire. Notre rôle est de sensibiliser les équipes éducatives à l'importance de développer l'esprit d'entreprendre et d'engagement chez les jeunes. À travers des actions ciblées, nous accompagnons le développement des compétences techniques entrepreneuriales et psychosociales, devenues des enjeux majeurs dans le contexte actuel d'évolution permanente de notre société.
          </p>
        </div>
      </div>
    </>
  );
};
