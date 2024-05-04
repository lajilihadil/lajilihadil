import { PartialType } from '@nestjs/swagger';
import { CreateSMSOTPDto } from './create-otppatient.dto';

export class UpdateSMSOTPDto extends PartialType(CreateSMSOTPDto) {}
