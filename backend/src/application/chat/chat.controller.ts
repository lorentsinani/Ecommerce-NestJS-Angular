import { Post, Controller, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ConversationPayload } from '../../common/interfaces/conversation-payload.interface';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post('conversation')
  startConversation(@Body() conversationPayload: ConversationPayload) {
    return this.chatService.startConversation(conversationPayload);
  }
}
