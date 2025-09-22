import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2, Mail, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface MembreEquipe {
  id: string;
  nom: string;
  prenom: string;
  fonction: string;
  email: string;
  image: string;
  position_x: number | null;
  position_y: number | null;
  is_new_member: boolean;
  created_at: string;
  updated_at: string;
}

export function EquipeManager() {
  const [equipe, setEquipe] = useState<MembreEquipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEquipe();
  }, []);

  const fetchEquipe = async () => {
    try {
      // Admin access - select all fields including email
      const { data, error } = await supabase
        .from('equipe')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setEquipe(data || []);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors du chargement de l'équipe",
        variant: "destructive"
      });
      console.error('Error fetching equipe:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce membre ?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('equipe')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setEquipe(equipe.filter(membre => membre.id !== id));
      toast({
        title: "Succès",
        description: "Membre supprimé avec succès"
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors de la suppression",
        variant: "destructive"
      });
      console.error('Error deleting membre:', error);
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
          <h2 className="text-2xl font-bold">Équipe</h2>
          <p className="text-gray-600">Gérez les membres de l'équipe</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter un membre
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {equipe.map((membre) => (
          <Card key={membre.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {membre.prenom} {membre.nom}
                    </CardTitle>
                    <CardDescription>{membre.fonction}</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(membre.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {membre.email}
                </div>
                {membre.is_new_member && (
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Nouveau membre
                  </div>
                )}
                {(membre.position_x !== null && membre.position_y !== null) && (
                  <div className="text-xs text-gray-500">
                    Position carte: {membre.position_x}, {membre.position_y}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {equipe.length === 0 && (
          <Card className="col-span-full">
            <CardContent className="py-8 text-center">
              <p className="text-gray-500">Aucun membre trouvé</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}