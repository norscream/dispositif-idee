
export const cities = {
  lille: [
    "Avesnois",
    "Calais",
    "Cambrai",
    "Dunkerque – Flandres",
    "Douaisis",
    "Valenciennois",
    "Lille Métropole",
    "Saint-Omer",
    "Boulogne- Montreuil – Berck"
  ],
  amiens: [
    "Abbeville",
    "Amiens",
    "Beauvais",
    "Chauny - Tergnier - La Fère",
    "Clermont - Creil – Nogent",
    "Compiègne",
    "Laon - Hirson – Vervins",
    "Saint-Quentin",
    "Senlis",
    "Soissons"
  ]
} as const;

export type City = (typeof cities.lille)[number] | (typeof cities.amiens)[number];

export const allCities = [...cities.lille, ...cities.amiens];

export const getCityAcademy = (city: City): "Académie de Lille" | "Académie d'Amiens" => {
  if (cities.lille.includes(city as any)) {
    return "Académie de Lille";
  }
  return "Académie d'Amiens";
};
