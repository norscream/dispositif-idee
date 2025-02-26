
import { Nav } from "@/components/Nav";
import { ArrowLeft, GraduationCap, Wallet, Users, LineChart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const currentProjects = [
  { name: "Projet potager", etablissement: "Collège Desrousseaux" },
  { name: "Projet NIRD", etablissement: "Lycée Carnot" },
  { name: "Projet troupe de théâtre", etablissement: "Collège Vadez" },
  { name: "Projet borne arcade", etablissement: "Lycée Automobile" },
  { name: "Projet escape game : service à la personne", etablissement: "Made de Sévigné" },
  { name: "Corridor écologique", etablissement: "Établissement du bassin 11" },
  { name: "Maintenance Drone", etablissement: "Lycée Colart Noel" },
  { name: "Les vélos de Boris", etablissement: "Collège Boris Vian" },
  { name: "Recyclage et réparation de fauteuils roulants", etablissement: "Lycée Henri D'Arras" },
  { name: "Concrétisation de la journée Téléthon", etablissement: "Lycée Mariette" },
];

const testimonials = [
  {
    quote: "Grâce au financement IDÉE, nous avons pu acheter le matériel nécessaire pour réparer plus de 20 ordinateurs qui ont été donnés à des élèves.",
    author: "Équipe du projet PC Solidaire, Lycée Carnot"
  },
  {
    quote: "Le soutien d'IDÉE nous a permis de transformer notre idée de potager partagé en réalité. C'est une vraie fierté de voir nos légumes pousser !",
    author: "Éco-délégués du Collège Desrousseaux"
  }
];

export default function Concretisation() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto px-4">
        <div className="py-16 max-w-5xl mx-auto">
          <Link 
            to="/ressources" 
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux ressources
          </Link>
          
          <h1 className="text-4xl font-bold mb-6">Concrétisation des projets</h1>
          
          <div className="prose max-w-none">
            <div className="bg-primary/5 rounded-xl p-8 mb-12">
              <p className="text-lg leading-relaxed mb-0">
                Le dispositif IDÉE s'engage pleinement dans l'accompagnement des élèves pour la concrétisation de leurs projets entrepreneuriaux. Notre mission est de transformer les idées innovantes en réalisations tangibles en apportant un soutien matériel et financier essentiel. Nous croyons en la capacité des jeunes à façonner l'avenir, et nous leur donnons les moyens de leurs ambitions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-semibold">Accompagnement structuré</h2>
                  </div>
                  <p className="text-gray-600">
                    Les actions IDEE visent à développer l'esprit d'entreprendre et l'esprit d'entreprise. À travers ces projets, les jeunes sont amenés à faire preuve de créativité et à s'investir pleinement pour donner vie à leurs idées.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Wallet className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-semibold">Fonds de soutien</h2>
                  </div>
                  <p className="text-gray-600">
                    Chaque projet peut bénéficier d'un financement maximal de 1000 euros pour l'achat de matériel essentiel au prototypage ou au développement du projet.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-neutral-dark text-white rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Comment bénéficier du financement ?</h2>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Projet suivi toute l'année
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Partenariat avec un acteur labellisé IDEE
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Objet ou service clairement défini
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  Devis conformes aux règles de mise en concurrence
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold m-0">Exemples de projets accompagnés</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Restauration et don de PC</h3>
                  <p className="text-sm text-gray-600">Des élèves du lycée Carnot réparent des ordinateurs en récupérant et remplaçant des pièces défectueuses.</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Projets écologiques</h3>
                  <p className="text-sm text-gray-600">Le Parlement des Éco-délégués développe un observatoire des étoiles, un potager partagé et une armoire solidaire.</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Les vélos de Boris</h3>
                  <p className="text-sm text-gray-600">Restauration de vélos par des élèves de SEGPA pour un périple de 200 km et des présentations en établissements scolaires.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <LineChart className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold m-0">Projet ambition : étude d'impact</h2>
              </div>
              <div className="bg-white p-6 rounded-xl border">
                <p className="text-gray-600 mb-4">
                  IDEE mène une étude approfondie dans 5 collèges et 5 lycées pour mesurer l'impact des actions sur les compétences, l'orientation et l'engagement des élèves.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Utilisation d'une plateforme en ligne (Trello) pour le suivi en temps réel</li>
                  <li>• Évaluation qualitative et quantitative</li>
                  <li>• Mesure des effets sur la motivation et les compétences</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold m-0">Projets accompagnés cette année</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentProjects.map((project, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-primary">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.etablissement}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Témoignages</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <p className="text-sm font-medium text-primary">{testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/5 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Vous avez un projet à concrétiser ?
                </h2>
                <p className="text-gray-600 mb-6">
                  Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à le réaliser.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Soumettre un projet</Link>
                </Button>
              </div>

              <div className="bg-secondary/10 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Critères de financement
                </h2>
                <p className="text-gray-600 mb-6">
                  Découvrez les modalités et conditions pour bénéficier d'un financement IDÉE.
                </p>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Voir les critères</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
