
import { Newspaper, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const News = () => {
  useEffect(() => {
    // Load Elfsight script only once
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Add CSS to hide the watermark
    const style = document.createElement("style");
    style.textContent = `
      .eapps-link, .eapps-widget-toolbar, .elfsight-app-powered-by {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
      }
    `;
    document.head.appendChild(style);

    // Clean up on unmount
    return () => {
      if (style.parentNode) {
        document.head.removeChild(style);
      }
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
