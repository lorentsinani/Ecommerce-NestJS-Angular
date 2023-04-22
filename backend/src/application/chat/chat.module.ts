import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { ConversationModule } from '../../domain/conversation/conversation.module';
import { MessagesModule } from '../../domain/messages/messages.module';
import { EmployeesModule } from '../../domain/employees/employees.module';
import { ChatController } from './chat.controller';

@Module({
  imports: [ConversationModule, MessagesModule, EmployeesModule],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService]
})
export class ChatModule {}
