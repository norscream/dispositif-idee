import { Nav } from "@/components/Nav";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useState, useMemo } from "react";
import { actions } from "@/data/actions";
import { actionsPartenaires } from "@/data/actionsPartenaires";
import { concours } from "@/data/concours";
import { ConcoursCard } from "@/components/concours/ConcoursCard";

const allActions = [...actions, ...actionsPartenaires] as const;

type ActionType = (typeof actions)[number] | (typeof actionsPartenaires)[number];
type ZoneType = ActionType["zones"][number];
type NiveauType = ActionType["niveaux"][number] | "Enseignant";

const zoneOrder = [
  "Région académique Hauts-de-France",
  "Académie de Lille",
  "Académie d'Amiens"
] as const;

const niveauOrder = ["École", "Collège", "Lycée", "Post bac", "Enseignant"] as const;

type ActivityType = "action" | "concours" | "formation";

const formations = [
  {
    title: "Yes We Code",
    description: "Apprenez à gérer un projet robotique entrepreneurial en classe et maîtrisez les bases de la programmation en Python.",
    duration: "9h (6h en présentiel, 3h en distanciel)",
    public: "Enseignants de STI, ST2D ou SNT"
  },
  {
    title: "La pédagogie de projet par la robotique",
    description: "Menez un projet robotique avec une approche entrepreneuriale et découvrez les outils numériques associés.",
    duration: "6h (Présentiel et distanciel)",
    public: "Personnel éducatif engagé dans le projet SKILLBOT"
  },
  {
    title: "FOLIOS et l'esprit d'entreprendre",
    description: "Utilisez le portfolio numérique FOLIOS pour valoriser les expériences et apprentissages des élèves.",
    duration: "9h (6h en présentiel, 3h en distanciel)",
    public: "Enseignants, CPE, Psy-EN"
  },
  {
    title: "Outil de créativité et de réflexion - 6 chapeaux de Bono",
    description: "Apprenez à animer des séances de créativité et de réflexion avec la méthode des 6 chapeaux de Bono.",
    duration: "6h (Présentiel)",
    public: "Personnel éducatif du secondaire"
  },
  {
    title: "Outil d'analyse et de réflexivité avec le CoDéveloppement (CoDev)",
    description: "Initiez-vous à la méthode du CoDéveloppement pour animer des séances de résolution de problèmes et de gestion de conflits.",
    duration: "6h (Présentiel)",
    public: "Personnel éducatif du secondaire"
  }
];

const uniquePartenaires = [...new Set(actionsPartenaires.map(a => a.partenaire))].sort();

