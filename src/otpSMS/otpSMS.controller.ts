import { Controller,Res, Get, Post,HttpStatus, Body, Patch, Param, Delete, UseGuards, Query, Put } from '@nestjs/common';
import { CreateSMSOTPDto } from './dto/create-otppatient.dto';
import { UpdateSMSOTPDto } from './dto/update-otppatient.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SMSOtpService } from './otpSMS.service';
import { CreatenewOtpDto } from './dto/create-newotp.dto';

@Controller('SMSOtp')
@ApiTags('SMSOtp')
export class SMSOtpController {
  constructor(private readonly SMSOtpService: SMSOtpService) {}
  @Post()
  create(@Body() createSMSOtpDto: CreateSMSOTPDto) {
    return this.SMSOtpService.create(createSMSOtpDto);
  }
  
  @ApiBearerAuth('access-token')
  /*   @UseGuards(AccessTokenGuard)
   */  @Get()
    findAll() {
      return this.SMSOtpService.findAll();
    }
  @ApiBearerAuth('access-token')
  /*   @UseGuards(AccessTokenGuard) */
    @Get(':id')
    
    findOne(@Param('id') id: string) {
      return this.SMSOtpService.findById(id);
    }
  

@Patch(':id')
update(@Param('id') id: string, @Body() updateSMSOtpDto: UpdateSMSOTPDto) {
   console.log(`Received update request for medecin with ID: ${id}`);
   return this.SMSOtpService.update(id, updateSMSOtpDto);
}

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.SMSOtpService.remove(id);
  }

  @Get('phone/:phone')
  async findByPhone(@Param('phone') phone: string, @Res() response) {
    try {
      const medecin = await this.SMSOtpService.findByPhone(phone);
      if (!medecin) {
        return response.status(HttpStatus.NOT_FOUND).json({
          status: HttpStatus.NOT_FOUND,
          message: 'Aucun médecin trouvé avec ce téléphone',
          data: null,
        });
      }
      return response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Médecin trouvé avec succès',
        data: medecin,
      });
    } catch (error) {
      console.error('Erreur lors de la recherche du médecin par téléphone :', error);
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Erreur lors de la recherche du médecin par téléphone',
        data: null,
      });
    }
  }
  

  @Patch(':id/update-otp')
  async updateOtp(@Param('id') id: string, @Body() createnewOtpDto:  CreatenewOtpDto) {
    return this.SMSOtpService.updateOtp(id, createnewOtpDto);
  }


}