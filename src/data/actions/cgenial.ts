
import { ActionPartenaire } from "@/types/actions";

export const cgenialActions: ActionPartenaire[] = [
  {
    title: "Yes we code",
    description: "Yes We Code! est un programme qui vise à développer les compétences numériques et l'esprit scientifique des jeunes, particulièrement des filles. À travers des ateliers pratiques de programmation et d'électronique, les élèves découvrent le monde du numérique et ses métiers tout en développant leur créativité et leur capacité à innover.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Développer des compétences numériques et technologiques",
      "Favoriser la mixité dans les filières scientifiques",
      "Sensibiliser aux métiers du numérique"
    ],
    duree: "Année scolaire",
    partenaire: "Fondation CGénial",
    image: "/lovable-uploads/709103e0-429a-4f7e-b8bb-92cd8eae1c52.png"
  }
] as const;
