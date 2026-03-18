import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SimpsonsService } from '../../services/SimpsonsService';
import { TitleCasePipe } from '@angular/common';
import { SimpsonsResponse } from '../../interfaces/simpsons-character.interface';

@Component({
  selector: 'pokemon-details',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './CharacterDetails-page.component.html',
})
export default class PokemonDetailsPageComponent {
  simpsonsService = inject(SimpsonsService);

  simpsons = toSignal<SimpsonsResponse>(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['name']),
      switchMap((name) => this.simpsonsService.getPokemonByName(name)),
    ),
    { initialValue: null },
  );
}
