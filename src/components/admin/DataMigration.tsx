import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { migrateAllData } from "@/utils/migrateData";
import { toast } from "@/components/ui/use-toast";
import { Database, CheckCircle, AlertCircle } from "lucide-react";

export function DataMigration() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<'idle' | 'migrating' | 'success' | 'error'>('idle');

  const handleMigrate = async () => {
    setIsLoading(true);
    setStatus('migrating');
    setProgress(0);

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + 10;
        });
      }, 500);

      await migrateAllData();
      
      clearInterval(progressInterval);
      setProgress(100);
      setStatus('success');
      toast("Migration des données terminée avec succès!");
    } catch (error) {
      setStatus('error');
      toast("Erreur lors de la migration des données");
      console.error('Migration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Migration des données
        </CardTitle>
        <CardDescription>
          Migrer les données statiques vers la base de données Supabase
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Cette opération va importer toutes les données existantes (actions, concours, événements, équipe) 
            depuis les fichiers statiques vers la base de données.
          </p>
          <p className="text-sm text-yellow-600 font-medium">
            ⚠️ Cette migration ne sera effectuée que si les tables sont vides.
          </p>
        </div>

        {status === 'migrating' && (
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-600">Migration en cours... {progress}%</p>
          </div>
        )}

        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Migration terminée avec succès!</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">Erreur lors de la migration</span>
          </div>
        )}

        <Button 
          onClick={handleMigrate} 
          disabled={isLoading || status === 'success'}
          className="w-full"
        >
          {isLoading ? "Migration en cours..." : "Démarrer la migration"}
        </Button>
      </CardContent>
    </Card>
  );
}