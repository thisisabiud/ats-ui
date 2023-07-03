import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsInterface } from '../domain/news.model';
import { Observable } from 'rxjs';
import { CommentsInterface } from '../domain/comment.model';



@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl = 'http://45.79.31.232/';

  constructor( private http: HttpClient) { }
  getNews$ = <Observable<NewsInterface[]>>
  this.http.get<NewsInterface[]>(`${this.apiUrl}api/feed`);

  getOneNews$ = (id: number) => <Observable<NewsInterface>>
  this.http.get<NewsInterface>(`${this.apiUrl}api/feed/${id}`);

  postNews$ = (news: NewsInterface) => <Observable<NewsInterface>>
  this.http.post<NewsInterface>(this.apiUrl, news);

  getComments(id: number): Observable<CommentsInterface[]>{
    return this.http.get<CommentsInterface[]>(`${this.apiUrl}api/feed/${id}/comments`);
  }

  postComment(comment: any, id: number): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}api/feed/${id}/comments/create/`, comment);
  }
}
