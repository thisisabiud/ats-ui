import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio'
import { MatNativeDateModule } from '@angular/material/core';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { SortByDatePipe } from '../core/sort-by-date.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
// import { TruncatePipe } from '../core/truncate.pipe';





@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
    EventDetailComponent,
    SortByDatePipe,
    // TruncatePipe
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    NgxMatFileInputModule,
  ]
})
export class EventsModule { }
