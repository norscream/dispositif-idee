
export const formations = [
  {
    title: "Yes We Code",
    description: "Apprenez à gérer un projet robotique entrepreneurial en classe et maîtrisez les bases de la programmation en Python.",
    duration: "9h (6h en présentiel, 3h en distanciel)",
    public: "Enseignants de STI, ST2D ou SNT"
  },
  {
    title: "La pédagogie de projet par la robotique",
    description: "Menez un projet robotique avec une approche entrepreneuriale et découvrez les outils numériques associés.",
    duration: "6h (Présentiel et distanciel)",
    public: "Personnel éducatif engagé dans le projet SKILLBOT"
  },
  {
    title: "FOLIOS et l'esprit d'entreprendre",
    description: "Utilisez le portfolio numérique FOLIOS pour valoriser les expériences et apprentissages des élèves.",
    duration: "9h (6h en présentiel, 3h en distanciel)",
    public: "Enseignants, CPE, Psy-EN"
  },
  {
    title: "Outil de créativité et de réflexion - 6 chapeaux de Bono",
    description: "Apprenez à animer des séances de créativité et de réflexion avec la méthode des 6 chapeaux de Bono.",
    duration: "6h (Présentiel)",
    public: "Personnel éducatif du secondaire"
  },
  {
    title: "Outil d'analyse et de réflexivité avec le CoDéveloppement (CoDev)",
    description: "Initiez-vous à la méthode du CoDéveloppement pour animer des séances de résolution de problèmes et de gestion de conflits.",
    duration: "6h (Présentiel)",
    public: "Personnel éducatif du secondaire"
  },
  {
    title: "Sensibilisation à la pédagogie entrepreneuriale",
    description: "Découvrez l'outil 'Fresque de l'esprit d'entreprendre' et apprenez à mettre en place une pédagogie qui développe l'esprit d'entreprendre chez les élèves.",
    duration: "3h (Présentiel)",
    public: "Enseignants de tous niveaux"
  }
];

export type Formation = {
  title: string;
  description: string;
  duration: string;
  public: string;
};
