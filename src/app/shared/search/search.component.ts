import { Component, OnInit } from '@angular/core';
import { PokemonService } from "app/core/services/pokemon.service";

@Component({
  selector: 'search-box',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  keyDown(event, value) {
    if (event.keyCode == 13) {
      this.search(value);
    }
  }

  search(value) {
    this.pokemonService.setPokemonToTheSearch(value);
  }

}