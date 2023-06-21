import { Injectable, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcumbService implements OnInit {

  constructor( private ngDynamicBreadcumbService: NgDynamicBreadcrumbService) { }

  ngOnInit(): void{
    const breadcrumb =  {customText: 'This is Custom Text', dynamicText: 'Level 2 '};
  this.ngDynamicBreadcumbService.updateBreadcrumbLabels(breadcrumb);
  }
  updateBreadcumb(): void{
    const breadcumbs = [
      {
        label: 'Dashboard',
        url: ''
      }
    ];
    this.ngDynamicBreadcumbService.updateBreadcrumb(breadcumbs);
  }
}
