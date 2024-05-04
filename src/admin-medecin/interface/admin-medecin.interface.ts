import { Schema, model, Document } from 'mongoose';

export interface IAdminMedecin extends Document {
  nom: string;
  prenom: string;
  specialite: string;
  email: string;
  password: string;
  
}


