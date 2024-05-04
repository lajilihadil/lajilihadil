import { Module } from '@nestjs/common';
import { CompteMedecinController } from './comptemed.controller';
import { CompteMedecinService } from './comptemed.service';
import { CompteMedecinSchema } from './entities/comptemed-entity';  // Assurez-vous que le chemin est correct
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    MulterModule.register({
        dest:'./upload'
      }),
      MongooseModule.forFeature([{ name: 'CompteMedecinModel', schema: CompteMedecinSchema }]),
  ],
  controllers: [CompteMedecinController],
  providers: [CompteMedecinService],
})
export class CompteMedecinModule {}