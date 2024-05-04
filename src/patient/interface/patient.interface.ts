import { Document } from 'mongoose';

export interface IPatient extends Document {
  ville: any;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  verifemail: string;
  verifPhone : string;
  password: string;
  refreshToken: string;
}
