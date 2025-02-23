import { Nav } from "@/components/Nav";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ConcoursCard } from "@/components/concours/ConcoursCard";
import { concours } from "@/data/concours";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

export default function Concours() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get('nom'),
      prenom: formData.get('prenom'),
      etablissement: formData.get('etablissement'),
      ville: formData.get('ville'),
      concours: formData.get('concours'),
      message: formData.get('message')
    };

    try {
      console.log("Envoi des données à projet.idee@ac-lille.fr:", data);
      toast.success("Votre inscription a bien été enregistrée !");
      e.currentTarget.reset();
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'inscription. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Trophy className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-center">Nos Concours</h1>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-6 text-gray-600">
            <p>Faire défiler pour voir tous nos concours →</p>
          </div>
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {concours.map((concours, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ConcoursCard concours={concours} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious 
                className="relative inset-0 translate-y-0 bg-white hover:bg-gray-100"
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4" />
              </CarouselPrevious>
              <CarouselNext 
                className="relative inset-0 translate-y-0 bg-white hover:bg-gray-100"
                variant="outline"
              >
                <ChevronRight className="w-4 h-4" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        <div id="inscription-form" className="max-w-2xl mx-auto mt-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Inscription aux concours</h2>
            <p className="text-gray-600">Remplissez le formulaire ci-dessous pour vous inscrire à l'un de nos concours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom*</Label>
                <Input id="nom" name="nom" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom*</Label>
                <Input id="prenom" name="prenom" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="etablissement">Établissement scolaire*</Label>
              <Input id="etablissement" name="etablissement" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ville">Ville*</Label>
              <Input id="ville" name="ville" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="concours">Concours*</Label>
              <Select name="concours" required>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un concours" />
                </SelectTrigger>
                <SelectContent>
                  {concours.map((c, index) => (
                    <SelectItem key={index} value={c.nom}>
                      {c.nom}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (optionnel)</Label>
              <Textarea id="message" name="message" placeholder="Votre message..." />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer l'inscription"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
