
import { Nav } from "@/components/Nav";
import {
  ChevronRight,
  Newspaper,
  FileText,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const newsItems = [
    {
      title: "Nouveau programme d'innovation pédagogique",
      date: "15 Mars 2024",
      description: "Découvrez les nouvelles initiatives pour transformer l'éducation.",
    },
    {
      title: "Lancement des projets collaboratifs",
      date: "12 Mars 2024",
      description: "Participez aux nouveaux projets inter-établissements.",
    },
    {
      title: "Formations numériques disponibles",
      date: "10 Mars 2024",
      description: "Accédez aux nouvelles formations en ligne.",
    },
  ];

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

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-light text-primary mb-4 text-sm font-medium">
            Bienvenue sur IDÉE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Innovation et Développement de l'Éducation
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez nos ressources et outils pour transformer l'éducation
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#ressources"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Découvrir <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="actualites" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Newspaper className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Actualités</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  Lire plus <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="ressources" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <FileText className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Ressources</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Outils pédagogiques", "Supports de cours", "Guides pratiques"].map(
              (resource, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all cursor-pointer bg-white hover:bg-primary-light/5"
                >
                  <h3 className="text-lg font-semibold mb-2">{resource}</h3>
                  <p className="text-gray-600 mb-4">
                    Accédez à nos ressources pour enrichir vos pratiques
                    pédagogiques.
                  </p>
                  <span className="text-primary group-hover:text-primary-dark transition-colors inline-flex items-center">
                    Explorer <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <HelpCircle className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Questions fréquentes</h2>
          </div>
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
    </div>
  );
}
