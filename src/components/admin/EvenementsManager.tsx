import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2, Calendar } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface Evenement {
  id: string;
  titre: string;
  date_debut: string;
  date_fin: string | null;
  lieu: string;
  description: string;
  image: string | null;
  lien_inscription: string | null;
  created_at: string;
  updated_at: string;
}

export function EvenementsManager() {
  const [evenements, setEvenements] = useState<Evenement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvenements();
  }, []);

  const fetchEvenements = async () => {
    try {
      const { data, error } = await supabase
        .from('evenements_jeunes_audacieux')
        .select('*')
        .order('date_debut', { ascending: false });

      if (error) {
        throw error;
      }

      setEvenements(data || []);
    } catch (error) {
      toast("Erreur lors du chargement des événements");
      console.error('Error fetching evenements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('evenements_jeunes_audacieux')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setEvenements(evenements.filter(e => e.id !== id));
      toast("Événement supprimé avec succès");
    } catch (error) {
      toast("Erreur lors de la suppression");
      console.error('Error deleting evenement:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR');
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
          <h2 className="text-2xl font-bold">Événements Jeunes et Audacieux</h2>
          <p className="text-gray-600">Gérez les événements à venir</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un événement
        </Button>
      </div>

      <div className="grid gap-4">
        {evenements.map((evenement) => (
          <Card key={evenement.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{evenement.titre}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(evenement.date_debut)}
                    {evenement.date_fin && ` - ${formatDate(evenement.date_fin)}`}
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(evenement.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-sm">Lieu:</span>
                  <p className="text-sm text-gray-600">{evenement.lieu}</p>
                </div>
                <div>
                  <span className="font-medium text-sm">Description:</span>
                  <p className="text-sm text-gray-600 line-clamp-3">{evenement.description}</p>
                </div>
                {evenement.lien_inscription && (
                  <div>
                    <span className="font-medium text-sm">Lien d'inscription:</span>
                    <p className="text-sm text-blue-600 truncate">{evenement.lien_inscription}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {evenements.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-gray-500">Aucun événement trouvé</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}