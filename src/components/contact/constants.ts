
import { formations } from "@/data/formations";
import { bgeActions } from "@/data/actions/bge";
import { dreamakersActions } from "@/data/actions/dreamakers";
import { cgenialActions } from "@/data/actions/cgenial";
import { autresActions } from "@/data/actions/autres";
import { esperActions } from "@/data/actions/esper";
import { rnjaActions } from "@/data/actions/rnja";
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
  { value: "TOTEM", label: "TOTEM" }
];

export const allPartnerActions = [
  ...bgeActions,
  ...dreamakersActions,
  ...cgenialActions,
  ...autresActions,
  ...esperActions,
  ...rnjaActions
];
