import { Component, EventEmitter, Input, OnInit, Output, isDevMode } from '@angular/core';
import { Card } from '../card/card';
import { Observable } from 'rxjs';
import { Alumnus } from 'src/app/domain/alumnus.model';
import { DashboardService } from '../dashboard.service';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards?: Card[];
  image: string;
  apiKey: string = '';
  constructor(private _service: DashboardService){
    this.image = `${environment.assets}/svg/job.svg`;
  }

  ngOnInit(): void {
    this.cards = [
      {name: 'Alumni', value: this.alumni$, icon: `${environment.assets}/img/graduate.png`},
      {name: 'Employeed', value: this.employeed$, icon: `${environment.assets}/img/work.png`},
      {name: 'Unemployeed', value: this.unEmployeed$, icon: `${environment.assets}/img/work_off.png`},
    ];
    this.emitValues();

  }  

  alumni$ = <Observable<Alumnus[]>>
  this._service.getAlumni$;
  
  employeed$ = <Observable<Alumnus[]>>
  this._service.getAlumniEmployeed$;

  unEmployeed$ = <Observable<Alumnus[]>>
  this._service.getAlumniUnemployeed$;

  emitValues(): void{
    this.employeed$.subscribe(data => this.assignEmployeed(data));
    this.unEmployeed$.subscribe(data => this.assignUnemployeed(data));
  }

  assignEmployeed(data: Alumnus[]): number{
   return data.length;   
  }
  assignUnemployeed(data: Alumnus[]): number{
    return data.length;   
  }
}
