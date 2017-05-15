import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRowComponent } from './pokemon-row/pokemon-row.component';
import { ShorturlPipe } from "app/shared/pipes/shorturl.pipe";
import { ColorPipe } from "app/shared/pipes/color.pipe";
import { SearchPipe } from "app/shared/pipes/search.pipe";
import { PokemonModalComponent } from './pokemon-modal/pokemon-modal.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { AppRouting } from "app/app.routing";

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  declarations: [
    PokemonListComponent,
    PokemonRowComponent,
    ShorturlPipe,
    ColorPipe,
    SearchPipe,
    PokemonModalComponent,
    PokemonDetailComponent
  ],
  exports: [PokemonListComponent]
})
export class PokemonModule { }
