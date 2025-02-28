
import { Newspaper, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const News = () => {
  useEffect(() => {
    // Créer un élément script pour charger le SDK Elfsight
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    
    // Vérifier si le script est déjà chargé pour éviter les doublons
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      document.body.appendChild(script);
    }

    // Ajouter un style pour cacher le watermark
    const style = document.createElement("style");
    style.textContent = `
      .eapps-link, .eapps-remove-link {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Nettoyer lors du démontage du composant si nécessaire
      // Note: Nous ne supprimons pas le script car il peut être utilisé par d'autres widgets
      // Nous ne supprimons pas non plus le style pour maintenir la cohérence sur toutes les pages
    };
  }, []);

  return (
    <section id="actualites" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Actualités</h2>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Newspaper className="h-6 w-6 text-primary mr-3" />
            <span className="text-lg font-medium">Nos dernières publications</span>
          </div>
          <a 
            href="https://www.linkedin.com/in/dispositifidee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            aria-label="Suivez-nous sur LinkedIn"
          >
            Suivez-nous sur LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        <div className="elfsight-app-092a5f50-2482-40c5-bd11-4b07dd3c5866" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default News;
