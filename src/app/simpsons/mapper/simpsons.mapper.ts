import { SimpsonsResult } from '../interfaces/simpsons-api.interface';
import { Simpsons } from '../interfaces/simpsons.interface';

export class SimpMapper {
  static mapToSimpsons(item: SimpsonsResult): Simpsons {
    return {
      id: item.id,
      name: item.name,
      image: `https://cdn.thesimpsonsapi.com/500${item.portrait_path}`,
    };
  }

  static mapArray(items: SimpsonsResult[]): Simpsons[] {
    return items.map((item) => this.mapToSimpsons(item));
  }
}
