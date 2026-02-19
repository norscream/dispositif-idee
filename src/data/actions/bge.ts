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
  },
  {
    title: "J'OSE",
    description: "L'action J'OSE, portée par BGE, vise à sensibiliser les jeunes à l'esprit d'entreprendre en développant la confiance en soi, l'initiative et l'audace. À travers des ateliers ludiques et participatifs, les participants apprennent à mieux se connaître, à dépasser leurs freins et à envisager l'entrepreneuriat comme un levier de compétences et d'orientation, au-delà de la seule création d'entreprise.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Renforcer la confiance en soi",
      "Développer l'esprit d'initiative et l'audace",
      "Découvrir l'entrepreneuriat autrement que par la création d'entreprise"
    ],
    duree: "Variable (atelier ou parcours)",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  },
  {
    title: "Opportun Avenir",
    description: "Un programme pour aider les jeunes à mieux se projeter dans leur avenir en découvrant les opportunités professionnelles et entrepreneuriales de leur territoire.",
    zones: ["Académie d'Amiens"],
    niveaux: ["Collège", "Lycée", "Étudiant"],
    objectifs: [
      "Favoriser la projection professionnelle",
      "Découvrir les opportunités locales",
      "Développer l'esprit d'initiative"
    ],
    duree: "Variable selon le format",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  },
  {
    title: "Je découvre",
    description: "Une première approche ludique de l'entrepreneuriat pour comprendre les notions clés et découvrir les rôles et compétences associés.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Découvrir l'entrepreneuriat",
      "Stimuler la curiosité",
      "Comprendre le travail en équipe"
    ],
    duree: "1 séance",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  },
  {
    title: "J'éveille",
    description: "Un parcours d'éveil à l'esprit d'entreprendre dès le plus jeune âge, axé sur la créativité, la coopération et l'expression des idées.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["École"],
    objectifs: [
      "Développer la créativité",
      "Encourager la coopération",
      "Valoriser la prise d'initiative"
    ],
    duree: "1 à plusieurs séances",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  },
  {
    title: "Busy et NESS",
    description: "Un parcours pédagogique ludique en 6 étapes basé sur le montage de projet pour développer la coopération, la prise de décision et la résolution de problèmes.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Apprendre par le jeu",
      "Renforcer la coopération",
      "Développer la résolution de problèmes"
    ],
    duree: "Plusieurs séances",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  },
  {
    title: "Le plus compétent des entrepreneurs",
    description: "Un challenge pédagogique en ligne permettant aux participants de développer et valoriser leurs compétences entrepreneuriales à travers un escape game.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Identifier ses compétences",
      "Développer la confiance en soi",
      "Valoriser les talents"
    ],
    duree: "1 demi-journée",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  },
  {
    title: "J'entreprends",
    description: "Un programme pour découvrir les grandes étapes de la création de projet et passer de l'idée à l'action.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Comprendre les étapes d'un projet",
      "Passer de l'idée à l'action",
      "Développer l'autonomie"
    ],
    duree: "Plusieurs séances",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  },
  {
    title: "Je gère",
    description: "Un jeu centré sur la gestion d'une entreprise : budget, organisation, priorisation et prise de décision.",
    zones: ["Académie de Lille"],
    niveaux: ["Lycée", "Étudiant"],
    objectifs: [
      "Comprendre la gestion de projet",
      "Apprendre à gérer un budget",
      "Prendre des décisions raisonnées"
    ],
    duree: "Plusieurs séances",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  },
  {
    title: "Mon projet entrepreneurial",
    description: "Un accompagnement structuré pour construire, formaliser et présenter un projet entrepreneurial.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Lycée", "Étudiant"],
    objectifs: [
      "Structurer un projet",
      "Développer l'autonomie",
      "Préparer une présentation orale"
    ],
    duree: "Année scolaire",
    partenaire: "BGE",
    image: "/lovable-uploads/logo-bge.jpg"
  }
] as const;
