import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurer CORS
 /* app.use(cors({
    origin: ['http://localhost:3002','http://autre-localhost:3000'] ,// Autorisez votre domaine frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));*/

  app.use(cors({ origin:['http://localhost:3000','http://localhost:3001' ]})); // Autorise uniquement les requêtes depuis localhost:3000



  // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('Plate-forme GestionCabinets')
    .setDescription('Plate-forme API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Contrôle de saisie
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}

bootstrap();
