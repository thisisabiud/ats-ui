import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  emp: number = 0;
  unemp: number = 0;

  constructor( private _service: DashboardService){}
  ngOnInit(){
    // this._service.getAlumniEmployeed$.subscribe(data => this.emp = data.length);
    // this._service.getAlumniUnemployeed$.subscribe(data => this.unemp = data.length);
  }
}


