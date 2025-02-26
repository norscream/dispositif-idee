
import { allPartnerActions, ludopedagogieGames } from "./constants";
import { actions } from "@/data/actions";
import { concours } from "@/data/concours";
import { formations } from "@/data/formations";
import type { SpecificOption } from "./types";

export const getSpecificOptions = (requestType: string): SpecificOption[] | null => {
  switch(requestType) {
    case "Action IDEE":
      return [
        { value: "multiple", label: "Je suis intéressé(e) par plusieurs actions" },
        ...actions.map(action => ({
          value: action.title,
          label: action.title
        }))
      ];
    case "Action partenaire":
      return [
        { value: "multiple", label: "Je suis intéressé(e) par plusieurs actions" },
        ...allPartnerActions.map(action => ({
          value: action.title,
          label: action.title
        }))
      ];
    case "Ludopedagogie":
      return [
        { value: "multiple", label: "Je suis intéressé(e) par plusieurs jeux" },
        ...ludopedagogieGames
      ];
    case "Formation":
      return [
        { value: "multiple", label: "Je suis intéressé(e) par plusieurs formations" },
        ...formations.map(formation => ({
          value: formation.title,
          label: formation.title
        }))
      ];
    case "Concours":
      return [
        { value: "multiple", label: "Je suis intéressé(e) par plusieurs concours" },
        ...concours.map(concours => ({
          value: concours.nom,
          label: concours.nom
        }))
      ];
    default:
      return null;
  }
};
