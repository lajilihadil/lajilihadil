import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfilMedDto } from './dto/create-profilmed.dto';
import { UpdateProfilMedDto } from './dto/update-profilmed.dto';
import { IProfilMed } from './Interface/profilmed.interface';
@Injectable()
export class ProfilMedService {
    constructor(@InjectModel('ProfilMedModel') private profilMedModel: Model<IProfilMed>) {}
    async createProfilMed(createProfilMedDto: CreateProfilMedDto): Promise<IProfilMed> {
      const newProfilMed = new this.profilMedModel(createProfilMedDto);
      return await newProfilMed.save();
  }
  async getAllProfilMeds(): Promise<IProfilMed[]> {
    const profilMedsData = await this.profilMedModel.find();
    if (!profilMedsData || profilMedsData.length === 0) {
      throw new NotFoundException("ProfilMeds data not found");
    }
    return profilMedsData;
  }
  async getProfilMed(profilMedId: string): Promise<IProfilMed> {
    const existingProfilMed = await this.profilMedModel.findById(profilMedId).exec();
    if (!existingProfilMed) {
      throw new NotFoundException(`ProfilMed#${profilMedId} not found`);
    }
    return existingProfilMed;
  }
  async updateProfilMed(profilMedId: string, updateProfilMedDto: UpdateProfilMedDto): Promise<IProfilMed> {
    const updatedProfilMed = await this.profilMedModel
      .findByIdAndUpdate(profilMedId, updateProfilMedDto, { new: true })
      .exec();
    if (!updatedProfilMed) {
      throw new NotFoundException(`ProfilMed #${profilMedId} not found`);
    }
    return updatedProfilMed;
  }
  async deleteProfilMed(profilMedId: string): Promise<IProfilMed> {
    const deletedProfilMed = await this.profilMedModel.findByIdAndDelete(profilMedId);
    if (!deletedProfilMed) {
      throw new NotFoundException(`ProfilMed #${profilMedId} not found`);
    }
    return deletedProfilMed;
  }
}






