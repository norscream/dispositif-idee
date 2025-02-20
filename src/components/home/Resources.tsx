
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "Nos actions",
    description: "Découvrez l'ensemble des actions menées par IDÉE",
    href: "/ressources/nos-actions"
  },
  {
    title: "Les actions de nos partenaires",
    description: "Explorez les initiatives de nos partenaires",
    href: "/ressources/actions-partenaires"
  },
  {
    title: "Ludopédagogie",
    description: "Apprenez par le jeu et l'expérimentation",
    href: "/ressources/ludopedagogie"
  },
  {
    title: "Labéllisation",
    description: "Processus et avantages de la labellisation",
    href: "/ressources/labellisation"
  }
];

export const Resources = () => {
  return (
    <section id="ressources" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Ressources</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all cursor-pointer bg-white hover:bg-primary-light/5"
            >
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link
                to={resource.href}
                className="text-primary group-hover:text-primary-dark transition-colors inline-flex items-center"
              >
                Explorer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
