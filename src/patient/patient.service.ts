import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { IPatient} from './interface/patient.interface';
import { CreatePasswordDto } from './dto/create-password.dto';
import { IUpdatePassword } from './interface/update-password.interface';
import * as argon2 from 'argon2';
import { IRapportMedi } from './interface/rapportMedi.interface';
import { CreateRapportMediDto } from './dto/create-rapport.dto';
import { UpdateRapportMediDto } from './dto/update-rapport.dto';
import { IRendezvousPatient } from './interface/rendezvous.interface';
import { CreateRendezvousPatientDto  } from './dto/create-rendezvous.dto';
@Injectable()
export class PatientService {
 
  constructor(
    @InjectModel('RendezvousPatient') private readonly rendezvousPatientModel: Model<IRendezvousPatient>,
    @InjectModel('RapportMedi') private readonly rapportMediModel: Model<IRapportMedi>,
    @InjectModel('Patient') private readonly PatientModel: Model<IPatient>
  ) {}

  async findAllIPatientByItems(items: string): Promise<IPatient[]> {
    return this.PatientModel.find({ items }).exec();
  }

  async findByEmail(email: string): Promise<IPatient | null> {
    try {
      const patient = await this.PatientModel.findOne({ email }).exec();
      return patient || null; // Retourner null si aucun patient n'est trouvé
    } catch (error) {
      console.error('Erreur lors de la recherche du patient par e-mail :', error);
      throw new Error('Erreur lors de la recherche du patient par e-mail.');
    }
  }
  
  async findByphone(telephone: string): Promise<IPatient | null> {
    try {
      const patient = await this.PatientModel.findOne({ telephone }).exec();
      return patient || null; // Retourner null si aucun patient n'est trouvé
    } catch (error) {
      console.error('Erreur lors de la recherche du patient par e-mail :', error);
      throw new Error('Erreur lors de la recherche du patient par e-mail.');
    }
  }

  async create(createPatientDto: CreatePatientDto): Promise<IPatient> {
    const { nom, prenom, telephone, email, verifemail,verifPhone } = createPatientDto;

    // Vérifier si un patient avec exactement les mêmes données existe déjà dans la base de données
    const existingPatient = await this.PatientModel.findOne({
      nom,
      prenom,
      telephone,
      email,
      verifemail,
      verifPhone,
    }).exec();

    if (existingPatient) {
      throw new ConflictException('Un patient avec ces données existe déjà.');
    }

    // Créer un nouveau patient
    const createdPatient = new this.PatientModel(createPatientDto);
    return createdPatient.save();
  }

  async findAllUserByItems(items:string):Promise<IPatient []>{
    return this.PatientModel.find({items}).exec()
}
  async findAll(): Promise<IPatient[]> {
    return this.PatientModel.find().exec();
  }

  async findIPatientById(id: string): Promise<IPatient> {
    return this.PatientModel.findById(id).exec();
  }
  

 
  async findByUsername(email: string): Promise<IPatient | undefined> {
    return this.PatientModel.findOne({ email }).exec();
  }
  
  async update( id: string, updateUserDto: UpdatePatientDto,): Promise<IPatient> {
    return this.PatientModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }
  async remove(id: string): Promise<IPatient> {
    return this.PatientModel.findByIdAndDelete(id).exec();
  }

  async updatePassword(id: string, createPasswordDto: CreatePasswordDto): Promise<IPatient> {
    const { newPassword } = createPasswordDto;
    const hashedPassword = await argon2.hash(newPassword); // Hashing the new password
    return this.PatientModel.findByIdAndUpdate(id, { password: hashedPassword }, { new: true }).exec();
  }

 

  async createRapportMedi(patientId: string, createRapportMediDto: CreateRapportMediDto): Promise<IRapportMedi> {
    const patient = await this.findIPatientById(patientId);
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }

   const ordonnances = createRapportMediDto.ordonnances.map(ordonnance => ({
    nom_medicament: ordonnance.nom_medicament,
    dosage: ordonnance.dosage,
    duree: ordonnance.duree,
}));

const rapportMedi = new this.rapportMediModel({
    patientId: patientId,
    nom: patient.nom,
    prenom: patient.prenom,
    ville: createRapportMediDto.ville,
    telephone: patient.telephone,
    numero_rapport: createRapportMediDto.numero_rapport,
    dateRendezvous: createRapportMediDto.dateRendezvous,
    dateConsultation: createRapportMediDto.dateConsultation,
    descriptions: createRapportMediDto.descriptions,
    ordonnances: ordonnances,
    timeConsultation: createRapportMediDto.timeConsultation,
    descriptionConsultation: createRapportMediDto.descriptionConsultation,
    ordonnance: createRapportMediDto.ordonnance,
    refreshToken: createRapportMediDto.refreshToken, // Si nécessaire
});
return rapportMedi.save();

}

