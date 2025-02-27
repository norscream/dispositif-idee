
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { getSpecificOptions } from "./utils";
import { requestTypes } from "./constants";
import type { ContactFormData } from "./types";
import { Loader2 } from "lucide-react";

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors }, setValue, watch } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const requestType = watch("requestType");
  const specificOptions = getSpecificOptions(requestType);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    const loadingToast = toast.loading("Envoi du message en cours...");
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        console.error("Erreur Supabase:", error);
        throw error;
      }
      
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="requestType" className="font-medium">Type de demande *</Label>
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
        <div className="space-y-2">
          <Label htmlFor="specificAction" className="font-medium">Action spécifique *</Label>
          <Select 
            onValueChange={(value) => setValue('specificAction', value)}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionnez une action spécifique" />
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-y-auto">
              {specificOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="font-medium">Nom et prénom *</Label>
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

        <div className="space-y-2">
          <Label htmlFor="email" className="font-medium">Adresse e-mail *</Label>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-medium">Numéro de téléphone (facultatif)</Label>
          <Input
            id="phone"
            {...register("phone", {
              pattern: {
                value: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4})$/,
                message: "Format de téléphone invalide"
              }
            })}
            className={errors.phone ? "border-red-500" : ""}
            placeholder="Ex: 06 12 34 56 78"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="region" className="font-medium">Zone géographique (facultatif)</Label>
          <Input
            id="region"
            {...register("region")}
            placeholder="Ex: Lille, Amiens, Hauts-de-France..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-medium">Message *</Label>
        <Textarea
          id="message"
          {...register("message", { 
            required: "Ce champ est obligatoire",
            minLength: {
              value: 10,
              message: "Votre message doit contenir au moins 10 caractères"
            }
          })}
          className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
          placeholder="Décrivez votre demande en détail..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="text-sm text-gray-500 mb-4">
        * Champs obligatoires
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 rounded-lg text-white font-medium"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </Button>
    </form>
  );
};
