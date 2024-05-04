import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { PatientService } from 'src/patient/patient.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { AdminService } from 'src/admin/Admin.service';

import { AdminMedecinService } from 'src/admin-medecin/admin-medecin.service';
import { compareSync } from 'bcrypt';
import * as bcrypt from 'bcrypt';
import { Admin } from 'typeorm/driver/mongodb/typings';
import { MedecinService } from 'src/medecin/Medecin.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateAuthMedecinDto } from './dto/create-authMedecin.dto';

@Injectable()
export class AuthService {
  adminModel: any;

  
 
  constructor(
    private patientService: PatientService,
    private jwtService: JwtService,
    private readonly adminMedecinService: AdminMedecinService,
    private readonly adminService: AdminService,
    private configService: ConfigService,
    private medecinService: MedecinService,
  ) {}

  /*async signUp(createPatientDto: CreatePatientDto): Promise<any> {
    // Check if user exists
    const patientExists = await this.patientService.findByUsername(
      createPatientDto.email,
    );
    if (patientExists) {
      throw new BadRequestException('Patient already exists');
    }

    // Hash password
    const hash = await this.hashData(createPatientDto.password);
    const newPatient = await this.patientService.create({
      ...createPatientDto,
      password: hash,
    });
    const tokens = await this.getTokens(newPatient._id, newPatient.email);
    await this.updateRefreshToken(newPatient._id, tokens.refreshToken);
    return tokens;
  }
*/




async signUp(createPatientDto: CreatePatientDto, res: any): Promise<any> {
  try {
    const { email, password } = createPatientDto;
    const userExists = await this.patientService.findByUsername(email);
    if (userExists) {
      throw new BadRequestException('Patient already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    await this.patientService.create({
      ...createPatientDto,
      password: hashedPassword,
    });

    return res.status(200).json({ message: 'Inscription réussie !' });
  } catch (err) {
    console.log('error: ==================>', err);
    throw new ConflictException(`Veuillez vérifier vos informations`);
  }
}

	  /*async signIn(data: CreateAuthDto) {
    // Check if Patient exists
    const Patient = await this.patientService.findByUsername(data.email);
    if (!Patient) throw new BadRequestException('Patient does not exist');
    const passwordMatches = await argon2.verify(Patient.password, data.password);
    if (!passwordMatches)
      throw new BadRequestException('Password is incorrect');
    const tokens = await this.getTokens(Patient._id, Patient.email);
    await this.updateRefreshToken(Patient._id, tokens.refreshToken);
  return tokens;
    
  }*/


  async signIn(data: CreateAuthDto) {
    try {
      const { email, password } = data;
      const patient = await this.patientService.findByUsername(email);
      console.log('username: ==================>', email);

      if (!patient) throw new BadRequestException('Patient does not exist');
      const isPasswordValid = await bcrypt.compare(password, patient.password);
      console.log('isPasswordValid: ==================>', isPasswordValid);

      if (isPasswordValid) {
        const payload = {
          nom: patient.nom,
          email: patient.email,
        };
        const jwt = await this.jwtService.sign(payload);
        return {
          access_token: jwt,
        };
      } else {
        throw new NotFoundException('Email or password is incorrect');
      }
    } catch (er) {
      console.log('error: ==================>', er);
    }
  }



  async signInMedecin(data: CreateAuthMedecinDto) {
    // Vérifiez si le médecin existe
    const medecin = await this.medecinService.findByUsername(data.email);
  
    // Vérifiez si medecin est défini avant de l'utiliser
    if (!medecin) {
      throw new BadRequestException('Medecin does not exist');
    }
  
    // Vérifiez le mot de passe
    if (!medecin.password) {
      throw new BadRequestException('Medecin password is missing');
    }
    
    const passwordMatches = await argon2.verify(medecin.password, data.password);
    
    if (!passwordMatches) {
      throw new BadRequestException('Password is incorrect');
    }
  
    // Générez les tokens
    const tokens = await this.getTokens(medecin._id, medecin.email);
    
    // Mettez à jour le refresh token
    await this.updateRefreshToken(medecin._id, tokens.refreshToken);
  
    return tokens;
  }



	async logout(patientId: string) {
    return this.patientService.update(patientId, { refreshToken: null });
  }

  hashData(data: string) {
    return argon2.hash(data);
  }

  async updateRefreshToken(patientId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.patientService.update(patientId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async getTokens(patientId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: patientId,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: patientId,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
