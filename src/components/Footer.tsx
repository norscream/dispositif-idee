
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-auto w-full">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-gray-800 font-semibold mb-4">À propos</h3>
            <p className="text-sm text-justify px-4">
              Le dispositif IDEE est soutenu par la région Hauts-de-France et par l'Europe. 
              Il bénéficie d'un appui du Fonds Européen de Développement Régional (FEDER) 
              pour développer des actions liées à l'esprit d'entreprendre et entre dans une 
              démarche globale de développement économique de la Région Hauts-de-France.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <h3 className="text-gray-800 font-semibold mb-4">Académie de Lille</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="mailto:projet.idee@ac-lille.fr" className="hover:text-gray-900 transition-colors">projet.idee@ac-lille.fr</a></li>
              <li className="text-center">144 Rue de Bavay<br />59000 Lille</li>
              <li>03 20 15 60 00</li>
              <li><a href="https://www1.ac-lille.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Site de l'académie de Lille</a></li>
            </ul>
          </div>
          <div className="text-center flex flex-col items-center">
            <h3 className="text-gray-800 font-semibold mb-4">Académie d'Amiens</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="mailto:projet.idee@ac-amiens.fr" className="hover:text-gray-900 transition-colors">projet.idee@ac-amiens.fr</a></li>
              <li className="text-center">20 Bd d'Alsace Lorraine<br />80000 Amiens</li>
              <li>03 22 82 38 23</li>
              <li><a href="https://www.ac-amiens.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Site de l'académie d'Amiens</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-8">
            <img 
              src="/lovable-uploads/74fe1642-0c04-4d4f-a766-1166319848eb.png" 
              alt="Région Hauts-de-France" 
              className="h-24 object-contain"
            />
            <img 
              src="/lovable-uploads/df817651-de57-4890-81c4-ab684005da91.png" 
              alt="Académies Amiens Lille - Région Académique Hauts-de-France" 
              className="h-24 object-contain"
            />
            <img 
              src="/lovable-uploads/85717161-678a-468c-a3e2-94c826b67c81.png" 
              alt="Union européenne" 
              className="h-24 object-contain"
            />
            <img 
              src="/lovable-uploads/4a388b8e-d7e9-42c2-89ae-ca4441b297dc.png" 
              alt="L'Europe s'engage en Hauts-de-France" 
              className="h-24 object-contain"
            />
          </div>
          <div className="text-sm text-center">
            <p>&copy; {new Date().getFullYear()} IDÉE - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
