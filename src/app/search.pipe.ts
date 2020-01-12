import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
     
  transform(movies: any, text:string): any {
    if(text==undefined){
      return movies
    }
    return movies.filter(function(movie){
       return movie.title.toLowerCase().includes(text.toLowerCase())
    })
  }

}
