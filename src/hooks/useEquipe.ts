import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface MembreEquipePublic {
  id: string;
  nom: string;
  prenom: string;
  fonction: string;
  image: string;
  position_x: number | null;
  position_y: number | null;
  is_new_member: boolean;
  created_at: string;
  updated_at: string;
}

export function useEquipePublic() {
  const [equipe, setEquipe] = useState<MembreEquipePublic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEquipePublic();
  }, []);

  const fetchEquipePublic = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Public access - only select non-sensitive fields (excluding email)
      const { data, error } = await supabase
        .from('equipe')
        .select(`
          id,
          nom,
          prenom,
          fonction,
          image,
          position_x,
          position_y,
          is_new_member,
          created_at,
          updated_at
        `)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setEquipe(data || []);
    } catch (error) {
      console.error('Error fetching equipe:', error);
      setError('Erreur lors du chargement de l\'équipe');
    } finally {
      setLoading(false);
    }
  };

  return { equipe, loading, error, refetch: fetchEquipePublic };
}