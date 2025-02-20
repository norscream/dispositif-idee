import { Nav } from "@/components/Nav";
import {
  ChevronRight,
  Newspaper,
  FileText,
  HelpCircle,
  ArrowRight,
  Users,
  Mail,
  Info,
  BookOpen,
  Puzzle,
  Network,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

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

  const actions = [
    {
      icon: Info,
      title: "Informer et promouvoir",
      description: "l'éducation à l'entrepreneuriat",
      href: "/informer",
    },
    {
      icon: BookOpen,
      title: "Accompagner et former",
      description: "conseiller et former les enseignants",
      href: "/accompagner",
    },
    {
      icon: Puzzle,
      title: "Créer des ressources",
      description: "pédagogiques innovantes",
      href: "/ressources",
    },
    {
      icon: Network,
      title: "Mettre en lien",
      description: "les acteurs territoriaux de la pédagogie entrepreneuriale",
      href: "/reseau",
    },
    {
      icon: Trophy,
      title: "Célébrer et valoriser",
      description: "les actions des élèves",
      href: "/valoriser",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      {/* Hero Section avec image en arrière-plan */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/lovable-uploads/32613d5b-d63d-4b78-a8a8-ab321702a5aa.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Innovons et Développons l'Esprit d'Engagement
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Notre vision est d'aider l'élève à devenir un adulte/citoyen responsable en le mettant au cœur d'un dispositif pédagogique qui donne du sens aux apprentissages.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#actions"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Découvrir <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Actions Section */}
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
                  <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <action.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
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

      {/* News Section */}
      <section id="actualites" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Newspaper className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Actualités</h2>
            </div>
            <a 
              href="https://www.linkedin.com/company/idee-education/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              Suivez-nous sur LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_POST_ID_1" 
              height="500" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen 
              className="rounded-xl shadow-sm"
              title="Publication LinkedIn 1"
            ></iframe>
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_POST_ID_2" 
              height="500" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen 
              className="rounded-xl shadow-sm"
              title="Publication LinkedIn 2"
            ></iframe>
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_POST_ID_3" 
              height="500" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen 
              className="rounded-xl shadow-sm"
              title="Publication LinkedIn 3"
            ></iframe>
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
