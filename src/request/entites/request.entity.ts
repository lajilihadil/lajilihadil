import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AdminDto } from 'src/admin/dto/admin.dto';
import { RequestState } from 'src/enums/common';
import { MedecinDto } from 'src/medecin/dto/doctor.dto';
@Schema()
export class RegistrationRequest extends Document {
  @Prop({ required: true })
  state: RequestState;

  @Prop({ required: true })
  senderId: string;

  @Prop({ required: false})
  sender: MedecinDto;

  @Prop({ required: true })
  receiverId: string;

  @Prop({ required: false })
  receiver: AdminDto;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: false })
  updatedAt: Date;
}

export const RegistrationRequestSchema =
  SchemaFactory.createForClass(RegistrationRequest);
