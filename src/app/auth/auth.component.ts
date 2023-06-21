import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Credentials } from './credentials';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor( private authService: AuthService, private router: Router){}
  submit( credentials: Credentials){
    this.authService.login$(credentials).subscribe();
  }
}
