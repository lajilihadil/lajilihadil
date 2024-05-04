import { Controller,Res, Get, Post,HttpStatus, Body, Patch, Param, Delete, UseGuards, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { CreateCompteMedecinDto } from '../CompteMed/dto/create-comptemed.dto';
import { UpdateCompteMedecinDto } from '../CompteMed/dto/update-comptemed.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProfilMedService } from '../profil-med/profil-med.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ICompteMedecin } from '../CompteMed/Interface/comptemed.interface';
import { CompteMedecinService } from './comptemed.service';
@Controller('CompteMedecin')
@ApiTags('CompteMedecin')
export class CompteMedecinController {
  constructor(private readonly compteMedecinService: CompteMedecinService) {}
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', description: 'Titre (Docteur, Professeur, etc.)' },
        nom: { type: 'string', description: 'Nom' },
        prenom: { type: 'string', description: 'Prénom' },
        date_naissance: { type: 'string', description: 'Date de naissance (YYYY-MM-DD)' },
        sexe: { type: 'string', description: 'Sexe (homme/femme)' },
        description: { type: 'string', description: 'Description' },
        email: { type: 'string', format: 'email', description: 'Adresse email' },
        adresse: { type: 'string', description: 'Adresse du cabinet' },
        gouvernorat: { type: 'string', description: 'Gouvernorat' },
        telephone_mobile: { type: 'string', description: 'Téléphone mobile (format spécifique)' },
        telephone_fixe: { type: 'string', description: 'Téléphone fixe (format spécifique)' },
        specialite: { type: 'string', description: 'Spécialité' },
        latitude: { type: 'string', description: 'Latitude' },
        longitude: { type: 'string', description: 'Longitude' },
        actes: { type: 'array', items: { type: 'string' }, description: 'Liste des actes' },
        diplomes: { type: 'array', items: { type: 'string' }, description: 'Liste des diplômes' },
        planning: { type: 'object', description: 'Planning de travail' },
        conventionCNAM: { type: 'boolean', description: 'Conventionné avec la CNAM' },
        conventionSecteur: { type: 'boolean', description: 'Conventionné au secteur' },
        tarif: { type: 'number', description: 'Tarif' },
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'Fichiers (images, documents, etc.)',
        },
      },
    },
  })
  @UseInterceptors(
    FilesInterceptor("files",10,{
      storage: diskStorage({
        destination:"./upload",
        filename:(require, file , callback)=>
          callback(null,`${file.originalname}`),
      }),
    }),
  )
  async createCompteMedecin(@Res() response, @Body() createCompteMedecinDto: CreateCompteMedecinDto,
  @UploadedFiles() file ,
  ) {
    try {
      // Initialiser createProfilMedDto avec les valeurs par défaut s'il est null
      createCompteMedecinDto.image=file.map(item=> item.filename)
      const newCompteMedecin = await this.compteMedecinService.createCompteMedecin(createCompteMedecinDto);
      // Répondre avec les données créées
      return response.status(HttpStatus.CREATED).json({
        status: HttpStatus.CREATED,
        message: 'ProfilMed created successfully',
        data: newCompteMedecin,
      });
    } catch (err) {
      // En cas d'erreur, renvoyer une réponse avec le statut 400 et les détails de l'erreur
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: err.message,
        status: HttpStatus.BAD_REQUEST,
        data: null,
      });
    }
  }
  @Get()
  async getAllProfilMeds(@Res() response) {
    try {
      const profilMedsData = await this.compteMedecinService.getAllCompteMedecins();
      return response.status(HttpStatus.OK).json({
        message: 'All ProfilMeds data found successfully',
        status: HttpStatus.OK,
        data: profilMedsData,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: err.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }
  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a product that exists in the database',
    type: String
  })
  async getProfilMed(@Param('id') ProfitmedId: string, @Res() response) {
    try {
      const existingprofitmed= await this.compteMedecinService.getCompteMedecin(ProfitmedId)
      return response.status(HttpStatus.OK).json({
        message: "Profilmed Found by id",
        status: HttpStatus.OK,
        data: existingprofitmed,
      })
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        status: 400,
        message: err.response,
        data: null
      })
    }
  }
  @Patch(':id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', description: 'Titre (Docteur, Professeur, etc.)' },
        nom: { type: 'string', description: 'Nom' },
        prenom: { type: 'string', description: 'Prénom' },
        date_naissance: { type: 'string', description: 'Date de naissance (YYYY-MM-DD)' },
        sexe: { type: 'string', description: 'Sexe (homme/femme)' },
        description: { type: 'string', description: 'Description' },
        email: { type: 'string', format: 'email', description: 'Adresse email' },
        adresse: { type: 'string', description: 'Adresse du cabinet' },
        gouvernorat: { type: 'string', description: 'Gouvernorat' },
        telephone_mobile: { type: 'string', description: 'Téléphone mobile (format spécifique)' },
        telephone_fixe: { type: 'string', description: 'Téléphone fixe (format spécifique)' },
        specialite: { type: 'string', description: 'Spécialité' },
        latitude: { type: 'string', description: 'Latitude' },
        longitude: { type: 'string', description: 'Longitude' },
        actes: { type: 'array', items: { type: 'string' }, description: 'Liste des actes' },
        diplomes: { type: 'array', items: { type: 'string' }, description: 'Liste des diplômes' },
        planning: { type: 'object', description: 'Planning de travail' },
        conventionCNAM: { type: 'boolean', description: 'Conventionné avec la CNAM' },
        conventionSecteur: { type: 'boolean', description: 'Conventionné au secteur' },
        tarif: { type: 'number', description: 'Tarif' },
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'Fichiers (images, documents, etc.)',
        },
      },
    },
  })
  @UseInterceptors(
    FilesInterceptor("files",10,{
      storage: diskStorage({
        destination:"./upload",
        filename:(require, file , callback)=>
          callback(null,`${new Date().getTime()}- ${file.originalname}`),
      }),
    }),
  )
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a product that exists in the database',
    type: String
  })
  async updateCompteMedecin(@Param('id') CompteMedecinId: string, @Body() updateCompteMedecinDto: UpdateCompteMedecinDto, @UploadedFiles() files
    , @Res() response) {
    try {
      updateCompteMedecinDto.image=files.map(item=> item.filename)
      const profilMedUpdated = await this.compteMedecinService.updateCompteMedecin(CompteMedecinId, updateCompteMedecinDto)
      return response.status(HttpStatus.OK).json({
        message: "Compte medecin updated Successfully",
        status: HttpStatus.OK,
        data: profilMedUpdated,
      })
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: err.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }
  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a product that exists in the database',
    type: String
  })
  async deleteCompteMedecin(@Param('id') ComptemedecinId: string, @Res() response) {
    try {
      const compteMedecinDeleted = await this.compteMedecinService.deleteCompteMedecin(ComptemedecinId)
      response.status(HttpStatus.OK).json({
        message: "Profitmed deleted Successfully",
        status: HttpStatus.OK,
        data:compteMedecinDeleted
      })
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: err.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }
}