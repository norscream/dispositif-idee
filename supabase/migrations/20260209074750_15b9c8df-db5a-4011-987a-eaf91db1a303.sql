
-- Recreate the view with SECURITY INVOKER to avoid the security definer view warning
CREATE OR REPLACE VIEW public.equipe_public
WITH (security_invoker = true)
AS
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
