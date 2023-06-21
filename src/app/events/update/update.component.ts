import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventInterface } from '../event';
import { EventService } from '../event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  event?: EventInterface;
  constructor(private route: ActivatedRoute, private eventService: EventService, private location: Location){}

  ngOnInit():void{
    this.eventService.getEvent$(parseInt(this.route.snapshot.paramMap.get('id')!)).subscribe(
      data => this.event = data
    );
  }

  back(){
    this.location.back();
  }

  save(): void{
    if(this.event){
      this.eventService.updateEvent$(this.event).subscribe(
        () => this.back()
      );
    }
  }


}
