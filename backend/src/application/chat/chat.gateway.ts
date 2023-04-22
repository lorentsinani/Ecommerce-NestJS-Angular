import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';
import { MessagePayload } from '../../common/interfaces/message-payload.interface';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  async handleSendMessage(client: Socket, messagePayload: MessagePayload) {
    try {
      const newMessage = await this.chatService.sendMessage(messagePayload);
      const room = `conversation_${newMessage.conversation_id}_sender_${newMessage.sender_id}_receiver_${newMessage.receiver_id}`;
      client.to(room).emit('message', newMessage.content); /* maybe i should emit the entire message */
    } catch (error) {
      client.emit('error', error.message);
    }
  }
}
