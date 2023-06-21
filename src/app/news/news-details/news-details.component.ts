import { Component, OnInit } from "@angular/core";
import { NewsInterface } from "src/app/domain/news.model";
import {  } from "src/app/domain/news.model";
import { NewsService } from "../news.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CommentsInterface } from "src/app/domain/comment.model";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.css"],
})
export class NewsDetailsComponent implements OnInit {
  news?: NewsInterface;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.newsService.getOneNews$(id).subscribe((data) => (this.news = data));

  }

  back() {
    this.location.back();
  }
}
