import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as argon2 from "argon2";

@Schema({ timestamps: true, discriminatorKey: 'items' })
export class UpdateOtp {
  @Prop()
  id: string;

  @Prop()
  newOtp: number;

}

// Déclaration de la variable avant utilisation
const UpdateOtpSchema = SchemaFactory.createForClass(UpdateOtp);



export type UpdateOtpDocument = UpdateOtp & Document;
export { UpdateOtpSchema };
