
import { ArrowRight, Info, BookOpen, Puzzle, Network, Trophy, Target } from "lucide-react";

const actions = [
  {
    icon: Info,
    title: "Informer et promouvoir",
    description: "l'éducation à l'entrepreneuriat",
    href: "/informer",
    iconColor: "#D3E4FD"
  },
  {
    icon: BookOpen,
    title: "Accompagner et former",
    description: "conseiller et former les enseignants",
    href: "/accompagner",
    iconColor: "#FEC6A1"
  },
  {
    icon: Puzzle,
    title: "Créer des ressources",
    description: "pédagogiques innovantes",
    href: "/ressources",
    iconColor: "#FEF7CD"
  },
  {
    icon: Network,
    title: "Mettre en lien",
    description: "les acteurs territoriaux de la pédagogie entrepreneuriale",
    href: "/reseau",
    iconColor: "#F1F0FB"
  },
  {
    icon: Trophy,
    title: "Célébrer et valoriser",
    description: "les actions des élèves",
    href: "/valoriser",
    iconColor: "#F2FCE2"
  },
  {
    icon: Target,
    title: "Concrétisation de projet",
    description: "pour permettre aux projets de prendre vie",
    href: "/concretisation",
    iconColor: "#FFDEE2"
  },
];

export const Actions = () => {
  return (
    <section id="actions" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos champs d'action</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="group flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in w-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: action.iconColor }}
                >
                  <action.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{action.title}</h3>
                <p className="text-gray-600 text-center">{action.description}</p>
                <div className="mt-4 inline-flex items-center text-primary group-hover:text-primary-dark transition-colors">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
