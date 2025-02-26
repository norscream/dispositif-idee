
import { Nav } from "@/components/Nav";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Identification des besoins",
    description: "Un travail de diagnostic avec les équipes éducatives pour mieux cerner leurs attentes et leurs enjeux spécifiques.",
    color: "text-[#ff9f1c]"
  },
  {
    number: "02",
    title: "Une rencontre-diagnostic",
    description: "Un premier échange pour définir ensemble les leviers d'action et les formations les plus adaptées.",
    color: "text-[#e71d36]"
  },
  {
    number: "03",
    title: "Co-construction des actions",
    description: "Élaboration de projets pédagogiques adaptés aux besoins des enseignants et des élèves.",
    color: "text-[#2ec4b6]"
  },
  {
    number: "04",
    title: "Mise en œuvre des actions",
    description: "Accompagnement des équipes éducatives dans le déploiement de leurs initiatives et suivi personnalisé pour assurer la réussite des projets.",
    color: "text-[#8338ec]"
  }
];

export default function Accompagner() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto py-16 px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accompagner et former
            </h1>
            <p className="text-xl text-primary font-medium mb-8">
              Des solutions adaptées pour développer l'esprit d'entreprendre
            </p>
            <div className="prose mx-auto text-gray-600 max-w-3xl">
              <p className="text-lg">
                Le dispositif IDEE de la région académique Hauts-de-France accompagne et forme les équipes éducatives à la mise en place d'actions d'éducation à l'entrepreneuriat. Nos formations visent à donner aux enseignants des outils concrets pour sensibiliser les élèves à l'esprit d'entreprendre et au développement des compétences psychosociales et techniques. Notre approche personnalisée permet de répondre aux besoins spécifiques de chaque établissement.
              </p>
            </div>
          </div>

          {/* Process Image */}
          <div className="mb-16">
            <img 
              src="/lovable-uploads/32f61937-a587-4c0b-8340-846d3488164f.png" 
              alt="Processus d'accompagnement en 4 étapes"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          {/* Steps List */}
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex gap-6 p-6 hover:bg-gray-50/80 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group cursor-default"
              >
                <div className={`text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-300 ${step.color}`}>
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary/5 rounded-xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Découvrez nos formations
              </h2>
              <p className="text-gray-600 mb-6">
                Explorez notre catalogue de formations et trouvez celle qui correspond à vos besoins.
              </p>
              <Button 
                asChild
                className="bg-primary hover:bg-primary-dark text-white inline-flex items-center"
              >
                <Link to="/ressources/formation">
                  Voir les formations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Besoin d'accompagnement ?
              </h2>
              <p className="text-gray-600 mb-6">
                Contactez-nous pour discuter de vos besoins et mettre en place un accompagnement personnalisé.
              </p>
              <Button 
                asChild
                variant="outline"
                className="inline-flex items-center"
              >
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
