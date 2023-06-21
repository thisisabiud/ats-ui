import { Component, OnInit } from '@angular/core';
import { EventInterface } from './event';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  loading: boolean = true;
  upcoming: EventInterface[]=[];
  past: EventInterface[]=[];
  events: EventInterface[] = [];
  title: string = '';

  constructor(private service: EventService){}

  ngOnInit(): void {
    this.service.getEvents$.subscribe(data => {
      console.log(data);
      this.events = data      
      this.loading = false
      const now = new Date();
      for(const event of this.events){
        if(new Date(`${event.start_time}`) > now){
          this.upcoming.push(event);
        }else{
          this.past.push(event);
        }
      }
    });  
    console.log(this.service.getEvents$.subscribe());
      
  }
}
