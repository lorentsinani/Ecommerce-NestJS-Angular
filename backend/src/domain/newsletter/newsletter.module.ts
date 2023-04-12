import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newsletter } from '../entities/newsletter.entity';
import { NewsletterRepository } from './newsletter.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Newsletter])],
  providers: [NewsletterService, NewsletterRepository],
  controllers: [NewsletterController],
  exports: [NewsletterService]
})
export class NewsletterModule {}
