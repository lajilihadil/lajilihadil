import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as argon2 from "argon2";

export type AdminMedecinDocument = AdminMedecin & Document;
@Schema({ timestamps: true, discriminatorKey: 'items' })

export class AdminMedecin {
  @Prop({ auto: true, type: String }) // Utilisez auto: true pour générer automatiquement l'ID
  id: string;

  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  prenom: string;

  @Prop()
  specialite: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  password: string;
}

export const AdminMedecinSchema = SchemaFactory.createForClass(AdminMedecin).pre('save', async function () {
  this.password = await argon2.hash(this.password);
});