import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { StatsService } from '../stats.service';


@Component({
  selector: 'app-alumni-sector-chart',
  templateUrl: './alumni-sector-chart.component.html',
  styleUrls: ['./alumni-sector-chart.component.css']
})
export class AlumniSectorChartComponent {

  constructor(private service: StatsService) {}
  ngOnInit() {
    this.service.getStats().subscribe((data) => 
    {
      console.log(data);
      
    const government = data['employment_sector_stats']['Government'];
    console.log(government);
    
    const privateSector = data['employment_sector_stats']['Private'];
    console.log(privateSector);
    
    const self = data['employment_sector_stats']['Self Employed'];
    console.log(self);


    this.pieChartData.datasets[0].data = [ privateSector, government, self];
    this.chart?.update();
  }
    );
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
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
    labels: [ [ 'Private' ], [ 'Government' ], ['Self', 'Employeed'] ],
    datasets: [ {
      data: [ 0, 0, 0 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ ChartDataLabels ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
