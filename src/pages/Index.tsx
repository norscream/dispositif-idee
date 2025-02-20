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
      image: "/lovable-uploads/fe9fd95f-f1bb-4ae4-9398-89a620fb046e.png",
      name: "Margot Veiler",
      role: "Chargée de projet Oise",
      email: "margot.veiler@idee.fr",
      position: { top: "70%", left: "30%" }
    },
    {
      image: "/lovable-uploads/001aacb9-ceb3-42e5-9060-efcd1d2ce801.png",
      name: "Anna Guillouard",
      role: "Chargée de projet Amiens",
      email: "anna.guillouard@idee.fr",
      position: { top: "55%", left: "50%" }
    },
    {
      image: "/lovable-uploads/68ecf923-3ab3-47f4-9090-9a9a83d1f3c0.png",
      name: "Pascal Lefevre",
      role: "Chargé de mission Aisne",
      email: "pascal.lefevre@idee.fr",
      position: { top: "70%", left: "75%" }
    },
    {
      image: "/lovable-uploads/d30e3c4d-b90b-4cb3-a2eb-ebbb32b01edd.png",
      name: "Sylvie Zuliani",
      role: "Chargée de mission Valenciennois",
      email: "sylvie.zuliani@idee.fr",
      position: { top: "35%", left: "65%" }
    },
    {
      image: "/lovable-uploads/bb242a05-95e3-4d12-8dfe-564390ea4bd5.png",
      name: "Chloé Clerbout",
      role: "Chargée de mission MEL",
      email: "chloe.clerbout@idee.fr",
      position: { top: "25%", left: "55%" }
    },
    {
      image: "/lovable-uploads/53127e3b-f7d1-41e0-aa50-b879e49850b7.png",
      name: "Vincent Pouliquen",
      role: "Chef de projet IDEE",
      email: "vincent.pouliquen@idee.fr",
      position: { top: "35%", left: "45%" }
    },
    {
      image: "/lovable-uploads/f1165429-3de0-4ed3-b276-91b014ca1e80.png",
      name: "Norman Madani",
      role: "Chargé de mission côte d'opale",
      email: "norman.madani@idee.fr",
      position: { top: "25%", left: "20%" }
    }
  ];

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
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
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

      <section id="actualites" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Actualités</h2>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Newspaper className="h-6 w-6 text-primary mr-3" />
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
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7293613919326142464" 
              height="500" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen 
              className="rounded-xl shadow-sm"
              title="Publication LinkedIn 1"
            ></iframe>
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7287770276363206656" 
              height="500" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen 
              className="rounded-xl shadow-sm"
              title="Publication LinkedIn 2"
            ></iframe>
            <iframe 
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7269281787531464705" 
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

      <section id="equipe" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notre équipe</h2>
          <div className="flex items-center mb-12">
            <Users className="h-6 w-6 text-primary mr-3" />
          </div>
          <div className="relative max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/26f2746a-4702-43bc-9634-c9b3340c20ef.png" 
              alt="Carte de la région" 
              className="w-full"
            />
            
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ 
                  top: member.position.top,
                  left: member.position.left
                }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <h3 className="font-semibold text-sm text-center">{member.name}</h3>
                    <p className="text-gray-600 text-xs text-center mb-2">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center text-xs text-primary hover:text-primary-dark transition-colors"
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ressources" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ressources</h2>
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
    </div>
  );
}
