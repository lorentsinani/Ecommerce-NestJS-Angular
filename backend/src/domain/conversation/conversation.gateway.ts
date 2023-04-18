import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ConversationService } from './conversation.service';

@WebSocketGateway()
export class ConversationGateway {
  constructor(private readonly conversationService: ConversationService) {}

  @SubscribeMessage('createConversation')
  create(@MessageBody() createConversationDto: any) {
    return this.conversationService.create(createConversationDto);
  }

  @SubscribeMessage('findAllConversation')
  findAll() {
    return this.conversationService.findAll();
  }

  @SubscribeMessage('findOneConversation')
  findOne(@MessageBody() id: number) {
    return this.conversationService.findOne(id);
  }

  @SubscribeMessage('updateConversation')
  update(@MessageBody() updateConversationDto: any) {
    return this.conversationService.update(updateConversationDto.id, updateConversationDto);
  }

  @SubscribeMessage('removeConversation')
  remove(@MessageBody() id: number) {
    return this.conversationService.remove(id);
  }
}
