import { Component, inject } from '@angular/core';
import { SimpsonsService } from '../../services/SimpsonsService';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'simposons-list',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './CharacterList-page.component.html',
})
export default class SimpsonsListPageComponent {
  simpsonsService = inject(SimpsonsService);
  simpsons = this.simpsonsService.simpsons;
}
