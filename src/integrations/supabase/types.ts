export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      actions_partenaires: {
        Row: {
          created_at: string | null
          description: string
          duree: string
          id: string
          image: string
          niveaux: string[]
          objectifs: string[]
          partenaire: string
          title: string
          updated_at: string | null
          zones: string[]
        }
        Insert: {
          created_at?: string | null
          description: string
          duree: string
          id?: string
          image: string
          niveaux: string[]
          objectifs: string[]
          partenaire: string
          title: string
          updated_at?: string | null
          zones: string[]
        }
        Update: {
          created_at?: string | null
          description?: string
          duree?: string
          id?: string
          image?: string
          niveaux?: string[]
          objectifs?: string[]
          partenaire?: string
          title?: string
          updated_at?: string | null
          zones?: string[]
        }
        Relationships: []
      }
      concours: {
        Row: {
          created_at: string | null
          id: string
          livrables: string[]
          logo: string
          nom: string
          objectif: string
          presentation: string
          public: string[]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          livrables: string[]
          logo: string
          nom: string
          objectif: string
          presentation: string
          public: string[]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          livrables?: string[]
          logo?: string
          nom?: string
          objectif?: string
          presentation?: string
          public?: string[]
          updated_at?: string | null
        }
        Relationships: []
      }
      concours_partenaires: {
        Row: {
          concours_id: string | null
          id: string
          logo: string
          nom: string
        }
        Insert: {
          concours_id?: string | null
          id?: string
          logo: string
          nom: string
        }
        Update: {
          concours_id?: string | null
          id?: string
          logo?: string
          nom?: string
        }
        Relationships: [
          {
            foreignKeyName: "concours_partenaires_concours_id_fkey"
            columns: ["concours_id"]
            isOneToOne: false
            referencedRelation: "concours"
            referencedColumns: ["id"]
          },
        ]
      }
      equipe: {
        Row: {
          created_at: string | null
          email: string
          fonction: string
          id: string
          image: string
          is_new_member: boolean | null
          nom: string
          position_x: number | null
          position_y: number | null
          prenom: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          fonction: string
          id?: string
          image: string
          is_new_member?: boolean | null
          nom: string
          position_x?: number | null
          position_y?: number | null
          prenom: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          fonction?: string
          id?: string
          image?: string
          is_new_member?: boolean | null
          nom?: string
          position_x?: number | null
          position_y?: number | null
          prenom?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      evenements_jeunes_audacieux: {
        Row: {
          created_at: string | null
          date_debut: string
          date_fin: string | null
          description: string
          id: string
          image: string | null
          lien_inscription: string | null
          lieu: string
          titre: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date_debut: string
          date_fin?: string | null
          description: string
          id?: string
          image?: string | null
          lien_inscription?: string | null
          lieu: string
          titre: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date_debut?: string
          date_fin?: string | null
          description?: string
          id?: string
          image?: string | null
          lien_inscription?: string | null
          lieu?: string
          titre?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_equipe_public_columns: {
        Args: Record<PropertyKey, never>
        Returns: {
          created_at: string
          fonction: string
          id: string
          image: string
          is_new_member: boolean
          nom: string
          position_x: number
          position_y: number
          prenom: string
          updated_at: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
