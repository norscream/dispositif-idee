
import { ActionPartenaire } from "@/types/actions";
import { bgeActions } from "./actions/bge";
import { dreamakersActions } from "./actions/dreamakers";
import { cgenialActions } from "./actions/cgenial";
import { autresActions } from "./actions/autres";
import { esperActions } from "./actions/esper";
import { rnjaActions } from "./actions/rnja";
import { choisisTaPlaneteActions } from "./actions/choisistaplanete";

export const actionsPartenaires: readonly ActionPartenaire[] = [
  ...autresActions,
  ...bgeActions,
  ...choisisTaPlaneteActions,
  ...dreamakersActions,
  ...cgenialActions,
  ...esperActions,
  ...rnjaActions
] as const;

