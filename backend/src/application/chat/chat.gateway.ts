import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { ConversationPayload } from '../../common/constants/types/conversation-payload.type';
import { MessagePayload } from '../../common/constants/types/message-payload.type';

@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('startConversation')
  async handleStartConversation(client: any, payload: ConversationPayload) {
    try {
      const response = await this.chatService.startConversation(payload);
      client.emit('startConversationResponse', response);
    } catch (error) {
      client.emit('error', error.message);
    }
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(client: any, payload: MessagePayload) {
    try {
      await this.chatService.sendMessage(payload);
      client.broadcast.emit('newMessage', payload);
    } catch (error) {
      client.emit('error', error.message);
    }
  }

  @SubscribeMessage('getConversationMessages')
  async handleFindConversationMessages(client: any, conversation_id: number) {
    try {
      const conversationMessages = await this.chatService.findConversationMessages(conversation_id);
      client.emit('conversationMessages', conversationMessages);
    } catch (error) {
      client.emit('error', error.message);
    }
  }
}
