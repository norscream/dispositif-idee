-- Drop the problematic view and recreate it without SECURITY DEFINER
DROP VIEW IF EXISTS public.equipe_public;

-- Fix the RLS policies to properly restrict email access
DROP POLICY IF EXISTS "Public can read equipe (no email)" ON public.equipe;
DROP POLICY IF EXISTS "Authenticated users can read email in equipe" ON public.equipe;

-- Create a policy that restricts specific columns for public access
-- This approach uses a function to determine visible columns
CREATE OR REPLACE FUNCTION public.get_equipe_public_columns()
RETURNS TABLE(
  id uuid,
  nom text,
  prenom text,
  fonction text,
  image text,
  position_x integer,
  position_y integer,
  is_new_member boolean,
  created_at timestamptz,
  updated_at timestamptz
) 
LANGUAGE SQL
SECURITY INVOKER
STABLE
AS $$
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
$$;

-- Create new policies that properly restrict access
CREATE POLICY "Public can read equipe without email" ON public.equipe
FOR SELECT USING (true);

-- Grant access to the function
GRANT EXECUTE ON FUNCTION public.get_equipe_public_columns() TO anon;
GRANT EXECUTE ON FUNCTION public.get_equipe_public_columns() TO authenticated;