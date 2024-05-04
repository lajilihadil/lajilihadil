import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";
export class CreateCompteMedecinDto {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Titre (Docteur, Professeur, etc.)',
  })
  title: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Nom',
  })
  nom: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Prénom',
  })
  prenom: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Date de naissance (YYYY-MM-DD)',
  })
  date_naissance: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Sexe (homme/femme)',
  })
  sexe: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Description',
  })
  description: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'Adresse email',
  })
  email: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Adresse du cabinet',
  })
  adresse: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Gouvernorat',
  })
  gouvernorat: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'latitude',
  })
  latitude: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'longitude',
  })
  longitude: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Téléphone mobile',
  })
  telephone_mobile: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Téléphone fixe',
  })
  telephone_fixe: string;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Spécialité',
  })
  specialite: string;


  @ApiProperty({
    type: [String],
    description: 'Liste des actes',
  })
  actes: string[];
  @ApiProperty({
    type: [String],
    description: 'Liste des diplômes',
  })
  diplomes: string[];
  @ApiProperty({
    type: Object,
    description: 'Planning de travail',
  })
  planning: object;
  @ApiProperty({
    type: Boolean,
    description: 'Conventionné avec la CNAM',
  })
  conventionCNAM: boolean;
  @ApiProperty({
    type: Boolean,
    description: 'Conventionné au secteur',
  })

  tarif: number;
  @ApiProperty({
    type:Array,
    description:'this is a required property',
})
image: string[];
}