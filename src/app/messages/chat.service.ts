import { Injectable } from "@angular/core";
import { WebSocketSubject, webSocket } from "rxjs/webSocket";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ChatService{
  private socket$: WebSocketSubject<any>;
  private ws = "ws://45.79.31.232/ws/socket-server/";

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    var username = AuthService.uname;
    const finalUrl = this.ws + username + "/";
    this.socket$ = webSocket(finalUrl);  
  }

  public getMessages(): Observable<string> {
    return this.socket$.asObservable();
  }

  getGroupedMessages(): Observable<any> {
    const url = `http://45.79.31.232/chats/inbox/${AuthService.uname}/`;
    return this.http.get<any>(url);
  }

  sendMessage(message: string, receiver:string) {
    var json = {
      'content': message,
      'receiver': receiver,
      'sender': AuthService.uname,
      'type':'inbox',
    };
    this.socket$.next(json);
  }
  close() {
    this.socket$.complete();
  }

 
}
