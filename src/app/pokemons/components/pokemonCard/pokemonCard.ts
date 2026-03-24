import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokeApiResponse } from '../../interfaces/poke-api.interfaces';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'item-pokemon-card',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './pokemonCard.html',
})
export class PokemonCard {
  pokemones = input.required<PokeApiResponse[]>()
 }
