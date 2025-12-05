import { useState, useEffect } from "react";
import { ActionPartenaire } from "@/types/actions";
import { actionsPartenaires } from "@/data/actionsPartenaires";

export function useActions() {
  const [actions, setActions] = useState<ActionPartenaire[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use static data directly
    setActions([...actionsPartenaires]);
    setLoading(false);
  }, []);

  return { actions, loading, error: null, refetch: () => {} };
}
