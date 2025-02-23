
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#1A1F2C] text-gray-300 mt-auto">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">À propos</h3>
            <p className="text-sm mb-4">
              IDÉE - Engager la jeunesse pour l'avenir est une association qui promeut l'engagement des jeunes 
              à travers des actions innovantes et ludiques.
            </p>
            <p className="text-sm">
              Le dispositif IDEE est soutenu par la région Hauts-de-France et par l'Europe. 
              Il bénéficie d'un appui du Fonds Européen de Développement Régional (FEDER) 
              pour développer des actions liées à l'esprit d'entreprendre et entre dans une 
              démarche globale de développement économique de la Région Hauts-de-France.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Mentions légales</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgu" className="hover:text-white transition-colors">
                  Conditions générales d'utilisation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-6 text-sm">
              <div>
                <h4 className="text-white font-medium mb-2">Académie de Lille</h4>
                <ul className="space-y-1">
                  <li><a href="mailto:projet.idee@ac-lille.fr" className="hover:text-white transition-colors">projet.idee@ac-lille.fr</a></li>
                  <li>144 Rue de Bavay<br />59000 Lille</li>
                  <li>03 20 15 60 00</li>
                  <li><a href="https://www1.ac-lille.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Site de l'académie de Lille</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Académie d'Amiens</h4>
                <ul className="space-y-1">
                  <li><a href="mailto:projet.idee@ac-amiens.fr" className="hover:text-white transition-colors">projet.idee@ac-amiens.fr</a></li>
                  <li>20 Bd d'Alsace Lorraine<br />80000 Amiens</li>
                  <li>03 22 82 38 23</li>
                  <li><a href="https://www.ac-amiens.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Site de l'académie d'Amiens</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} IDÉE - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
