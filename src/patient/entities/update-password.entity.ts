import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as argon2 from "argon2";

@Schema({ timestamps: true, discriminatorKey: 'items' })
export class UpdatePassword {
  @Prop()
  id: string;

  @Prop()
  newPassword: string;

  @Prop()
  confirmPassword: string;
}

// Déclaration de la variable avant utilisation
const UpdatePasswordSchema = SchemaFactory.createForClass(UpdatePassword);

// Prétraitement
UpdatePasswordSchema.pre('save', async function(this: UpdatePasswordDocument, next) {
  if (this.isModified('newPassword')) {
    this.newPassword = await argon2.hash(this.newPassword);
  }
  next();
});

export type UpdatePasswordDocument = UpdatePassword & Document;
export { UpdatePasswordSchema };
