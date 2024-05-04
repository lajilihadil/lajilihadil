import { PartialType } from '@nestjs/swagger';
import { CreateProfilMedDto } from './create-profilmed.dto';

export class UpdateProfilMedDto extends PartialType(CreateProfilMedDto) {
 
}
