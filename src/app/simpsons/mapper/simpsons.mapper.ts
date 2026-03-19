import { SimpsonsResult } from '../interfaces/simpsons.interface';
import { Simpsons } from '../interfaces/simpsons.interface';

export class PokeMapper {
  static mapToPokemon(item: SimpsonsResult, index: number): Simpsons {
    return {
      name: item.name,
      image: `https://cdn.thesimpsonsapi.com/500/character/${index + 1}.webp`,
    };
  }

  static mapArray(items: SimpsonsResult[]): Simpsons[] {
    return items.map((item, index) => this.mapToPokemon(item, index));
  }
}
