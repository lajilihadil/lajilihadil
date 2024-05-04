import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateMedecinDto {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  pays: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  gouvernorat: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  specialite: string;

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
  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  telephone: string;


  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  password: string;

   
  /*@IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  state: number;*/

  
  /*@ApiProperty({  
    type:Array,
    description:'this is a required property',
})
aptitude: string[];
*/
  refreshToken: string;
}
