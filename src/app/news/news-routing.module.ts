import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { CreateNewsComponent } from './create-news/create-news.component';

const routes: Routes = [
  { 
    path: '', component: NewsComponent,
  },
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateNewsComponent
      },
      {path: ':id', component: NewsDetailsComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
