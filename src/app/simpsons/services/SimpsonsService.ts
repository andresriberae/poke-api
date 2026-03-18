import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimpsonsAPI, Simpsons } from '../interfaces/simpsons.interface';
import { PokeMapper } from '../mapper/simpsons.mapper';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SimpsonsService {
  private http = inject(HttpClient);

  simpsons = signal<Simpsons[]>([]);

  constructor() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.http
      .get<SimpsonsAPI>(`${environment.ApiUrlSimpsons}`, {
        params: {
          limit: 20,
          offset: 0,
        },
      })
      .subscribe((resp) => {
        const mapped = PokeMapper.mapArray(resp.results);
        this.simpsons.set(mapped);
      });
  }

  getPokemonByName(name: string) {
    const pokemon = this.http.get<any>(`${environment.ApiUrlSimpsons}/${name}`);
    return pokemon;
  }
}
