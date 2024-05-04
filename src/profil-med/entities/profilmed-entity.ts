import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsUrl } from 'class-validator';
import { Document } from 'mongoose';
enum TypeSeance {
  SeanceUnique = 'SeanceUnique 1',
  DoubleSeance = 'DoubleSeance 2',
  Ferme = 'Ferme 3',
}
@Schema()
export class ProfilMed extends Document {
  @Prop()
  titre: string;
  @Prop()
  genre: string;
  @Prop()
  nom: string;
  @Prop()
  prenom: string;
  @Prop()
  date_naissance: string;
  @Prop()
  adresse: string;
  @Prop()
  gouvernorat: string;
  @Prop()
  telephone_fixe: string;
  @Prop()
  telephone_portable: string;
  @Prop()
  geolocalisation: string;
  @Prop()
  specialite_principale: string;
  @Prop()
  autre_specialite: string;
  @Prop()
  diplome_formation: string;
  @Prop()
  actes_soins: string;
  @Prop()
  tarif: number;
  @Prop()
  langue: string;
  @Prop()
  isConventionneCNAM: boolean;
  @Prop()
  modes_paiement: string;
  @Prop()
  typeSeance: TypeSeance;
  @Prop()
  heureMatin: string;
  @Prop()
  heureSoir: string;
  @Prop()
  identite: string[];
  /*@Prop()
  cabinet: string[];
  @Prop()
  aptitude: string[];*/
}
export const ProfilMedSchema = SchemaFactory.createForClass(ProfilMed);