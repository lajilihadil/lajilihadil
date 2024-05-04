// admin-medecin.module.ts
import { Module } from '@nestjs/common';
import { AdminMedecinController } from './admin-medecin.controllers';
import { AdminMedecin, AdminMedecinSchema } from './entites/admin-medecin.entity';
import { AdminMedecinService } from './admin-medecin.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AdminMedecin', schema: AdminMedecinSchema }]),
  ],
  controllers: [AdminMedecinController],
  providers: [AdminMedecinService],
  exports: [AdminMedecinService],
})
export class AdminMedecinModule {}
