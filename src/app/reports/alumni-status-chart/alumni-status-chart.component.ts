import { Component, OnInit, ViewChild } from "@angular/core";
import {
  Chart,
  ChartConfiguration,
  ChartType,
  ChartEvent,
  ChartData,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { BaseChartDirective } from "ng2-charts";
import { StatsService } from "../stats.service";

@Component({
  selector: "app-alumni-status-chart",
  templateUrl: "./alumni-status-chart.component.html",
  styleUrls: ["./alumni-status-chart.component.css"],
})
export class AlumniStatusChartComponent implements OnInit {
  constructor(private service: StatsService) {}
  ngOnInit() {
    this.service.getStats().subscribe((data) => {
      const employed = data["employment_stats"]["Employed"];

      const unemployed = data["employment_stats"]["Unemployed"];

      const retired = data["employment_stats"]["Retired"];
      const working = employed + unemployed;

      this.pieChartData.datasets[0].data = [retired, working];
      this.chart?.update();
    });
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration["options"] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };
  public pieChartData: ChartData<"pie", number[], string | string[]> = {
    labels: [["Retired"], ["Working Age"]],
    datasets: [
      {
        data: [0, 0],
      },
    ],
  };
  public pieChartType: ChartType = "pie";
  public pieChartPlugins = [ChartDataLabels];
}
