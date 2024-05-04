import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAdminDto {
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

  @ApiProperty({
    type: String,
    description: 'The password of the admin',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: Number,
    description: 'The role of the admin',
  })
  refreshToken: string;
  //   role: number;
}
