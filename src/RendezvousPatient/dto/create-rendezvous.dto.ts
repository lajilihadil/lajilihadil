import { IsNotEmpty, IsDateString, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateRendezvousPatientDto {
  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    type: Date,
    description: 'Date of the appointment',
  })
  date: Date;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Time of the appointment',
  })
  temps: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Reason for the appointment',
  })
  motifs: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'First name of the patient',
  })
  nom: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Last name of the patient',
  })
  prenom: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Phone number of the patient',
  })
  telephone: string;
  refreshToken: string;
}