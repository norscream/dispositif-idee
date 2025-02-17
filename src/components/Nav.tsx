
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-lg font-semibold text-primary">
              IDÉE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#actualites" className="nav-link">
              Actualités
            </a>
            <a href="#ressources" className="nav-link">
              Ressources
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
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
              <a
                href="#actualites"
                className="px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                Actualités
              </a>
              <a
                href="#ressources"
                className="px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                Ressources
              </a>
              <a
                href="#faq"
                className="px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
