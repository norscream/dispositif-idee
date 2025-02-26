
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <div className="bg-primary/5 rounded-xl p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Suivez nos actualités sur LinkedIn
      </h2>
      <p className="text-gray-600 mb-6">
        Restez informé(e) des dernières initiatives et événements en nous suivant sur LinkedIn.
      </p>
      <Button 
        asChild
        className="bg-primary hover:bg-primary-dark text-white inline-flex items-center"
      >
        <a 
          href="https://www.linkedin.com/in/dispositifidee/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Suivre IDEE sur LinkedIn"
        >
          Suivre sur LinkedIn
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};
