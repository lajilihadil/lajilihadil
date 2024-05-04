import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";
export class CreateProfilMedDto {
    [x: string]: any;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  titre: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  genre: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  nom: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  prenom: string;
  @IsNotEmpty()
  @ApiProperty({
  type: String,
  description: 'Date of birth (YYYY-MM-DD)',
  })
  date_naissance: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  adresse: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  gouvernorat: string
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  telephone_fixe: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  telephone_portable: string;
    @IsOptional()
    @IsString()
    @ApiProperty({
      type: String,
      description: 'Localisation (par exemple: "Monastir")',
    })
    geolocalisation: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  specialite_principale: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  autre_specialite: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  diplome_formation: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  actes_soins: string;
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  tarif: number;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  langue: string;
  @IsNotEmpty()
  @ApiProperty({
        type: Boolean,
        description: 'Option pour activer/désactiver',
  })
  isConventionneCNAM: boolean;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  modes_paiement: string;
  @IsNotEmpty()
  @ApiProperty({
    enum: ['SeanceUnique 1', 'DoubleSeance 2', 'Ferme 3'],
    description: 'Type de séance',
  })
  typeSeance: 'SeanceUnique 1' | 'DoubleSeance 2' | 'Ferme 3 ';
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Heure de la séance du matin',
  })
  heureMatin: string; // L'heure du matin est optionnelle
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Heure de la séance du soir',
  })
  heureSoir: string;
  @ApiProperty({
    type:Array,
    description:'this is a required property',
})
identite: string[];
 /*
  @ApiProperty({
    type: [String], // Utilisez [String] pour indiquer qu'il s'agit d'un tableau de chaînes de caractères
    description: 'Noms de fichiers des images du cabinet',
  })
  cabinet: string[];
  @ApiProperty({
    type: [String], // Utilisez [String] pour indiquer qu'il s'agit d'un tableau de chaînes de caractères
    description: 'Noms de fichiers des images d\'aptitude',
  })
  aptitude: string[];*/
}