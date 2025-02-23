
import { Nav } from "@/components/Nav";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { allCities, type City, getCityAcademy } from "@/data/cities";
import { ActionFilters } from "@/components/actions/ActionFilters";
import { ActionCard } from "@/components/actions/ActionCard";
import { allActions, type Action, type Niveau, type Objectif, type Zone } from "@/types/actions";

const uniqueObjectifs = [...new Set(allActions.flatMap(action => action.objectifs))] as Objectif[];

export default function RechercheActions() {
  const [selectedCities, setSelectedCities] = useState<City[]>([]);
  const [selectedNiveaux, setSelectedNiveaux] = useState<Niveau[]>([]);
  const [selectedObjectifs, setSelectedObjectifs] = useState<Objectif[]>([]);

  const hasActiveFilters = selectedCities.length > 0 || selectedNiveaux.length > 0 || selectedObjectifs.length > 0;

  const filteredActions = useMemo(() => {
    if (!hasActiveFilters) return [];
    
    return allActions.filter(action => {
      const matchesCities = selectedCities.length === 0 || 
        selectedCities.some(city => {
          const cityAcademy = getCityAcademy(city) as Zone;
          return action.zones.includes(cityAcademy) || action.zones.includes("Région académique Hauts-de-France" as Zone);
        });

      const matchesNiveaux = selectedNiveaux.length === 0 || 
        action.niveaux.some(niveau => selectedNiveaux.includes(niveau));
      const matchesObjectifs = selectedObjectifs.length === 0 || 
        action.objectifs.some(objectif => selectedObjectifs.includes(objectif));

      return matchesCities && matchesNiveaux && matchesObjectifs;
    });
  }, [selectedCities, selectedNiveaux, selectedObjectifs, hasActiveFilters]);

  const handleCitySelect = (city: City) => {
    setSelectedCities(prev => 
      prev.includes(city) 
        ? prev.filter(c => c !== city)
        : [...prev, city]
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

          <ActionFilters
            allCities={allCities}
            uniqueObjectifs={uniqueObjectifs}
            selectedCities={selectedCities}
            selectedNiveaux={selectedNiveaux}
            selectedObjectifs={selectedObjectifs}
            onCitySelect={handleCitySelect}
            onNiveauSelect={handleNiveauSelect}
            onObjectifSelect={handleObjectifSelect}
          />

          {/* Résultats */}
          {!hasActiveFilters ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                Sélectionnez au moins un critère pour voir les actions correspondantes.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 text-center">
                {filteredActions.length} action{filteredActions.length > 1 ? 's' : ''} trouvée{filteredActions.length > 1 ? 's' : ''}
              </p>
              
              <div className="space-y-8">
                {filteredActions.map((action, index) => (
                  <ActionCard key={index} action={action} />
                ))}
              </div>

              {filteredActions.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">
                    Aucune action ne correspond à vos critères. Essayez de modifier vos filtres.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
