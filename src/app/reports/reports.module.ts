import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { AlumniGenderChartComponent } from './alumni-gender-chart/alumni-gender-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { AlumniStatusChartComponent } from './alumni-status-chart/alumni-status-chart.component';
import { AlumniSectorChartComponent } from './alumni-sector-chart/alumni-sector-chart.component';


@NgModule({
  declarations: [
    ReportsComponent,
    AlumniGenderChartComponent,
    AlumniStatusChartComponent,
    AlumniSectorChartComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    NgChartsModule,
    MatCardModule,

  ]
})
export class ReportsModule { }
