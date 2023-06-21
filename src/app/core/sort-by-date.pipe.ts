import { Pipe, PipeTransform } from '@angular/core';
import { EventInterface } from '../events/event';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: EventInterface[]): EventInterface[] {
    if(value){
      return value.sort((a, b) => {
        if(new Date(a.start_time) >  new Date(b.start_time)){
          return -1;
        }
        else if(new Date(b.start_time) >  new Date(a.start_time)){
          return 1;
        }
        return 0;
      });
    }
    return [];
  }
}
