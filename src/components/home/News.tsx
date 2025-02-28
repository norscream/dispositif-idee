
import { Newspaper, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <section id="actualites" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Actualités</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <div className="mb-6 flex justify-center">
              <Newspaper className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Restez informé de nos dernières actualités</h3>
            <p className="text-gray-600 mb-8">
              Suivez-nous sur LinkedIn pour découvrir nos événements, ressources pédagogiques 
              et témoignages inspirants. Ne manquez aucune opportunité pour vos élèves !
            </p>
            
            <a 
              href="https://www.linkedin.com/in/dispositifidee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="flex items-center gap-2 px-6 py-6 text-lg" size="lg">
                <Linkedin className="h-5 w-5" />
                Rejoignez-nous sur LinkedIn
                <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
