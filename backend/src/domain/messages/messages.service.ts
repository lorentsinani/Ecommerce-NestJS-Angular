import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { CreateMessageDto } from '../../common/dtos/chat/messages/create-message.dto';
import { MessagesRepository } from './messages.repository';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessagesService {
  private NotCreatedMessageException = 'Message is not created';

  constructor(private messagesRepository: MessagesRepository) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = await this.messagesRepository.createMessage(createMessageDto);

    if (this.getIdentifierId(createdMessage)) {
      throw new HttpException(this.NotCreatedMessageException, HttpStatus.BAD_GATEWAY);
    }

    return createdMessage.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id === -1 ? false : true;
  }
}
