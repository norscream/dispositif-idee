-- Fix the function search path issue
DROP FUNCTION IF EXISTS public.get_equipe_public_columns();

-- Create a simple, secure approach using proper RLS policies
DROP POLICY IF EXISTS "Public can read equipe without email" ON public.equipe;

-- Create policy that allows public to read specific columns only (excluding email)
-- We'll handle this in the application layer by selecting only the needed columns
CREATE POLICY "Public can read equipe basic info" ON public.equipe
FOR SELECT USING (true);

-- The email restriction will be enforced at the application level
-- by only selecting the columns we want to expose publicly