import { Component, OnDestroy, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { Subscription } from "rxjs/internal/Subscription";
import { Message } from "src/app/domain/message.model";
import { ActivatedRoute } from "@angular/router";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-message-thread",
  templateUrl: "./message-thread.component.html",
  styleUrls: ["./message-thread.component.css"],
})
export class MessageThreadComponent implements OnInit{
  // messages: Message[];
  message: string = "";
  subscription?: Subscription;

  private socket$: WebSocketSubject<Message>;
  private ws = "ws://45.79.31.232/ws/socket-server/";
  private url = "http://45.79.31.232/chats/inbox";
  private sendUrl =  "http://45.79.31.232/chats/action/sendtext/";

  ngOnInit(): void {
  }
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.messages$().subscribe((data) => console.log(data));
    const username = route.snapshot.paramMap.get("username");
    this.socket$ = webSocket(`${this.ws}${username}`);
  }

  messages$(): Observable<any> {
    const username = this.route.snapshot.paramMap.get("username");
    return this.http.get<any>(`${this.url}/${username}`);
  }

  sendMessage(message: Message) {
    this.socket$.next(message);
  }
  close() {
    this.socket$.complete();
  }

}
