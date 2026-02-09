
-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table for RBAC
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (avoids recursive RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Admins can manage user_roles"
ON public.user_roles FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can read own role"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid());

-- Drop overly permissive policies on all tables
DROP POLICY IF EXISTS "Authenticated users can manage actions_partenaires" ON public.actions_partenaires;
DROP POLICY IF EXISTS "Authenticated users can manage concours" ON public.concours;
DROP POLICY IF EXISTS "Authenticated users can manage concours_partenaires" ON public.concours_partenaires;
DROP POLICY IF EXISTS "Authenticated users can manage equipe" ON public.equipe;
DROP POLICY IF EXISTS "Authenticated users can manage evenements" ON public.evenements_jeunes_audacieux;

-- Replace with admin-only policies
CREATE POLICY "Admins can manage actions_partenaires"
ON public.actions_partenaires FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage concours"
ON public.concours FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage concours_partenaires"
ON public.concours_partenaires FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage equipe"
ON public.equipe FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage evenements"
ON public.evenements_jeunes_audacieux FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));
