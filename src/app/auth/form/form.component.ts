import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() submitEmitter = new EventEmitter();
  authForm: FormGroup;
  constructor( private builder: FormBuilder, public authService: AuthService){
    this.authForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  submit(){
    this.submitEmitter.emit(this.authForm.value);
    // console.log(this.authForm.value);
    this.authService.login$(this.authForm.value)
  }
}
