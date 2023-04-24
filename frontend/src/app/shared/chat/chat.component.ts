import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { ChatService } from '../../core/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  socket: Socket;
  conversation: IConversation;
  messages: IMessage[] = [];
  currentUser: IUser = { id: 1, name: 'a' };
  chatStarted = false;
  newMessage: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.socket = io('http://localhost:3000');

    this.socket.on('message', (message: string) => {
      this.messages.push({ content: message });
    });
  }

  sendMessage() {
    if (!this.newMessage) {
      return;
    }

    const newMessage = {
      conversation_id: this.conversation.id as number,
      sender_id: this.currentUser.id as number,
      receiver_id: 11,
      content: this.newMessage
    };

    this.messages.push(newMessage);

    this.socket.emit('sendMessage', newMessage); // send the message payload to the server

    this.newMessage = '';
  }

  onStartChatAction() {
    this.chatStarted = true;

    this.chatService.startConversation({ customer_id: 1 }).subscribe(value => {
      this.conversation = value;
      this.messages = value.messages;
    });
  }
}

export interface IConversation {
  id?: number;
  customer_id: number;
  employee_id: number;
  messages: IMessage[];
  created_at?: Date;
  updated_at?: Date;
}

interface IMessage {
  id?: number;
  conversation_id?: number;
  sender_id?: number;
  receiver_id?: number;
  content?: string;
  updated_at?: Date;
  created_at?: Date;
}

interface IUser {
  id?: number;
  name: string;
}
