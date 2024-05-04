import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { sendSMSService } from './sendSMSservice'; // Assurez-vous d'importer correctement le service
import { sendSMSController } from './sendSMScontroller';

@Module({
  controllers: [EmailController, sendSMSController],
  providers: [EmailService, sendSMSService], // Ajoutez sendSMSService ici
})
export class EmailModule {}
