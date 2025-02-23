
import { ActionPartenaire } from "@/types/actions";

export const dreamakersActions: ActionPartenaire[] = [
  {
    title: "Teste !",
    description: "Les jeunes imaginent des solutions pour des acteurs du territoire en lien avec des problématiques économiques (marketing, RH, innovation produit). Ils développent leur persévérance et leur esprit critique en appliquant des méthodes de travail collaboratif.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Expérimenter la gestion de projet et le travail collaboratif",
      "Favoriser l'initiative, la prise de décision et l'autonomie",
      "Sensibiliser aux enjeux économiques et sociaux"
    ],
    duree: "30 heures",
    partenaire: "Dreamakers",
    image: "/lovable-uploads/25d67512-8fb6-4188-a743-a79ff2ed0184.png"
  },
  {
    title: "Décrypte !",
    description: "À travers l'analyse de parcours d'entrepreneurs inspirants, les élèves découvrent comment naissent et se développent les projets innovants, ainsi que les étapes pour les concrétiser.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Développer l'esprit entrepreneurial et la créativité",
      "S'ouvrir à de nouvelles perspectives professionnelles",
      "Sensibiliser aux enjeux économiques et sociaux"
    ],
    duree: "10 heures",
    partenaire: "Dreamakers",
    image: "/lovable-uploads/25d67512-8fb6-4188-a743-a79ff2ed0184.png"
  },
  {
    title: "Vis !",
    description: "Les jeunes créent une entreprise adaptée à leur territoire, explorent les métiers du marketing et du commerce à travers des expériences de vente, et utilisent des outils de gestion. L'action sensibilise également aux enjeux sociétaux et environnementaux des entreprises.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Expérimenter la gestion de projet et le travail collaboratif",
      "Sensibiliser aux enjeux économiques et sociaux",
      "Favoriser l'initiative, la prise de décision et l'autonomie"
    ],
    duree: "Année scolaire",
    partenaire: "Dreamakers",
    image: "/lovable-uploads/25d67512-8fb6-4188-a743-a79ff2ed0184.png"
  }
] as const;
