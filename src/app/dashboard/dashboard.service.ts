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
  private _alumniUrl = 'api/alumni';

  constructor(private _http: HttpClient) { }

  getAlumni$ = <Observable<Alumnus[]>>
  this._http.get<Alumnus[]>(this._alumniUrl);

  getAlumniEmployeed$ = <Observable<Alumnus[]>>
  this.getAlumni$.pipe(
    map(x => x.filter(o => o.status === Status.EMPLOYEED))
  );

  getAlumniUnemployeed$ = <Observable<Alumnus[]>>
  this.getAlumni$.pipe(
    map(x => x.filter(o => o.status === Status.UNEMPLOYEED))
  );
}
