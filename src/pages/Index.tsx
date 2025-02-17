import { Nav } from "@/components/Nav";
import {
  ChevronRight,
  Newspaper,
  FileText,
  HelpCircle,
  ArrowRight,
  Users,
  Mail,
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

  const teamMembers = [
    {
      image: "/lovable-uploads/de82411e-460f-4eef-9f76-1b8cd77492f4.png",
      name: "Marie Dupont",
      role: "Chef de projet",
      email: "marie.dupont@idee.fr"
    },
    {
      image: "/lovable-uploads/fc888979-d140-483c-82ec-4c976c1be588.png",
      name: "Sophie Martin",
      role: "Responsable pédagogique",
      email: "sophie.martin@idee.fr"
    },
    {
      image: "/lovable-uploads/1d7f478b-967c-4c57-b2fa-7a57ce7ff060.png",
      name: "Pierre Dubois",
      role: "Coordinateur",
      email: "pierre.dubois@idee.fr"
    },
    {
      image: "/lovable-uploads/80178065-322a-4a85-9708-9ff2cef122e6.png",
      name: "Claire Bernard",
      role: "Chargée de mission",
      email: "claire.bernard@idee.fr"
    },
    {
      image: "/lovable-uploads/21c3b237-9012-4d66-ac3a-0a207d832af5.png",
      name: "Thomas Moreau",
      role: "Responsable innovation",
      email: "thomas.moreau@idee.fr"
    },
    {
      image: "/lovable-uploads/726944d2-c6f0-4866-a030-734bc6b93f1d.png",
      name: "Anne Petit",
      role: "Chargée de communication",
      email: "anne.petit@idee.fr"
    },
    {
      image: "/lovable-uploads/34478c1f-75ee-4e13-9a72-4e28d99a3069.png",
      name: "Nicolas Laurent",
      role: "Responsable développement",
      email: "nicolas.laurent@idee.fr"
    }
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

      {/* Team Section */}
      <section id="equipe" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <Users className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Notre équipe</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-secondary-light/20 z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Contact
                  </a>
                </div>
              </div>
            ))}
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
