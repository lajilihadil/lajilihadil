export interface IRapportMedi extends Document {
  nom: string;
  prenom: string;
  ville: string;
  telephone: string;
  numero_rapport?: number;
  dateRendezvous?: Date;
  descriptions?: string;
  ordonnances?: {
      nom_medicament: string;
      dosage: string;
      duree: string;
  }[];
  dateConsultation: string;
  timeConsultation: string;
  descriptionConsultation?: string;
  ordonnance?: string; 
  refreshToken?: string;
}
