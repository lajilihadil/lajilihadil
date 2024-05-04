import { ApiProperty } from "@nestjs/swagger";
import {  IsEmail, IsNotEmpty  } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
      type: String,
      description: 'This is a required property',
    })
    email: string;

    @ApiProperty({
        type: String,
        description: 'This is a required property',
      })
    @IsNotEmpty()
    password: string;


}
