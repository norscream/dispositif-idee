-- Create tables for content management

-- Actions partenaires table
CREATE TABLE public.actions_partenaires (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  zones TEXT[] NOT NULL,
  niveaux TEXT[] NOT NULL,
  objectifs TEXT[] NOT NULL,
  duree TEXT NOT NULL,
  partenaire TEXT NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Concours table
CREATE TABLE public.concours (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  objectif TEXT NOT NULL,
  public TEXT[] NOT NULL,
  presentation TEXT NOT NULL,
  livrables TEXT[] NOT NULL,
  logo TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Concours partenaires table (many-to-many relationship)
CREATE TABLE public.concours_partenaires (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  concours_id UUID REFERENCES public.concours(id) ON DELETE CASCADE,
  nom TEXT NOT NULL,
  logo TEXT NOT NULL
);

-- Evenements jeunes et audacieux table
CREATE TABLE public.evenements_jeunes_audacieux (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titre TEXT NOT NULL,
  date_debut DATE NOT NULL,
  date_fin DATE,
  lieu TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  lien_inscription TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Team members table
CREATE TABLE public.equipe (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  fonction TEXT NOT NULL,
  email TEXT NOT NULL,
  image TEXT NOT NULL,
  position_x INTEGER, -- for map positioning
  position_y INTEGER, -- for map positioning
  is_new_member BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.actions_partenaires ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.concours ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.concours_partenaires ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evenements_jeunes_audacieux ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.equipe ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is a public site)
CREATE POLICY "Public can read actions_partenaires" ON public.actions_partenaires FOR SELECT USING (true);
CREATE POLICY "Public can read concours" ON public.concours FOR SELECT USING (true);
CREATE POLICY "Public can read concours_partenaires" ON public.concours_partenaires FOR SELECT USING (true);
CREATE POLICY "Public can read evenements" ON public.evenements_jeunes_audacieux FOR SELECT USING (true);
CREATE POLICY "Public can read equipe" ON public.equipe FOR SELECT USING (true);

-- Admin policies will be added later after auth is set up

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_actions_partenaires_updated_at
  BEFORE UPDATE ON public.actions_partenaires
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_concours_updated_at
  BEFORE UPDATE ON public.concours
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_evenements_updated_at
  BEFORE UPDATE ON public.evenements_jeunes_audacieux
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_equipe_updated_at
  BEFORE UPDATE ON public.equipe
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();