import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as argon2 from "argon2";
import {HydratedDocument} from 'mongoose'
export type UserDocument = HydratedDocument<SMSOtp>;

//heritage 
@Schema({ timestamps : true , discriminatorKey:'items'})
export class SMSOtp {

  @Prop({ required: true})
  phone: string;

  @Prop()
  otp: number ;
  
  @Prop()
  refreshToken: string;
}

// la methode de hachage dans nestjs 
// avant enregistrer on va faire le hachage 
export const SMSOtpSchema = SchemaFactory.createForClass(SMSOtp)

