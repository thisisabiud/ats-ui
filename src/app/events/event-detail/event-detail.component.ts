import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventInterface } from '../event';
import { EventService } from '../event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit{
  event?: EventInterface;
  constructor(private route: ActivatedRoute, 
    private location: Location, 
    private service: EventService,
    private router: Router){}

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.service.getEvent$(id).subscribe(data => this.event = data);
  }

  back(){
    this.location.back();
  }

  update(){
    this.router.navigate(['/update']);
  }
  
  delete(id: number){
      this.router.navigate([`/events/${id}/delete`])
  }
}
