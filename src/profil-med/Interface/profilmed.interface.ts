import { Document } from 'mongoose';
/*interface IHoraires {
  seanceUnique: boolean;
  doubleSeance: boolean;
  ferme: boolean;
  heureMatin: string | null; // Heure de la séance du matin (peut être vide si pas de séance)
  heureSoir: string | null; // Heure de la séance du soir (peut être vide si pas de séance)
}*/
enum TypeSeance {
  SeanceUnique = 'SeanceUnique 1',
  DoubleSeance = 'DoubleSeance 2',
  Ferme = 'Ferme 3',
}
export interface IProfilMed extends Document {
  titre: string;
  genre: string;
  nom: string;
  prenom: string;
  adresse: string;
  gouvernorat: string;
  delegation: string;
  geolocalisation: string;
  specialite_principale: string;
  autre_specialite: string;
  diplome_formation: string;
  actes_soins: string;
  tarif: number;
  langue: string;
  isConventionneCNAM: boolean;
  modes_reglement: string;
  typeSeance: 'SeanceUnique 1' | 'DoubleSeance 2' | 'Ferme 3';
  heureMatin: string; // L'heure du matin est optionnelle
  heureSoir: string; // L'heure du soir est optionnelle
}







