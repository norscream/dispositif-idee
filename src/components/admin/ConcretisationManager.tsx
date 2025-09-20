import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";

interface Concretisation {
  id?: string;
  title: string;
  description: string;
  type: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

export function ConcretisationManager() {
  const [concretisations, setConcretisations] = useState<Concretisation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder data - this would typically come from a database
    const placeholderData: Concretisation[] = [
      {
        id: "1",
        title: "Projet entrepreneurial au Lycée",
        description: "Accompagnement d'un projet de création d'entreprise étudiante dans le domaine du développement durable",
        type: "Projet étudiant",
        status: "En cours"
      },
      {
        id: "2",
        title: "Challenge innovation collège",
        description: "Organisation d'un concours d'innovation pour les élèves de collège avec prototypage d'objets connectés",
        type: "Concours",
        status: "Terminé"
      }
    ];
    setConcretisations(placeholderData);
    setLoading(false);
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette concrétisation ?")) {
      setConcretisations(prev => prev.filter(item => item.id !== id));
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
          <h2 className="text-2xl font-bold">Gestion des Concrétisations</h2>
          <p className="text-gray-600">Gérer les projets concrets réalisés avec les établissements</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Ajouter une concrétisation
        </Button>
      </div>

      <div className="grid gap-4">
        {concretisations.map((concretisation) => (
          <Card key={concretisation.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{concretisation.title}</CardTitle>
                  <CardDescription>
                    Type: {concretisation.type} | Statut: {concretisation.status}
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(concretisation.id!)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{concretisation.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {concretisations.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <p className="text-gray-500 mb-4">Aucune concrétisation trouvée</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter la première concrétisation
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}