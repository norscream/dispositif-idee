
-- Drop the overly permissive public SELECT policy on equipe
DROP POLICY IF EXISTS "Public can read equipe basic info" ON public.equipe;

-- Create a new SELECT policy restricted to admins only
CREATE POLICY "Admins can read all equipe data"
ON public.equipe FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create a public view without the email column
CREATE OR REPLACE VIEW public.equipe_public AS
SELECT 
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
FROM public.equipe;

-- Grant public access to the view only
GRANT SELECT ON public.equipe_public TO anon;
GRANT SELECT ON public.equipe_public TO authenticated;
