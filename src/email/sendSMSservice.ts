import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as twilio from 'twilio';

@Injectable()
export class sendSMSService{
  private readonly logger = new Logger(sendSMSService.name);
  private readonly twilioClient: twilio.Twilio;

  constructor(private readonly configService: ConfigService) {
    this.twilioClient = twilio(
      this.configService.get('TWILIO_ACCOUNT_SID'),
      this.configService.get('TWILIO_AUTH_TOKEN'),
    );
  }

  async sendOTP(recipientPhoneNumber: string, OTP: string): Promise<void> {
    try {
      // Envoyer le message SMS
      await this.twilioClient.messages.create({
        body: `Your OTP for verification is: ${OTP}`,
        from: this.configService.get('TWILIO_PHONE_NUMBER'),
        to: recipientPhoneNumber,
      });

      // Log après l'envoi du SMS
      this.logger.log(`OTP sent successfully to ${recipientPhoneNumber}`);
    } catch (error) {
      // Log de l'erreur s'il y en a une
      this.logger.error(`An error occurred while sending OTP to ${recipientPhoneNumber}: ${error.message}`);
      throw error;
    }
  }
}
