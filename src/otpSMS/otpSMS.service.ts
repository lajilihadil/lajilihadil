import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSMSOTPDto } from './dto/create-otppatient.dto';
import { UpdateSMSOTPDto } from './dto/update-otppatient.dto';
import { IMPatientOtp } from './Interface/otPatient.interface';
import { HttpStatus } from '@nestjs/common';
import { CreatenewOtpDto } from './dto/create-newotp.dto';
import * as argon2 from 'argon2';
import { UpdatenewOtpDto } from './dto/update-otp.dto';

@Injectable()
export class SMSOtpService {
  update(id: string, updateSMSOtpDto: UpdateSMSOTPDto) {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<IMPatientOtp | null> {
    try {
      const medecin = await this.SMSOtpModel.findById(id).exec();
      return medecin || null;
    } catch (error) {
      console.error('Erreur lors de la recherche du médecin par ID :', error);
      throw new Error('Erreur lors de la recherche du médecin par ID.');
    }
  }
  
  constructor(@InjectModel('SMSOtp') private SMSOtpModel: Model<IMPatientOtp>) {}

 
  
  async create(createMedecinOtpDto: CreateSMSOTPDto): Promise<IMPatientOtp> {
    const createdSMSOtp = new this.SMSOtpModel(CreateSMSOTPDto);
    return createdSMSOtp.save();
  }

  async findAll(): Promise<IMPatientOtp[]> {
    return this.SMSOtpModel.find().exec();
  }

async findByPhone(phone: string): Promise<IMPatientOtp | null> {
  try {
    const medecin = await this.SMSOtpModel.findOne({ phone }).exec();
    return medecin || null;
  } catch (error) {
    console.error('Erreur lors de la recherche du médecin par téléphone :', error);
    throw new Error('Erreur lors de la recherche du médecin par téléphone.');
  }
}
  
  async remove(id: string): Promise<IMPatientOtp> {
    return this.SMSOtpModel.findByIdAndDelete(id).exec();
  }

  async updateOtp(id: string, updateOtpDto: UpdatenewOtpDto): Promise<IMPatientOtp> {
    const { newOtp } = updateOtpDto;
    return this.SMSOtpModel.findByIdAndUpdate(id, { otp: newOtp }, { new: true }).exec();
  }
  
  
 
}