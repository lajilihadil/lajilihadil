import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { sendSMSService } from './sendSMSservice'; // Assurez-vous que le chemin est correct

@Controller('sms') // Modifier le chemin du contrôleur si nécessaire
export class sendSMSController {
  constructor(private readonly sendSMSService: sendSMSService) {}

  @Post('/send_sms')
  async sendOTP(@Body() requestBody: { phoneNumber: string }): Promise<string> {
    try {
      // Générer un OTP
      const OTP = Math.floor(100000 + Math.random() * 900000).toString();

      // Vérifier si le numéro de téléphone est valide
      if (!requestBody.phoneNumber) {
        throw new HttpException('Phone number is required', HttpStatus.BAD_REQUEST);
      }

      // Envoyer l'OTP
      await this.sendSMSService.sendOTP(requestBody.phoneNumber, OTP);

      // Retourner l'OTP pour une éventuelle vérification côté client
      return OTP;
    } catch (error) {
      // Gérer les erreurs
      throw new HttpException('Failed to send OTP', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
