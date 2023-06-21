import { Component, OnInit } from '@angular/core';
import { CommentsInterface } from 'src/app/domain/comment.model';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comments?: CommentsInterface[];

  constructor(private newsService: NewsService, private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.newsService.getComments(id).subscribe((data) => (this.comments = data)); 
    console.log(this.comments?.length);
     
   
  }


}
