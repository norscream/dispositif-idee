import { useState } from "react";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bgeActions } from "@/data/actions/bge";
import { dreamakersActions } from "@/data/actions/dreamakers";
import { cgenialActions } from "@/data/actions/cgenial";
import { autresActions } from "@/data/actions/autres";
import { esperActions } from "@/data/actions/esper";
import { rnjaActions } from "@/data/actions/rnja";
import { actions } from "@/data/actions";
import { concours } from "@/data/concours";
import { supabase } from "@/integrations/supabase/client";

type ContactFormData = {
  fullName: string;
  email: string;
  phone?: string;
  region?: string;
  requestType: string;
  specificAction?: string;
  message: string;
};

const formations = [
  {
    title: "Yes We Code",
    description: "Apprenez à gérer un projet robotique entrepreneurial en classe et maîtrisez les bases de la programmation en Python.",
    duration: "9h (6h en présentiel, 3h en distanciel)",
    public: "Enseignants de STI, ST2D ou SNT"
  },
  {
    title: "La pédagogie de projet par la robotique",
    description: "Menez un projet robotique avec une approche entrepreneuriale et découvrez les outils numériques associés.",
    duration: "6h (Présentiel et distanciel)",
    public: "Personnel éducatif engagé dans le projet SKILLBOT"
  },
  {
    title: "FOLIOS et l'esprit d'entreprendre",
    description: "Utilisez le portfolio numérique FOLIOS pour valoriser les expériences et apprentissages des élèves.",
    duration: "9h (6h en présentiel, 3h en distanciel)",
    public: "Enseignants, CPE, Psy-EN"
  },
  {
    title: "Outil de créativité et de réflexion - 6 chapeaux de Bono",
    description: "Apprenez à animer des séances de créativité et de réflexion avec la méthode des 6 chapeaux de Bono.",
    duration: "6h (Présentiel)",
    public: "Personnel éducatif du secondaire"
  },
  {
    title: "Outil d'analyse et de réflexivité avec le CoDéveloppement (CoDev)",
    description: "Initiez-vous à la méthode du CoDéveloppement pour animer des séances de résolution de problèmes et de gestion de conflits.",
    duration: "6h (Présentiel)",
    public: "Personnel éducatif du secondaire"
  }
];

const requestTypes = [
  "Action IDEE",
  "Action partenaire", 
  "Concours",
  "Formation",
  "Ludopedagogie",
  "Labellisation",
  "Concrétisation de projet",
  "Information générale"
];

const allPartnerActions = [
  ...bgeActions,
  ...dreamakersActions,
  ...cgenialActions,
  ...autresActions,
  ...esperActions,
  ...rnjaActions
];

const ludopedagogieGames = [
  {
    value: "CONCEPT",
    label: "CONCEPT"
  },
  {
    value: "CONCEPT KIDS",
    label: "CONCEPT KIDS"
  },
  {
    value: "LITTLE SECRET",
    label: "LITTLE SECRET"
  },
  {
    value: "THE MIND",
    label: "THE MIND"
  }
];

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors }, setValue, watch } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const requestType = watch("requestType");

  const getSpecificOptions = () => {
    switch(requestType) {
      case "Action IDEE":
        return [
          { value: "multiple", label: "Je suis intéressé(e) par plusieurs actions" },
          ...actions.map(action => ({
            value: action.title,
            label: action.title
          }))
        ];
      case "Action partenaire":
        return [
          { value: "multiple", label: "Je suis intéressé(e) par plusieurs actions" },
          ...allPartnerActions.map(action => ({
            value: action.title,
            label: action.title
          }))
        ];
      case "Ludopedagogie":
        return [
          { value: "multiple", label: "Je suis intéressé(e) par plusieurs jeux" },
          ...ludopedagogieGames
        ];
      case "Formation":
        return [
          { value: "multiple", label: "Je suis intéressé(e) par plusieurs formations" },
          ...formations.map(formation => ({
            value: formation.title,
            label: formation.title
          }))
        ];
      case "Concours":
        return [
          { value: "multiple", label: "Je suis intéressé(e) par plusieurs concours" },
          ...concours.map(concours => ({
            value: concours.nom,
            label: concours.nom
          }))
        ];
      default:
        return null;
    }
  };

  const specificOptions = getSpecificOptions();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    const loadingToast = toast.loading("Envoi du message en cours...");
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) throw error;
      
      toast.dismiss(loadingToast);
      toast.success("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.", {
        duration: 5000,
      });
      
      reset();
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      toast.dismiss(loadingToast);
      toast.error("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="flex flex-col items-center justify-center mb-8 space-y-2">
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-primary mr-3" />
            <span className="text-gray-600">projet.idee@ac-lille.fr</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-primary mr-3" />
            <span className="text-gray-600">projet.idee@ac-amiens.fr</span>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="requestType">Type de demande *</Label>
              <Select 
                onValueChange={(value) => setValue('requestType', value)} 
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez le type de demande" />
                </SelectTrigger>
                <SelectContent>
                  {requestTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {specificOptions && (
              <div>
                <Label htmlFor="specificAction">Action spécifique *</Label>
                <Select 
                  onValueChange={(value) => setValue('specificAction', value)}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez une action spécifique" />
                  </SelectTrigger>
                  <SelectContent>
                    {specificOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label htmlFor="fullName">Nom et prénom *</Label>
              <Input
                id="fullName"
                {...register("fullName", { required: "Ce champ est obligatoire" })}
                className={errors.fullName ? "border-red-500" : ""}
                placeholder="Votre nom complet"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Adresse e-mail *</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Ce champ est obligatoire",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Adresse e-mail invalide"
                  }
                })}
                className={errors.email ? "border-red-500" : ""}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Numéro de téléphone (facultatif)</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="Votre numéro de téléphone"
              />
            </div>

            <div>
              <Label htmlFor="region">Zone géographique (facultatif)</Label>
              <Input
                id="region"
                {...register("region")}
                placeholder="Votre zone géographique"
              />
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                {...register("message", { required: "Ce champ est obligatoire" })}
                className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                placeholder="Votre message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
