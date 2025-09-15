
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/fond-site-idee.png"
          alt="Background IDEE"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
          Innovons et Développons l'Esprit d'Engagement
        </h1>
        <p className="text-lg md:text-xl text-neutral mb-8 max-w-4xl mx-auto leading-relaxed">
          Accompagner l'élève à devenir un adulte/citoyen responsable en le mettant au coeur d'un dispositif pédagogique qui donne du sens aux apprentissages.
        </p>
        <p className="text-base md:text-lg text-neutral-dark mb-8 max-w-3xl mx-auto font-medium">
          Le dispositif IDEE est un dispositif académique rattaché à la DRAFPIC des Hauts-de-France.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#actions"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Découvrir <ChevronRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#actualites"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            Actualités <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
