import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventInterface } from './event';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsUrl = `http://45.79.31.232/api/events`
  eventsUrlEvent = `http://45.79.31.232/api/event`
  constructor(private http: HttpClient) { }

  getEvents$ = <Observable<EventInterface[]>>
  this.http.get<EventInterface[]>(this.eventsUrl);

  getEvent$ = (id: number) => <Observable<EventInterface>>
  this.http.get<EventInterface>(`${this.eventsUrlEvent}/${id}`);

  postEvent$ = (event: EventInterface) => <Observable<EventInterface>>
  this.http.post<EventInterface>(`${this.eventsUrl}/create/`, event);

  updateEvent$ = (event: EventInterface) => <Observable<EventInterface>>
  this.http.put<EventInterface>(this.eventsUrl, event);

  deleteEvent$ = (id: number) => <Observable<EventInterface>>
  this.http.delete<EventInterface>(`${this.eventsUrl}/${id}`);

}
