import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompteMedecinDto } from '../CompteMed/dto/create-comptemed.dto';
import { UpdateCompteMedecinDto } from '../CompteMed/dto/update-comptemed.dto';
import { ICompteMedecin } from '../CompteMed/Interface/comptemed.interface';
@Injectable()
export class CompteMedecinService {
    constructor(@InjectModel('CompteMedecinModel') private compteMedecinModel: Model<ICompteMedecin>) {}
    async createCompteMedecin(createCompteMedecinDto: CreateCompteMedecinDto): Promise<ICompteMedecin> {
      const newCompteMedecin = new this.compteMedecinModel(createCompteMedecinDto);
      return await newCompteMedecin.save();
  }
  async getAllCompteMedecins(): Promise<ICompteMedecin[]> {
    const compteMedecinsData = await this.compteMedecinModel.find();
    if (!compteMedecinsData || compteMedecinsData.length === 0) {
      throw new NotFoundException("Compte Medecins data not found");
    }
    return compteMedecinsData;
  }
  async getCompteMedecin(IdCompteMedecin: string): Promise<ICompteMedecin> {
    const existingCompteMedecin = await this.compteMedecinModel.findById(IdCompteMedecin).exec();
    if (!existingCompteMedecin) {
      throw new NotFoundException(`ProfilMed#${IdCompteMedecin} not found`);
    }
    return existingCompteMedecin;
  }
  async updateCompteMedecin(IdCompteMedecin: string, updateCompteMedecinDto: UpdateCompteMedecinDto): Promise<ICompteMedecin> {
    const updatedCompteMedecin = await this.compteMedecinModel
      .findByIdAndUpdate(IdCompteMedecin, updateCompteMedecinDto, { new: true })
      .exec();
    if (!updatedCompteMedecin) {
      throw new NotFoundException(`Compte Medecin#${IdCompteMedecin} not found`);
    }
    return updatedCompteMedecin;
  }
  async deleteCompteMedecin(IdCompteMedecin: string): Promise<ICompteMedecin> {
    const deletedCompteMedecin = await this.compteMedecinModel.findByIdAndDelete(IdCompteMedecin);
    if (!deletedCompteMedecin) {
      throw new NotFoundException(`Compte Medecin #${IdCompteMedecin} not found`);
    }
    return deletedCompteMedecin;
  }
  async findMedecinById(id: string): Promise<ICompteMedecin> {
    return this.compteMedecinModel.findById(id).exec();
  }
}