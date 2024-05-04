import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as argon2 from "argon2";
import {HydratedDocument} from 'mongoose'
export type UserDocument = HydratedDocument<Medecin>;

//heritage 
@Schema({ timestamps : true , discriminatorKey:'items'})
export class Medecin {
  @Prop()
  id: string;
  
  @Prop({ required: true })
  pays: string;

  @Prop({ required: true })
  gouvernorat: string;

  @Prop()
  specialite : string ;

  @Prop({ unique: true  })
  nom: string;

  @Prop({ unique: true  })
  prenom: string;

  @Prop({ required: true}) 
  email: string;

  @Prop()
  telephone: string ;
  
  @Prop()
  password: string ;

  @Prop()
  state: number;

  @Prop()
  refreshToken: string;
}


export const MedecinSchema = SchemaFactory.createForClass(Medecin).pre(
  'save',
  async function () {
    if (!this.id) {
      this.id = new Date().valueOf().toString();
    }
    this.password = await argon2.hash(this.password) 
  },

)