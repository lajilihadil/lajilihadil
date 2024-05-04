import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module'; // Placez le module AuthModule en dernier
import { MedecinModule } from './medecin/medecin.module';
import { ProfilMedModule } from './profil-med/profil-med.module';
import { EmailService } from './email/email.service';
import { AdminModule } from './admin/admin.module';
import { AdminMedecinModule } from './admin-medecin/admin-medecin.module';
import { CompteMedecinModule } from './CompteMed/comptemed.interface';
import { RendezvousPatient } from './RendezvousPatient/entities/rendezvous-entity';
import { RendezvousPatientModule } from './RendezvousPatient/rendezvous.module';
import { SMSOtpModule } from './otpSMS/otpSMS.module';
import { PatientModule } from './patient/patient.module';
import { request } from 'http';
import { RequestModule } from './request/request.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017', { dbName: 'GestionCabinets' }),
    ConfigModule.forRoot({ isGlobal: true }),
    PatientModule,
    AuthModule,
    MedecinModule,
    ProfilMedModule,
    AdminModule,
    AdminMedecinModule,
    CompteMedecinModule,
    RendezvousPatientModule,
    SMSOtpModule,
    RequestModule,
   // Importez le module AuthModule en dernier
  ],
  controllers: [AppController],
  providers: [AppService, EmailService],
  
})
export class AppModule {}
