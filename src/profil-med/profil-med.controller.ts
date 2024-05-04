import { Controller,Res, Get, Post,HttpStatus, Body, Patch, Param, Delete, UseGuards, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { CreateProfilMedDto } from './dto/create-ProfilMed.dto';
import { UpdateProfilMedDto } from './dto/update-profilmed.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProfilMedService } from './profil-med.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { IProfilMed } from './Interface/profilmed.interface';
@Controller('ProfilMed')
@ApiTags('ProfilMed')
export class ProfilMedController {
  constructor(private readonly profilMedService: ProfilMedService) {}
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        titre: { type: 'string' },
        genre: { type: 'string' },
        nom: { type: 'string' },
        prenom: { type: 'string' },
        date_naissance: { type: 'string' },
        adresse: { type: 'string' },
        gouvernorat: { type: 'string' },
        telephone_fixe: { type: 'string' },
        telephone_portable: { type: 'string' },
        geolocalisation: { type: 'string' },
        specialite_principale: { type: 'string' },
        autre_specialite: { type: 'string' },
        diplome_formation: { type: 'string' },
        actes_soins: { type: 'string' },
        tarif: { type: 'number' },
        langue: { type: 'string' },
        isConventionneCNAM: { type: 'boolean' },
        modes_paiement: { type: 'string' },
        typeSeance: {
          type: 'string',
          enum: ['Séance Unique', 'Double Séance', 'Fermé'],
          description: 'Type de séance',
        },
        heureMatin: { type: 'string' },
        heureSoir: { type: 'string' },
        identite:{
          type:'array',
          items:{
            type:'string',
            format:'binary',
          }
        },
       /* cabinet:{
          type:'array',
          items:{
            type:'string',
            format:'binary',
          }
        },
        aptitude:{
          type:'array',
          items:{
            type:'string',
            format:'binary',
          }
        }
        */
      },
    },
  })
  @UseInterceptors(FilesInterceptor("identite", 10, { // Utilisez 'identite' au lieu de 'files'
    storage: diskStorage({
      destination: './upload',
      filename: (req, file, callback) => {
        callback(null, `${file.originalname}`);
      },
    }),
  }))
 /* @UseInterceptors(FilesInterceptor('cabinet', 10, { // Utilisez 'cabinet' au lieu de 'files'
    storage: diskStorage({
      destination: './upload',
      filename: (req, file, callback) => {
        callback(null, `${file.originalname}`);
      },
    }),
  }))
  @UseInterceptors(FilesInterceptor('aptitude', 10, { // Utilisez 'aptitude' au lieu de 'files'
    storage: diskStorage({
      destination: './upload',
      filename: (req, file, callback) => {
        callback(null, `${file.originalname}`);
      },
    }),
  }))*/
  async createProfilMed(@Res() response, @Body() createProfilMedDto: CreateProfilMedDto,
  @UploadedFiles() identite  ,
 // @UploadedFiles() cabinet,
  //@UploadedFiles() aptitude,
  ) {
    try {
      // Initialiser createProfilMedDto avec les valeurs par défaut s'il est null
      createProfilMedDto.identite=identite.map(item=> item.filename)
      //createProfilMedDto.cabinet = cabinet.map(item => item.filename);
      //createProfilMedDto.aptitude = aptitude.map(item => item.filename);
      // Appeler la fonction du service pour créer le profil médical
      const newProfilMed = await this.profilMedService.createProfilMed(createProfilMedDto);
      // Répondre avec les données créées
      return response.status(HttpStatus.CREATED).json({
        status: HttpStatus.CREATED,
        message: 'ProfilMed created successfully',
        data: newProfilMed,
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
      const profilMedsData = await this.profilMedService.getAllProfilMeds();
      if (!Array.isArray(profilMedsData)) {
        throw new Error('Data returned is not an array');
      }
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
      const existingprofitmed= await this.profilMedService.getProfilMed(ProfitmedId)
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
    schema:{
        type:'object',
        properties :{
          titre:{type: 'string'},
          genre:{type: 'string'},
          nom:{type: 'string'},
          prenom:{type: 'string'},
          adresse:{type: 'string'},
          email:{type: 'string'},
          gouvernorat:{type: 'string'},
          delegation:{type: 'string'},
          telephone_fixe:{type: 'string'},
          telephone_mobile:{type: 'string'},
          geolocalisation :{type: 'number'},
          specialite_principale:{type: 'string'},
          autre_specialite:{type: 'string'},
          diplome_formation:{type: 'string'},
          actes_soins:{type: 'string'},
          tarif:{type: 'number'},
          langue:{type: 'string'},
          isConventionneCNAM:{type: 'string'},
          modes_reglement :{ type:'string'},
          duree:{ type:'number'},
          horaires :{type:'number'},
          files: {
            type:'array',
            items:{
              type:'string',
              format:'binary',
            }
          },
          /*imageCabinet: {
            type:'array',
            items:{
              type:'string',
              format:'binary',
            }
          }*/
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
  async updateProfilMed(@Param('id') ProfilMedId: string, @Body() updateProfilMedDto: UpdateProfilMedDto, @UploadedFiles() files
    , @Res() response) {
    try {
      updateProfilMedDto.imageMed=files.map(item=> item.filename)
      const profilMedUpdated = await this.profilMedService.updateProfilMed(ProfilMedId, updateProfilMedDto)
      return response.status(HttpStatus.OK).json({
        message: "Profilmed updated Successfully",
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
  async deleteProfilMed(@Param('id') ProfitmedId: string, @Res() response) {
    try {
      const profilMedDeleted = await this.profilMedService.deleteProfilMed(ProfitmedId)
      response.status(HttpStatus.OK).json({
        message: "Profitmed deleted Successfully",
        status: HttpStatus.OK,
        data:profilMedDeleted
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