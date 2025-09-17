import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface Concours {
  id: string;
  nom: string;
  objectif: string;
  public: string[];
  presentation: string;
  livrables: string[];
  logo: string;
  created_at: string;
  updated_at: string;
}

export function ConcoursManager() {
  const [concours, setConcours] = useState<Concours[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConcours();
  }, []);

  const fetchConcours = async () => {
    try {
      const { data, error } = await supabase
        .from('concours')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setConcours(data || []);
    } catch (error) {
      toast("Erreur lors du chargement des concours");
      console.error('Error fetching concours:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce concours ?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('concours')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setConcours(concours.filter(c => c.id !== id));
      toast("Concours supprimé avec succès");
    } catch (error) {
      toast("Erreur lors de la suppression");
      console.error('Error deleting concours:', error);
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
          <h2 className="text-2xl font-bold">Concours</h2>
          <p className="text-gray-600">Gérez les concours disponibles</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un concours
        </Button>
      </div>

      <div className="grid gap-4">
        {concours.map((concours) => (
          <Card key={concours.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{concours.nom}</CardTitle>
                  <CardDescription>Public: {concours.public.join(', ')}</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(concours.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-sm">Objectif:</span>
                  <p className="text-sm text-gray-600">{concours.objectif}</p>
                </div>
                <div>
                  <span className="font-medium text-sm">Présentation:</span>
                  <p className="text-sm text-gray-600 line-clamp-3">{concours.presentation}</p>
                </div>
                <div>
                  <span className="font-medium text-sm">Livrables:</span>
                  <p className="text-sm text-gray-600">{concours.livrables.join(', ')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {concours.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-gray-500">Aucun concours trouvé</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}