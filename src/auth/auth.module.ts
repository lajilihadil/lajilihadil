// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { PatientModule } from 'src/patient/patient.module';
import { AdminService } from 'src/admin/Admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminMedecinService } from '../admin-medecin/admin-medecin.service';
import { AdminMedecinModule } from 'src/admin-medecin/admin-medecin.module';
import { AdminMedecinSchema } from 'src/admin-medecin/entites/admin-medecin.entity'; // Ajoutez ce chemin
import { AdminSchema } from 'src/admin/entities/admin.entity';
import { MedecinSchema } from '../medecin/entities/medecin-entity';
import { MedecinService } from '../medecin/medecin.service';
import { MedecinModule } from '../medecin/medecin.module';
import { RegistrationRequestSchema } from 'src/request/entites/request.entity';


@Module({
  imports: [
    JwtModule.register({}),
    PatientModule,
    AdminMedecinModule,
    MedecinModule,
    MongooseModule.forFeature([
      { name: 'Admin', schema: AdminSchema },
      { name: 'AdminMedecin', schema: AdminMedecinSchema },
      { name: 'Medecin', schema: MedecinSchema },
      { name: 'RegistrationRequest', schema: RegistrationRequestSchema},
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AdminService, AdminMedecinService,MedecinService, AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}