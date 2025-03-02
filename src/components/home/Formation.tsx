
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Formation = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="h-8 w-8 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Nos Formations</h2>
          <p className="text-lg text-gray-600 mb-8">
            Développez vos compétences et enrichissez votre pratique pédagogique grâce à notre offre de formation 
            dédiée aux équipes éducatives.
          </p>
          <Link
            to="/ressources/formation"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Découvrir nos formations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Formation;
