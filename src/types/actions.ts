
import { actions } from "@/data/actions";
import { actionsPartenaires } from "@/data/actionsPartenaires";

// Define valid zone values
export const validZones = [
  "Académie de Lille",
  "Académie d'Amiens",
  "Région académique Hauts-de-France"
] as const;

export type Zone = typeof validZones[number];

export const allActions = [...actions, ...actionsPartenaires] as const;

export type Action = (typeof allActions)[number];
export type Niveau = Action['niveaux'][number];
export type Objectif = Action['objectifs'][number];

export const niveauOrder = ["École", "Collège", "Lycée", "Post bac"] as const;
