import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { ConversationModule } from '../../domain/conversation/conversation.module';
import { MessagesModule } from '../../domain/messages/messages.module';

@Module({
  imports: [ConversationModule, MessagesModule],
  providers: [ChatGateway, ChatService]
})
export class ChatModule {}
