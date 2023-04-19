import { CreateConversationDto } from './../../common/dtos/chat/conversation/create-conversation.dto';
import { DataSource, InsertResult, Repository } from 'typeorm';
import { Conversation } from '../entities/conversation.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversationRepository extends Repository<Conversation> {
  constructor(dataSource: DataSource) {
    super(Conversation, dataSource.createEntityManager());
  }

  createConversation(createConversationDto: CreateConversationDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Conversation).values(createConversationDto).returning('*').execute();
  }

  findConversation(customer_id: number, employee_id: number): Promise<Conversation | null> {
    return this.createQueryBuilder('conversation')
      .where('conversation.customer_id = :customer_id', { customer_id })
      .andWhere('conversation.employee_id = :employee_id', { employee_id })
      .getOne();
  }

  async findConversationMessages(conversation_id: number): Promise<Conversation | null> {
    return this.createQueryBuilder('conversation')
      .innerJoinAndSelect('conversation.messages', 'message')
      .where('conversation.id = :conversation_id', { conversation_id })
      .getOne();
  }
}
