
import { Users, Calendar, Trophy, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ActionGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <Users className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
          <CardTitle>Réseau privilégié</CardTitle>
          <CardDescription>Collaboration avec les équipes éducatives</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Nous travaillons en étroite collaboration avec les établissements scolaires des Hauts-de-France pour diffuser les bonnes pratiques et ressources pédagogiques, créant ainsi un réseau dynamique d'échange et de partage.
          </p>
        </CardContent>
      </Card>

      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <Calendar className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
          <CardTitle>Rendez-vous académiques</CardTitle>
          <CardDescription>Information et sensibilisation</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Organisation régulière de rencontres et sessions d'information pour sensibiliser les acteurs éducatifs aux enjeux de l'entrepreneuriat et partager les dernières innovations pédagogiques.
          </p>
        </CardContent>
      </Card>

      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <Trophy className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
          <CardTitle>Événements dédiés</CardTitle>
          <CardDescription>Valorisation des initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Mise en lumière de l'entrepreneuriat à travers des événements fédérateurs qui rassemblent élèves, enseignants, entrepreneurs et partenaires pour célébrer les réussites et inspirer de nouveaux projets.
          </p>
        </CardContent>
      </Card>

      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <Linkedin className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
          <CardTitle>Communication digitale</CardTitle>
          <CardDescription>Présence sur les réseaux sociaux</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Diffusion régulière d'informations, de témoignages et de success stories via nos canaux numériques, particulièrement sur LinkedIn, pour maintenir une communauté active et engagée.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
