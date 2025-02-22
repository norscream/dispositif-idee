
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Nav } from "@/components/Nav";
import { Trophy } from "lucide-react";

const concours = [
  {
    title: "Challenge de l'Innovation",
    description: "Un concours stimulant où les élèves développent des solutions innovantes pour répondre aux défis sociétaux actuels.",
    periode: "Septembre - Mai",
    niveaux: ["Lycée", "Post bac"],
  },
  {
    title: "Mini-Entreprises",
    description: "Créez et gérez votre propre entreprise pendant une année scolaire, du concept à la commercialisation.",
    periode: "Octobre - Juin",
    niveaux: ["Collège", "Lycée"],
  },
  {
    title: "Graines d'Entrepreneurs",
    description: "Un programme destiné aux plus jeunes pour développer leur esprit d'entreprise et leur créativité.",
    periode: "Janvier - Avril",
    niveaux: ["École", "Collège"],
  },
];

export default function Concours() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Trophy className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-center">Nos Concours</h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concours.map((concours, index) => (
            <Card key={index} className="hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle>{concours.title}</CardTitle>
                <CardDescription>Niveaux : {concours.niveaux.join(", ")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{concours.description}</p>
                <p className="text-sm text-primary">Période : {concours.periode}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
