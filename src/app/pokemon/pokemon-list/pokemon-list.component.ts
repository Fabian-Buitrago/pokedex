import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { PokemonService } from "app/core/services/pokemon.service";
import { DOCUMENT } from '@angular/platform-browser';
import { Pokemon } from "app/shared/interfaces/pokemon";

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  public pokemon: Pokemon[] = [];
  public currentPokemon: Object;
  public currentPage: number = 1;
  public totalPages: number;
  public offset: number = 0;
  public spinnerStatus: boolean = true;

  constructor(private pokemonService: PokemonService, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.getPokemon()
  }

  getPokemon() {
    this.spinnerStatus = false;
    this.pokemonService.getPokemon(this.offset).subscribe(res => {
      let result = res.json().results
      this.offset = this.offset + result.length;
      this.totalPages = Math.ceil(res.json().count / 20);

      if (result) {
        result.forEach(element => {
          this.pokemon.push(element);
        });

        this.spinnerStatus = true;
      }
    });
  }

  GetPokemonToTheSearch() {
    return this.pokemonService.GetPokemonToTheSearch();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (this.GetPokemonToTheSearch() === "" && window.pageYOffset == (document.body.offsetHeight - window.innerHeight)) {
      if (this.currentPage <= this.totalPages) {
        this.currentPage++;
        this.getPokemon();
      }
    }
  }

}
