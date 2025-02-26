
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Concretisation() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto px-4">
        <div className="py-16 max-w-4xl mx-auto">
          <Link 
            to="/ressources" 
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux ressources
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">Concrétisation de projet</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 mb-6">
              Le dispositif IDÉE s'engage à accompagner les projets des élèves de leur conception jusqu'à leur réalisation concrète. Notre objectif est de transformer les idées innovantes en projets tangibles, en fournissant les ressources et le soutien nécessaires.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Accompagnement personnalisé</h3>
                <p className="text-gray-600">
                  Nous proposons un suivi adapté à chaque projet, avec des experts qui guident les élèves à chaque étape de la réalisation de leur projet.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Ressources et outils</h3>
                <p className="text-gray-600">
                  Accédez à des ressources pédagogiques, des outils pratiques et des méthodologies éprouvées pour concrétiser vos projets.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Mise en réseau</h3>
                <p className="text-gray-600">
                  Bénéficiez de notre réseau de partenaires et d'experts pour enrichir votre projet et lui donner une dimension concrète.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Suivi de projet</h3>
                <p className="text-gray-600">
                  Un accompagnement étape par étape pour garantir la réussite de votre projet, de sa conception à sa réalisation finale.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Vous avez un projet à concrétiser ?
              </h2>
              <p className="text-gray-600 mb-6">
                Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à le réaliser.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
