
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Action } from "@/types/actions";

interface ActionCardProps {
  action: Action;
}

export function ActionCard({ action }: ActionCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={action.image} 
          alt={action.title} 
          className="w-full h-full object-contain"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{action.title}</CardTitle>
        <CardDescription className="text-base">{action.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Zones d'intervention :</p>
            <div className="flex flex-wrap gap-2">
              {action.zones.map((zone, i) => (
                <Badge key={i} variant="secondary">{zone}</Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Niveaux :</p>
            <div className="flex flex-wrap gap-2">
              {action.niveaux.map((niveau, i) => (
                <Badge key={i} variant="secondary">{niveau}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-2">Objectifs :</p>
            <div className="flex flex-wrap gap-2">
              {action.objectifs.map((objectif, i) => (
                <Badge key={i} variant="outline">{objectif}</Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <p><span className="font-medium">Durée :</span> {action.duree}</p>
          </div>

          {"partenaire" in action && (
            <div className="flex items-center">
              <p><span className="font-medium">Partenaire :</span> {action.partenaire}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          to="/contact"
          className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors"
        >
          Je suis intéressé(e) par cette action
        </Link>
      </CardFooter>
    </Card>
  );
}
