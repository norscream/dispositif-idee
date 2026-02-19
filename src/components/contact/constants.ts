

import { formations } from "@/data/formations";
import { bgeActions } from "@/data/actions/bge";
import { dreamakersActions } from "@/data/actions/dreamakers";
import { cgenialActions } from "@/data/actions/cgenial";
import { autresActions } from "@/data/actions/autres";
import { esperActions } from "@/data/actions/esper";
import { rnjaActions } from "@/data/actions/rnja";
import { choisisTaPlaneteActions } from "@/data/actions/choisistaplanete";
import { actions } from "@/data/actions";
import { concours } from "@/data/concours";

export const requestTypes = [
  "Action IDEE",
  "Action partenaire", 
  "Concours",
  "Formation",
  "Ludopedagogie",
  "Labellisation",
  "Concrétisation de projet",
  "Information générale"
];

export const ludopedagogieGames = [
  { value: "CONCEPT", label: "CONCEPT" },
  { value: "CONCEPT KIDS", label: "CONCEPT KIDS" },
  { value: "TOUR DE FROBEL", label: "TOUR DE FROBEL" },
  { value: "CRAYON COOPÉRATIF", label: "CRAYON COOPÉRATIF" },
  { value: "TOTEM", label: "TOTEM" },
  { value: "IMAGINE", label: "IMAGINE" },
  { value: "DIXIT", label: "DIXIT" },
  { value: "STORY CUBES", label: "STORY CUBES" },
  { value: "SPLENDOR", label: "SPLENDOR" },
  { value: "KONTOUR", label: "KONTOUR" }
];

export const allPartnerActions = [
  ...bgeActions,
  ...choisisTaPlaneteActions,
  ...dreamakersActions,
  ...cgenialActions,
  ...autresActions,
  ...esperActions,
  ...rnjaActions
];

