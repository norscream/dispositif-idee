
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Concours } from "@/types/concours";

interface ConcoursCardProps {
  concours: Concours;
}

export function ConcoursCard({ concours }: ConcoursCardProps) {
  const scrollToForm = () => {
    const form = document.getElementById('inscription-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="h-full transition-all duration-500 hover:shadow-lg group-data-[state=center]:scale-110 group-data-[state=center]:opacity-100 group-data-[state=center]:shadow-xl opacity-50 group-data-[state=center]:bg-white bg-gray-50">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <img 
            src={concours.logo} 
            alt={`Logo ${concours.nom}`} 
            className="h-24 object-contain transition-transform group-data-[state=center]:scale-110"
          />
        </div>
        <CardTitle className="text-xl">{concours.nom}</CardTitle>
        <CardDescription>
          Public : {concours.public.join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div>
          <h4 className="font-semibold mb-2">Objectif</h4>
          <p className="text-sm text-gray-600">{concours.objectif}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Présentation</h4>
          <p className="text-sm text-gray-600">{concours.presentation}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Livrables attendus</h4>
          <ul className="text-sm text-gray-600 list-disc list-inside text-left">
            {concours.livrables.map((livrable, index) => (
              <li key={index} className="mb-1">{livrable}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Concours porté par</h4>
          <div className="flex justify-center items-center gap-8">
            {concours.partenaires.map((partenaire, index) => (
              <img 
                key={index}
                src={partenaire.logo} 
                alt={`Logo ${partenaire.nom}`}
                className="h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={scrollToForm}>
          S'inscrire au concours
        </Button>
      </CardFooter>
    </Card>
  );
}
