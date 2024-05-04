import { PartialType } from '@nestjs/swagger';

import { CreatenewOtpDto } from './create-newotp.dto';

export class UpdatenewOtpDto extends PartialType(CreatenewOtpDto) {}
