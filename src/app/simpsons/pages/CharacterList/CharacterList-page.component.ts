import { Component, inject } from '@angular/core';
import { SimpsonsService } from '../../services/SimpsonsService';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { Simpsons } from '../../interfaces/simpsons.interface';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './CharacterList-page.component.html',
})
export default class PokemonListPageComponent {
  simpsonsService = inject(SimpsonsService);
  pokemons = this.simpsonsService.simpsons;
}
