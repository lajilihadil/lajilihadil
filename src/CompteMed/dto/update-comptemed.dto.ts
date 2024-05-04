import { PartialType } from '@nestjs/swagger';
import { CreateCompteMedecinDto } from './create-comptemed.dto';
export class UpdateCompteMedecinDto extends PartialType(CreateCompteMedecinDto) {
}