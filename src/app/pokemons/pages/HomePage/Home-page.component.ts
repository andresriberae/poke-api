import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './Home-page.component.html',
})
export default class HomePageComponent {}
