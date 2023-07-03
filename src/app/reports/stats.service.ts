import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService{

  alumniUrl_yearly = 'http://45.79.31.232/accounts/yearly-stats';
  alumniUrl = 'http://45.79.31.232/accounts/stats';

  constructor(private http: HttpClient) { }
  getYearlyStats(): Observable<any>{
    return this.http.get<any>(this.alumniUrl_yearly);
  }
  getStats(): Observable<any>{
    return this.http.get<any>(this.alumniUrl);
  }
}
