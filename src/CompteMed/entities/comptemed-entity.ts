import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class CompteMedecin extends Document {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  nom: string;
  @Prop({ required: true })
  prenom: string;
  @Prop({ required: true })
  date_naissance: string;
  @Prop({ required: true })
  sexe: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  adresse: string;
  @Prop({ required: true })
  gouvernorat: string;
  @Prop({ required: true })
  latitude: string;
  @Prop({ required: true })
  longitude: string;
  @Prop({ required: true })
  telephone_mobile: string;
  @Prop({ required: true })
  telephone_fixe: string;
  @Prop({ required: true })
  specialite: string;
  @Prop({ type: [String], default: [] })
  actes: string[];
  @Prop({ type: [String], default: [] })
  diplomes: string[];
  @Prop({ required: true, type: Object })
  planning: object;
  @Prop({ required: true })
  conventionCNAM: boolean;
  @Prop({ required: true })
  conventionSecteur: boolean;
  @Prop({ required: true })
  tarif: number;
  @Prop()
  image: string[];
}
export const CompteMedecinSchema = SchemaFactory.createForClass(CompteMedecin);