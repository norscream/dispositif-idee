
export type Testimonial = {
  readonly name: string;
  readonly description: string;
  readonly image: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    name: "Collaboration IDEE",
    description: "Collaboration avec la DITP pour travailler de maniere collaborative avec des équipes éducatives",
    image: "/lovable-uploads/c0b92867-59a1-4ba8-b8aa-2cdfe3a6d088.png"
  },
  {
    name: "Stand IDEE",
    description: "Présentation de nos outils lors de l'événement découverte des acteurs de sensibilisation de l'INSPEE",
    image: "/lovable-uploads/3457e795-2747-4781-acfd-f82fbed4b822.png"
  },
  {
    name: "Présentation du dispositif IDEE et ses partenaires",
    description: "Lors de session de travail collaborative avec des enseignants",
    image: "/lovable-uploads/158335a3-36d1-4880-9ea2-2b2d6916df5d.png"
  },
  {
    name: "Formation IDEE",
    description: "Présentation de nos outils lors d'ateliers destinés aux enseignants",
    image: "/lovable-uploads/babffd42-c973-4990-a206-e07ed816e535.png"
  },
  {
    name: "Ludopédagogie",
    description: "Découverte des outils ludopédagogiques pour l'entrepreneuriat",
    image: "/lovable-uploads/07cd5c26-d413-4265-bc6a-465dd48039c8.png"
  },
  {
    name: "Comité de pilotage partenarial",
    description: "Organisation de groupes de travaux réunissant les acteurs de la sensibilisation à l'entrepreneuriat",
    image: "/lovable-uploads/1949c156-8c29-44f2-9c8e-c047a4a2ae85.png"
  }
];

/**
 * Renvoie une copie aléatoirement mélangée du tableau fourni en paramètre
 */
export const shuffleArray = <T>(array: readonly T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};
