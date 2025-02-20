
import { useState } from "react";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type ContactFormData = {
  fullName: string;
  email: string;
  phone?: string;
  region?: string;
  message: string;
};

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulation d'envoi (à remplacer par l'envoi réel)
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      toast.success("Message envoyé avec succès !");
      reset();
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="flex items-center justify-center mb-8">
          <Mail className="h-6 w-6 text-primary mr-3" />
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
