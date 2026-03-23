import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeAPI } from '../interfaces/poke.interface';
import { environment } from '@environments/environment';
import { forkJoin, switchMap } from 'rxjs';
import { PokeApiResponse } from '../interfaces/poke-api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  getPokemons() {
    return this.http
      .get<PokeAPI>(`${environment.ApiUrlPokedesk}/pokemon/`, {
        params: {
          limit: 10,
          offset: 0,
        },
      })
      .pipe(
        switchMap((resp) =>
          forkJoin(
            resp.results.map((pokemon) => this.getPokemonByName(pokemon.name)),
          ),
        ),
      );
  }

  getPokemonById(id: string) {
    return this.http.get<PokeApiResponse>(
      `${environment.ApiUrlPokedesk}/pokemon/${id}`,
    );
  }

  getPokemonByName(name: string) {
    return this.http.get<PokeApiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    );
  }

  private extractId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
}
