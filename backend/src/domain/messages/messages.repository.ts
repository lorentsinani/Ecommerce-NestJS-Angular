import { Message } from '../entities/message.entity';
import { Injectable } from '@nestjs/common';
import { DataSource, InsertResult, Repository } from 'typeorm';
import { CreateMessageDto } from '../../common/dtos/chat/messages/create-message.dto';

@Injectable()
export class MessagesRepository extends Repository<Message> {
  constructor(dataSource: DataSource) {
    super(Message, dataSource.createEntityManager());
  }

  createMessage(createMessageDto: CreateMessageDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Message).values(createMessageDto).returning('*').execute();
  }
}
