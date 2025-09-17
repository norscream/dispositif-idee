import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ActionPartenaire {
  id: string;
  title: string;
  description: string;
  zones: string[];
  niveaux: string[];
  objectifs: string[];
  duree: string;
  partenaire: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export function ActionsManager() {
  const [actions, setActions] = useState<ActionPartenaire[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActions();
  }, []);

  const fetchActions = async () => {
    try {
      const { data, error } = await supabase
        .from('actions_partenaires')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setActions(data || []);
    } catch (error) {
      toast("Erreur lors du chargement des actions");
      console.error('Error fetching actions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette action ?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('actions_partenaires')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setActions(actions.filter(action => action.id !== id));
      toast("Action supprimée avec succès");
    } catch (error) {
      toast("Erreur lors de la suppression");
      console.error('Error deleting action:', error);
    }
  };

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
          <h2 className="text-2xl font-bold">Actions Partenaires</h2>
          <p className="text-gray-600">Gérez les actions proposées par les partenaires</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter une action
        </Button>
      </div>

      <div className="grid gap-4">
        {actions.map((action) => (
          <Card key={action.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>Par {action.partenaire}</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(action.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {action.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Zones:</span>
                  <p>{action.zones.join(', ')}</p>
                </div>
                <div>
                  <span className="font-medium">Niveaux:</span>
                  <p>{action.niveaux.join(', ')}</p>
                </div>
                <div>
                  <span className="font-medium">Durée:</span>
                  <p>{action.duree}</p>
                </div>
                <div>
                  <span className="font-medium">Objectifs:</span>
                  <p>{action.objectifs.slice(0, 2).join(', ')}{action.objectifs.length > 2 ? '...' : ''}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {actions.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-gray-500">Aucune action trouvée</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}