import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  /*transform(value, [term]) {
    return term ? value.filter((item) => item.name.startsWith(term)) : value;
  }*/

  transform(pokemon, value: string) {
    return value ? pokemon.filter(p => p.name.toLowerCase().includes(value.toLowerCase())) : pokemon;
  }
}