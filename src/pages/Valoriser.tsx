
import { Nav } from "@/components/Nav";
import { ArrowLeft, Award, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export default function Valoriser() {
  const labelBenefits = [
    {
      title: "Un label pour récompenser l'audace des jeunes",
      description: "Le label \"Jeunes et Audacieux\" distingue les élèves qui participent activement à des projets mettant en avant l'esprit d'initiative, la créativité et l'engagement.",
      icon: <Award className="h-8 w-8 text-primary" />
    },
    {
      title: "Une reconnaissance régionale",
      description: "Attribué par la région académique Hauts-de-France, ce label valorise les parcours inspirants des élèves et leur permet de gagner en visibilité.",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Un tremplin pour l'avenir",
      description: "Les événements \"Jeunes et Audacieux\", sont l'opportunité de rencontrer des acteurs du monde professionnel, de participer à des événements régionaux et d'intégrer un réseau dynamique via des événements multi partenariaux.",
      icon: <Rocket className="h-8 w-8 text-primary" />
    }
  ];

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
          <h1 className="text-4xl font-bold mb-4">Célébrer et valoriser</h1>
          <p className="text-xl text-neutral-dark mb-8 font-medium">
            Osez entreprendre, innovez, et transformez vos idées en actions concrètes !
          </p>

          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600">
              La région Hauts-de-France a créé le label "Jeunes et Audacieux" pour reconnaître et valoriser l'engagement des élèves dans des projets entrepreneuriaux et citoyens. Ce label met en lumière les jeunes qui osent entreprendre, innover et s'investir pour transformer leurs idées en actions concrètes.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/636abdb5-7a0d-4125-9a06-33a8ea2c0298.png"
              alt="Label Jeunes et Audacieux"
              className="w-96 h-96 md:w-[500px] md:h-[500px] object-contain"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {labelBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
