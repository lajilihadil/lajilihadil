import { Controller,Res, Get, Post,HttpStatus, Body, Patch, Param, Delete, UseGuards, Query, Put, HttpException } from '@nestjs/common';
import { CreateRendezvousPatientDto } from './dto/create-rendezvous.dto';
import { UpdateRendezvousPatientDto } from './dto/update-rendezvous.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RendezvousPatientService } from './rendezvous.service';
import { IRendezvousPatient } from './Interface/rendezvous.interface';
import { PatientService } from 'src/patient/patient.service';
import { CompteMedecinService } from 'src/CompteMed/comptemed.service';
@Controller('RendezvousPatient')
@ApiTags('RendezvousPatient')
export class RendezvousPatientController {
  constructor(
    private readonly PatientService: PatientService,
    private readonly RendezvousPatientService: RendezvousPatientService,
    private readonly compteMedecinService: CompteMedecinService
  ) {}
 /* @Post()
  create(@Body() createMedecinDto: CreateRendezvousPatientDto) {
    return this.RendezvousPatientService.create(createMedecinDto);
  }*/
 /*@Post(':patientId/rendezvous')
  async createRendezvousForPatient(
      @Param('patientId') patientId: string,
      @Body() createRendezvousDto: CreateRendezvousPatientDto,
  ): Promise<IRendezvousPatient> {
      try {
          const rendezvous = await this.PatientService.createRendezvousForPatient(patientId, createRendezvousDto);
          return rendezvous;
      } catch (error) {
          // Gérer les erreurs ici, par exemple, si le patient n'est pas trouvé
          throw new HttpException('Impossible de créer le rendez-vous.', HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }*/
  /*@Post(':patientId/:medecinId/rendezvous')
  async createRendezvousForPatient(
      @Param('patientId') patientId: string,
      @Param('medecinId') medecinId: string,
      @Body() createRendezvousDto: CreateRendezvousPatientDto,
  ): Promise<IRendezvousPatient> {
      try {
          const rendezvous = await this.PatientService.createRendezvousForPatient(patientId, medecinId, createRendezvousDto);
          return rendezvous;
      } catch (error) {
          // Gérer les erreurs ici, par exemple, si le patient n'est pas trouvé
          throw new HttpException('Impossible de créer le rendez-vous.', HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }
  */
  @Post(':patientId/:medecinId/rendezvous')
  async createRendezvousForPatient(
      @Param('patientId') patientId: string,
      @Param('medecinId') medecinId: string,
      @Body() createRendezvousDto: CreateRendezvousPatientDto,
  ): Promise<IRendezvousPatient> {
      try {
          const rendezvous = await this.RendezvousPatientService.createRendezvousForPatient(patientId, medecinId,createRendezvousDto);
          return rendezvous;
      } catch (error) {
          // Gérer les erreurs ici, par exemple, si le patient n'est pas trouvé
          throw error;
      }
  }
  @Get('items')
  async  findAllMedecinByItems(@Res () response, @Query('items') items: string) {
    try {
     const data =await this.RendezvousPatientService.findAllMedecinByItems(items);
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
    return this.RendezvousPatientService.findAll();
  }
@ApiBearerAuth('access-token')
/*   @UseGuards(AccessTokenGuard) */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.RendezvousPatientService.findById(id);
  }
@Patch(':id')
update(@Param('id') id: string, @Body() updateMedecinDto: UpdateRendezvousPatientDto) {
   console.log(`Received update request for rendezvous patient with ID: ${id}`);
   return this.RendezvousPatientService.update(id, updateMedecinDto);
}
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.RendezvousPatientService.remove(id);
  }
  @Post(':email/otp')
  async saveOTPForMedecin(@Param('email') email: string, @Body('otp') otp: number) {
    return this.RendezvousPatientService.saveOTPForMedecin(email, otp);
  }
}