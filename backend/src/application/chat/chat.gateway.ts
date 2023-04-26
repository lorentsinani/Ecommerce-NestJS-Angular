import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';
import { MessagePayload } from '../../common/interfaces/message-payload.interface';
import { CustomSocket, SocketJwtAuthGuard } from '../../common/guards/socket-jwt-auth.guard';
import { Message } from '../../domain/entities/message.entity';
import { AuthService } from '../auth/auth.service';
import { UseGuards } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*' // leave it for postman and change it to localhost:4200 if you want to test it on front end
  }
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private recipientSocketsMap = new Map<number, Socket>();

  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService, private readonly authService: AuthService) {}

  handleConnection(socket: CustomSocket) {
    try {
      const verifiedToken = this.authService.verifySocketJwtToken(socket);

      if (!verifiedToken) {
        socket.disconnect(true);
        return;
      }

      const client_id = this.getParticipantId(socket);
      this.recipientSocketsMap.set(client_id, socket);
    } catch (error) {
      socket.disconnect(true);
    }
  }

  handleDisconnect(socket: CustomSocket) {
    const client_id = this.getParticipantId(socket);
    this.recipientSocketsMap.delete(client_id);
  }

  @UseGuards(SocketJwtAuthGuard)
  @SubscribeMessage('sendMessage')
  async handleSendMessage(socket: CustomSocket, messagePayload: MessagePayload) {
    try {
      const sender_id = this.getParticipantId(socket);
      const message = await this.chatService.sendMessage({ sender_id, ...messagePayload });
      const messageRoom = this.generateMessageRoom(message);
      this.sendMessageToRecipient(message, messageRoom);
    } catch (error) {
      console.log(error);
      socket.emit('error', error.message);
    }
  }

  /* 
  Rooms

  Rooms are sub channels of the namespaces. Rooms are purely a server-side construct and the client knows nothing about them.

  You can’t join a room with socket io from the client side, it should happens in the server side. To tackle this you need to emit a socket with the room you want to join as data , and in the server you listen to this socket and call socket.join() with the name or the id of the room that has been sent.

  Here is a helpful example of using rooms with socket.io


  */

  private sendMessageToRecipient(message: Message, messageRoom: string): void {
    const recipientSocket = this.getRecipientSocketById(message.receiver_id);
    if (recipientSocket) {
      recipientSocket.join(messageRoom);
      recipientSocket.to(messageRoom).emit('message', message.content);
    }
  }

  private getParticipantId(socket: CustomSocket): number {
    return socket.jwtPayload?.user.id as number;
  }

  private generateMessageRoom(message: Message): string {
    return `conversation_${message.conversation_id}_sender_${message.sender_id}_receiver_${message.receiver_id}`;
  }

  private getRecipientSocketById(recipientId: number): Socket | undefined {
    return this.recipientSocketsMap.get(recipientId);
  }
}
