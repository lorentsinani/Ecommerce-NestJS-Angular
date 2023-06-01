import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'socket.io-client';
import { IConversation } from '../../../shared/chat/chat.component';

export interface ConversationPayload {
  customer_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:3000/chat';

  constructor(private http: HttpClient) {}

  getConversationMessages() {}

  startConversation(conversationPayload: ConversationPayload): Observable<IConversation> {
    return this.http.post<IConversation>(`${this.apiUrl}/conversation`, conversationPayload);
  }
}
