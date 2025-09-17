import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ActionPartenaire } from "@/types/actions";

export function useActions() {
  const [actions, setActions] = useState<ActionPartenaire[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchActions();
  }, []);

  const fetchActions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: supabaseError } = await supabase
        .from('actions_partenaires')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      // Transform database data to match ActionPartenaire interface
      const transformedActions: ActionPartenaire[] = (data || []).map(action => ({
        title: action.title,
        description: action.description,
        zones: action.zones as readonly string[],
        niveaux: action.niveaux as readonly string[],
        objectifs: action.objectifs as readonly string[],
        duree: action.duree,
        partenaire: action.partenaire,
        image: action.image
      }));

      setActions(transformedActions);
    } catch (err) {
      console.error('Error fetching actions:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Fallback to static data if database fails
      try {
        const { actionsPartenaires } = await import('@/data/actionsPartenaires');
        setActions([...actionsPartenaires]);
      } catch (fallbackError) {
        console.error('Error loading fallback data:', fallbackError);
      }
    } finally {
      setLoading(false);
    }
  };

  return { actions, loading, error, refetch: fetchActions };
}