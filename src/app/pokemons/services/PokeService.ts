import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeAPI } from '../interfaces/poke.interface';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokeMapper } from '../mapper/pokemon.mapper';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);

  pokemons = signal<Pokemon[]>([]);

  constructor() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.http.get<PokeAPI>(`${environment.ApiUrlPokedesk}`, {
      params: {
        limit: 20,
        offset: 0
      }
    })
      .subscribe(resp => {
        const mapped = PokeMapper.mapArray(resp.results);
        this.pokemons.set(mapped);
      });
  }

  getPokemonByName(name: string) {
    const pokemon= this.http.get<any>(`${environment.ApiUrlPokedesk}/${name}`);
    return pokemon;
  }

}
