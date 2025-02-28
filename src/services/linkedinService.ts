
import { supabase } from "@/integrations/supabase/client";

export interface LinkedInPost {
  id: number;
  title: string;
  url: string;
  created_at: string;
  active: boolean | null;
}

export async function getActiveLinkedInPosts(): Promise<LinkedInPost[]> {
  const { data, error } = await supabase
    .from('linkedin_posts')
    .select('*')
    .eq('active', true)
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error("Erreur lors de la récupération des posts LinkedIn:", error);
    return [];
  }

  return data || [];
}
