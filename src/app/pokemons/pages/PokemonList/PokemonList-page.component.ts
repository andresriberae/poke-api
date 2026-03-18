import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/PokeService';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './PokemonList-page.component.html',
})
export default class PokemonListPageComponent {
  pokemonService = inject(PokemonService);
  pokemons = this.pokemonService.pokemons;
}
