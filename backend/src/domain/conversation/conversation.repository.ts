import { CreateConversationDto } from './../../common/dtos/chat/conversation/create-conversation.dto';
import { DataSource, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Conversation } from '../entities/conversation.entity';
import { Injectable } from '@nestjs/common';
import { UpdateConversationDto } from '../../common/dtos/chat/conversation/update-conversation.dto';

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

  findConversationById(id: number) {
    return this.createQueryBuilder('conversation').where('id = :id', { id }).getOne();
  }

  findConversationByCustomerId(customer_id: number): Promise<Conversation | null> {
    return this.createQueryBuilder('conversation').where('customer_id = :customer_id', { customer_id }).getOne();
  }

  findConversationMessages(conversation_id: number): Promise<Conversation | null> {
    return this.createQueryBuilder('conversation')
      .leftJoinAndSelect('conversation.messages', 'message')
      .where('conversation.id = :conversation_id', { conversation_id })
      .orderBy('message.created_at', 'ASC')
      .getOne();
  }

  updateConversation(id: number, updateConversationDto: UpdateConversationDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Conversation).set(updateConversationDto).where('id = :id', { id }).returning('*').execute();
  }
}
