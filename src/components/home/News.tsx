
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

    // Ajouter un style pour cacher uniquement le watermark
    const style = document.createElement("style");
    style.textContent = `
      .eapps-linkedin-feed-header-bottom-link,
      a.eapps-linkedin-feed-item-author-name-link > img,
      .eapps-widget-toolbar,
      .eapps-linkedin-feed-posts-item-shared-menu-link,
      .eapps-linkedin-feed-posts-extra-small .eapps-linkedin-feed-posts-item-shared-item-link,
      a[href*="elfsight.com"],
      [class*="eapps-linkedin-feed"][class*="-link"],
      .eapps-remove-link {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Observer pour détecter et masquer les éléments watermark spécifiques
    const observer = new MutationObserver(() => {
      const elementsToHide = document.querySelectorAll(
        '.eapps-linkedin-feed-header-bottom-link, a[href*="elfsight.com"], .eapps-remove-link, [class*="eapps-linkedin-feed"][class*="-link"]'
      );
      
      elementsToHide.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
        }
      });
    });
    
    // Commencer à observer le document
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      observer.disconnect();
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
