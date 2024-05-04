import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';
import { IMedecin } from './Interface/medecin.interface';
import { HttpStatus } from '@nestjs/common';
import { RequestState } from 'src/enums/common';

import { AccountState } from 'src/enums/common';
import { RegistrationRequest } from 'src/request/entites/request.entity';
import { Admin } from 'src/admin/entities/admin.entity';

@Injectable()
export class MedecinService {


  findAllMedecinByItems(items: string) {
      throw new Error('Method not implemented.');
  }
  constructor(@InjectModel("Medecin") private MedecinModel: Model<IMedecin>,
  @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  @InjectModel('RegistrationRequest')
  private readonly registrationRequestModel: Model<RegistrationRequest>,
  ) {}
  


  async create(req, res, createMedecinDto: CreateMedecinDto) {
    console.log('createDoctorDto ==========>>> ', createMedecinDto);

    try {
      const now = new Date();
      await this.MedecinModel
        .create({ ...createMedecinDto, state: AccountState.pending })
        .then(async (user) => {
          const admin = await this.adminModel.findOne();
          await this.registrationRequestModel.create({
            state: RequestState.pending,
            senderId: user?._id,
            receiverId: admin?._id,
            createdAt: now,
          });
        });
      return res
        .status(200)
        .json({ message: 'Demande de registration est créer avec succés !' });
    } catch (err) {
      console.log('err ==============>>> ', err);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        errCode: err.errCode,
        message: err.message,
      });
    }
  }


  async createRequest(req, res, createMedecinDto: CreateMedecinDto) {
    try {
      const now = new Date();
      await this.registrationRequestModel
        .create({ ...createMedecinDto, state: RequestState.pending })
        .then(async (request) => {
          const admin = await this.adminModel.findOne();
          await this.registrationRequestModel.create({
            state: RequestState.pending,
            senderId: request?._id,
            receiverId: admin?._id,
            createdAt: now,
          });
        });
      return res
        .status(200)
        .json({ message: 'Demande de médecin créée avec succès !' });
    } catch (err) {
      console.log('err ==============>>> ', err);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        errCode: err.errCode,
        message: err.message,
      });
    }
  }
  

  async findAll(): Promise<IMedecin[]> {
    return this.MedecinModel.find().exec();
  }

  async getApprovedDoctors(): Promise<IMedecin[]> {
    return this.MedecinModel.find({ state: AccountState.active }).exec();
  }
  async getRefusedDoctors(): Promise<IMedecin[]> {
    return this.MedecinModel.find({ state: AccountState.inactive }).exec();
  }

  async findOne(id: string): Promise<IMedecin> {
    return this.MedecinModel.findById(id).exec();
  }

  async update(id: string, updateMedecinDto: UpdateMedecinDto): Promise<IMedecin> {
    return this.MedecinModel
      .findByIdAndUpdate(id, updateMedecinDto, {
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<IMedecin> {
    return this.MedecinModel.findByIdAndDelete(id).exec();
  }

  async findById(id: string): Promise<IMedecin> {
    return this.MedecinModel.findById(id);
  }

 
  async findByMedecinemail(email: string): Promise<IMedecin | undefined> {
    return this.MedecinModel.findOne({ email }).exec();
  }
  
  async updateMedecin( id: string, updateMedecinDto: UpdateMedecinDto,): Promise<IMedecin> {
    try {
      const updatedMedecin = await this.MedecinModel.findByIdAndUpdate(id, updateMedecinDto, { new: true }).exec();
      console.log(`Medecin updated successfully: ${JSON.stringify(updatedMedecin)}`);
      return updatedMedecin;
    } catch (error) {
      console.error(`Error updating medecin: ${error.message}`);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
  
  async findByEmail(email: string): Promise<IMedecin | null> {
    try {
      const medecin = await this.MedecinModel.findOne({ email }).exec();
      return medecin || null; // Retourner null si aucun patient n'est trouvé
    } catch (error) {
      console.error('Erreur lors de la recherche du medecin par e-mail :', error);
      throw new Error('Erreur lors de la recherche du medecin par e-mail.');
    }
  }
  

   
  async findByUsername(email: string): Promise<IMedecin | undefined> {
    return this.MedecinModel.findOne({ email }).exec();
  }

  /*async createMed(createMedecinDto: CreateMedecinDto): Promise<IMedecin> {
    const createdMedecin = new this.MedecinModel(createMedecinDto);
    return createdMedecin.save();
  }
 /* async findAllMedecinByItems(items:string):Promise<IMedecin []>{
    return this.MedecinModel.find({items}).exec()
}
  async findAll(): Promise<IMedecin[]> {
    return this.MedecinModel.find().exec();
  }*/


  /*async remove(id: string): Promise<IMedecin> {
    return this.MedecinModel.findByIdAndDelete(id).exec();
  }*/

  /*async saveOTPForMedecin(email: string, otp: number): Promise<IMedecin> {
    try {
      const medecin = await this.MedecinModel.findOneAndUpdate(
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
*/
  /*async update(id: string, updateMedecinDto: UpdateMedecinDto): Promise<IMedecin> {
    try {
      const updatedMedecin = await this.MedecinModel.findByIdAndUpdate(id, updateMedecinDto, { new: true });
      return updatedMedecin;
    } catch (error) {
      throw error;
    }
  }*/


}