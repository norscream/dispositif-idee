
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState, useMemo } from "react";
import { actions } from "./NosActions";

// Extraire tous les critères uniques des actions
const uniqueZones = [...new Set(actions.flatMap(action => action.zones))];
const uniqueNiveaux = [...new Set(actions.flatMap(action => action.niveaux))];
const uniqueCompetences = [...new Set(actions.flatMap(action => action.competences))];
const uniqueDurees = [...new Set(actions.map(action => action.duree))];

export default function RechercheActions() {
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [selectedNiveaux, setSelectedNiveaux] = useState<string[]>([]);
  const [selectedCompetences, setSelectedCompetences] = useState<string[]>([]);
  const [selectedDurees, setSelectedDurees] = useState<string[]>([]);

  // Filtrer les actions en fonction des critères sélectionnés
  const filteredActions = useMemo(() => {
    return actions.filter(action => {
      const matchesZones = selectedZones.length === 0 || 
        action.zones.some(zone => selectedZones.includes(zone));
      
      const matchesNiveaux = selectedNiveaux.length === 0 || 
        action.niveaux.some(niveau => selectedNiveaux.includes(niveau));
      
      const matchesCompetences = selectedCompetences.length === 0 || 
        action.competences.some(comp => selectedCompetences.includes(comp));
      
      const matchesDuree = selectedDurees.length === 0 || 
        selectedDurees.includes(action.duree);

      return matchesZones && matchesNiveaux && matchesCompetences && matchesDuree;
    });
  }, [selectedZones, selectedNiveaux, selectedCompetences, selectedDurees]);

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
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Trouver une action adaptée</h1>
          <p className="text-lg text-gray-600 mb-12">
            Sélectionnez vos critères pour découvrir les actions qui correspondent le mieux à vos besoins.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Filtres */}
            <div className="space-y-8">
              {/* Zones */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Zones d'intervention</h3>
                {uniqueZones.map((zone) => (
                  <div key={zone} className="flex items-center space-x-2">
                    <Checkbox
                      id={`zone-${zone}`}
                      checked={selectedZones.includes(zone)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedZones([...selectedZones, zone]);
                        } else {
                          setSelectedZones(selectedZones.filter(z => z !== zone));
                        }
                      }}
                    />
                    <Label htmlFor={`zone-${zone}`}>{zone}</Label>
                  </div>
                ))}
              </div>

              {/* Niveaux */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Niveaux</h3>
                {uniqueNiveaux.map((niveau) => (
                  <div key={niveau} className="flex items-center space-x-2">
                    <Checkbox
                      id={`niveau-${niveau}`}
                      checked={selectedNiveaux.includes(niveau)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedNiveaux([...selectedNiveaux, niveau]);
                        } else {
                          setSelectedNiveaux(selectedNiveaux.filter(n => n !== niveau));
                        }
                      }}
                    />
                    <Label htmlFor={`niveau-${niveau}`}>{niveau}</Label>
                  </div>
                ))}
              </div>

              {/* Compétences */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Compétences</h3>
                {uniqueCompetences.map((comp) => (
                  <div key={comp} className="flex items-center space-x-2">
                    <Checkbox
                      id={`comp-${comp}`}
                      checked={selectedCompetences.includes(comp)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedCompetences([...selectedCompetences, comp]);
                        } else {
                          setSelectedCompetences(selectedCompetences.filter(c => c !== comp));
                        }
                      }}
                    />
                    <Label htmlFor={`comp-${comp}`}>{comp}</Label>
                  </div>
                ))}
              </div>

              {/* Durées */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Durée</h3>
                {uniqueDurees.map((duree) => (
                  <div key={duree} className="flex items-center space-x-2">
                    <Checkbox
                      id={`duree-${duree}`}
                      checked={selectedDurees.includes(duree)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedDurees([...selectedDurees, duree]);
                        } else {
                          setSelectedDurees(selectedDurees.filter(d => d !== duree));
                        }
                      }}
                    />
                    <Label htmlFor={`duree-${duree}`}>{duree}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div className="lg:col-span-3 space-y-8">
              <p className="text-gray-600">
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
                        <p className="font-medium mb-2">Compétences développées :</p>
                        <div className="flex flex-wrap gap-2">
                          {action.competences.map((comp, i) => (
                            <Badge key={i} variant="outline">{comp}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <p><span className="font-medium">Durée :</span> {action.duree}</p>
                      </div>
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
    </div>
  );
}
