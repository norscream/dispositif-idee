
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/lovable-uploads/32613d5b-d63d-4b78-a8a8-ab321702a5aa.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
          Innovons et Développons l'Esprit d'Engagement
        </h1>
        <p className="text-lg md:text-xl text-neutral mb-8 max-w-4xl mx-auto leading-relaxed">
          Aider l'élève à devenir un adulte/citoyen responsable en le mettant au coeur d'un dispositif pédagogique qui donne du sens aux apprentissages.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#actions"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Découvrir <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
