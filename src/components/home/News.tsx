
import { Newspaper, ArrowRight } from "lucide-react";

const News = () => {
  return (
    <section id="actualites" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Actualités</h2>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Newspaper className="h-6 w-6 text-primary mr-3" />
            <span className="text-lg font-medium">Nos dernières publications</span>
          </div>
          <a 
            href="https://www.linkedin.com/in/dispositifidee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            aria-label="Suivez-nous sur LinkedIn"
          >
            Suivez-nous sur LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              url: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7293613919326142464?postView=IMAGES",
              title: "Publication LinkedIn 1"
            },
            {
              url: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7287770276363206656?postView=IMAGES",
              title: "Publication LinkedIn 2"
            },
            {
              url: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7269281787531464705?postView=IMAGES",
              title: "Publication LinkedIn 3"
            }
          ].map((post, index) => (
            <iframe 
              key={index}
              src={post.url} 
              height="500" 
              width="100%" 
              frameBorder="0" 
              allowFullScreen 
              className="rounded-xl shadow-sm"
              title={post.title}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
