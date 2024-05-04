import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Column } from 'typeorm';

@Schema({ timestamps: true, discriminatorKey: 'items' })
export class RapportMedi extends Document {
  @Prop({ type: String, required: true })
  patientId: string; 
  
  @Prop()
  nom: string;

  @Prop()
  prenom: string;

  @Prop()
  ville: string;

  @Prop()
  telephone: string;

  @Prop()
  numero_rapport: number;

  @Prop()
  dateRendezvous: Date;

  @Prop()
  descriptions: string;

  @Prop({ type: [{ 
    nom_medicament: String,
    dosage: String,
    duree: String
  }], default: [] }) // Définir un tableau d'ordonnances
  ordonnances: { nom_medicament: string, dosage: string, duree: string }[];

  @Prop()
  dateConsultation: string;

  @Prop()
  timeConsultation: string;

  @Prop()
  descriptionConsultation?: string;

  @Prop({ type: String, required: false })
  ordonnance: string;

  @Prop({ type: String, required: false })
  refreshToken?: string;
}

export const RapportMediSchema = SchemaFactory.createForClass(RapportMedi);
