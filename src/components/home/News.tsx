
import { useEffect, useState } from "react";
import { Newspaper, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface LinkedInPost {
  url: string;
  title: string;
}

const News = () => {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: response, error } = await supabase.functions.invoke('scrape-linkedin');
        
        if (error) throw error;
        if (!response?.success || !response?.data) {
          throw new Error(response?.error || 'Failed to fetch posts');
        }

        setPosts(response.data);
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
          ) : (
            posts.map((post, index) => (
              <iframe 
                key={index}
                src={`${post.url}?postView=IMAGES`}
                height="500" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                className="rounded-xl shadow-sm"
                title={post.title}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
