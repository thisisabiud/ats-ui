import { Injectable } from "@angular/core";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { Message } from "../domain/message.model";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private socket$: WebSocketSubject<Message>;
  private ws = "ws://45.79.31.232/ws/socket-server/";

  constructor(private route: ActivatedRoute) {
    const username = route.snapshot.paramMap.get("username");
    this.socket$ = webSocket(`${this.ws}+${username}`);
  }

  get messages$() {
    return this.socket$.asObservable();
  }

  sendMessage(message: Message) {
    this.socket$.next(message);
  }
  close() {
    this.socket$.complete();
  }
}
