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

// Real events data from the site
const realEvents = [
  {
    titre: "Atelier Fresque de l'esprit d'entreprendre",
    date_debut: "2024-09-18",
    lieu: "La turbine - Dunkerque",
    description: "Atelier interactif pour développer l'esprit d'entreprendre chez les jeunes.",
    lien_inscription: null
  },
  {
    titre: "Hackathon IDEE",
    date_debut: "2024-10-02",
    date_fin: "2024-10-03",
    lieu: "La plaine image - Tourcoing",
    description: "Hackathon pour développer des projets innovants avec l'équipe IDEE.",
    lien_inscription: null
  },
  {
    titre: "Hackathon IDEE",
    date_debut: "2024-11-25",
    date_fin: "2024-12-08",
    lieu: "Laon",
    description: "Hackathon pour développer des projets innovants avec l'équipe IDEE.",
    lien_inscription: null
  },
  {
    titre: "Concours Graines d'entrepreneur",
    date_debut: "2025-05-07",
    lieu: "Palais des arts - Capelle-la-grande",
    description: "Concours destiné aux jeunes entrepreneurs en herbe.",
    lien_inscription: null
  },
  {
    titre: "Festival des Mini-Entreprises",
    date_debut: "2025-05-19",
    lieu: "Lille",
    description: "Festival célébrant les mini-entreprises créées par les élèves.",
    lien_inscription: null
  },
  {
    titre: "Festival des Mini-Entreprises",
    date_debut: "2025-05-21",
    lieu: "CCI Amiens",
    description: "Festival célébrant les mini-entreprises créées par les élèves.",
    lien_inscription: null
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
    
    // Insert real events
    const { error } = await supabase
      .from('evenements_jeunes_audacieux')
      .insert(realEvents);
    
    if (error) {
      throw error;
    }
    
    console.log(`Successfully migrated ${realEvents.length} evenements`);
  } catch (error) {
    console.error('Error migrating evenements:', error);
    throw error;
  }
}

// Real team data from the site
const realTeamMembers = [
  // Team members with positions on the map
  {
    nom: "Guillouard",
    prenom: "Anna",
    fonction: "Chargée de projet Amiens",
    email: "anna.guillouard@idee.fr",
    image: "/lovable-uploads/001aacb9-ceb3-42e5-9060-efcd1d2ce801.png",
    position_x: 50,
    position_y: 55,
    is_new_member: false
  },
  {
    nom: "Lefevre",
    prenom: "Pascal",
    fonction: "Chargé de mission Aisne",
    email: "pascal.lefevre@idee.fr",
    image: "/lovable-uploads/68ecf923-3ab3-47f4-9090-9a9a83d1f3c0.png",
    position_x: 75,
    position_y: 70,
    is_new_member: false
  },
  {
    nom: "Zuliani",
    prenom: "Sylvie",
    fonction: "Chargée de mission Valenciennois",
    email: "sylvie.zuliani@idee.fr",
    image: "/lovable-uploads/d30e3c4d-b90b-4cb3-a2eb-ebbb32b01edd.png",
    position_x: 65,
    position_y: 35,
    is_new_member: false
  },
  {
    nom: "Clerbout",
    prenom: "Chloé",
    fonction: "Chargée de mission MEL",
    email: "chloe.clerbout@idee.fr",
    image: "/lovable-uploads/bb242a05-95e3-4d12-8dfe-564390ea4bd5.png",
    position_x: 55,
    position_y: 25,
    is_new_member: false
  },
  {
    nom: "Madani",
    prenom: "Norman",
    fonction: "Chargé de mission côte d'opale",
    email: "norman.madani@idee.fr",
    image: "/lovable-uploads/f1165429-3de0-4ed3-b276-91b014ca1e80.png",
    position_x: 20,
    position_y: 25,
    is_new_member: false
  },
  // New team members (without positions)
  {
    nom: "Pouliquen",
    prenom: "Vincent",
    fonction: "Chef de projet IDEE",
    email: "vincent.pouliquen@idee.fr",
    image: "/lovable-uploads/53127e3b-f7d1-41e0-aa50-b879e49850b7.png",
    position_x: null,
    position_y: null,
    is_new_member: true
  },
  {
    nom: "DJOUBI",
    prenom: "Massine",
    fonction: "Chargé de projet Mecalive",
    email: "massine.djoubi@idee.fr",
    image: "/lovable-uploads/dc34d90b-85d5-46dd-b9a4-fa1bd0f64f34.png",
    position_x: null,
    position_y: null,
    is_new_member: true
  },
  {
    nom: "LEROY",
    prenom: "Coline",
    fonction: "Chargée de suivi de projet IDEE",
    email: "coline.leroy@idee.fr",
    image: "/lovable-uploads/dc34d90b-85d5-46dd-b9a4-fa1bd0f64f34.png",
    position_x: null,
    position_y: null,
    is_new_member: true
  },
  {
    nom: "MARTINEZ",
    prenom: "Manon",
    fonction: "Chargée de suivi de projet IDEE",
    email: "manon.martinez@idee.fr",
    image: "/lovable-uploads/dc34d90b-85d5-46dd-b9a4-fa1bd0f64f34.png",
    position_x: null,
    position_y: null,
    is_new_member: true
  },
  {
    nom: "Darras",
    prenom: "Anaïs",
    fonction: "Chargée de mesure d'impact",
    email: "anais.darras@idee.fr",
    image: "/lovable-uploads/dc34d90b-85d5-46dd-b9a4-fa1bd0f64f34.png",
    position_x: null,
    position_y: null,
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
    
    // Insert real team members
    const { error } = await supabase
      .from('equipe')
      .insert(realTeamMembers);
    
    if (error) {
      throw error;
    }
    
    console.log(`Successfully migrated ${realTeamMembers.length} team members`);
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