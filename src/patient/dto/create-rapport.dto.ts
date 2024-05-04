import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";

export class OrdonnanceDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Nom du médicament',
  })
  nom_medicament: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Dosage du médicament',
  })
  dosage: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Durée du traitement',
  })
  duree: string;
}

export class CreateRapportMediDto {
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
    description: 'This is a required property',
  })
  ville: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  telephone: string;

  @IsOptional()
  @ApiProperty({
    type: Number,
    description: 'This property is optional',
  })
  numero_rapport?: number;

  
  @IsOptional()
  @ApiProperty({
    type: Date,
    description: 'This is a required date of birth property',
  })
  dateRendezvous?: Date;

  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'Time of the consultation',
  })
  descriptions?: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @ApiProperty({
    type: OrdonnanceDto,
    isArray: true,
    description: 'Liste des ordonnances',
  })
  ordonnances?: OrdonnanceDto[];
  
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  dateConsultation: string;



  @IsString()
  @ApiProperty({
    type: String,
    description: 'Time of the consultation',
  })
  timeConsultation: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'Description of the consultation',
  })
  descriptionConsultation: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'PDF file for prescription',
  })
  ordonnance: any;


  refreshToken: string;
}


