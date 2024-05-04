import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationRequestSchema } from './entites/request.entity';
import { MedecinSchema } from 'src/medecin/entities/medecin-entity';
import { Admin } from 'typeorm';
import { AdminSchema } from 'src/admin/entities/admin.entity';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RegistrationRequest', schema: RegistrationRequestSchema },
    ]),
    MongooseModule.forFeature([{ name: 'Medecin', schema: MedecinSchema }]),
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
  ],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
