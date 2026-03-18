import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PokemonService } from '../../services/PokeService';
import { TitleCasePipe } from '@angular/common';
import { PokeApiResponse } from '../../interfaces/poke-api.interfaces';

@Component({
  selector: 'pokemon-details',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './PokemonDetails-page.component.html',
})
export default class PokemonDetailsPageComponent {

  pokemonService = inject(PokemonService);

  pokemon = toSignal<PokeApiResponse>(
    inject(ActivatedRoute).params.pipe(
      map(params => params['name']),
      switchMap(name => this.pokemonService.getPokemonByName(name))
    ),
    { initialValue: null }
  );

}
