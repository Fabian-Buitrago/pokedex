import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from "app/pokemon/pokemon-list/pokemon-list.component";
import { PokemonModalComponent } from "app/pokemon/pokemon-modal/pokemon-modal.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  {
    path: 'pokemon', component: PokemonListComponent, children: [
      { path: ':id', component: PokemonModalComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }