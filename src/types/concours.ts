
export interface Partenaire {
  nom: string;
  logo: string;
}

export interface Concours {
  nom: string;
  objectif: string;
  public: string[];
  presentation: string;
  livrables: string[];
  logo: string;
  partenaires: Partenaire[];
}
