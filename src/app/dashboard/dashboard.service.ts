import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Alumnus } from '../domain/alumnus.model';
import { Status } from '../enums/status.enum';
import { Stats } from '../domain/stats.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _alumniUrl = 'http://45.79.31.232/accounts/stats';
 

  constructor(private _http: HttpClient) {
    _http.get(this._alumniUrl).subscribe(data => console.log(data));
   }

  getEmploymentStats(): Observable<any>{
    return this._http.get(this._alumniUrl);
  }
}
