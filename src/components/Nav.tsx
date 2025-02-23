
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const actionLinks = [
  { href: "/informer", label: "Informer et promouvoir" },
  { href: "/accompagner", label: "Accompagner et former" },
  { href: "/ressources", label: "Créer des ressources" },
  { href: "/reseau", label: "Mettre en lien" },
  { href: "/valoriser", label: "Célébrer et valoriser" },
  { href: "/concretisation", label: "Concrétiser des projets" }
];

const resourceLinks = [
  { href: "/ressources/nos-actions", label: "Nos actions" },
  { href: "/ressources/actions-partenaires", label: "Les actions de nos partenaires" },
  { href: "/ressources/ludopedagogie", label: "Ludopédagogie" },
  { href: "/ressources/concours", label: "Concours" },
  { href: "/ressources/labellisation", label: "Labéllisation" }
];

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Si on n'est pas sur la page d'accueil, on y retourne d'abord
    if (location.pathname !== '/') {
      navigate('/');
      // On attend que la navigation soit terminée avant de faire défiler
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si on est déjà sur la page d'accueil, on fait simplement défiler
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const DropdownNavItem = ({ 
    trigger, 
    items 
  }: { 
    trigger: string; 
    items: { href: string; label: string; }[] 
  }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="nav-link flex items-center">
        {trigger} <ChevronDown className="ml-1 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link 
              to={item.href} 
              className="w-full text-sm py-2 px-4 hover:bg-gray-50 transition-colors"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="h-12">
              <img 
                src="/lovable-uploads/bc160d8a-3124-44e1-b43d-725c8f2f2e29.png" 
                alt="IDÉE - Engager la jeunesse pour l'avenir" 
                className="h-full w-auto"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownNavItem trigger="Nos missions" items={actionLinks} />
            <DropdownNavItem trigger="Actions disponibles" items={resourceLinks} />
            <Link 
              to="/ressources/recherche-actions"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Rechercher une action
            </Link>
            <button 
              onClick={handleContactClick}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Nous contacter
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {actionLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2"></div>
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/ressources/recherche-actions"
                className="px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                Rechercher une action
              </Link>
              <button
                onClick={handleContactClick}
                className="px-4 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
              >
                Nous contacter
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
