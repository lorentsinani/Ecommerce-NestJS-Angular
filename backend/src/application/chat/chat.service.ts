import { CreateMessageDto } from './../../common/dtos/chat/messages/create-message.dto';
import { Injectable } from '@nestjs/common';
import { ConversationService } from '../../domain/conversation/conversation.service';
import { MessagesService } from '../../domain/messages/messages.service';
import { Message } from '../../domain/entities/message.entity';
import { Conversation } from '../../domain/entities/conversation.entity';
import { EmployeesService } from '../../domain/employees/employees.service';
import { Employee } from '../../domain/entities/employee.entity';
import { ConversationPayload } from '../../common/interfaces/conversation-payload.interface';

@Injectable()
export class ChatService {
  constructor(
    private readonly conversationService: ConversationService,
    private readonly messagesService: MessagesService,
    private readonly employeeService: EmployeesService
  ) {}

  async startConversation(conversationPayload: ConversationPayload): Promise<Conversation | null> {
    const availableEmployee = await this.findAvailableEmployee();

    const updatedConversationDto = { ...conversationPayload, employeeId: availableEmployee.userId };

    const conversationExist = await this.conversationService.findByCustomerId(conversationPayload.customerId);

    if (conversationExist) {
      const { id } = conversationExist;
      await this.conversationService.update(id, updatedConversationDto);
      return this.findConversationMessages(id);
    }

    return this.conversationService.create(updatedConversationDto);
  }

  async findAvailableEmployee(): Promise<Employee> {
    const employees = await this.employeeService.findAvailableEmployees();
    return employees[Math.floor(Math.random() * employees.length)];
  }

  sendMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messagesService.create(createMessageDto);
  }

  findConversationMessages(conversation_id: number): Promise<Conversation | null> {
    return this.conversationService.findConversationMessages(conversation_id);
  }
}
