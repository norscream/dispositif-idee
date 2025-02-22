
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useState, useMemo } from "react";
import { actions } from "@/data/actions";
import { actionsPartenaires } from "@/data/actionsPartenaires";

// Combiner les deux types d'actions
const allActions = [...actions, ...actionsPartenaires];

// Définir les types basés sur les actions
type Action = typeof allActions[number];
type Zone = Action['zones'][number];
type Niveau = Action['niveaux'][number];
type Objectif = Action['objectifs'][number];

// Définir l'ordre spécifique des zones avec le bon type
const zoneOrder: Zone[] = [
  "Région académique Hauts-de-France",
  "Académie de Lille",
  "Académie d'Amiens"
];

// Définir l'ordre spécifique des niveaux avec le bon type
const niveauOrder: Niveau[] = ["École", "Collège", "Lycée", "Post bac"];

// Extraire et trier les critères uniques
const uniqueZones = zoneOrder.filter(zone => 
  allActions.some(action => action.zones.includes(zone))
);

const uniqueNiveaux = niveauOrder.filter(niveau => 
  allActions.some(action => action.niveaux.includes(niveau))
);

const uniqueObjectifs = [...new Set(allActions.flatMap(action => action.objectifs))] as Objectif[];

export default function RechercheActions() {
  // Utiliser des arrays pour stocker les sélections multiples
  const [selectedZones, setSelectedZones] = useState<Zone[]>([]);
  const [selectedNiveaux, setSelectedNiveaux] = useState<Niveau[]>([]);
  const [selectedObjectifs, setSelectedObjectifs] = useState<Objectif[]>([]);

  // Filtrer les actions en fonction des critères sélectionnés
  const filteredActions = useMemo(() => {
    return allActions.filter(action => {
      const matchesZones = selectedZones.length === 0 || 
        action.zones.some(zone => selectedZones.includes(zone));
      const matchesNiveaux = selectedNiveaux.length === 0 || 
        action.niveaux.some(niveau => selectedNiveaux.includes(niveau));
      const matchesObjectifs = selectedObjectifs.length === 0 || 
        action.objectifs.some(objectif => selectedObjectifs.includes(objectif));

      return matchesZones && matchesNiveaux && matchesObjectifs;
    });
  }, [selectedZones, selectedNiveaux, selectedObjectifs]);

  // Gestionnaires pour la sélection multiple
  const handleZoneSelect = (zone: Zone) => {
    setSelectedZones(prev => 
      prev.includes(zone) 
        ? prev.filter(z => z !== zone)
        : [...prev, zone]
    );
  };

  const handleNiveauSelect = (niveau: Niveau) => {
    setSelectedNiveaux(prev => 
      prev.includes(niveau)
        ? prev.filter(n => n !== niveau)
        : [...prev, niveau]
    );
  };

  const handleObjectifSelect = (objectif: Objectif) => {
    setSelectedObjectifs(prev =>
      prev.includes(objectif)
        ? prev.filter(o => o !== objectif)
        : [...prev, objectif]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto py-16 px-4">
        <Link 
          to="/ressources" 
          className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Link>
        
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Trouver une action adaptée</h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Sélectionnez vos critères pour découvrir les actions qui correspondent le mieux à vos besoins.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Zones */}
            <div className="space-y-2">
              <Label>Zones d'intervention</Label>
              <div className="space-y-2">
                {uniqueZones.map((zone) => (
                  <label key={zone} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedZones.includes(zone)}
                      onChange={() => handleZoneSelect(zone)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm">{zone}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Niveaux */}
            <div className="space-y-2">
              <Label>Niveaux</Label>
              <div className="space-y-2">
                {uniqueNiveaux.map((niveau) => (
                  <label key={niveau} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedNiveaux.includes(niveau)}
                      onChange={() => handleNiveauSelect(niveau)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm">{niveau}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Objectifs */}
            <div className="space-y-2">
              <Label>Objectifs</Label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {uniqueObjectifs.map((objectif) => (
                  <label key={objectif} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedObjectifs.includes(objectif)}
                      onChange={() => handleObjectifSelect(objectif)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm">{objectif}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="space-y-8">
            <p className="text-gray-600 text-center">
              {filteredActions.length} action{filteredActions.length > 1 ? 's' : ''} trouvée{filteredActions.length > 1 ? 's' : ''}
            </p>
            
            {filteredActions.map((action, index) => (
              <Card key={index} className="overflow-hidden">
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
            ))}

            {filteredActions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  Aucune action ne correspond à vos critères. Essayez de modifier vos filtres.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
