import { Component } from '@angular/core';
import { NewsInterface } from '../domain/news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news: NewsInterface[] = [];

  constructor(private _service: NewsService){}

  ngOnInit(){
    this._service.getNews$.subscribe(data => this.news = data);
    // 
  }
}
