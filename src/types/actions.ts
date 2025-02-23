
import { actions } from "@/data/actions";
import { actionsPartenaires } from "@/data/actionsPartenaires";

export const allActions = [...actions, ...actionsPartenaires] as const;

export type Action = (typeof allActions)[number];
export type Niveau = Action['niveaux'][number];
export type Objectif = Action['objectifs'][number];

export const niveauOrder = ["École", "Collège", "Lycée", "Post bac"] as const;

