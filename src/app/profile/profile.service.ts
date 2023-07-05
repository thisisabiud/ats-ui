import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService{
   profileUrl = 'http://45.79.31.232/accounts/profile';

  constructor(private http: HttpClient) { }
 

  profileInfo$(): Observable<any>{
    return this.http.get<any>(this.profileUrl);
  }

}
