import { SimpsonsResult } from '../interfaces/simpsons.interface';
import { Simpsons } from '../interfaces/simpsons.interface';

export class PokeMapper {
  static mapToPokemon(item: SimpsonsResult, index: number): Simpsons {
    return {
      name: item.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    };
  }

  static mapArray(items: SimpsonsResult[]): Simpsons[] {
    return items.map((item, index) => this.mapToPokemon(item, index));
  }
}
