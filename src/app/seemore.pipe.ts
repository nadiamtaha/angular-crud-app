import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(description:string, limit): string {
     return description.substr(0,limit)
  }

}
