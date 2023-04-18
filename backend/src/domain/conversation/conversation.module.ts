import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationGateway } from './conversation.gateway';

@Module({
  providers: [ConversationGateway, ConversationService]
})
export class ConversationModule {}
