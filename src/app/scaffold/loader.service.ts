import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  searchUrl = 'http://45.79.31.232/api/search/?query=';

  constructor(private http: HttpClient) { }

  getResult(query: string): Observable<any>{
    return this.http.get<any>(`${this.searchUrl}${query}`);
  }

}
