import { Component, OnInit } from '@angular/core';
import { PokemonService } from "app/core/services/pokemon.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModalComponent implements OnInit {
  public pokemon;
  public id;
  public statusPokemonData;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getParam();
    this.pokemonDetail()
    this.statusPokemonData = false;
  }

  getParam() {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  pokemonDetail() {
    this.pokemonService.getPokemonDetail(this.id).subscribe(res => {
      this.pokemon = res.json();
      this.statusPokemonData = true;
    });
  }

  onClose() {
    this.router.navigateByUrl('/pokemon');
    this.pokemon = null;
  }

}
