import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from '../entities/conversation.entity';
import { ConversationRepository } from './conversation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation])],
  providers: [ConversationService, ConversationRepository],
  exports: [ConversationService]
})
export class ConversationModule {}
