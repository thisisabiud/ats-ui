import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent {
  
  createNewsForm: FormGroup | undefined;
  // formData?: any = new FormData();

  // constructor(
  //   private builder: FormBuilder, 
  //   private service: NewsService, 
  //   private route: Router,
  //   private location: Location
  //   ){
  //   this.createNewsForm = this.builder.group({
  //     heading: ['', Validators.required],
  //     body: ['', Validators.required],
  //   });
  // }
  
  // onSubmit(){
  //   // this.formData = this.createNewsForm.value;
  //   // this.service.postNews$(this.formData).subscribe();
  //   // if(this.createNewsForm.valid){
  //   //   this.route.navigate(['/news']);
  //   // }
  //   // // console.log(this.formData);
    
  // }

  back(){
    // this.location.back();
  }
}
