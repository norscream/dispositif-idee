
import { Label } from "@/components/ui/label";
import { type City } from "@/data/cities";
import { type Niveau, type Objectif, niveauOrder } from "@/types/actions";

interface ActionFiltersProps {
  allCities: City[];
  uniqueObjectifs: Objectif[];
  selectedCities: City[];
  selectedNiveaux: Niveau[];
  selectedObjectifs: Objectif[];
  onCitySelect: (city: City) => void;
  onNiveauSelect: (niveau: Niveau) => void;
  onObjectifSelect: (objectif: Objectif) => void;
}

export function ActionFilters({
  allCities,
  uniqueObjectifs,
  selectedCities,
  selectedNiveaux,
  selectedObjectifs,
  onCitySelect,
  onNiveauSelect,
  onObjectifSelect,
}: ActionFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
      {/* Villes */}
      <div className="space-y-2">
        <Label>Villes</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
          {allCities.map((city) => (
            <label key={city} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCities.includes(city)}
                onChange={() => onCitySelect(city)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm">{city}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Niveaux */}
      <div className="space-y-2">
        <Label>Niveaux</Label>
        <div className="space-y-2">
          {niveauOrder.map((niveau) => (
            <label key={niveau} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedNiveaux.includes(niveau)}
                onChange={() => onNiveauSelect(niveau)}
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
                onChange={() => onObjectifSelect(objectif)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm">{objectif}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
