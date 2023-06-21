import { Component, Input } from '@angular/core';
import { CommentsInterface } from 'src/app/domain/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment?: CommentsInterface;

}
