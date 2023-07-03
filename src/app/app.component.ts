import { Component } from '@angular/core';
import { LoaderService } from './scaffold/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alumni Tracking System';
  constructor(public loader: LoaderService){}
}
