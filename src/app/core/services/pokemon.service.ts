import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {
  urlBase: string = "http://pokeapi.co";
  pokemon: string = "";

  constructor(private http: Http) { }

  getPokemonDetail(current_pokemon): Observable<Response> {
    return this.http.get(`${this.urlBase}/api/v2/pokemon/${current_pokemon}`);
  }

  getPokemon(offset: number): Observable<Response> {
    return this.http.get(`${this.urlBase}/api/v2/pokemon/?offset=${offset}`);
  }

  setPokemonToTheSearch(pokemon) {
    this.pokemon = pokemon;
  }

  GetPokemonToTheSearch() {
    return this.pokemon;
  }
}
