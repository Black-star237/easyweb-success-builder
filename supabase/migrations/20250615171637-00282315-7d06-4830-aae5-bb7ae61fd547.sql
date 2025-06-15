
-- Create the projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('vitrine', 'ecommerce')),
  image_url TEXT NOT NULL,
  description TEXT NOT NULL,
  tech TEXT[] NOT NULL DEFAULT '{}',
  live_url TEXT NOT NULL,
  show_on_homepage BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (since this is a portfolio site)
CREATE POLICY "Allow public read access to projects" 
  ON public.projects 
  FOR SELECT 
  TO public
  USING (true);

-- Insert sample data from existing projects
INSERT INTO public.projects (title, category, image_url, description, tech, live_url, show_on_homepage) VALUES
('Restaurant Le Savoureux', 'vitrine', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', 'Site vitrine moderne pour restaurant avec menu en ligne', ARRAY['React', 'Tailwind CSS', 'Framer Motion'], 'https://restaurant-demo.example.com', true),
('Boutique Mode Afrique', 'ecommerce', 'https://images.unsplash.com/photo-1483058712412-4245e9b90334', 'E-commerce de vêtements africains avec paiement mobile', ARRAY['Next.js', 'Stripe', 'MongoDB'], 'https://boutique-afrique.example.com', true),
('Cabinet Médical', 'vitrine', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', 'Site professionnel avec prise de rendez-vous en ligne', ARRAY['Vue.js', 'Node.js', 'MySQL'], 'https://cabinet-medical.example.com', true),
('Marketplace Locale', 'ecommerce', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b', 'Plateforme de vente entre particuliers', ARRAY['React', 'Firebase', 'PayPal'], 'https://marketplace-local.example.com', true),
('École Primaire Saint-Paul', 'vitrine', 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1', 'Site web pour école avec espace parents et élèves', ARRAY['WordPress', 'PHP', 'MySQL'], 'https://ecole-saint-paul.example.com', false),
('Pharmacie Central Plus', 'ecommerce', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f', 'E-commerce pharmaceutique avec livraison à domicile', ARRAY['Shopify', 'React', 'Stripe'], 'https://pharmacie-central.example.com', false),
('Garage Auto Expert', 'vitrine', 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3', 'Site vitrine pour garage automobile avec prise de RDV', ARRAY['HTML5', 'CSS3', 'JavaScript'], 'https://garage-auto-expert.example.com', false),
('Immobilier Douala Premium', 'vitrine', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa', 'Plateforme immobilière avec recherche avancée', ARRAY['React', 'Node.js', 'PostgreSQL'], 'https://immobilier-douala.example.com', false);

-- Create function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at on row updates
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON public.projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
