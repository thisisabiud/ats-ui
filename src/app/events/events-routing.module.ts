import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';


const routes: Routes = [
  { 
    path: '', 
    title: 'Events',
    component: EventsComponent,
  },
  {
    path: '',
    children: [
      { 
        path:':id', component: EventDetailComponent,
      },
    ]
  },
  // { path:'details/:id', component: EventDetailComponent},
  // { 
  //   path: 'create',
  //   component: EventCreateComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
