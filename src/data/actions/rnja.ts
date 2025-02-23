
import { ActionPartenaire } from "@/types/actions";

export const rnjaActions: ActionPartenaire[] = [
  {
    title: "Créer une Junior Association",
    description: "Le dispositif Junior Association permet aux jeunes de moins de 18 ans de s'organiser et de réaliser leurs projets en découvrant la dynamique associative. Cette expérience leur offre la possibilité de s'exercer à la démocratie et de développer leur esprit d'initiative tout en apprenant à gérer un projet collectif.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Découvrir le fonctionnement associatif",
      "Développer l'engagement citoyen",
      "Apprendre à monter et gérer des projets",
      "Expérimenter le travail en équipe"
    ],
    duree: "Année scolaire",
    partenaire: "Réseau National des Juniors Associations",
    image: "/lovable-uploads/54bb83b1-7354-4343-8571-b125958277ee.png"
  }
] as const;
