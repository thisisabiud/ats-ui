import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  isDevMode,
} from "@angular/core";

import { DashboardService } from "../dashboard.service";
import { environment } from "src/enviroments/enviroment";
import { Card } from "./card";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"],
})
export class CardListComponent implements OnInit {
  cards: Card[];
  image: string;
  apiKey: string = "";
  total: number = 0;
  employed: number = 0;
  unemployed: number = 0;
  constructor(private _service: DashboardService) {
    this.image = `${environment.assets}/svg/job.svg`;
    this.cards = [
      {
        name: "Alumni",
      
        icon: `${environment.assets}/img/graduate.png`,
      },
      {name: 'Employeed', icon: `${environment.assets}/img/work.png`},
      {name: 'Unemployeed and Self-Employed', icon: `${environment.assets}/img/work_off.png`},
    ];
  }

  ngOnInit(): void {
    this.getAlumni();
  }

  getAlumni() {
    this._service.getEmploymentStats().subscribe((data) => {
      this.total =
        data["gender_stats"]["Male"] + data["gender_stats"]["Female"];

      this.employed = data['employment_stats']['Employed'];
      this.unemployed = data['employment_stats']['Unemployed'];
    });
  }

}
