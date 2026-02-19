
import { ActionPartenaire } from "@/types/actions";

export const choisisTaPlaneteActions: ActionPartenaire[] = [
  {
    title: "Challenge Planète",
    description: "Un programme éducatif de sensibilisation au développement durable et au vivre-ensemble qui accompagne les classes tout au long de l'année scolaire pour s'approprier les Objectifs de Développement Durable et conduire un projet éco-citoyen concret porté par les élèves.",
    zones: ["Académie de Lille"],
    niveaux: ["École primaire (CM1-CM2)"],
    objectifs: [
      "Sensibiliser les élèves aux enjeux du développement durable",
      "Accompagner la réalisation d'un projet éco-citoyen concret",
      "Développer le sens de la coopération, de l'initiative et de la citoyenneté active"
    ],
    duree: "Année scolaire",
    partenaire: "Choisis ta Planète",
    image: "/lovable-uploads/logo-choisis-ta-planete.webp"
  }
] as const;
