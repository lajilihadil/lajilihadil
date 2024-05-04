import { Document } from 'mongoose';
export interface ICompteMedecin extends Document {
  // Informations du compte
  title: string; // Titre (Docteur, Professeur, etc.)
  nom: string; // Nom
  prenom: string; // Prénom
  date_naissance: string; // Date de naissance (au format YYYY-MM-DD)
  sexe: 'homme' | 'femme'; // Sexe
  description: string; // Description
  email: string; // Adresse email
  // Informations du cabinet
  adresse: string; // Adresse du cabinet
  gouvernorat: string; // Gouvernorat
  longitude:string;
  latitude : string;
  telephone_mobile: string; // Téléphone mobile
  telephone_fixe: string; // Téléphone fixe
  // Informations de spécialité
  specialite: string; // Spécialité
  actes: string[]; // Liste des actes
  diplomes: string[]; // Liste des diplômes
  // Horaires de travail
  planning: {
    lundi: { statut: 'ouvert' | 'ferme'; matin: boolean; apresMidi: boolean };
    mardi: { statut: 'ouvert' | 'ferme'; matin: boolean; apresMidi: boolean };
    mercredi: { statut: 'ouvert' | 'ferme'; matin: boolean; apresMidi: boolean };
    jeudi: { statut: 'ouvert' | 'ferme'; matin: boolean; apresMidi: boolean };
    vendredi: { statut: 'ouvert' | 'ferme'; matin: boolean; apresMidi: boolean };
    samedi: { statut: 'ouvert' | 'ferme'; matin: boolean; apresMidi: boolean };
    dimanche: { statut: 'ouvert' | 'ferme'; matin: boolean; apresMidi: boolean };
  };
  // Notifications
  conventionCNAM: boolean; // Conventionné avec la CNAM
  conventionSecteur: boolean; // Conventionné au secteur
  tarif: number; // Tarif
}