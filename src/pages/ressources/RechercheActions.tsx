
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useState, useMemo } from "react";
import { actions } from "@/data/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Définir les types basés sur les actions
type Action = typeof actions[number];
type Zone = Action['zones'][number];
type Niveau = Action['niveaux'][number];
type Competence = Action['competences'][number];
type Duree = Action['duree'];

// Extraire tous les critères uniques des actions avec le bon typage
const uniqueZones = [...new Set(actions.flatMap(action => action.zones))] as Zone[];
const uniqueNiveaux = [...new Set(actions.flatMap(action => action.niveaux))] as Niveau[];
const uniqueCompetences = [...new Set(actions.flatMap(action => action.competences))] as Competence[];
const uniqueDurees = [...new Set(actions.map(action => action.duree))] as Duree[];

export default function RechercheActions() {
  const [selectedZone, setSelectedZone] = useState<Zone | "all">("all");
  const [selectedNiveau, setSelectedNiveau] = useState<Niveau | "all">("all");
  const [selectedCompetence, setSelectedCompetence] = useState<Competence | "all">("all");
  const [selectedDuree, setSelectedDuree] = useState<Duree | "all">("all");

  // Filtrer les actions en fonction des critères sélectionnés
  const filteredActions = useMemo(() => {
    return actions.filter(action => {
      const matchesZone = selectedZone === "all" || action.zones.includes(selectedZone as Zone);
      const matchesNiveau = selectedNiveau === "all" || action.niveaux.includes(selectedNiveau as Niveau);
      const matchesCompetence = selectedCompetence === "all" || action.competences.includes(selectedCompetence as Competence);
      const matchesDuree = selectedDuree === "all" || action.duree === selectedDuree;

      return matchesZone && matchesNiveau && matchesCompetence && matchesDuree;
    });
  }, [selectedZone, selectedNiveau, selectedCompetence, selectedDuree]);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Zones */}
            <div className="space-y-2">
              <Label>Zone d'intervention</Label>
              <Select value={selectedZone} onValueChange={setSelectedZone}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les zones</SelectItem>
                  {uniqueZones.map((zone) => (
                    <SelectItem key={zone} value={zone}>
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Niveaux */}
            <div className="space-y-2">
              <Label>Niveau</Label>
              <Select value={selectedNiveau} onValueChange={setSelectedNiveau}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les niveaux</SelectItem>
                  {uniqueNiveaux.map((niveau) => (
                    <SelectItem key={niveau} value={niveau}>
                      {niveau}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Compétences */}
            <div className="space-y-2">
              <Label>Compétence</Label>
              <Select value={selectedCompetence} onValueChange={setSelectedCompetence}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une compétence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les compétences</SelectItem>
                  {uniqueCompetences.map((comp) => (
                    <SelectItem key={comp} value={comp}>
                      {comp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Durées */}
            <div className="space-y-2">
              <Label>Durée</Label>
              <Select value={selectedDuree} onValueChange={setSelectedDuree}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une durée" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les durées</SelectItem>
                  {uniqueDurees.map((duree) => (
                    <SelectItem key={duree} value={duree}>
                      {duree}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
  );
}
