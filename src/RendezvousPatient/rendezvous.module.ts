import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RendezvousPatientController } from './rendezvous.controller';
import { RendezvousPatient, RendezvousPatientSchema } from './entities/rendezvous-entity';
import { RendezvousPatientService } from './rendezvous.service';
import { PatientModule } from 'src/patient/patient.module';
import { PatientSchema } from 'src/patient/entities/patient.entity';
import { CompteMedecinSchema } from 'src/CompteMed/entities/comptemed-entity';
import { CompteMedecinService } from 'src/CompteMed/comptemed.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'RendezvousPatient', schema: RendezvousPatientSchema },
      // Importez le modèle Patient ici
      { name: 'Patient', schema: PatientSchema },
      { name: 'CompteMedecinModel', schema: CompteMedecinSchema },
    ]),
    PatientModule, // Importez le module PatientModule ici
  ],
  controllers: [RendezvousPatientController],
  providers: [RendezvousPatientService, CompteMedecinService],
  exports: [RendezvousPatientService],
})
export class RendezvousPatientModule {}