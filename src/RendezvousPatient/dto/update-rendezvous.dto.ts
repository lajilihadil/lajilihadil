import { PartialType } from '@nestjs/swagger';
import { CreateRendezvousPatientDto } from './create-rendezvous.dto';

export class UpdateRendezvousPatientDto extends PartialType(CreateRendezvousPatientDto) {}
