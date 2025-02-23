
import { ActionPartenaire } from "@/types/actions";

export const esperActions: ActionPartenaire[] = [
  {
    title: "Mon ESS à l'École",
    description: "« Mon ESS à l'École » est un dispositif permettant aux élèves de découvrir l'Économie Sociale et Solidaire en créant leur propre projet collectif. Accompagnés par leurs enseignants, ils font l'expérience de la citoyenneté économique en mettant en œuvre les valeurs de l'ESS : démocratie, solidarité, égalité et durabilité.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Découvrir l'Économie Sociale et Solidaire",
      "Expérimenter la gestion de projet et le travail collaboratif",
      "Développer l'esprit d'initiative et la citoyenneté"
    ],
    duree: "Année scolaire",
    partenaire: "L'ESPER",
    image: "/lovable-uploads/b1f8cf8c-f7b1-4e20-9fd7-fdcddf2c359d.png"
  }
] as const;
