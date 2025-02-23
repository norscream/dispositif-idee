
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useState, useMemo } from "react";
import { actions } from "@/data/actions";
import { actionsPartenaires } from "@/data/actionsPartenaires";
import { concours } from "@/data/concours";
import { ConcoursCard } from "@/components/concours/ConcoursCard";

// Combiner les deux types d'actions
const allActions = [...actions, ...actionsPartenaires] as const;

// Définir les types en utilisant les types exacts des données
type ActionType = (typeof actions)[number] | (typeof actionsPartenaires)[number];
type ZoneType = ActionType["zones"][number];
type NiveauType = ActionType["niveaux"][number];

// Définir l'ordre spécifique des zones
const zoneOrder = [
  "Région académique Hauts-de-France",
  "Académie de Lille",
  "Académie d'Amiens"
] as const;

// Définir l'ordre spécifique des niveaux
const niveauOrder = ["École", "Collège", "Lycée", "Post bac"] as const;

// Type d'activité
type ActivityType = "action" | "concours";

export default function RechercheActions() {
  const [selectedZones, setSelectedZones] = useState<ZoneType[]>([]);
  const [selectedNiveaux, setSelectedNiveaux] = useState<NiveauType[]>([]);
  const [activityType, setActivityType] = useState<ActivityType>("action");

  // Extraire et trier les critères uniques
  const uniqueZones = zoneOrder;
  const uniqueNiveaux = niveauOrder;

  // Vérifier si au moins une case est cochée
  const hasActiveFilters = selectedZones.length > 0 || selectedNiveaux.length > 0;

  // Filtrer les actions en fonction des critères sélectionnés
  const filteredActions = useMemo(() => {
    if (!hasActiveFilters) return [];
    if (activityType === "concours") return [];
    
    return allActions.filter(action => {
      const matchesZones = selectedZones.length === 0 || 
        action.zones.some(zone => {
          if (selectedZones.includes("Région académique Hauts-de-France" as ZoneType)) {
            return true;
          }
          if (selectedZones.includes("Académie de Lille" as ZoneType)) {
            return zone === "Académie de Lille" || zone === "Région académique Hauts-de-France";
          }
          if (selectedZones.includes("Académie d'Amiens" as ZoneType)) {
            return zone === "Académie d'Amiens" || zone === "Région académique Hauts-de-France";
          }
          return selectedZones.includes(zone);
        });
        
      const matchesNiveaux = selectedNiveaux.length === 0 || 
        action.niveaux.some(niveau => selectedNiveaux.includes(niveau));

      return matchesZones && matchesNiveaux;
    });
  }, [selectedZones, selectedNiveaux, hasActiveFilters, activityType]);

  // Filtrer les concours en fonction des niveaux sélectionnés
  const filteredConcours = useMemo(() => {
    if (activityType !== "concours" || !hasActiveFilters) return [];

    return concours.filter(concours => {
      const matchesNiveaux = selectedNiveaux.length === 0 || 
        concours.public.some(niveau => 
          selectedNiveaux.some(selectedNiveau => 
            niveau.toLowerCase().includes(selectedNiveau.toLowerCase())
          )
        );

      return matchesNiveaux;
    });
  }, [selectedNiveaux, hasActiveFilters, activityType]);

  // Gestionnaires pour la sélection multiple
  const handleZoneSelect = (zone: ZoneType) => {
    setSelectedZones(prev => 
      prev.includes(zone) 
        ? prev.filter(z => z !== zone)
        : [...prev, zone]
    );
  };

  const handleNiveauSelect = (niveau: NiveauType) => {
    setSelectedNiveaux(prev => 
      prev.includes(niveau)
        ? prev.filter(n => n !== niveau)
        : [...prev, niveau]
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
            {/* Type d'activité */}
            <div className="space-y-2">
              <Label>Type d'activité</Label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={activityType === "action"}
                    onChange={() => setActivityType("action")}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm">Action de sensibilisation</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={activityType === "concours"}
                    onChange={() => setActivityType("concours")}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm">Participation à un concours</span>
                </label>
              </div>
            </div>

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
          </div>

          {/* Résultats */}
          <div className="space-y-8">
            {!hasActiveFilters ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  Sélectionnez au moins un critère pour voir les actions correspondantes.
                </p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 text-center">
                  {activityType === "action" ? 
                    `${filteredActions.length} action${filteredActions.length > 1 ? 's' : ''} trouvée${filteredActions.length > 1 ? 's' : ''}` :
                    `${filteredConcours.length} concours trouvé${filteredConcours.length > 1 ? 's' : ''}`
                  }
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activityType === "action" ? (
                    filteredActions.map((action, index) => (
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
                    ))
                  ) : (
                    filteredConcours.map((concours, index) => (
                      <div key={index} className="group">
                        <ConcoursCard concours={concours} />
                      </div>
                    ))
                  )}
                </div>

                {((activityType === "action" && filteredActions.length === 0) ||
                  (activityType === "concours" && filteredConcours.length === 0)) && (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600">
                      Aucune {activityType === "action" ? "action" : "concours"} ne correspond à vos critères. 
                      Essayez de modifier vos filtres.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
