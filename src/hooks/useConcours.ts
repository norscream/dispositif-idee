import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Concours } from "@/types/concours";

export function useConcours() {
  const [concours, setConcours] = useState<Concours[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchConcours();
  }, []);

  const fetchConcours = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch concours with their partenaires
      const { data: concoursData, error: concoursError } = await supabase
        .from('concours')
        .select(`
          *,
          concours_partenaires (
            nom,
            logo
          )
        `)
        .order('created_at', { ascending: false });

      if (concoursError) {
        throw concoursError;
      }

      // Transform database data to match Concours interface
      const transformedConcours: Concours[] = (concoursData || []).map(concours => ({
        nom: concours.nom,
        objectif: concours.objectif,
        public: concours.public,
        presentation: concours.presentation,
        livrables: concours.livrables,
        logo: concours.logo,
        partenaires: (concours.concours_partenaires || []).map((p: any) => ({
          nom: p.nom,
          logo: p.logo
        }))
      }));

      setConcours(transformedConcours);
    } catch (err) {
      console.error('Error fetching concours:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Fallback to static data if database fails
      try {
        const { concours: staticConcours } = await import('@/data/concours');
        setConcours([...staticConcours]);
      } catch (fallbackError) {
        console.error('Error loading fallback concours data:', fallbackError);
      }
    } finally {
      setLoading(false);
    }
  };

  return { concours, loading, error, refetch: fetchConcours };
}