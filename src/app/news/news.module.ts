import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { MatListModule } from '@angular/material/list';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateNewsComponent } from './create-news/create-news.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../core/truncate.pipe';
import { MatCardModule } from '@angular/material/card';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NewsComponent,
    NewsItemComponent,
    NewsDetailsComponent,
    CreateNewsComponent,
    TruncatePipe,
    CommentsComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule
    
  ]
})
export class NewsModule { }
