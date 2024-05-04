import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatenewOtpDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  newOtp: number;

  
}
