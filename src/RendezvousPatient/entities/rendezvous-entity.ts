import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {HydratedDocument} from 'mongoose'
export type UserDocument = HydratedDocument<RendezvousPatient>;
@Schema({ timestamps : true , discriminatorKey:'items'})
export class RendezvousPatient  {
  @Prop({ type: String, required: true })
  patientId: string;
  @Prop({ type: String, required: true })
  medecinId: string;
  @Prop({ type: String })
  date: Date;
  @Prop()
  temps: string;
  @Prop()
  motifs: string;
  @Prop()
  nom: string;
  @Prop()
  prenom: string;
  @Prop()
  telephone: string;
}
export const RendezvousPatientSchema = SchemaFactory.createForClass(RendezvousPatient)