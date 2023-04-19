import { Injectable } from '@nestjs/common';
import { ConversationService } from '../../domain/conversation/conversation.service';
import { MessagesService } from '../../domain/messages/messages.service';
import { NotificationsService } from '../../domain/notifications/notifications.service';
import { ConversationPayload } from '../../common/constants/types/conversation-payload.type';
import { MessagePayload } from '../../common/constants/types/message-payload.type';

@Injectable()
export class ChatService {
  constructor(private readonly conversationService: ConversationService, private readonly messagesService: MessagesService) {}

  async startConversation(payload: ConversationPayload) {
    const conversation = await this.conversationService.find(payload);
    if (conversation) {
      return { conversationExist: { conversation_id: conversation.id } };
    } else {
      const newConversation = await this.conversationService.create(payload);
      return { conversationStarted: { conversation_id: newConversation.id } };
    }
  }

  sendMessage(payload: MessagePayload) {
    return this.messagesService.create(payload);
  }

  findConversationMessages(conversation_id: number) {
    return this.conversationService.findConversationMessages(conversation_id);
  }
}
