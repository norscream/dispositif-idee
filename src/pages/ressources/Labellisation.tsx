
import { Nav } from "@/components/Nav";
import { ArrowLeft, BadgeCheck, CheckCircle2, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Labellisation() {
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
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Labellisation IDEE : Valorisez vos actions entrepreneuriales</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Notre système de labellisation IDEE permet aux organismes partenaires de faire valider et promouvoir 
            leurs actions pédagogiques entrepreneuriales auprès des établissements scolaires des Hauts-de-France.
          </p>

          <Card className="p-6 bg-primary/5 border-primary/10 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <BadgeCheck className="h-6 w-6 mr-2 text-primary" />
              Avantages de la labellisation
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Validation de l'intérêt pédagogique de votre action</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Accès facilité aux établissements scolaires</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Outils de communication dédiés (catalogue, page web IDEE)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Valorisation de votre action lors d'événements et dans les médias</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Communication via l'Espace Numérique de Travail (ENT)</span>
              </li>
            </ul>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Processus de labellisation</h2>
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/56d38c3e-bf1b-4cc3-953f-5e4e28e23349.png" 
                alt="Processus de labellisation en 5 étapes" 
                className="w-full object-cover max-h-[400px] -mt-8 -mb-8"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-center mt-8">
              La labellisation est accordée pour 3 ans, renouvelable
            </p>
          </div>

          <Card className="p-6 bg-gray-50 mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-primary" />
              Critères de labellisation
            </h2>
            <p className="mb-4">Votre action doit :</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Respecter les principes républicains (laïcité, neutralité, parité, non-discrimination)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Être compatible avec les activités de l'Éducation Nationale</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Développer des compétences entrepreneuriales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Avoir un caractère non lucratif sous conditions</span>
              </li>
            </ul>
          </Card>

          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">
              Prêt à faire labelliser votre action ?
            </h3>
            <Button asChild size="lg" className="text-white">
              <Link to="/contact">
                Déposez votre candidature
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
