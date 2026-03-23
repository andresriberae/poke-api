import { PokeResult } from '../interfaces/poke.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

export class PokeMapper {
  static mapToPokemon(item: PokeResult, index: number): Pokemon {
    return {
      id: index + 1,
      name: item.name,
      image: item.url,
      // image: item.sprites.other?.['official-artwork'].front_default,
    };
  }

  static mapArray(items: PokeResult[]): Pokemon[] {
    return items.map((item, index) => this.mapToPokemon(item, index));
  }
}
