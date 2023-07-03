import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, ChartDataset } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

import { BaseChartDirective } from 'ng2-charts';
import { DashboardService } from '../dashboard.service';
import { Status } from 'src/app/enums/status.enum';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{

  
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private _service: DashboardService){}
 
  ngOnInit(): void {
    this._service.getEmploymentStats().subscribe(alumni => {
      const employeedCount = alumni['employment_stats']['Employed'];
      const unEmployeedCount = alumni['employment_stats']['Unemployed'];
      this.pieChartData.datasets[0].data = [employeedCount, unEmployeedCount];
      this.chart?.update();
    });
  }

    public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Currently Employeed', 'Currently Unemployeed'],
    datasets: [ {
      data: [0 , 0 ]
    }]
  };

  public pieChartType: ChartType = 'doughnut';
  public pieChartPlugins = [ DatalabelsPlugin ];
  
}
