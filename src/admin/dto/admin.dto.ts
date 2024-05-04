import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AdminDto {
  @ApiProperty({
    type: String,
    description: 'The username of the admin',
  })
  @IsNotEmpty()
  nom: string;

  @ApiProperty({
    type: String,
    description: 'The email address of the admin',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
