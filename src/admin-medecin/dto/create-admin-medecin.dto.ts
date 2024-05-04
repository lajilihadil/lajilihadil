import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateAdminMedecinDto {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @IsNotEmpty()
  nom: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
})
@IsNotEmpty()
prenom: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
   specialite: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  @IsNotEmpty()
  password: string;


  @ApiProperty({
    type: String,
    required: false, // Peut être omis
    description: 'This property is optional',
  })
  refreshToken?: string;
}
