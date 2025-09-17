-- Add admin policies for authenticated users
-- For now, any authenticated user is considered admin (can be refined later)

CREATE POLICY "Authenticated users can manage actions_partenaires" 
ON public.actions_partenaires 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Authenticated users can manage concours" 
ON public.concours 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Authenticated users can manage concours_partenaires" 
ON public.concours_partenaires 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Authenticated users can manage evenements" 
ON public.evenements_jeunes_audacieux 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Authenticated users can manage equipe" 
ON public.equipe 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);