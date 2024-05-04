import { Module } from '@nestjs/common';
import { ProfilMedController } from './profil-med.controller';
import { ProfilMedService } from './profil-med.service';
import { ProfilMedSchema } from './entities/profilmed-entity';  // Assurez-vous que le chemin est correct
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    MulterModule.register({
        dest:'./upload'
      }),
      MongooseModule.forFeature([{ name: 'ProfilMedModel', schema: ProfilMedSchema }]),
  ],
  controllers: [ProfilMedController],
  providers: [ProfilMedService],
})
export class ProfilMedModule {}