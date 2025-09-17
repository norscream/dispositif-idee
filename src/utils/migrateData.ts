import { supabase } from "@/integrations/supabase/client";
import { actionsPartenaires } from "@/data/actionsPartenaires";
import { concours } from "@/data/concours";

// Data migration utility to populate database with existing static data
export async function migrateActionsPartenaires() {
  try {
    console.log('Migrating actions partenaires...');
    
    // Check if data already exists
    const { data: existing, error: checkError } = await supabase
      .from('actions_partenaires')
      .select('id')
      .limit(1);
    
    if (checkError) {
      throw checkError;
    }
    
    if (existing && existing.length > 0) {
      console.log('Actions partenaires already exist, skipping migration');
      return;
    }
    
    // Insert actions
    const { error } = await supabase
      .from('actions_partenaires')
      .insert(
        actionsPartenaires.map(action => ({
          title: action.title,
          description: action.description,
          zones: [...action.zones], // Convert readonly array to regular array
          niveaux: [...action.niveaux], // Convert readonly array to regular array
          objectifs: [...action.objectifs], // Convert readonly array to regular array
          duree: action.duree,
          partenaire: action.partenaire,
          image: action.image
        }))
      );
    
    if (error) {
      throw error;
    }
    
    console.log(`Successfully migrated ${actionsPartenaires.length} actions partenaires`);
  } catch (error) {
    console.error('Error migrating actions partenaires:', error);
    throw error;
  }
}

export async function migrateConcours() {
  try {
    console.log('Migrating concours...');
    
    // Check if data already exists
    const { data: existingConcours, error: checkError } = await supabase
      .from('concours')
      .select('id')
      .limit(1);
    
    if (checkError) {
      throw checkError;
    }
    
    if (existingConcours && existingConcours.length > 0) {
      console.log('Concours already exist, skipping migration');
      return;
    }
    
    // Insert concours
    for (const concoursItem of concours) {
      const { data: insertedConcours, error: concoursError } = await supabase
        .from('concours')
        .insert({
          nom: concoursItem.nom,
          objectif: concoursItem.objectif,
          public: concoursItem.public,
          presentation: concoursItem.presentation,
          livrables: concoursItem.livrables,
          logo: concoursItem.logo
        })
        .select()
        .single();
      
      if (concoursError) {
        throw concoursError;
      }
      
      // Insert partenaires for this concours
      if (concoursItem.partenaires && concoursItem.partenaires.length > 0) {
        const { error: partenaireError } = await supabase
          .from('concours_partenaires')
          .insert(
            concoursItem.partenaires.map(partenaire => ({
              concours_id: insertedConcours.id,
              nom: partenaire.nom,
              logo: partenaire.logo
            }))
          );
        
        if (partenaireError) {
          throw partenaireError;
        }
      }
    }
    
    console.log(`Successfully migrated ${concours.length} concours`);
  } catch (error) {
    console.error('Error migrating concours:', error);
    throw error;
  }
}

// Sample events data for migration (you can add more)
const sampleEvents = [
  {
    titre: "Forum Jeunes et Audacieux 2024",
    date_debut: "2024-06-15",
    date_fin: "2024-06-16",
    lieu: "Lille Grand Palais",
    description: "Le plus grand rassemblement de jeunes entrepreneurs et innovateurs de la région Hauts-de-France.",
    lien_inscription: "https://example.com/inscription-forum-ja"
  },
  {
    titre: "Bootcamp Innovation Sociale",
    date_debut: "2024-09-20",
    lieu: "Campus de Valenciennes",
    description: "Une semaine intensive pour développer des projets à impact social positif.",
    lien_inscription: "https://example.com/bootcamp-innovation"
  }
];

export async function migrateEvenements() {
  try {
    console.log('Migrating evenements...');
    
    // Check if data already exists
    const { data: existing, error: checkError } = await supabase
      .from('evenements_jeunes_audacieux')
      .select('id')
      .limit(1);
    
    if (checkError) {
      throw checkError;
    }
    
    if (existing && existing.length > 0) {
      console.log('Evenements already exist, skipping migration');
      return;
    }
    
    // Insert sample events
    const { error } = await supabase
      .from('evenements_jeunes_audacieux')
      .insert(sampleEvents);
    
    if (error) {
      throw error;
    }
    
    console.log(`Successfully migrated ${sampleEvents.length} evenements`);
  } catch (error) {
    console.error('Error migrating evenements:', error);
    throw error;
  }
}

// Sample team data for migration (you can customize this)
const sampleTeam = [
  {
    nom: "Dupont",
    prenom: "Marie",
    fonction: "Directrice",
    email: "marie.dupont@example.com",
    image: "/placeholder.svg",
    position_x: 50,
    position_y: 30,
    is_new_member: false
  },
  {
    nom: "Martin",
    prenom: "Jean",
    fonction: "Chef de projet",
    email: "jean.martin@example.com",
    image: "/placeholder.svg",
    position_x: 70,
    position_y: 60,
    is_new_member: false
  },
  {
    nom: "Bernard",
    prenom: "Sophie",
    fonction: "Coordinatrice",
    email: "sophie.bernard@example.com",
    image: "/placeholder.svg",
    is_new_member: true
  }
];

export async function migrateEquipe() {
  try {
    console.log('Migrating equipe...');
    
    // Check if data already exists
    const { data: existing, error: checkError } = await supabase
      .from('equipe')
      .select('id')
      .limit(1);
    
    if (checkError) {
      throw checkError;
    }
    
    if (existing && existing.length > 0) {
      console.log('Equipe already exists, skipping migration');
      return;
    }
    
    // Insert sample team members
    const { error } = await supabase
      .from('equipe')
      .insert(sampleTeam);
    
    if (error) {
      throw error;
    }
    
    console.log(`Successfully migrated ${sampleTeam.length} team members`);
  } catch (error) {
    console.error('Error migrating equipe:', error);
    throw error;
  }
}

export async function migrateAllData() {
  try {
    await migrateActionsPartenaires();
    await migrateConcours();
    await migrateEvenements();
    await migrateEquipe();
    console.log('All data migration completed successfully!');
  } catch (error) {
    console.error('Data migration failed:', error);
    throw error;
  }
}