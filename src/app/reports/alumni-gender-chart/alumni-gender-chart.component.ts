import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { StatsService } from '../stats.service';
import { Stats } from 'src/app/domain/stats.model';


@Component({
  selector: 'app-alumni-gender-chart',
  templateUrl: './alumni-gender-chart.component.html',
  styleUrls: ['./alumni-gender-chart.component.css']
})
export class AlumniGenderChartComponent implements OnInit{
  stats: Stats[] = [];

  start_year: number = 0;
  end_year: number = 0;

  constructor(private service: StatsService){}
  ngOnInit(){
    this.service.getYearlyStats().subscribe( data => {
    this.stats = data['stats'];

    const year = data['stats'].map((stat: { [x: string]: any; }) => stat['year']);
    this.start_year = year[0];
    this.end_year = year[year.length - 1];

    const female = data['stats'].map((stat: { [x: string]: { [x: string]: number; }; }) => stat['gender_stats']['Female']);    
    const male = data['stats'].map((stat: { [x: string]: { [x: string]: number; }; }) => stat['gender_stats']['Male']);   

    this.barChartData.labels = year;
    this.barChartData.datasets[0].data = male;
    this.barChartData.datasets[1].data = female;
    this.chart?.update();
    });
    
  }
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Male' },
      { data: [], label: 'Female' }
    ]
  };
}
