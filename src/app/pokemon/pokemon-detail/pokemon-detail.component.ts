import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input() currentPokemon;

  constructor() { }

  ngOnInit() {
  }

  getAbilities(abilities) {
    if (!abilities) {
      return false;
    }

    let temporary = abilities.map(function (obj) {
      return obj.ability.name;
    }).join(', ')

    return temporary
  }

}
