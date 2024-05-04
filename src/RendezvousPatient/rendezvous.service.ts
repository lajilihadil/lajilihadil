import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRendezvousPatientDto } from './dto/create-rendezvous.dto';
import { UpdateRendezvousPatientDto } from './dto/update-rendezvous.dto';
import { IRendezvousPatient } from './Interface/rendezvous.interface';
import { HttpStatus } from '@nestjs/common';
import { IPatient } from 'src/patient/interface/patient.interface';
import { ICompteMedecin } from 'src/CompteMed/Interface/comptemed.interface';
@Injectable()
export class RendezvousPatientService {
  constructor(
    @InjectModel('CompteMedecinModel') private compteMedecinModel: Model<ICompteMedecin>,
    @InjectModel("RendezvousPatient") private RendezvousPatientModel: Model<IRendezvousPatient>,
    @InjectModel('Patient') private readonly PatientModel: Model<IPatient>,
  ) {}
  async findIPatientById(id: string): Promise<IPatient> {
    return this.PatientModel.findById(id).exec();
  }
  findByUsername(email: string) {
    throw new Error('Method not implemented.');
  }
  findAllMedecinByItems(items: string) {
      throw new Error('Method not implemented.');
  }
 /* async create(createRendezvousPatientDto: CreateRendezvousPatientDto): Promise<IRendezvousPatient> {
    const createdRendezvous = new this.RendezvousPatientModel(createRendezvousPatientDto);
    return createdRendezvous.save();
  }*/
  async findMedecinById(id: string): Promise<ICompteMedecin> {
    return this.compteMedecinModel.findById(id).exec();
  }
  async createRendezvousForPatient(patientId: string, medecinId : string, createRendezvousDto: CreateRendezvousPatientDto): Promise<IRendezvousPatient> {
    const patient = await this.findIPatientById(patientId);
    if (!patient) {
        throw new NotFoundException('Patient not found');
    }
    const medecin = await this.findMedecinById(medecinId);
    if (!medecin) {
        throw new NotFoundException('Medecin not found');
    }
    const rendezvous = new this.RendezvousPatientModel({
        patientId: patientId,
        medecinId:medecinId,
        nom: patient.nom,
        prenom: patient.prenom,
        telephone: patient.telephone,
        date: createRendezvousDto.date,
        temps: createRendezvousDto.temps,
        motifs: createRendezvousDto.motifs,
    });
    return rendezvous.save();
  }
 /* async findAllMedecinByItems(items:string):Promise<IMedecin []>{
    return this.MedecinModel.find({items}).exec()
}*/
  async findAll(): Promise<IRendezvousPatient[]> {
    return this.RendezvousPatientModel.find().exec();
  }
  async findById(id: string): Promise<IRendezvousPatient> {
    return this.RendezvousPatientModel.findById(id);
  }
  async update( id: string, updateRendezvousPatientDto: UpdateRendezvousPatientDto,): Promise<IRendezvousPatient> {
    try {
      const updatedRendezvousPatient = await this.RendezvousPatientModel.findByIdAndUpdate(id, updateRendezvousPatientDto, { new: true }).exec();
      console.log(`Medecin updated successfully: ${JSON.stringify(updatedRendezvousPatient)}`);
      return updatedRendezvousPatient;
    } catch (error) {
      console.error(`Error updating medecin: ${error.message}`);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async remove(id: string): Promise<IRendezvousPatient> {
    return this.RendezvousPatientModel.findByIdAndDelete(id).exec();
  }
  async saveOTPForMedecin(email: string, otp: number): Promise<IRendezvousPatient> {
    try {
      const medecin = await this.RendezvousPatientModel.findOneAndUpdate(
        { email }, // Filtrer par e-mail du médecin
        { otp }, // Mettre à jour l'OTP pour ce médecin
        { new: true } // Retourner le document mis à jour
      ).exec();
      if (!medecin) {
        throw new HttpException('Médecin introuvable', HttpStatus.NOT_FOUND);
      }
      return medecin;
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'OTP pour le médecin:', error);
      throw new HttpException('Erreur lors de l\'enregistrement de l\'OTP pour le médecin', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}