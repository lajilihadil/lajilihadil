import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as argon2 from "argon2";
import {HydratedDocument} from 'mongoose'
export type UserDocument = HydratedDocument<Patient>;

//heritage 
@Schema({ timestamps : true , discriminatorKey:'items'})
export class Patient {
  @Prop()
  id: string;
  
  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  prenom: string;

  @Prop()
  telephone : string ;

  @Prop({ required: true  })
  email: string;

  @Prop({ required: true  })
  verifemail: string;

  
  @Prop()
  password : string;

 
	@Prop()
  refreshToken: string;
}

// la methode de hachage dans nestjs 
// avant enregistrer on va faire le hachage 
export const PatientSchema = SchemaFactory.createForClass(Patient).pre('save',
async function(){
    this.password = await argon2.hash(this.password)
}
)