import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { ConversationModule } from '../../domain/conversation/conversation.module';
import { MessagesModule } from '../../domain/messages/messages.module';
import { EmployeesModule } from '../../domain/employees/employees.module';
import { ChatController } from './chat.controller';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [ConversationModule, MessagesModule, EmployeesModule, AuthModule],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService]
})
export class ChatModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtTokenVerifierMiddleware).forRoutes(ChatController);
  }
}
