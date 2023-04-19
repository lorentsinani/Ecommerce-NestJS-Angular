import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateConversationDto } from '../../common/dtos/chat/conversation/create-conversation.dto';
import { Conversation } from '../entities/conversation.entity';
import { ConversationRepository } from './conversation.repository';
import { InsertResult } from 'typeorm';
import { ConversationPayload } from '../../common/constants/types/conversation-payload.type';

@Injectable()
export class ConversationService {
  private NotCreatedExceptionMessage = 'Conversation is not created';
  constructor(private readonly conversationRepository: ConversationRepository) {}
  async create(createConversationDto: CreateConversationDto): Promise<Conversation> {
    const createdConversation = await this.conversationRepository.createConversation(createConversationDto);

    if (this.getIdentifierById(createdConversation)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_GATEWAY);
    }
    return createdConversation.raw[0];
  }

  find(payload: ConversationPayload): Promise<Conversation | null> {
    return this.conversationRepository.findConversation(payload.customer_id, payload.employee_id);
  }

  findConversationMessages(conversation_id: number): Promise<Conversation | null> {
    return this.conversationRepository.findConversationMessages(conversation_id);
  }

  getIdentifierById(result: InsertResult) {
    return result.identifiers[0].id === -1 ? false : true;
  }
}
