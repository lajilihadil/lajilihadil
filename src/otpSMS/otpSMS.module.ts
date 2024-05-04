import { Module } from '@nestjs/common';
import { SMSOtpController } from './otpSMS.controller';
import { SMSOtp, SMSOtpSchema } from './entities/otpSMS-entity';
import { SMSOtpService } from './otpSMS.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
imports: [
    MongooseModule.forFeature([{name :'SMSOtp', schema : SMSOtpSchema }
  ]),
  ],
  controllers: [SMSOtpController],
  providers: [SMSOtpService],
  exports: [SMSOtpService],
})
export class SMSOtpModule {}
