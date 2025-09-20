import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { formations } from "@/data/formations";

interface Formation {
  id?: string;
  title: string;
  description: string;
  duration: string;
  public: string;
  created_at?: string;
  updated_at?: string;
}

export function FormationsManager() {
  const [formationsList, setFormationsList] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, use static data since there's no database table yet
    const formationsWithIds = formations.map((formation, index) => ({
      ...formation,
      id: `formation-${index}`,
    }));
    setFormationsList(formationsWithIds);
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
          <h2 className="text-2xl font-bold">Gestion des Formations</h2>
          <p className="text-gray-600">Gérer les formations proposées par l'équipe IDÉE</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter une formation
        </Button>
      </div>

      <div className="grid gap-4">
        {formationsList.map((formation) => (
          <Card key={formation.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{formation.title}</CardTitle>
                  <CardDescription>
                    Durée: {formation.duration} | Public: {formation.public}
                  </CardDescription>
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
              <p className="text-gray-700">{formation.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {formationsList.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <p className="text-gray-500 mb-4">Aucune formation trouvée</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter la première formation
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}