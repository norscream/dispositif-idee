
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qu'est-ce que le dispositif IDEE ?",
    answer: "Le dispositif IDEE (Innovons et Développons l'Esprit d'Engagement) est une initiative soutenue par la région Hauts-de-France et l'Europe qui vise à promouvoir l'esprit d'entreprendre et l'engagement dans les établissements scolaires."
  },
  {
    question: "Comment participer aux concours proposés ?",
    answer: "Pour participer aux concours, consultez la page dédiée depuis notre menu « Actions disponibles » puis « Concours ». L'inscription se fait via la page de contact."
  },
  {
    question: "Quelles formations sont disponibles pour les enseignants ?",
    answer: "Le dispositif IDEE propose plusieurs types de formations : modules d'autoformation en ligne, formations académiques au PAF, et accompagnements personnalisés."
  },
  {
    question: "Comment bénéficier d'un accompagnement pour mon projet ?",
    answer: "L'accompagnement est personnalisé selon vos besoins. Contactez l'équipe de votre académie via le formulaire de contact en précisant la nature de votre projet."
  },
  {
    question: "Comment valoriser mon projet pédagogique ?",
    answer: "Le dispositif IDEE vous offre plusieurs possibilités : participation à des concours, valorisation académique, diffusion sur nos réseaux, et participation à des événements régionaux."
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
