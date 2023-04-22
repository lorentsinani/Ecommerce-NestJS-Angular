import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateConversationDto } from '../../common/dtos/chat/conversation/create-conversation.dto';
import { Conversation } from '../entities/conversation.entity';
import { ConversationRepository } from './conversation.repository';
import { UpdateConversationDto } from '../../common/dtos/chat/conversation/update-conversation.dto';

@Injectable()
export class ConversationService {
  constructor(private readonly conversationRepository: ConversationRepository) {}

  async create(createConversationDto: CreateConversationDto): Promise<Conversation> {
    const createdConversation = await this.conversationRepository.createConversation(createConversationDto);

    if (createdConversation.identifiers[0].id) {
      throw new NotFoundException();
    }

    return createdConversation.raw[0];
  }

  findById(conversation_id: number) {
    return this.conversationRepository.findConversationById(conversation_id);
  }

  findByCustomerId(customer_id: number) {
    return this.conversationRepository.findConversationByCustomerId(customer_id);
  }

  findConversationMessages(conversation_id: number) {
    return this.conversationRepository.findConversationMessages(conversation_id);
  }

  async update(id: number, updateConversationDto: UpdateConversationDto): Promise<Conversation> {
    const updatedConversation = await this.conversationRepository.updateConversation(id, updateConversationDto);

    if (!updatedConversation) {
      throw new HttpException('Conversation is not updated', HttpStatus.BAD_REQUEST);
    }

    return updatedConversation.raw[0];
  }
}
