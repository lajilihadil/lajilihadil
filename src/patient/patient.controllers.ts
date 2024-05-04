import { Controller,Res, Get, Post,HttpStatus, Body, Patch, Param, Delete, UseGuards, Query, NotFoundException, Put } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PatientService } from './patient.service';

import * as crypto from 'crypto';
import { CreatePasswordDto } from './dto/create-password.dto';
import { IRapportMedi } from './interface/rapportMedi.interface';
import { CreateRapportMediDto } from './dto/create-rapport.dto';
import { CreateRendezvousPatientDto } from './dto/create-rendezvous.dto';
import { IRendezvousPatient } from './interface/rendezvous.interface';

@Controller('Patient')
@ApiTags('Patient')

export class PatientController {
  constructor(
    private readonly PatientService: PatientService,
  
  ) {}

   // Méthode statique pour générer un code OTP
   private static generateOTP(): string {
    const otp = crypto.randomBytes(3).toString('hex').toUpperCase(); // Génère un code OTP de 6 chiffres
    return otp;
  }
  
  @Post()
  async create(@Res() response, @Body() createPatientDto: CreatePatientDto) {
    try {
      const IPatient = await this.PatientService.create(createPatientDto);
      console.log('IPatient created:', IPatient);

      return response.status(HttpStatus.CREATED).json({
        status: HttpStatus.CREATED,
        message: 'Successfully created user and sent verification email',
        data: IPatient,
      });

    } catch (err) {
      console.error('Error creating user and sending verification email:', err);

      return response.status(HttpStatus.BAD_REQUEST).json({
        status: HttpStatus.BAD_REQUEST,
        message: err.message,
        data: null,
      });
    }
  }


  
 

  @Get('items')
  async  findAllIPatientByItems(@Res () response, @Query('items') items: string) {
    try {
     const data =await this.PatientService.findAllIPatientByItems(items);
    return response.status(HttpStatus.OK).json({
       status:HttpStatus.OK,
       message:"successfully",
       data: data
    });
   } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
     status:HttpStatus.BAD_REQUEST,
     message:err.message,
     data: null
   });
     }
    }
 @ApiBearerAuth('access-token')
/*   @UseGuards(AccessTokenGuard)
 */  @Get()
  findAll() {
    return this.PatientService.findAll();
  }
@ApiBearerAuth('access-token')
/*   @UseGuards(AccessTokenGuard) */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PatientService.findIPatientById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIPatientDto: UpdatePatientDto) {
    return this.PatientService.update(id, updateIPatientDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PatientService.remove(id);
  }

  @Patch(':id/update-password')
  async updatePassword(@Param('id') id: string, @Body() createPasswordDto: CreatePasswordDto) {
    return this.PatientService.updatePassword(id, createPasswordDto);
  }

  @Get('email/:email')
async findByEmail(@Param('email') email: string, @Res() response) {
    try {
        const patient = await this.PatientService.findByEmail(email);
        if (!patient) {
            return response.status(HttpStatus.NOT_FOUND).json({
                status: HttpStatus.NOT_FOUND,
                message: 'Aucun patient trouvé avec cet e-mail',
                data: null,
            });
        }
        return response.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: 'Patient trouvé avec succès',
            data: patient,
        });
    } catch (error) {
        console.error('Erreur lors de la recherche du patient par e-mail :', error);
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Erreur lors de la recherche du patient par e-mail',
            data: null,
        });
    }
}

@Post(':patientId/rapportmedi')
  async createRapportMedi(
    @Param('patientId') patientId: string,
    @Body() createRapportMediDto: CreateRapportMediDto,
  ): Promise<IRapportMedi> {
    try {
      const rapportMedi = await this.PatientService.createRapportMedi(patientId, createRapportMediDto);
      return rapportMedi;
    } catch (error) {
      // Gérer les erreurs ici, par exemple, si le patient n'est pas trouvé
      throw error;
    }
  }

  @Get(':patientId/rapportmedi')
  async getRapportMediByPatientId(@Param('patientId') patientId: string): Promise<IRapportMedi | null> {
    return this.PatientService.findRapportMediByPatientId(patientId);
  }

  @Put('/:patientId/rapport-medi')
  async updateRapportMedi(
    @Param('patientId') patientId: string,
    @Body() updateRapportMediDto: CreateRapportMediDto,
  ) {
    try {
      const updatedRapportMedi = await this.PatientService.updateRapportMedi(patientId, updateRapportMediDto);
      return updatedRapportMedi;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }


  @Delete(':patientId/ordonnances/:index')
  async deleteOrdonnances(
    @Param('patientId') patientId: string,
    @Param('index') index: number
  ): Promise<void> {
    await this.PatientService.deleteOrdonnances(patientId, index);
  }
  
  @Post(':patientId/rendezvous')
  async createRendezvousForPatient(
      @Param('patientId') patientId: string,
      @Body() createRendezvousDto: CreateRendezvousPatientDto,
  ): Promise<IRendezvousPatient> {
      try {
          const rendezvous = await this.PatientService.createRendezvousForPatient(patientId, createRendezvousDto);
          return rendezvous;
      } catch (error) {
          // Gérer les erreurs ici, par exemple, si le patient n'est pas trouvé
          throw error;
      }
  }


 



}




