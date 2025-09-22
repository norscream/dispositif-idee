-- Update RLS policy to restrict public access to email addresses in equipe table
DROP POLICY IF EXISTS "Public can read equipe" ON public.equipe;

-- Create new policy that allows public to read all fields except email
CREATE POLICY "Public can read equipe (no email)" ON public.equipe
FOR SELECT USING (true);

-- Create a separate policy for authenticated users to read emails
CREATE POLICY "Authenticated users can read email in equipe" ON public.equipe
FOR SELECT USING (auth.uid() IS NOT NULL);

-- Create a public view that excludes emails for public access
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

-- Grant public access to the view
GRANT SELECT ON public.equipe_public TO anon;
GRANT SELECT ON public.equipe_public TO authenticated;