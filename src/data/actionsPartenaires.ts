
import { ActionPartenaire } from "@/types/actions";
import { bgeActions } from "./actions/bge";
import { dreamakersActions } from "./actions/dreamakers";
import { cgenialActions } from "./actions/cgenial";
import { autresActions } from "./actions/autres";
import { esperActions } from "./actions/esper";

export const actionsPartenaires: readonly ActionPartenaire[] = [
  ...autresActions,
  ...bgeActions,
  ...dreamakersActions,
  ...cgenialActions,
  ...esperActions
] as const;
