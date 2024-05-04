import { Module } from '@nestjs/common';
import { MedecinController } from './medecin.controller';
import { Medecin, MedecinSchema } from './entities/medecin-entity';
import { MedecinService } from './Medecin.service';
import { MongooseModule } from '@nestjs/mongoose';

import { RegistrationRequestSchema } from 'src/request/entites/request.entity';
import { AdminSchema } from 'src/admin/entities/admin.entity';

@Module({
imports: [
    MongooseModule.forFeature([{name :'Medecin', schema : MedecinSchema }
  ]),

  MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
  MongooseModule.forFeature([
    { name: 'RegistrationRequest', schema: RegistrationRequestSchema },
  ]),
],
  controllers: [MedecinController],
  providers: [MedecinService],
  exports: [MedecinService],
})
export class MedecinModule {}
