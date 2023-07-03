import { Component, OnInit } from '@angular/core';
import { CommentsInterface } from 'src/app/domain/comment.model';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comments?: CommentsInterface[];
  commentForm: FormGroup;
  comment?: string;
  formData: any = new FormData();

  constructor(private newsService: NewsService, private route: ActivatedRoute, private fb: FormBuilder){
    this.commentForm = fb.group({
      content: ['', Validators.required],
    })
    this.comment = this.formData.append('content', this.commentForm.get('content')?.value);
    console.log(this.comment);
  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.newsService.getComments(id).subscribe((data) => (this.comments = data)); 
    // console.log(this.comments?.length);  
  }

  submitComment(){  
  const id = parseInt(this.route.snapshot.paramMap.get("id")!);

   this.newsService.postComment(this.comment,id);
   
   
  }


}
