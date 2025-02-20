
import { Nav } from "@/components/Nav";
import { Target } from "lucide-react";

export default function Concretisation() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#FFDEE2" }}>
              <Target className="h-8 w-8 text-gray-700" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-8">Concrétisation de projet</h1>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Nous accompagnons les projets de leur conception jusqu'à leur réalisation concrète, 
            en fournissant les ressources et le soutien nécessaires pour transformer les idées en réalité.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Accompagnement personnalisé</h3>
              <p className="text-gray-600">
                Chaque projet bénéficie d'un suivi adapté à ses besoins spécifiques, 
                avec des experts dédiés pour guider chaque étape du développement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Ressources et outils</h3>
              <p className="text-gray-600">
                Accès à des outils pratiques, des ressources pédagogiques et des 
                méthodologies éprouvées pour structurer et développer les projets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
