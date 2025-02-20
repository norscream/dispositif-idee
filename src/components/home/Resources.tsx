
import { ArrowRight } from "lucide-react";

export const Resources = () => {
  return (
    <section id="ressources" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Ressources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Outils pédagogiques", "Supports de cours", "Guides pratiques"].map(
            (resource, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all cursor-pointer bg-white hover:bg-primary-light/5"
              >
                <h3 className="text-lg font-semibold mb-2">{resource}</h3>
                <p className="text-gray-600 mb-4">
                  Accédez à nos ressources pour enrichir vos pratiques
                  pédagogiques.
                </p>
                <span className="text-primary group-hover:text-primary-dark transition-colors inline-flex items-center">
                  Explorer <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
