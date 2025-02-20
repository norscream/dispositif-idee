
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Comment participer aux projets collaboratifs ?",
    answer: "Pour participer aux projets collaboratifs, vous devez d'abord vous inscrire sur la plateforme puis soumettre votre proposition de projet...",
  },
  {
    question: "Quelles sont les ressources disponibles ?",
    answer: "Nous proposons une large gamme de ressources pédagogiques, incluant des supports de cours, des outils numériques...",
  },
  {
    question: "Comment contacter l'équipe support ?",
    answer: "Vous pouvez contacter notre équipe support par email ou via le formulaire de contact disponible sur le site...",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
