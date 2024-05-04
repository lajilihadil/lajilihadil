import { PartialType } from '@nestjs/swagger';
import { CreateRapportMediDto} from './create-rapport.dto';

export class UpdateRapportMediDto extends PartialType(CreateRapportMediDto) {}
