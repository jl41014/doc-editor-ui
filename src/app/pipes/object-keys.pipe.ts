import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeys'
})
export class ObjectKeysPipe implements PipeTransform {

  transform(value: any): any[] {
    console.log(value);
    return Object.keys(value);
  }

}
