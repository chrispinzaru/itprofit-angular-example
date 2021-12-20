import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxlength: number = -1, ending: string = '...'): string {
    maxlength = maxlength === -1 ? value.length : maxlength;

    if (value.length > maxlength) {
      return value.substring(0, maxlength) + ending;
    }

    return value;
  }

}
