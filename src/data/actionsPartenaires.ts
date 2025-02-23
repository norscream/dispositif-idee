
import { ActionPartenaire } from "@/types/actions";
import { bgeActions } from "./actions/bge";
import { dreamakersActions } from "./actions/dreamakers";
import { cgenialActions } from "./actions/cgenial";
import { autresActions } from "./actions/autres";

export const actionsPartenaires: readonly ActionPartenaire[] = [
  ...autresActions,
  ...bgeActions,
  ...dreamakersActions,
  ...cgenialActions
] as const;
