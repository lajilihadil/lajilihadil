import { Module } from '@nestjs/common';
import { PatientController } from './patient.controllers';
import { Patient, PatientSchema } from './entities/patient.entity';
import { PatientService } from './patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RapportMediSchema } from './entities/rapport-entity';
import { RendezvousPatientSchema } from './entities/rendezvous-entity';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [
    MulterModule.register({
      dest:'./upload'
    }),
    MongooseModule.forFeature([{ name: 'Patient', schema: PatientSchema }, 
    { name: 'RapportMedi', schema: RapportMediSchema }, 
    { name: 'RendezvousPatient', schema: RendezvousPatientSchema }, ]),
  ],
  controllers: [PatientController],
  providers: [PatientService], // Ajoutez EmailService ici
  exports: [PatientService],
})
export class PatientModule {}
