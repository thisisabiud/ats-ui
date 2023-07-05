import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ProfileService } from 'src/app/profile/profile.service';
import { Profile } from 'src/app/domain/profile.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: any[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getGroupedMessages().subscribe(
      (data) => {
        console.log(data);
        this.messages = data;
      },
      (error) => {
        console.error('Error retrieving grouped messages:', error);
      }
    );
    
  }
 
}
