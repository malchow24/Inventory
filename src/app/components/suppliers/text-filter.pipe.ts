import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter',
  pure: false,
})
export class TextFilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if(input) {
      return value.filter(val => val.Name.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } else {
      return value;
    }
  }

}
