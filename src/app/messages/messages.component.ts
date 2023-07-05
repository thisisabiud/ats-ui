import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  message: string = '';
  messages: string[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    // this.chatService.getGroupedMessages().subscribe(
    //   (data) => {
    //     this.messages = data;
    //   },
    //   (error) => {
    //     console.error('Error retrieving grouped messages:', error);
    //   }
    // );
    this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage(rec: string): void {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message, "");
      this.message = '';
    }
  }
}
