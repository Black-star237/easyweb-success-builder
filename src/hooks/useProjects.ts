
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Project {
  id: string;
  title: string;
  category: 'vitrine' | 'ecommerce';
  image_url: string;
  description: string;
  tech: string[];
  live_url: string;
  show_on_homepage: boolean;
  created_at: string;
  updated_at: string;
}

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        throw new Error(`Failed to fetch projects: ${error.message}`);
      }

      return data as Project[];
    },
  });
};

export const useHomepageProjects = () => {
  return useQuery({
    queryKey: ['homepage-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('show_on_homepage', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching homepage projects:', error);
        throw new Error(`Failed to fetch homepage projects: ${error.message}`);
      }

      return data as Project[];
    },
  });
};
