
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";

export function LoanCTA() {
  return (
    <Card className="mb-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">
              Empruntez gratuitement nos jeux pédagogiques
            </h2>
            <p className="text-gray-600">
              Contactez-nous pour emprunter gratuitement un exemplaire ou obtenir plus d'informations.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Nous contacter
            <Send className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
