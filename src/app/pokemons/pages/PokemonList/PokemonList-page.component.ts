import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/PokeService';
import { PokemonCard } from "../../components/pokemonCard/pokemonCard";

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [PokemonCard],
  templateUrl: './PokemonList-page.component.html',
})
export default class PokemonListPageComponent {
  pokemonService = inject(PokemonService);
}
