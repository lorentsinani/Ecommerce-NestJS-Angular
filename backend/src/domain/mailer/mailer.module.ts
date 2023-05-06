import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { mailerProvider } from '../../common/providers/mailer/mailer';

@Module({
  providers: [mailerProvider, MailerService],
  exports: [MailerService]
})
export class MailerModule {}
