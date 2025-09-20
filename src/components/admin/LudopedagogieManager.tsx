import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { jeux } from "@/data/ludopedagogie";

interface JeuLudopedagogie {
  id: number;
  titre: string;
  description: string;
  joueurs: string;
  age: string;
  competences: string[];
  niveau: string[];
  image?: string;
}

export function LudopedagogieManager() {
  const [jeuxList, setJeuxList] = useState<JeuLudopedagogie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use static data from ludopedagogie
    setJeuxList(jeux);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestion de la Ludopédagogie</h2>
          <p className="text-gray-600">Gérer les jeux et outils ludopédagogiques disponibles</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un jeu
        </Button>
      </div>

      <div className="grid gap-4">
        {jeuxList.map((jeu) => (
          <Card key={jeu.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <CardTitle className="text-lg">{jeu.titre}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{jeu.joueurs} joueurs</Badge>
                    <Badge variant="secondary">Âge: {jeu.age}</Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">{jeu.description}</p>
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-sm">Niveaux:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {jeu.niveau.map((niveau) => (
                      <Badge key={niveau} variant="outline" className="text-xs">{niveau}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-sm">Compétences développées:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {jeu.competences.map((competence) => (
                      <Badge key={competence} variant="outline" className="text-xs">{competence}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {jeuxList.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <p className="text-gray-500 mb-4">Aucun jeu trouvé</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter le premier jeu
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}