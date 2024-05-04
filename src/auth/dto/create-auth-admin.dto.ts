// auth/dto/create-auth-admin.dto.ts
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateAuthAdminDto {
    @ApiProperty({
      type: String,
      description: 'This is a required property',
    })
    @IsNotEmpty()
    email: string;

   
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    @IsNotEmpty()
    password: string;
}