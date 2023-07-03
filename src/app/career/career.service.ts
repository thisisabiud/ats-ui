import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../domain/job.model';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  apiUrl = 'http://45.79.31.232/api/jobs/';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJob(id: number): Observable<Job>{
    return this.http.get<Job>(`${this.apiUrl}${id}`);
  }
}
