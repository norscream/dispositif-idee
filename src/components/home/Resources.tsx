
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "Nos actions",
    description: "Découvrez l'ensemble des actions menées par IDÉE",
    href: "/ressources/nos-actions",
    bgImage: "/lovable-uploads/bbfadd31-7762-4fc4-bdcd-05aca7a4deed.png"
  },
  {
    title: "Les actions de nos partenaires",
    description: "Explorez les initiatives de nos partenaires",
    href: "/ressources/actions-partenaires",
    bgImage: "/lovable-uploads/e3877217-50ab-41c0-a755-2a230e64809a.png"
  },
  {
    title: "Ludopédagogie",
    description: "Apprenez par le jeu et l'expérimentation",
    href: "/ressources/ludopedagogie",
    bgImage: "/lovable-uploads/aa3900a3-0ef2-457c-bd2c-99a09d896586.png"
  },
  {
    title: "Concours",
    description: "Participez à nos concours et challenges entrepreneuriaux",
    href: "/ressources/concours",
    bgImage: "/lovable-uploads/b56b9788-f643-46c4-bc89-dbcb2aa22f3b.png"
  }
];

const Resources = () => {
  return (
    <section id="ressources" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-dark">Actions disponibles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.href}
              className="group relative p-6 rounded-xl border border-gray-100 hover:border-secondary/20 transition-all bg-white hover:bg-secondary-light/5 overflow-hidden"
            >
              {resource.bgImage && (
                <div 
                  className="absolute inset-0 z-0 opacity-40 md:opacity-0 md:group-hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${resource.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%'
                  }}
                />
              )}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2 text-neutral-dark">{resource.title}</h3>
                <p className="text-neutral mb-4">{resource.description}</p>
                <span className="text-primary group-hover:text-primary-dark transition-colors inline-flex items-center">
                  Explorer <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
