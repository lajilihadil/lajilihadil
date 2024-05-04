import { BadRequestException, Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import {  CreateAuthDto} from './dto/create-auth.dto';
import { Response } from 'express';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { CreateAuthMedecinDto } from './dto/create-authMedecin.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() createPatientDto: CreatePatientDto, @Res() res: Response) {
    return this.authService.signUp(createPatientDto, res);
  }

  @Post('signin')
  signin(@Body() data: CreateAuthDto) {
    return this.authService.signIn(data);
  }


  @Post('signinMed')
  async signInMedecin(@Body() data: CreateAuthMedecinDto) {
    try {
      const tokens = await this.authService.signInMedecin(data);
      return tokens;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('logout')
  signout(@Req() req: Request & { patient?: { sub?: string } }) {
    if (req.patient && req.patient.sub) {
      this.authService.logout(req.patient.sub);
    } else {
      // Gérer le cas où req.patient ou req.patient.sub est undefined
      throw new BadRequestException('Invalid request');
    }
  }
  
}
