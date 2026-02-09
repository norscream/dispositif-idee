
import { Newspaper, ArrowRight } from "lucide-react";

const News = () => {
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
        
        {/* Sandboxed iframe prevents third-party script from accessing the main page */}
        <iframe
          sandbox="allow-scripts allow-same-origin allow-popups"
          src="/elfsight-widget.html"
          title="LinkedIn feed"
          className="w-full border-0"
          style={{ minHeight: "500px" }}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

export default News;
