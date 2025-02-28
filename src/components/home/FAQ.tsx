
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qu'est-ce que le dispositif IDEE ?",
    answer: "Le dispositif IDEE (Innovons et Développons l'Esprit d'Engagement) est une initiative soutenue par la région Hauts-de-France et l'Europe qui vise à promouvoir l'esprit d'entreprendre et l'engagement dans les établissements scolaires. Il s'inscrit dans une démarche globale de développement économique de la Région Hauts-de-France et bénéficie d'un appui du Fonds Européen de Développement Régional (FEDER)."
  },
  {
    question: "Comment participer aux concours proposés ?",
    answer: "Pour participer aux concours, vous pouvez consulter la page dédiée accessible depuis notre menu « Actions disponibles » puis « Concours ». Chaque concours précise le public concerné, les objectifs et les livrables attendus. L'inscription se fait via la page de contact où vous pourrez préciser le concours qui vous intéresse."
  },
  {
    question: "Quelles formations sont disponibles pour les enseignants ?",
    answer: "Le dispositif IDEE propose plusieurs types de formations pour les enseignants : modules d'autoformation en ligne, formations académiques au PAF (Plan Académique de Formation), et accompagnements personnalisés. Vous pouvez consulter notre section Formation pour plus de détails et vous inscrire via la page de contact."
  },
  {
    question: "Comment bénéficier d'un accompagnement pour mon projet ?",
    answer: "L'accompagnement dans le cadre du dispositif IDEE est personnalisé selon vos besoins. Vous pouvez demander un accompagnement en contactant l'équipe de votre académie via le formulaire de contact en précisant la nature de votre projet et l'aide dont vous avez besoin."
  },
  {
    question: "Comment valoriser mon projet pédagogique ?",
    answer: "Le dispositif IDEE vous offre plusieurs possibilités pour valoriser vos actions : participation à des concours, valorisation au niveau académique, diffusion sur notre site et nos réseaux, et participation à des événements régionaux. N'hésitez pas à nous contacter pour présenter votre projet."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm overflow-hidden">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={index !== faqItems.length - 1 ? "border-b border-gray-200" : ""}>
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
