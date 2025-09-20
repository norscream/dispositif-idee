import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActionsManager } from "./ActionsManager";
import { ConcoursManager } from "./ConcoursManager";
import { EvenementsManager } from "./EvenementsManager";
import { EquipeManager } from "./EquipeManager";
import { DataMigration } from "./DataMigration";
import { FormationsManager } from "./FormationsManager";
import { ActionsIdeeManager } from "./ActionsIdeeManager";
import { LudopedagogieManager } from "./LudopedagogieManager";
import { ConcretisationManager } from "./ConcretisationManager";
import { LogOut, Users, Trophy, Calendar, Briefcase } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface AdminDashboardProps {
  user: User;
}

export function AdminDashboard({ user }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("actions");

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast("Impossible de se déconnecter");
    } else {
      toast("Vous avez été déconnecté avec succès.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Interface d'Administration
              </h1>
              <p className="text-gray-600">
                Connecté en tant que {user.email}
              </p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Actions</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Actions Partenaires</div>
              <p className="text-xs text-muted-foreground">
                Gérer les actions proposées
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Concours</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Concours</div>
              <p className="text-xs text-muted-foreground">
                Gérer les concours disponibles
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Événements</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">J&A Events</div>
              <p className="text-xs text-muted-foreground">
                Gérer les événements J&A
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Équipe</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Équipe</div>
              <p className="text-xs text-muted-foreground">
                Gérer les membres de l'équipe
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9">
            <TabsTrigger value="actions">Actions Partenaires</TabsTrigger>
            <TabsTrigger value="actions-idee">Actions IDÉE</TabsTrigger>
            <TabsTrigger value="formations">Formations</TabsTrigger>
            <TabsTrigger value="ludopedagogie">Ludopédagogie</TabsTrigger>
            <TabsTrigger value="concretisations">Concrétisations</TabsTrigger>
            <TabsTrigger value="concours">Concours</TabsTrigger>
            <TabsTrigger value="evenements">Événements J&A</TabsTrigger>
            <TabsTrigger value="equipe">Équipe</TabsTrigger>
            <TabsTrigger value="migration">Migration</TabsTrigger>
          </TabsList>

          <TabsContent value="actions" className="mt-6">
            <ActionsManager />
          </TabsContent>

          <TabsContent value="actions-idee" className="mt-6">
            <ActionsIdeeManager />
          </TabsContent>

          <TabsContent value="formations" className="mt-6">
            <FormationsManager />
          </TabsContent>

          <TabsContent value="ludopedagogie" className="mt-6">
            <LudopedagogieManager />
          </TabsContent>

          <TabsContent value="concretisations" className="mt-6">
            <ConcretisationManager />
          </TabsContent>

          <TabsContent value="concours" className="mt-6">
            <ConcoursManager />
          </TabsContent>

          <TabsContent value="evenements" className="mt-6">
            <EvenementsManager />
          </TabsContent>

          <TabsContent value="equipe" className="mt-6">
            <EquipeManager />
          </TabsContent>

          <TabsContent value="migration" className="mt-6">
            <DataMigration />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}