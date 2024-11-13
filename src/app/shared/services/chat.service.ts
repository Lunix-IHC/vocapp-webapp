import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages: Message[] = [];
  private messagesSubject = new BehaviorSubject<Message[]>(this.messages);

  constructor() { }

  getMessages() {
    return this.messagesSubject.asObservable();
  }

  sendMessage(text: string, sender: string) {
    const newMessage = new Message(text, sender);
    this.messages.push(newMessage);
    this.messagesSubject.next(this.messages);
  }
}