export default function RechercheActions() {
  const [selectedZones, setSelectedZones] = useState<ZoneType[]>([]);
  const [selectedNiveaux, setSelectedNiveaux] = useState<NiveauType[]>([]);
  const [selectedPartenaires, setSelectedPartenaires] = useState<string[]>([]);
  const [activityType, setActivityType] = useState<ActivityType>("action");

  const uniqueZones = zoneOrder;
  const uniqueNiveaux = niveauOrder;

  const hasActiveFilters = selectedZones.length > 0 || selectedNiveaux.length > 0 || selectedPartenaires.length > 0;

  const handleNiveauSelect = (niveau: NiveauType) => {
    const newSelectedNiveaux = selectedNiveaux.includes(niveau)
      ? selectedNiveaux.filter(n => n !== niveau)
      : [...selectedNiveaux, niveau];
    
    setSelectedNiveaux(newSelectedNiveaux);
    
    if (niveau === "Enseignant" && !selectedNiveaux.includes("Enseignant")) {
      setActivityType("formation");
    }
  };

  const handlePartenaireSelect = (partenaire: string) => {
    setSelectedPartenaires(prev =>
      prev.includes(partenaire)
        ? prev.filter(p => p !== partenaire)
        : [...prev, partenaire]
    );
  };

  const filteredActions = useMemo(() => {
    if (activityType === "concours" || activityType === "formation" || selectedNiveaux.includes("Enseignant")) return [];
    
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

      const matchesPartenaires = selectedPartenaires.length === 0 ||
        ("partenaire" in action && selectedPartenaires.includes(action.partenaire));

      return matchesZones && matchesNiveaux && matchesPartenaires;
    });
  }, [selectedZones, selectedNiveaux, selectedPartenaires, hasActiveFilters, activityType]);

  const filteredConcours = useMemo(() => {
    if (activityType !== "concours" || selectedNiveaux.includes("Enseignant")) return [];

    return concours.filter(c => {
      const matchesNiveaux = selectedNiveaux.length === 0 || 
        c.public.some(niveau => 
          selectedNiveaux.some(selectedNiveau => 
            niveau.toLowerCase().includes(selectedNiveau.toLowerCase())
          )
        );
      return matchesNiveaux;
    });
  }, [selectedNiveaux, activityType]);

  const filteredFormations = useMemo(() => {
    if (!selectedNiveaux.includes("Enseignant") && activityType !== "formation") return [];

    if (selectedNiveaux.includes("Enseignant")) {
      return formations;
    }

    return formations.filter(formation => {
      const matchesNiveaux = selectedNiveaux.length === 0 || 
        selectedNiveaux.some(niveau => 
          formation.public.toLowerCase().includes(niveau.toLowerCase())
        );
      return matchesNiveaux;
    });
  }, [selectedNiveaux, activityType]);

  const handleZoneSelect = (zone: ZoneType) => {
    setSelectedZones(prev => 
      prev.includes(zone) 
        ? prev.filter(z => z !== zone)
        : [...prev, zone]
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="space-y-2">
              <Label>Type d'activité</Label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={activityType === "action"}
                    onChange={() => setActivityType("action")}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    disabled={selectedNiveaux.includes("Enseignant")}
                  />
                  <span className="text-sm">Action de sensibilisation</span>
                </label>
                <label className="flex items-center space-x-2">
                   <input
                    type="radio"
                    checked={activityType === "concours"}
                    onChange={() => { setActivityType("concours"); setSelectedPartenaires([]); }}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                    disabled={selectedNiveaux.includes("Enseignant")}
                  />
                  <span className="text-sm">Participation à un concours</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={activityType === "formation"}
                    onChange={() => { setActivityType("formation"); setSelectedPartenaires([]); }}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm">Formation</span>
                </label>
              </div>
            </div>

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

            {activityType === "action" && (
              <div className="space-y-2">
                <Label>Partenaire</Label>
                <div className="space-y-2">
                  {uniquePartenaires.map((partenaire) => (
                    <label key={partenaire} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedPartenaires.includes(partenaire)}
                        onChange={() => handlePartenaireSelect(partenaire)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{partenaire}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <>
              <p className="text-gray-600 text-center">
                {activityType === "action" ? 
                  `${filteredActions.length} action${filteredActions.length > 1 ? 's' : ''} trouvée${filteredActions.length > 1 ? 's' : ''}` :
                  activityType === "formation" ?
                  `${filteredFormations.length} formation${filteredFormations.length > 1 ? 's' : ''} trouvée${filteredFormations.length > 1 ? 's' : ''}` :
                  `${filteredConcours.length} concours trouvé${filteredConcours.length > 1 ? 's' : ''}`
                }
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activityType === "action" && (
                  filteredActions.map((action, index) => (
                    <Card 
                      key={index} 
                      className={`overflow-hidden flex flex-col h-full ${action.title === "Action sur mesure" ? 'bg-[#E6F4FF]' : ''}`}
                    >
                      <div className="h-64 overflow-hidden relative bg-gray-50">
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
                      <CardContent className="flex-1">
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
                )}

                {activityType === "concours" && (
                  filteredConcours.map((concours, index) => (
                    <div key={index} className="group">
                      <ConcoursCard concours={concours} />
                    </div>
                  ))
                )}

                {activityType === "formation" && (
                  filteredFormations.map((formation, index) => (
                    <Card 
                      key={index} 
                      className="flex flex-col hover:shadow-lg transition-shadow duration-300 border-gray-200 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-semibold text-primary mb-3">
                          {formation.title}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600 leading-relaxed">
                          {formation.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto pt-6 border-t border-gray-100">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-gray-600">
                            <Clock className="h-5 w-5 text-primary/70" />
                            <span className="text-sm font-medium">{formation.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <Users className="h-5 w-5 text-primary/70" />
                            <span className="text-sm font-medium">{formation.public}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {((activityType === "action" && filteredActions.length === 0) ||
                (activityType === "concours" && filteredConcours.length === 0) ||
                (activityType === "formation" && filteredFormations.length === 0)) && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">
                    Aucune {activityType === "action" ? "action" : activityType === "formation" ? "formation" : "concours"} ne correspond à vos critères. 
                    Essayez de modifier vos filtres.
                  </p>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
