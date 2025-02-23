
import { ActionPartenaire } from "@/types/actions";

export const autresActions: ActionPartenaire[] = [
  {
    title: "Programme Écoles Imagine",
    description: "Le Programme Écoles Imagine vise à épanouir les jeunes générations en les impliquant dans des projets collectifs pour une société plus inclusive et durable. Ce programme développe les compétences psychosociales des élèves à travers des activités variées et ludiques, favorisant ainsi une dynamique de cohésion entre les élèves et les enseignants. Il facilite également l'acquisition du label E3D grâce aux projets solidaires réalisés.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["École", "Collège", "Lycée"],
    objectifs: [
      "Favoriser l'initiative, la prise de décision et l'autonomie",
      "Expérimenter la gestion de projet et le travail collaboratif",
      "Sensibiliser aux enjeux économiques et sociaux"
    ],
    duree: "Variable selon le projet",
    partenaire: "Le Projet Imagine",
    image: "/lovable-uploads/7801aae5-1375-471b-9e1b-98b7aa6e1fc4.png"
  },
  {
    title: "Enactus Lycéens : Agir pour un avenir durable",
    description: "Le programme \"Enactus Lycéens\" accompagne les élèves dans la conception et la réalisation de projets sociaux et solidaires en équipe. En partant des Objectifs de Développement Durable, les lycéens identifient des enjeux locaux qui les touchent, puis élaborent des solutions innovantes pour y répondre. Ce parcours, co-animé par les enseignants et des formateurs Enactus, s'étend sur une période de 5 à 6 mois, durant laquelle les élèves développent leurs compétences en gestion de projet, travail collaboratif et prise de parole en public.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Lycée"],
    objectifs: [
      "Développer l'esprit entrepreneurial et la créativité",
      "Expérimenter la gestion de projet et le travail collaboratif",
      "Favoriser l'initiative, la prise de décision et l'autonomie"
    ],
    duree: "5 à 6 mois",
    partenaire: "Enactus France",
    image: "/lovable-uploads/5220c30b-a33a-413b-aa44-443361dd431b.png"
  }
] as const;
