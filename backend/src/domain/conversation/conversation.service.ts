import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversationService {
  create(createConversationDto: any) {
    return 'This action adds a new conversation';
  }

  findAll() {
    return `This action returns all conversation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  update(id: number, updateConversationDto: any) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