async findRapportMediByPatientId(patientId: string): Promise<IRapportMedi | null> {
  try {
    return await this.rapportMediModel.findOne({ patientId }).exec();
  } catch (error) {
    console.error('Erreur lors de la recherche du rapport médical par ID de patient :', error);
    throw new Error('Erreur lors de la recherche du rapport médical par ID de patient.');
  }
}

async updateRapportMedi(patientId: string, updateRapportMediDto: UpdateRapportMediDto): Promise<IRapportMedi> {
  // Assurez-vous que le patient existe
  const patient = await this.findIPatientById(patientId);
  if (!patient) {
      throw new NotFoundException('Patient not found');
  }

  // Vérifiez si le rapport médical existe pour ce patient
  const rapportMedi = await this.rapportMediModel.findOne({ patientId }).exec();
  if (!rapportMedi) {
      throw new NotFoundException('Rapport médical not found');
  }

  // Mettre à jour les champs du rapport médical avec les données fournies
  rapportMedi.ville = updateRapportMediDto.ville || rapportMedi.ville;
  rapportMedi.numero_rapport = updateRapportMediDto.numero_rapport || rapportMedi.numero_rapport;
  rapportMedi.dateRendezvous = updateRapportMediDto.dateRendezvous || rapportMedi.dateRendezvous;
  rapportMedi.descriptions = updateRapportMediDto.descriptions || rapportMedi.descriptions;
  rapportMedi.dateConsultation = updateRapportMediDto.dateConsultation || rapportMedi.dateConsultation;
  rapportMedi.timeConsultation = updateRapportMediDto.timeConsultation || rapportMedi.timeConsultation;
  rapportMedi.descriptionConsultation = updateRapportMediDto.descriptionConsultation || rapportMedi.descriptionConsultation;

  // Si updateRapportMediDto contient des données pour les ordonnances, mettez à jour le champ ordonnances
  if (updateRapportMediDto.ordonnances) {
      rapportMedi.ordonnances = updateRapportMediDto.ordonnances;
  }

  rapportMedi.refreshToken = updateRapportMediDto.refreshToken || rapportMedi.refreshToken;

  // Enregistrez les modifications dans la base de données
  return rapportMedi.save();
}

async deleteOrdonnances(patientId: string, index: number): Promise<IRapportMedi> {
  // Assurez-vous que le patient existe
  const patient = await this.findIPatientById(patientId);
  if (!patient) {
    throw new NotFoundException('Patient not found');
  }

  // Vérifiez si le rapport médical existe pour ce patient
  const rapportMedi = await this.rapportMediModel.findOne({ patientId }).exec();
  if (!rapportMedi) {
    throw new NotFoundException('Rapport médical not found');
  }

  // Vérifiez si l'index fourni est valide
  if (index < 0 || index >= rapportMedi.ordonnances.length) {
    throw new NotFoundException('Invalid ordonnance index');
  }

  // Supprimer le champ spécifique de l'ordonnance à l'index donné
  delete rapportMedi.ordonnances[index]; // Supprimer l'ordonnance à l'index donné

  // Enregistrez les modifications dans la base de données
  return rapportMedi.save();
}



async createRendezvousForPatient(patientId: string, createRendezvousDto: CreateRendezvousPatientDto): Promise<IRendezvousPatient> {
  const patient = await this.findIPatientById(patientId);
  if (!patient) {
      throw new NotFoundException('Patient not found');
  }

  const rendezvous = new this.rendezvousPatientModel({
      patientId: patientId,
      nom: createRendezvousDto.nom,
      prenom: createRendezvousDto.prenom,
      telephone: createRendezvousDto.telephone,
      date: createRendezvousDto.date,
      temps: createRendezvousDto.temps,
      motifs: createRendezvousDto.motifs,
      otp: createRendezvousDto.otp
  });
  return rendezvous.save();
}


async getAllRendezvous(): Promise<IRendezvousPatient[]> {
  return this.rendezvousPatientModel.find().exec();
}



}

