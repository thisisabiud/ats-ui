import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  event: any;
  constructor(
    private eventService: EventService, 
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location
    ){ }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.eventService.getEvent$(id).subscribe(data => this.event = data);
  }

  delete(id: number): void{
    this.eventService.deleteEvent$(id).subscribe(
      data =>
      this.router.navigate(['/events'])
    );
  }

  back(){
    this.location.back();
  }
}
