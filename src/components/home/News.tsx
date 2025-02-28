
import { Newspaper, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getActiveLinkedInPosts, LinkedInPost } from "@/services/linkedinService";
import { Skeleton } from "@/components/ui/skeleton";

const News = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['linkedinPosts'],
    queryFn: getActiveLinkedInPosts,
  });

  const renderLinkedInPosts = () => {
    if (isLoading) {
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="rounded-xl shadow-sm bg-gray-100 h-[500px]">
              <Skeleton className="h-full w-full rounded-xl" />
            </div>
          ))}
        </div>
      );
    }

    if (error) {
      console.error("Erreur lors du chargement des posts LinkedIn:", error);
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">Impossible de charger les dernières actualités. Veuillez réessayer plus tard.</p>
        </div>
      );
    }

    if (!posts || posts.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">Aucune actualité récente à afficher.</p>
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post: LinkedInPost) => (
          <iframe 
            key={post.id}
            src={post.url} 
            height="500" 
            width="100%" 
            frameBorder="0" 
            allowFullScreen 
            className="rounded-xl shadow-sm"
            title={post.title}
          ></iframe>
        ))}
      </div>
    );
  };

  return (
    <section id="actualites" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Actualités</h2>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Newspaper className="h-6 w-6 text-primary mr-3" />
          </div>
          <a 
            href="https://www.linkedin.com/in/dispositifidee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            Suivez-nous sur LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        {renderLinkedInPosts()}
      </div>
    </section>
  );
};

export default News;
