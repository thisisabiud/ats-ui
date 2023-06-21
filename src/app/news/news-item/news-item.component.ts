import { Component, Input } from '@angular/core';
import { NewsInterface } from '../../domain/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  @Input() news_item?: NewsInterface;

}
