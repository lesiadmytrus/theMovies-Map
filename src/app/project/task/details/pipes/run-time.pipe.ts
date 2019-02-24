import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runTime'
})
export class RunTimePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if(value > 0 && value/60 < 1) {
      return value + ' Minutes';

    } else {
      return value/60 + ' Hour(s)';
  }

}
} 
