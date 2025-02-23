
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
            <ul className="space-y-2 text-sm">
              <li>contact@idee-association.fr</li>
              <li>01 23 45 67 89</li>
              <li>123 rue de l'Innovation<br />75000 Paris</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} IDÉE - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
