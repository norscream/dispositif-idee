
import { Nav } from "@/components/Nav";
import { ArrowLeft, ArrowRight, BookOpen, Puzzle, Users, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const resourceTypes = [
  {
    title: "Supports et fiches pédagogiques clés en main",
    description: "Des activités et méthodologies adaptées aux élèves pour intégrer facilement l'éducation à l'entrepreneuriat en classe. Nos ressources sont conçues pour être directement utilisables en situation d'apprentissage.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    link: "/ressources/nos-actions",
    linkText: "Découvrir nos actions",
    image: "/lovable-uploads/b4dc5c3d-611e-4b86-bdf8-b7239716ea55.png"
  },
  {
    title: "Outils et formats pédagogiques variés",
    description: "Des ateliers interactifs, études de cas, défis et parcours gamifiés pour favoriser une approche ludique et engageante. Nos formats diversifiés s'adaptent à tous les contextes d'apprentissage.",
    icon: <Users className="h-8 w-8 text-primary" />,
    image: "/lovable-uploads/4f61846a-175f-42a8-92c6-edade2638e19.png"
  },
  {
    title: "Ludothèque pédagogique",
    description: "Accédez à une sélection de jeux pédagogiques soigneusement choisis pour animer vos séances et rendre l'apprentissage plus immersif. Notre ludothèque est mise à disposition gratuitement pour les enseignants.",
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    link: "/ressources/ludopedagogie",
    linkText: "Explorer la ludothèque",
    image: "/lovable-uploads/230fe6fc-6ecf-4dac-b408-17438a968f22.png"
  }
];

export default function Ressources() {
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
              Créer des ressources innovantes
            </h1>
            <p className="text-xl text-primary font-medium mb-8">
              Des outils pédagogiques gratuits pour développer l'esprit d'entreprendre
            </p>
            <div className="prose mx-auto text-gray-600 max-w-3xl">
              <p className="text-lg">
                Le dispositif IDEE de la région académique Hauts-de-France conçoit en permanence des ressources pédagogiques innovantes pour développer l'esprit d'entreprendre et les compétences psychosociales des élèves. Toutes nos ressources sont mises gratuitement à disposition des enseignants et des équipes éducatives, dans une démarche de partage et d'accompagnement continu.
              </p>
            </div>
          </div>

          {/* Resource Types */}
          <div className="space-y-12 mb-16">
            {resourceTypes.map((resource, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="order-2 md:order-1 p-6">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          {resource.icon}
                        </div>
                        <CardTitle className="text-2xl">{resource.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">
                        {resource.description}
                      </p>
                      {resource.link && (
                        <Button asChild>
                          <Link to={resource.link} className="inline-flex items-center">
                            {resource.linkText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </div>
                  <div className="order-1 md:order-2 h-64 bg-gray-100">
                    <img 
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Besoin de plus d'informations sur nos ressources ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour vous présenter l'ensemble de nos ressources pédagogiques et vous accompagner dans leur utilisation.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center">
                Contactez-nous
                <Send className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
