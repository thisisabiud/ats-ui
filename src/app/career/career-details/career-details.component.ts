import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/domain/job.model';
import { CareerService } from '../career.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent {
  job?: Job;
  constructor( private service: CareerService, private route: ActivatedRoute, private location: Location){}

  ngOnInit(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.service.getJob(id).subscribe(data => this.job = data);
  }

  back(){
    this.location.back();
  }

}
