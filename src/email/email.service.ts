import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private readonly configService: ConfigService) {}

  async sendEmail(recipientEmail: string, OTP: string): Promise<void> {
    try {
      // Créer le transporteur
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: this.configService.get('MY_EMAIL'),
          pass: this.configService.get('MY_PASSWORD'),
        },
      });

      // Log avant l'envoi de l'e-mail
      this.logger.log(`Sending email to ${recipientEmail}`);

      // Configurer le mail
      const mailConfig = {
        from: this.configService.get('MY_EMAIL'),
        to: recipientEmail,
        subject: 'PASSWORD RECOVERY',
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>CodePen - OTP Email Template</title>
          <style>
            body {
              font-family: Helvetica, Arial, sans-serif;
              min-width: 1000px;
              overflow: auto;
              line-height: 2;
              background-color: #f2f2f2; /* Arrière-plan gris clair */
            }
            .container {
              margin: 50px auto;
              width: 70%;
              padding: 20px 0;
              background-color: #f9f9f9;
              border: 1px solid #ccc;
              border-radius: 5px;
            }
            .title-info {
              text-align: center;
              background-color: #00466a; /* Fond coloré pour le titre */
              padding: 10px;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
            }
            .header {
              font-size: 1.4em;
              color: #fff;
              text-decoration: none;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
        <div class="container">
          <div class="title-info">
            <a href="" class="header">MediSphereVie</a>
          </div>
          <div style="border-bottom: 1px solid #eee; padding: 10px;">
            <h1 style="text-align: center; color: #00466a;">Récupération de mot de passe</h1>
          </div>
          <p>Hi,</p>
          <p> Utilisez le code OTP suivant pour compléter votre procédure de récupération de mot de passe.</p>
          <p> OTP est valide seulement pendant 5 minutes.</p>
          <p> Ne partagez pas ce mot de passe avec d'autres personnes.</p>
          <h2 style="background: #00466a; margin: 0 auto; width: max-content; padding: 
        `,
      
      };

      // Envoyer l'e-mail
      await transporter.sendMail(mailConfig);

      // Log après l'envoi de l'e-mail
      this.logger.log(`Email sent successfully to ${recipientEmail}`);
    } catch (error) {
      // Log de l'erreur s'il y en a une
      this.logger.error(`An error occurred while sending email to ${recipientEmail}: ${error.message}`);
      throw error;
    }
  }


  async sendEmailMedecin(recipientEmail: string, OTP: string,nom: string, prenom: string, specialite: string): Promise<void> {
    try {
      // Créer le transporteur
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: this.configService.get('MY_EMAIL'),
          pass: this.configService.get('MY_PASSWORD'),
        },
      });

      // Log avant l'envoi de l'e-mail
      this.logger.log(`Sending email to ${recipientEmail}`);

      // Configurer le mail
      const mailConfig = {
        from: this.configService.get('MY_EMAIL'),
        to: recipientEmail,
        subject: 'EMAIL ACCEPTATION',
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>MediSphereVie - Acceptation d'inscription</title>
          <style>
            /* Styles spécifiques au bloc head */
            .container {
              margin: 50px auto;
              width: 80%;
              padding: 20px;
              background-color: #ffffff; /* Blanc */
              border: 1px solid #ccc;
              border-radius: 10px;
            }
            .title-info {
              background-color: #5ea4eb; /* Bleu ciel */
              padding: 10px;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              margin-bottom: 20px;
            }
            .header {
              font-size: 1.8em;
              color: #fff;
              text-decoration: none;
              font-weight: 600;
              margin: 0;
            }
            .doctor-info {
              display: flex;
              justify-content: flex-end;
              padding: 8px 0;
              color: #000; /* Noir */
              font-size: 1.2em; /* Augmentation de la taille */
              line-height: 1;
              font-weight: 300;
              margin-bottom: 50px;
            }
            .infos p {
              font-weight: bold;
            }
            h2 {
              background: #00466a;
              margin: 20px auto;
              width: max-content;
              padding: 10px;
              color: #fff;
              border-radius: 4px;
              margin-right: 6px;
              text-align: center; /* Centrage du texte */
            }
            p {
              color: black;
              margin-right: 20px;
            }
            .footer {
              font-size: 0.9em;
              font-weight: bold;
              margin-right: 20px;
              margin-bottom: 50px; /* Augmenter l'espace vers le bas */
            }
          </style>
        </head>
        <body>
          <!-- Contenu principal -->
          <div class="container">
            <div class="title-info">
            <a href="" class="header">MediSphereVie</a>
            </div>
            <div class="content">
              <div class="doctor-info">
                <div class="infos">
                  <p>Nom du Médecin: <span>Dr. ${nom}</span></p>
                  <p>Prénom du Médecin: <span>${prenom}</span></p>
                  <p>Spécialité: <span>${specialite}</span></p>
                </div>
              </div>
              <p style="font-size: 1.1em; margin-right: 20px;">Bonjour,</p>
              <p style="margin-right: 20px;">Merci d'avoir choisi MediSphereVie et de nous avoir fait confiance.</p>
              <p style="margin-right: 20px;">Utilisez ce mot de passe suivant pour confirmer votre inscription :</p>
              <h2>${OTP}</h2>
            
              <p style="margin-right: 20px;">Ne partagez pas ce mot de passe avec d'autres personnes.</p>
              <p style="margin-right: 20px;">Une fois connecté, vous pourrez accéder à votre compte .</p>
              <p style="margin-right: 20px;">Merci encore d'avoir choisi de devenir un medecin de MediSphèreVie.</p>
              <p style="margin-right: 20px;">Cordialement,</p>
              <p class="footer"><strong>L'équipe MediSphereVie</strong></p>
            </div>
          </div>
        </body>
        </html>
        `,
      
      };

      // Envoyer l'e-mail
      await transporter.sendMail(mailConfig);

      // Log après l'envoi de l'e-mail
      this.logger.log(`Email sent successfully to ${recipientEmail}`);
    } catch (error) {
      // Log de l'erreur s'il y en a une
      this.logger.error(`An error occurred while sending email to ${recipientEmail}: ${error.message}`);
      throw error;
    }
  }
}
