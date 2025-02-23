
import { ActionPartenaire } from "@/types/actions";
import { bgeActions } from "./actions/bge";
import { dreamakersActions } from "./actions/dreamakers";
import { cgenialActions } from "./actions/cgenial";
import { autresActions } from "./actions/autres";
import { esperActions } from "./actions/esper";
import { rnjaActions } from "./actions/rnja";

export const actionsPartenaires: readonly ActionPartenaire[] = [
  ...autresActions,
  ...bgeActions,
  ...dreamakersActions,
  ...cgenialActions,
  ...esperActions,
  ...rnjaActions
] as const;
