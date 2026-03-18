import { PokeResult } from '../interfaces/poke.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

export class PokeMapper {

  static mapToPokemon(item: PokeResult, index: number): Pokemon {
    return {
      id: index + 1,
      name: item.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  }

  static mapArray(items: PokeResult[]): Pokemon[] {
    return items.map((item, index) =>
      this.mapToPokemon(item, index)
    );
  }

}