import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../shared/services/chat.service';
import { Message } from '../../../shared/models/message';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  sender: string = 'Usuario';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((messages) => {
      this.messages = messages;
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage(this.newMessage, this.sender);
      this.newMessage = '';
    }
  }
}
