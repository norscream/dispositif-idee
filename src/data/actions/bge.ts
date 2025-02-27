import { ActionPartenaire } from "@/types/actions";

export const bgeActions: ActionPartenaire[] = [
  {
    title: "Entreprendre pour Apprendre (EPA)",
    description: "EPA propose des programmes pédagogiques qui permettent aux jeunes de créer et de gérer une entreprise réelle ou simulée, en développant ainsi leurs compétences entrepreneuriales et leur esprit d'initiative.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["École", "Collège", "Lycée", "Enseignement supérieur"],
    objectifs: [
      "Développer l'esprit d'entreprendre",
      "Acquérir des compétences en gestion de projet",
      "Favoriser la créativité et l'innovation"
    ],
    duree: "Année scolaire",
    partenaire: "Entreprendre Pour Apprendre (EPA)",
    image: "/lovable-uploads/49c9461f-5267-4211-a969-9ca51a7a9459.png"
  }
] as const;
