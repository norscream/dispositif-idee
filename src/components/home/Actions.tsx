
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Informer et promouvoir",
    description: "l'éducation à l'entrepreneuriat",
    href: "/informer",
    iconColor: "#D3E4FD",
    imagePath: "/lovable-uploads/11433d4b-5cf6-4ea7-a413-23f513bb987e.png"
  },
  {
    title: "Accompagner et former",
    description: "conseiller et former les enseignants",
    href: "/accompagner",
    iconColor: "#FEC6A1",
    imagePath: "/lovable-uploads/82502928-6d0a-44b8-924b-cefe58f7c3dd.png"
  },
  {
    title: "Créer des ressources",
    description: "pédagogiques innovantes",
    href: "/ressources",
    iconColor: "#FEF7CD",
    imagePath: "/lovable-uploads/1a52c073-f1a5-417d-b32b-1f294c1aa80f.png"
  },
  {
    title: "Mettre en lien",
    description: "les acteurs territoriaux de la pédagogie entrepreneuriale",
    href: "/reseau",
    iconColor: "#F1F0FB",
    imagePath: "/lovable-uploads/514b916d-23ef-4f86-b41a-e4060bb693a2.png"
  },
  {
    title: "Célébrer et valoriser",
    description: "les actions des élèves",
    href: "/valoriser",
    iconColor: "#F2FCE2",
    imagePath: "/lovable-uploads/126a6c28-7f40-427b-821d-49be85a8c0f4.png"
  },
  {
    title: "Concrétiser des projets",
    description: "pour permettre aux projets de prendre vie",
    href: "/concretisation",
    iconColor: "#FFDEE2",
    imagePath: "/lovable-uploads/31c9ae34-cb8c-40c1-8e58-7210ed22678b.png"
  },
];

const Actions = () => {
  return (
    <section id="actions" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos missions</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {actions.map((action, index) => (
              <Link
                key={index}
                to={action.href}
                className="group flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors overflow-hidden"
                  style={{ backgroundColor: action.iconColor }}
                >
                  <img 
                    src={action.imagePath} 
                    alt={action.title}
                    className="w-10 h-10 object-contain"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{action.title}</h3>
                <p className="text-gray-600 text-center">{action.description}</p>
                <div className="mt-4 inline-flex items-center text-primary group-hover:text-primary-dark transition-colors">
                  En savoir plus <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;
