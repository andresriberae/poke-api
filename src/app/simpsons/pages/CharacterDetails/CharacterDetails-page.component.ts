import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SimpsonsService } from '../../services/SimpsonsService';
import { TitleCasePipe } from '@angular/common';
import { SimpsonsResponse } from '../../interfaces/simpsons-character.interface';
import { environment } from '@environments/environment';

@Component({
  selector: 'character-details',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './CharacterDetails-page.component.html',
})
export default class CharacterDetailsPageComponent {
  simpsonsService = inject(SimpsonsService);

  simpsons = toSignal<SimpsonsResponse>(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['id']),
      switchMap((id) => this.simpsonsService.getSimpsonsById(id)),
    ),
    { initialValue: null },
  );
  image = computed(() => {
    const character = this.simpsons();
    if (!character) return '';
    return `${environment.pathImageSimpsons}${character.portrait_path}`;
  });
}
