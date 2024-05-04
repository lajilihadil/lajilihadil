import { PartialType } from '@nestjs/swagger';
import { CreateAdminMedecinDto } from './create-admin-medecin.dto';

export class UpdateAdminMedecinDto extends PartialType(CreateAdminMedecinDto) {}
