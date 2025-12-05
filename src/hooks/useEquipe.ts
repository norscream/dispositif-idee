import { useState, useEffect } from "react";

interface MembreEquipePublic {
  id: string;
  nom: string;
  prenom: string;
  fonction: string;
  image: string;
}

// Static team data
const equipeStatique: MembreEquipePublic[] = [
  {
    id: "1",
    nom: "Équipe",
    prenom: "IDÉE",
    fonction: "Coordinateur",
    image: "/logo-idee.png"
  }
];

export function useEquipePublic() {
  const [equipe, setEquipe] = useState<MembreEquipePublic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use static data directly
    setEquipe(equipeStatique);
    setLoading(false);
  }, []);

  return { equipe, loading, error: null, refetch: () => {} };
}
