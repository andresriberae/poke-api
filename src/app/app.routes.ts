import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pokemons/pages/HomePage/Home-page.component'),
  },
  {
    path: 'pokemons',
    loadComponent: () =>
      import('./pokemons/pages/PokemonList/PokemonList-page.component'),
  },
  {
    path: 'pokemons/:name',
    loadComponent: () =>
      import('./pokemons/pages/PokemonDetails/PokemonDetails-page.component'),
  },
  {
    path: 'simpsons',
    loadComponent: () =>
      import('./simpsons/pages/CharacterList/CharacterList-page.component'),
  },
  {
    path: 'simpsons/:id',
    loadComponent: () =>
      import('./simpsons/pages/CharacterDetails/CharacterDetails-page.component'),
  },
  {
    path: '**',
    redirectTo: 'pokemons',
  },
];
