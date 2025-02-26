
import { useState } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import { getSpecificOptions } from "./utils";
import { requestTypes } from "./constants";
import type { ContactFormData } from "./types";

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
  );
};
