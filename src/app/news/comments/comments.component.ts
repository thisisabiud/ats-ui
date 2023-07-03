import { Component, OnInit } from "@angular/core";
import { CommentsInterface } from "src/app/domain/comment.model";
import { NewsService } from "../news.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit {
  comments?: CommentsInterface[];
  commentForm: FormGroup;
  comment?: string;
  formData: any = new FormData();

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.commentForm = this.fb.group({
      content: [""],
    });
  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.newsService
      .getComments(id)
      .subscribe((data) => (this.comments = data));
    // console.log(this.comments?.length);
  }

  submitComment() {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);
    const formData = new FormData();
    formData.append("content", this.commentForm.value.content);

    this.http
      .post(`http://45.79.31.232/api/feed/${id}/comments/create/`, formData)
      .subscribe(
        (data) => {
          this.newsService
          .getComments(id)
          .subscribe((data) => (this.comments = data));
          this.commentForm.reset();
          console.log(data);
        },
        (error) => console.error(error)
      );
  }
}
