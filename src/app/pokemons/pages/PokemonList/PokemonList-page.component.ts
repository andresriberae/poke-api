import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/PokeService';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './PokemonList-page.component.html',
})
export default class PokemonListPageComponent {
  private pokemonService = inject(PokemonService);

  pokemon = toSignal(this.pokemonService.getPokemons(), { initialValue: [] });
}
