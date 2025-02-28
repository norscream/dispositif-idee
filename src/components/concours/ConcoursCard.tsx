
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Concours } from "@/types/concours";
import { Link } from "react-router-dom";

interface ConcoursCardProps {
  concours: Concours;
}

export function ConcoursCard({ concours }: ConcoursCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all duration-500 shadow-sm data-[state=active]:shadow-2xl data-[state=active]:scale-110 data-[state=inactive]:opacity-50 data-[state=inactive]:bg-gray-50">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <img 
            src={concours.logo} 
            alt={`Logo ${concours.nom}`} 
            className="h-24 object-contain transition-transform data-[state=active]:scale-110"
          />
        </div>
        <CardTitle className="text-xl">{concours.nom}</CardTitle>
        <CardDescription>
          Public : {concours.public.join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
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
        </div>
        <div className="mt-8 pt-6">
          <h4 className="font-semibold mb-4 text-center">Concours porté par</h4>
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
      <CardFooter className="pt-4">
        <Button 
          className="w-full bg-primary text-white hover:bg-primary-dark" 
          asChild
        >
          <Link to="/contact">S'inscrire au concours</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
