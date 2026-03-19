// Interface que arroja el get https://thesimpsonsapi.com/api/characters?page=2
// No esta siendo utilizada

export interface SimpsonsAPI {
  count: number;
  next: string;
  prev: null;
  pages: number;
  results: SimpsonsResult[];
}

export interface SimpsonsResult {
  id: number;
  age: number | null;
  birthdate: Date | null;
  gender: Gender;
  name: string;
  occupation: string;
  portrait_path: string;
  phrases: string[];
  status: Status;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export enum Status {
  Alive = 'Alive',
  Deceased = 'Deceased',
}
