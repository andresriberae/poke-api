export interface SimpsonsAPI {
  count: number;
  next: string;
  previous: null;
  results: SimpsonsResult[];
}

export interface SimpsonsResult {
  name: string;
  url: string;
}

export interface Simpsons {
  name: string;
  image: string;
}
