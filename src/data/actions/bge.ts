
import { ActionPartenaire } from "@/types/actions";

export const bgeActions: ActionPartenaire[] = [
  {
    title: "E-kids, les petits entrepreneurs",
    description: "Cette action vise à initier les élèves au monde de l'entrepreneuriat à travers un jeu en ligne. Les élèves deviennent des entrepreneurs virtuels et doivent prendre des décisions pour développer leur entreprise. Ils découvrent ainsi les différentes facettes de l'entrepreneuriat de manière ludique et interactive. Le jeu est accessible à tous les élèves et peut être utilisé en classe ou à la maison.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["École"],
    objectifs: [
      "Développer l'esprit entrepreneurial et la créativité",
      "Découvrir le monde professionnel de façon ludique",
      "Apprendre à prendre des décisions"
    ],
    duree: "3 heures",
    partenaire: "BGE",
    image: "/lovable-uploads/2dadb987-0e33-4594-9e49-a8fc26e33018.png"
  },
  {
    title: "Je découvre",
    description: "L'action JE DECOUVRE permet aux élèves de découvrir le Parcours de l'Entrepreneur et d'avoir un aperçu concret des étapes de la création d'une entreprise. Cette première partie s'articule autour d'un échange avec un consultant BGE et d'un travail en équipe via un plateau de jeu. Le but est d'expliquer les éléments pratiques de la démarche de création. La seconde partie sera axée sur la rencontre avec un chef d'entreprise accompagné par BGE, qui témoignera de son parcours, des difficultés éventuelles qu'il a rencontrées, et de la satisfaction qu'il retire de sa création d'entreprise. Il présentera le métier de chef d'entreprise comme une voie professionnelle possible. La conclusion de cette session permettra d'informer sur l'existence de structures spécialisées dans l'accompagnement à la création d'entreprise, et de l'engagement de la Région Hauts de France depuis plusieurs années auprès des entrepreneurs.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée", "Post bac"],
    objectifs: [
      "Sensibiliser aux enjeux économiques et sociaux",
      "Découvrir le monde professionnel et les métiers",
      "S'ouvrir à de nouvelles perspectives professionnelles"
    ],
    duree: "2 heures",
    partenaire: "BGE",
    image: "/lovable-uploads/2dadb987-0e33-4594-9e49-a8fc26e33018.png"
  },
  {
    title: "J'éveille",
    description: "Cette action de BGE comprend 3 ateliers d'1h30 permettant de donner le goût d'entreprendre. Les élèves décèlent leur profil entrepreneurial, échangent avec des entrepreneurs et stimulent leur savoir-agir. Au terme de ces ateliers, les jeunes auront imaginé une idée de projet entrepreneurial à mener avec leur enseignant.",
    zones: ["Académie de Lille"],
    niveaux: ["Collège", "Lycée"],
    objectifs: [
      "Développer l'esprit entrepreneurial et la créativité",
      "Découvrir le monde professionnel et les métiers",
      "Sensibiliser aux enjeux économiques et sociaux"
    ],
    duree: "4 heures",
    partenaire: "BGE Flandres Création",
    image: "/lovable-uploads/2dadb987-0e33-4594-9e49-a8fc26e33018.png"
  },
  {
    title: "J'entreprends",
    description: "L'action J'ENTREPRENDS propose aux élèves un parcours de 6 séances interactives, créatives et très pragmatiques revisitant le parcours d'un entrepreneur. Elle permet de mettre les élèves en situation de porteur de projet et ainsi les familiariser à la conduite de projet en stimulant leur « savoir-être » et leur « savoir-agir ». Tout au long des animations, les élèves vont réaliser une présentation de leur projet (diaporama) qu'ils soumettront à un jury en fin de parcours.",
    zones: ["Région académique Hauts-de-France"],
    niveaux: ["Collège", "Lycée", "Post bac"],
    objectifs: [
      "Expérimenter la gestion de projet et le travail collaboratif",
      "Développer l'esprit entrepreneurial et la créativité",
      "Apprendre à s'exprimer à l'oral et à argumenter ses idées"
    ],
    duree: "20 heures",
    partenaire: "BGE",
    image: "/lovable-uploads/2dadb987-0e33-4594-9e49-a8fc26e33018.png"
  },
  {
    title: "Entrepreneur, pourquoi pas moi ?",
    description: "L'action amène les jeunes à considérer le métier de chef d'entreprise comme voie professionnelle possible. Après avoir défini ce qu'est une entreprise, les motivations et qualités pour entreprendre, l'animateur BGE va lever les freins à la création d'entreprise. L'action se conclut par le témoignage vidéo d'un entrepreneur.",
    zones: ["Académie de Lille"],
    niveaux: ["Collège", "Lycée", "Post bac"],
    objectifs: [
      "Favoriser l'initiative, la prise de décision et l'autonomie",
      "S'ouvrir à de nouvelles perspectives professionnelles",
      "Découvrir le monde professionnel et les métiers"
    ],
    duree: "1 heure",
    partenaire: "BGE Flandres Création",
    image: "/lovable-uploads/2dadb987-0e33-4594-9e49-a8fc26e33018.png"
  }
] as const;
