
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Gamepad2 } from "lucide-react";

export type Game = {
  id: number;
  titre: string;
  description: string;
  joueurs: string;
  age: string;
  competences: string[];
  niveau: string[];
  image?: string;
};

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{game.titre}</CardTitle>
        </div>
        {game.image && (
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
            <img 
              src={game.image} 
              alt={game.titre}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <p className="text-sm text-gray-600 mt-2">{game.description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-primary" />
            <span>Nombre de joueurs : {game.joueurs}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Gamepad2 className="h-4 w-4 text-primary" />
            <span>Âge recommandé : {game.age}</span>
          </div>
          
          {game.competences && game.competences.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">Compétences développées :</p>
              <div className="flex flex-wrap gap-2">
                {game.competences.map((competence, index) => (
                  <Badge key={index} variant="secondary">
                    {competence}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {game.niveau && game.niveau.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">Public cible :</p>
              <div className="flex flex-wrap gap-2">
                {game.niveau.map((niv, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                    {niv}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
