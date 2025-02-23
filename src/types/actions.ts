
import { actions } from "@/data/actions";
import { actionsPartenaires } from "@/data/actionsPartenaires";

// Define valid zone values as a tuple type
export const validZones = ["Académie de Lille", "Académie d'Amiens", "Région académique Hauts-de-France"] as const;
export type Zone = (typeof validZones)[number];

// Extract action type from the combined actions
export const allActions = [...actions, ...actionsPartenaires] as const;
export type Action = {
  title: string;
  description: string;
  zones: ReadonlyArray<Zone>;
  niveaux: ReadonlyArray<string>;
  objectifs: ReadonlyArray<string>;
  duree: string;
  image: string;
  partenaire?: string;
};

export type Niveau = Action['niveaux'][number];
export type Objectif = Action['objectifs'][number];

export const niveauOrder = ["École", "Collège", "Lycée", "Post bac"] as const;
