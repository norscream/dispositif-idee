import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { actions } from "@/data/actions";

interface ActionIdee {
  id?: string;
  title: string;
  description: string;
  zones: readonly string[];
  niveaux: readonly string[];
  objectifs: readonly string[];
  duree: string;
  image: string;
  created_at?: string;
  updated_at?: string;
}

export function ActionsIdeeManager() {
  const [actionsList, setActionsList] = useState<ActionIdee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, use static data since there's no database table yet
    const actionsWithIds = actions.map((action, index) => ({
      ...action,
      id: `action-idee-${index}`,
    }));
    setActionsList(actionsWithIds);
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
          <h2 className="text-2xl font-bold">Gestion des Actions IDÉE</h2>
          <p className="text-gray-600">Gérer les actions pédagogiques proposées par l'équipe IDÉE</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter une action IDÉE
        </Button>
      </div>

      <div className="grid gap-4">
        {actionsList.map((action) => (
          <Card key={action.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Durée: {action.duree}</Badge>
                    {action.zones.map((zone) => (
                      <Badge key={zone} variant="outline">{zone}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => console.log('Modifier action:', action.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => console.log('Supprimer action:', action.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">{action.description}</p>
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-sm">Niveaux:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {action.niveaux.map((niveau) => (
                      <Badge key={niveau} variant="outline" className="text-xs">{niveau}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-sm">Objectifs:</span>
                  <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                    {action.objectifs.map((objectif, index) => (
                      <li key={index}>{objectif}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {actionsList.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <p className="text-gray-500 mb-4">Aucune action IDÉE trouvée</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter la première action IDÉE
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}