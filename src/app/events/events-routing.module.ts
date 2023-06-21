import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { 
    path: '', 
    title: 'Events',
    component: EventsComponent,
  },
  {
    path: '',
    children: [
      { path: 'create', component: EventCreateComponent },
      { 
        path:':id', component: EventDetailComponent,
      },
      { 
        path: ':id', children: [
          { 
            path: 'update', component: UpdateComponent
          },
          { 
            path: 'delete', component: DeleteComponent
          }
        ]
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
