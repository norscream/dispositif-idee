
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
              <li className="text-center">144 Rue de Bavay<br />59000 Lille</li>
              <li>03 20 15 60 00</li>
              <li><a href="https://www1.ac-lille.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Site de l'académie de Lille</a></li>
            </ul>
          </div>
          <div className="text-center flex flex-col items-center">
            <h3 className="text-gray-800 font-semibold mb-4">Académie d'Amiens</h3>
            <ul className="space-y-1 text-sm">
              <li className="text-center">20 Bd d'Alsace Lorraine<br />80000 Amiens</li>
              <li>03 22 82 38 23</li>
              <li><a href="https://www.ac-amiens.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Site de l'académie d'Amiens</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center mb-8">
            <img 
              src="/lovable-uploads/c80162aa-e4bd-4e29-adad-13992b5c1218.png" 
              alt="Région Hauts-de-France" 
              className="h-16 object-contain col-span-2 md:col-span-1"
            />
            <img 
              src="/lovable-uploads/2b5d14ad-7280-4392-a369-94528441f36d.png" 
              alt="Région Académique Hauts-de-France" 
              className="h-20 object-contain"
            />
            <img 
              src="/lovable-uploads/648496a1-c880-4206-abde-82c1a9169a49.png" 
              alt="Cofinancé par l'Union européenne" 
              className="h-16 object-contain col-span-2 md:col-span-1"
            />
          </div>
          <div className="text-sm text-center space-y-4">
            <p>&copy; {new Date().getFullYear()} Dispositif IDEE - Tous droits réservés</p>
            <div className="flex justify-center space-x-4">
              <Popover>
                <PopoverTrigger className="text-gray-600 hover:text-gray-900 transition-colors">
                  Protection des données
                </PopoverTrigger>
                <PopoverContent className="w-[95vw] max-w-[800px] p-6 bg-white">
                  <div className="space-y-4 text-sm text-left max-h-[80vh] overflow-y-auto">
                    <h4 className="font-semibold text-lg">Gestion des données personnelles et cookies</h4>
                    
                    <h5 className="font-semibold mt-4">1. Responsable de traitement</h5>
                    <p>
                      La Région Académique Hauts-de-France agit en tant que responsable de traitement pour les données à caractère personnel collectées sur le site web du dispositif IDEE. Le délégué à la protection des données de la Région Académique peut être contacté à l'adresse dpd@region-academique-hauts-de-france.fr.
                    </p>

                    <h5 className="font-semibold mt-4">2. Données collectées</h5>
                    <p>
                      Les données collectées comprennent les informations fournies via les formulaires de contact : nom, prénom, établissement, adresse email et contenu des messages. Ces données sont nécessaires pour répondre à vos demandes et assurer le suivi des projets.
                    </p>

                    <h5 className="font-semibold mt-4">3. Finalités du traitement</h5>
                    <p>
                      Les données sont collectées pour :
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Répondre à vos demandes d'information</li>
                      <li>Assurer le suivi des projets et actions</li>
                      <li>Produire des statistiques anonymes d'utilisation</li>
                      <li>Améliorer les services proposés</li>
                    </ul>

                    <h5 className="font-semibold mt-4">4. Base légale</h5>
                    <p>
                      Le traitement des données repose sur votre consentement et sur l'intérêt légitime de la Région Académique à assurer le bon fonctionnement du dispositif IDEE.
                    </p>

                    <h5 className="font-semibold mt-4">5. Destinataires</h5>
                    <p>
                      Les données sont accessibles uniquement aux personnels habilités de la Région Académique et des partenaires du dispositif IDEE, dans la limite de leurs attributions respectives.
                    </p>

                    <h5 className="font-semibold mt-4">6. Durée de conservation</h5>
                    <p>
                      Les données sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans la limite de 3 ans après le dernier contact.
                    </p>

                    <h5 className="font-semibold mt-4">7. Vos droits</h5>
                    <p>
                      Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                      <li>Droit d'accès à vos données</li>
                      <li>Droit de rectification</li>
                      <li>Droit d'opposition</li>
                      <li>Droit à l'effacement</li>
                      <li>Droit à la limitation du traitement</li>
                      <li>Droit à la portabilité des données</li>
                    </ul>
                    <p className="mt-2">
                      Pour exercer ces droits ou pour toute question, contactez notre délégué à la protection des données : dpd@region-academique-hauts-de-france.fr
                    </p>

                    <h5 className="font-semibold mt-4">8. Cookies</h5>
                    <p>
                      Le site utilise des cookies techniques nécessaires à son fonctionnement. Vous pouvez les désactiver dans les paramètres de votre navigateur, mais cela pourrait altérer certaines fonctionnalités du site.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger className="text-gray-600 hover:text-gray-900 transition-colors">
                  Mentions légales
                </PopoverTrigger>
                <PopoverContent className="w-[95vw] max-w-[800px] p-6 bg-white">
                  <div className="space-y-4 text-sm text-left max-h-[80vh] overflow-y-auto">
                    <h4 className="font-semibold text-lg">Mentions légales</h4>

                    <h5 className="font-semibold mt-4">1. Éditeur</h5>
                    <p>
                      Le site IDEE (Innovons et Développons l'Esprit d'Engagement) est édité par la Région Académique Hauts-de-France.
                    </p>
                    <p className="mt-2">
                      Siège : Rectorat de l'académie de Lille<br />
                      144 rue de Bavay<br />
                      59000 Lille<br />
                      Tél : 03 20 15 60 00
                    </p>
                    <p className="mt-2">
                      Directeur de la publication : Le Recteur de la région académique Hauts-de-France, Recteur de l'académie de Lille.
                    </p>

                    <h5 className="font-semibold mt-4">2. Hébergement</h5>
                    <p>
                      Le site est hébergé par la Direction du Numérique pour l'Éducation (DNE)<br />
                      110 rue de Grenelle<br />
                      75007 Paris
                    </p>

                    <h5 className="font-semibold mt-4">3. Propriété intellectuelle</h5>
                    <p>
                      L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                    <p className="mt-2">
                      La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>

                    <h5 className="font-semibold mt-4">4. Liens hypertextes</h5>
                    <p>
                      Les liens hypertextes présents sur ce site peuvent orienter l'utilisateur sur des sites extérieurs dont le contenu ne peut engager la responsabilité de la rédaction du site IDEE.
                    </p>

                    <h5 className="font-semibold mt-4">5. Accessibilité</h5>
                    <p>
                      Le site IDEE est développé selon les recommandations du Référentiel Général d'Amélioration de l'Accessibilité (RGAA) pour être accessible au plus grand nombre.
                    </p>

                    <h5 className="font-semibold mt-4">6. Crédits</h5>
                    <p>
                      Conception et réalisation : Région Académique Hauts-de-France<br />
                      Photographies : © Région Académique Hauts-de-France sauf mention contraire
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
