import { useState, useEffect } from "react";
import { Concours } from "@/types/concours";
import { concours as staticConcours } from "@/data/concours";

export function useConcours() {
  const [concours, setConcours] = useState<Concours[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use static data directly
    setConcours([...staticConcours]);
    setLoading(false);
  }, []);

  return { concours, loading, error: null, refetch: () => {} };
}
