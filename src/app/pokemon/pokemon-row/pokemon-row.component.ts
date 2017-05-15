import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pokemon-row',
  templateUrl: './pokemon-row.component.html',
  styleUrls: ['./pokemon-row.component.css']
})
export class PokemonRowComponent implements OnInit {
  @Input() currentPokemon;
  @Output() showPokemon = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  pokemonDetail(name) {
    this.showPokemon.emit(name);
  }
}
