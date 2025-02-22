
import { useEffect, useState } from "react";
import { Newspaper, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface LinkedInPost {
  id: number;
  url: string;
  title: string;
  active: boolean;
}

const News = () => {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('linkedin_posts')
          .select('*')
          .eq('active', true)
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching LinkedIn posts:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les publications LinkedIn",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="actualites" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Actualités</h2>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Newspaper className="h-6 w-6 text-primary mr-3" />
          </div>
          <a 
            href="https://www.linkedin.com/company/dispositifidee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            Suivez-nous sur LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 rounded-xl h-[500px]" />
            ))
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <iframe 
                key={post.id}
                src={`${post.url}?postView=IMAGES`}
                height="500" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                className="rounded-xl shadow-sm"
                title={post.title}
              />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              Aucune publication LinkedIn à afficher
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
