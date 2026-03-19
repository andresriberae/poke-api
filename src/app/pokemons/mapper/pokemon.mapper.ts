import { PokeApiResponse } from '../interfaces/poke-api.interfaces';
import { Pokemon } from '../interfaces/pokemon.interface';

export class PokeMapper {
  static mapToPokemon(item: PokeApiResponse, index: number): Pokemon {
    return {
      id: index + 1,
      name: item.name,
      image: item.sprites.other?.['official-artwork'].front_default,
    };
  }

  static mapArray(items: PokeApiResponse[]): Pokemon[] {
    return items.map((item, index) => this.mapToPokemon(item, index));
  }
}
