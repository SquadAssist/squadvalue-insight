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
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      ai_fit_cache: {
        Row: {
          cache_key: string
          club_name: string
          content: string
          created_at: string | null
          expires_at: string
          generated_at: string | null
          id: string
          player_name: string
          sources: Json | null
        }
        Insert: {
          cache_key: string
          club_name: string
          content: string
          created_at?: string | null
          expires_at: string
          generated_at?: string | null
          id?: string
          player_name: string
          sources?: Json | null
        }
        Update: {
          cache_key?: string
          club_name?: string
          content?: string
          created_at?: string | null
          expires_at?: string
          generated_at?: string | null
          id?: string
          player_name?: string
          sources?: Json | null
        }
        Relationships: []
      }
      ai_fit_daily_spend: {
        Row: {
          alert_sent_at: string | null
          created_at: string | null
          date: string
          disabled_at: string | null
          generation_count: number
          id: string
          total_spend_cents: number
          updated_at: string | null
        }
        Insert: {
          alert_sent_at?: string | null
          created_at?: string | null
          date?: string
          disabled_at?: string | null
          generation_count?: number
          id?: string
          total_spend_cents?: number
          updated_at?: string | null
        }
        Update: {
          alert_sent_at?: string | null
          created_at?: string | null
          date?: string
          disabled_at?: string | null
          generation_count?: number
          id?: string
          total_spend_cents?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_fit_feedback: {
        Row: {
          cache_key: string
          club_name: string
          created_at: string
          id: string
          is_implicit: boolean | null
          player_name: string
          rating: string
          user_agent: string | null
          user_email: string | null
        }
        Insert: {
          cache_key: string
          club_name: string
          created_at?: string
          id?: string
          is_implicit?: boolean | null
          player_name: string
          rating: string
          user_agent?: string | null
          user_email?: string | null
        }
        Update: {
          cache_key?: string
          club_name?: string
          created_at?: string
          id?: string
          is_implicit?: boolean | null
          player_name?: string
          rating?: string
          user_agent?: string | null
          user_email?: string | null
        }
        Relationships: []
      }
      club_roles: {
        Row: {
          club_id: string
          description: string | null
          id: string
          role_name: string
        }
        Insert: {
          club_id: string
          description?: string | null
          id?: string
          role_name: string
        }
        Update: {
          club_id?: string
          description?: string | null
          id?: string
          role_name?: string
        }
        Relationships: []
      }
      find_club_results: {
        Row: {
          created_at: string | null
          expires_at: string | null
          form_data: Json
          id: string
          player_id: string
          player_name: string
          results: Json
          user_email: string
        }
        Insert: {
          created_at?: string | null
          expires_at?: string | null
          form_data: Json
          id?: string
          player_id: string
          player_name: string
          results: Json
          user_email: string
        }
        Update: {
          created_at?: string | null
          expires_at?: string | null
          form_data?: Json
          id?: string
          player_id?: string
          player_name?: string
          results?: Json
          user_email?: string
        }
        Relationships: []
      }
      league_groups: {
        Row: {
          competition_ids: string[]
          created_at: string
          id: string
          name: string
          updated_at: string
          user_email: string
        }
        Insert: {
          competition_ids?: string[]
          created_at?: string
          id?: string
          name: string
          updated_at?: string
          user_email: string
        }
        Update: {
          competition_ids?: string[]
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
          user_email?: string
        }
        Relationships: []
      }
      pipeline_stages: {
        Row: {
          board_type: string
          color: string
          created_at: string
          id: string
          name: string
          position: number
          user_email: string
        }
        Insert: {
          board_type?: string
          color?: string
          created_at?: string
          id?: string
          name: string
          position: number
          user_email: string
        }
        Update: {
          board_type?: string
          color?: string
          created_at?: string
          id?: string
          name?: string
          position?: number
          user_email?: string
        }
        Relationships: []
      }
      player_images: {
        Row: {
          created_at: string
          id: string
          image_url: string
          player_id: string
          updated_at: string
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          image_url: string
          player_id: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string
          player_id?: string
          updated_at?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      report_assignments: {
        Row: {
          assigned_by_email: string
          assigned_by_name: string | null
          assigned_to_email: string
          assigned_to_name: string | null
          created_at: string
          deadline: string
          id: string
          is_read: boolean
          report_id: string
          task_description: string
          type_of_report: string | null
        }
        Insert: {
          assigned_by_email: string
          assigned_by_name?: string | null
          assigned_to_email: string
          assigned_to_name?: string | null
          created_at?: string
          deadline: string
          id?: string
          is_read?: boolean
          report_id: string
          task_description?: string
          type_of_report?: string | null
        }
        Update: {
          assigned_by_email?: string
          assigned_by_name?: string | null
          assigned_to_email?: string
          assigned_to_name?: string | null
          created_at?: string
          deadline?: string
          id?: string
          is_read?: boolean
          report_id?: string
          task_description?: string
          type_of_report?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "report_assignments_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "saved_reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_assignments_type_of_report_fkey"
            columns: ["type_of_report"]
            isOneToOne: false
            referencedRelation: "scouting_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      report_views: {
        Row: {
          created_at: string
          duration_seconds: number | null
          id: string
          referrer: string | null
          report_id: string
          user_agent: string | null
          view_ended_at: string | null
          view_started_at: string
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          id?: string
          referrer?: string | null
          report_id: string
          user_agent?: string | null
          view_ended_at?: string | null
          view_started_at?: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          id?: string
          referrer?: string | null
          report_id?: string
          user_agent?: string | null
          view_ended_at?: string | null
          view_started_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_views_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "shared_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_filter_presets: {
        Row: {
          club_name: string
          created_at: string
          field_name: string
          id: string
          is_historical: boolean
          preset_name: string
          user_email: string
          values: Json
        }
        Insert: {
          club_name: string
          created_at?: string
          field_name: string
          id?: string
          is_historical?: boolean
          preset_name: string
          user_email: string
          values?: Json
        }
        Update: {
          club_name?: string
          created_at?: string
          field_name?: string
          id?: string
          is_historical?: boolean
          preset_name?: string
          user_email?: string
          values?: Json
        }
        Relationships: []
      }
      saved_reports: {
        Row: {
          club_name: string
          created_at: string
          id: string
          mode: string
          pipeline_stage_id: string | null
          player_id: string | null
          player_name: string
          priority: number | null
          report_data: Json
          user_email: string
        }
        Insert: {
          club_name: string
          created_at?: string
          id?: string
          mode?: string
          pipeline_stage_id?: string | null
          player_id?: string | null
          player_name: string
          priority?: number | null
          report_data: Json
          user_email: string
        }
        Update: {
          club_name?: string
          created_at?: string
          id?: string
          mode?: string
          pipeline_stage_id?: string | null
          player_id?: string | null
          player_name?: string
          priority?: number | null
          report_data?: Json
          user_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_reports_pipeline_stage_id_fkey"
            columns: ["pipeline_stage_id"]
            isOneToOne: false
            referencedRelation: "pipeline_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      scouted_roles: {
        Row: {
          club_id: string | null
          description: string | null
          id: string
          role_name: string
        }
        Insert: {
          club_id?: string | null
          description?: string | null
          id?: string
          role_name: string
        }
        Update: {
          club_id?: string | null
          description?: string | null
          id?: string
          role_name?: string
        }
        Relationships: []
      }
      scouting_reports: {
        Row: {
          assigned_by_user_email: string
          assigned_to_user_email: string
          author_email: string
          author_name: string | null
          club_role_id: string
          created_at: string
          display_club_name: string | null
          display_player_age: number
          id: string
          player_id: string
          report_data: Json
          report_owning_club_id: string
          report_template_id: string
          scouted_club_id: string
          scouted_role_id: string
          status: string
          updated_at: string
        }
        Insert: {
          assigned_by_user_email: string
          assigned_to_user_email: string
          author_email: string
          author_name?: string | null
          club_role_id: string
          created_at?: string
          display_club_name?: string | null
          display_player_age: number
          id?: string
          player_id: string
          report_data?: Json
          report_owning_club_id: string
          report_template_id: string
          scouted_club_id: string
          scouted_role_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          assigned_by_user_email?: string
          assigned_to_user_email?: string
          author_email?: string
          author_name?: string | null
          club_role_id?: string
          created_at?: string
          display_club_name?: string | null
          display_player_age?: number
          id?: string
          player_id?: string
          report_data?: Json
          report_owning_club_id?: string
          report_template_id?: string
          scouted_club_id?: string
          scouted_role_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      scouting_templates: {
        Row: {
          id: string
          template_name: string
          template_schema: Json
        }
        Insert: {
          id?: string
          template_name: string
          template_schema?: Json
        }
        Update: {
          id?: string
          template_name?: string
          template_schema?: Json
        }
        Relationships: []
      }
      shadow_11: {
        Row: {
          club_id: string
          created_at: string
          creator_user_id: string
          formation_data: Json
          id: string
          is_main: boolean
          last_modified: string
          shadow_name: string
        }
        Insert: {
          club_id: string
          created_at?: string
          creator_user_id: string
          formation_data?: Json
          id?: string
          is_main?: boolean
          last_modified?: string
          shadow_name: string
        }
        Update: {
          club_id?: string
          created_at?: string
          creator_user_id?: string
          formation_data?: Json
          id?: string
          is_main?: boolean
          last_modified?: string
          shadow_name?: string
        }
        Relationships: []
      }
      shared_report_creators: {
        Row: {
          created_at: string
          creator_email: string
          id: string
          report_id: string
        }
        Insert: {
          created_at?: string
          creator_email: string
          id?: string
          report_id: string
        }
        Update: {
          created_at?: string
          creator_email?: string
          id?: string
          report_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shared_report_creators_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: true
            referencedRelation: "shared_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_reports: {
        Row: {
          club_name: string
          created_at: string
          expires_at: string | null
          id: string
          organization_name: string | null
          player_name: string
          report_data: Json
        }
        Insert: {
          club_name: string
          created_at?: string
          expires_at?: string | null
          id?: string
          organization_name?: string | null
          player_name: string
          report_data: Json
        }
        Update: {
          club_name?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          organization_name?: string | null
          player_name?: string
          report_data?: Json
        }
        Relationships: []
      }
      user_custom_metrics: {
        Row: {
          created_at: string
          definition: string | null
          id: string
          metric_configs: Json
          name: string
          updated_at: string
          user_email: string
        }
        Insert: {
          created_at?: string
          definition?: string | null
          id?: string
          metric_configs?: Json
          name: string
          updated_at?: string
          user_email: string
        }
        Update: {
          created_at?: string
          definition?: string | null
          id?: string
          metric_configs?: Json
          name?: string
          updated_at?: string
          user_email?: string
        }
        Relationships: []
      }
      user_onboarding_flags: {
        Row: {
          created_at: string | null
          key: string
          status: string
          user_email: string
        }
        Insert: {
          created_at?: string | null
          key: string
          status: string
          user_email: string
        }
        Update: {
          created_at?: string | null
          key?: string
          status?: string
          user_email?: string
        }
        Relationships: []
      }
      user_player_notes: {
        Row: {
          attachments: Json | null
          created_at: string
          custom_current_club: string | null
          custom_last_active_club: string | null
          custom_owning_club: string | null
          external_links: Json | null
          extra_info: string | null
          id: string
          player_id: string
          report_summary: Json | null
          updated_at: string
          user_email: string
          youtube_url: string | null
        }
        Insert: {
          attachments?: Json | null
          created_at?: string
          custom_current_club?: string | null
          custom_last_active_club?: string | null
          custom_owning_club?: string | null
          external_links?: Json | null
          extra_info?: string | null
          id?: string
          player_id: string
          report_summary?: Json | null
          updated_at?: string
          user_email: string
          youtube_url?: string | null
        }
        Update: {
          attachments?: Json | null
          created_at?: string
          custom_current_club?: string | null
          custom_last_active_club?: string | null
          custom_owning_club?: string | null
          external_links?: Json | null
          extra_info?: string | null
          id?: string
          player_id?: string
          report_summary?: Json | null
          updated_at?: string
          user_email?: string
          youtube_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_ai_spend: {
        Args: { p_cost_cents: number; p_date: string }
        Returns: undefined
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
