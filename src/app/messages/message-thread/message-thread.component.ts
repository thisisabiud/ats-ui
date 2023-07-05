import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { ChatService } from "../chat.service";
import { Subscription } from "rxjs/internal/Subscription";
import { Message } from "src/app/domain/message.model";
import { ActivatedRoute, Router } from "@angular/router";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";


@Component({
  selector: "app-message-thread",
  templateUrl: "./message-thread.component.html",
  styleUrls: ["./message-thread.component.css"],
})

export class MessageThreadComponent implements OnInit, AfterViewInit{
  @ViewChild('containerElement') containerElement!: ElementRef;
  messageForm: FormGroup;
  messages: { content: any, created_at: any, isMe: any}[] = [];
  currec: string = '';

  constructor(private renderer: Renderer2, private chatService: ChatService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.messageForm = this.formBuilder.group({
      message: ''
    });
  }


  ngOnInit(): void {
    this.currec = this.route.snapshot.url[0].path;
    this.chatService.getMessages().subscribe((message:string) => {
      const parsedMessage = JSON.parse(JSON.stringify(message));
      const content = parsedMessage.message.content;
      const created_at = parsedMessage.message.created_at;
      var isMe = false;
      if (parsedMessage.message.sender==AuthService.uname) {
        isMe = true;
      }
      this.messages.push({content:content, created_at:created_at, isMe:isMe});
    });
      const navState = this.router.getCurrentNavigation()?.extras?.state;
      const msgs = window.history.state.messages ?? [];
    
      console.log(msgs); // Check if the messages are logged correctly
    
      for (let index = 0; index < msgs.length; index++) {
        const element = msgs[index];
        this.messages.push({
          content: element.content,
          created_at: element.created_at,
          isMe: (element.sender===AuthService.uname)?true:false
        });
      }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }

  public sendMessage(): void {
    const message = this.messageForm.value.message;
    if (message.trim() !== '') {
      this.chatService.sendMessage(message,this.route.snapshot.url[0].path);
      this.messageForm.reset();
    }
  }

  private scrollToBottom(): void {
    const container = this.containerElement.nativeElement;
    this.renderer.setProperty(container, 'scrollTop', container.scrollHeight);
  }

}
