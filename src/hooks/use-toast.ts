import * as React from "react"
import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export const toast = ({ title, description, variant }: ToastProps) => {
  if (variant === "destructive") {
    sonnerToast.error(title || description || "Erreur")
  } else {
    sonnerToast.success(title || description || "Succès")
  }
}

export const useToast = () => {
  return { toast }
}