import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  // @Prop()
  // id: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ required: true })
  state: number;

  @Prop()
  refreshToken: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

// la methode de hachage dans nestjs
// avant enregistrer on va faire le hachage
export const AdminSchema = SchemaFactory.createForClass(Admin).pre(
  'save',
  async function () {},
);
