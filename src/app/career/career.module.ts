import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CareerRoutingModule } from "./career-routing.module";
import { CareerComponent } from "./career.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { CareerDetailsComponent } from './career-details/career-details.component';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [CareerComponent, CareerDetailsComponent],
  imports: [
    CommonModule,
    CareerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class CareerModule {}
