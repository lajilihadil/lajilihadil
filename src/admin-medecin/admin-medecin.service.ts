// admin.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminMedecinDto } from './dto/create-admin-medecin.dto';
import { UpdateAdminMedecinDto } from './dto/update-admin-medecin.dto';
import { IAdminMedecin } from './interface/admin-medecin.interface';
import * as argon2 from 'argon2';
import { AdminMedecinDocument } from './entites/admin-medecin.entity';

@Injectable()
export class AdminMedecinService {
  async findByUsername(nom: string): Promise<IAdminMedecin | null> {
    const adminmedecin = await this.adminmedecinModel.findOne({ nom });
    if (!adminmedecin) {
      return null; // Aucun administrateur trouvé avec ce nom
    }
  
    return adminmedecin;
  }
  
  findAllAdminByItems(items: string){
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel("AdminMedecin") private adminmedecinModel: Model<IAdminMedecin>) {}

  async create(createAdminMedecinDto: CreateAdminMedecinDto): Promise<IAdminMedecin> {
    try {
      const newAdminMedecin = await this.adminmedecinModel.create(createAdminMedecinDto);
      return newAdminMedecin;
    } catch (error) {
      console.error('Error creating admin:', error);
      throw new BadRequestException('Failed to create admin');
    }
  }

  
  async findByUsernameAndPassword(nom: string, password: string): Promise<IAdminMedecin | null> {
    const adminmedecin = await this.adminmedecinModel.findOne({ nom });
  
    console.log('Admin trouvé:', adminmedecin);
  
    if (!adminmedecin) {
      console.log('Aucun admin trouvé avec ce nom');
      return null;
    }
  
    console.log('Mot de passe dans la base de données:', adminmedecin.password);
  
    const passwordMatches = await argon2.verify(adminmedecin.password, password);
    console.log('Comparaison des mots de passe:', passwordMatches);
  
    if (!passwordMatches) {
      console.log('Le mot de passe ne correspond pas');
      return null;
    }
  
    return adminmedecin;
  }
  

  

  async findAll(): Promise<IAdminMedecin[]> {
    return this.adminmedecinModel.find().exec();
  }

  async findById(id: string): Promise<IAdminMedecin> {
    return this.adminmedecinModel.findById(id);
  }

  async update(id: string, updateAdminMedecinDto: UpdateAdminMedecinDto): Promise<IAdminMedecin> {
    return this.adminmedecinModel.findByIdAndUpdate(id, updateAdminMedecinDto, { new: true }).exec();
  }

  async remove(id: string): Promise<IAdminMedecin> {
    return this.adminmedecinModel.findByIdAndDelete(id).exec();
  }



}
