import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty ,IsPhoneNumber} from "class-validator";

export class CreatePatientDto {
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
  telephone: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  email: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  verifemail: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  verifPhone: string;

  
 

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  password: string;


  refreshToken: string;
  static ordonnance: any;
}


