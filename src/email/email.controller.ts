import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/send_email')
  async sendRecoveryEmail(@Body() requestBody: { recipient_email: string, OTP: string }, @Res() res): Promise<void> {
    try {
      await this.emailService.sendEmail(requestBody.recipient_email, requestBody.OTP);
      res.status(HttpStatus.OK).send('Email sent successfully');
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`An error occurred while sending email: ${error.message}`);
    }
  }

  @Post('/send_email_medecin')
  async sendRecoveryEmailMedecin(@Body() requestBody: { recipient_email: string, OTP: string, nom:string,prenom:string, specialite:string }, @Res() res): Promise<void> {
    try {
      await this.emailService.sendEmailMedecin(requestBody.recipient_email, requestBody.OTP, requestBody.nom, requestBody.prenom, requestBody.specialite);
      res.status(HttpStatus.OK).send('Email sent successfully');
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(`An error occurred while sending email: ${error.message}`);
    }
  }
}
