import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {
  createEventForm: FormGroup;
  formData?: any = new FormData();

  uploadedImage?: File;
   

  constructor(
    private builder: FormBuilder, 
    private service: EventService, 
    private route: Router,
    private location: Location,
    private authService: AuthService
    ){
    this.createEventForm = this.builder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      // end_date: ['', Validators.required],
      end_time: ['', Validators.required],
      // start_date: ['', Validators.required],
      start_time: ['', Validators.required],
      // created_by: ['', Validators.required],
      image: [null, Validators.required],
      is_public: [false]   

    });
    // console.log(this.authService.userId);
  }
  onImageChange(event: any){
    this.uploadedImage = event.target?.files[0];
  }

  
  onSubmit(){
    this.formData.append('name', this.createEventForm.value.name);
    this.formData.append('description', this.createEventForm.value.description);
    this.formData.append('location', this.createEventForm.value.location);
    this.formData.append('start_time', this.createEventForm.value.start_time);
    this.formData.append('end_time', this.createEventForm.value.end_time);
    this.formData.append('is_public', this.createEventForm.value.is_public);
    // this.formData.append('created_by',this.authService.userId );
    this.formData.append('attendees', []);
    this.formData.append('image', this.uploadedImage);


    this.service.postEvent$(this.formData).subscribe(
      data => this.route.navigate(['/events'])
    );

    // if(this.createEventForm.valid){
    //   this.route.navigate(['/events']);
    // }
  }

  back(){
    this.location.back();
  }


}
