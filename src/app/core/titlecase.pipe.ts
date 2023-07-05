import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    const words = value.toLowerCase().split(' ');
    const titleCaseWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return titleCaseWords.join(' ');
  }

}
