export interface SimpsonsResponse {
  id: number;
  age: number;
  birthdate: Date;
  description: string;
  first_appearance_ep_id: number;
  first_appearance_sh_id: number;
  gender: string;
  name: string;
  occupation: string;
  phrases: string[];
  portrait_path: string;
  status: string;
  first_appearance_ep: FirstAppearance;
  first_appearance_sh: FirstAppearance;
}

export interface FirstAppearance {
  id: number;
  airdate: Date;
  description: string;
  episode_number: number;
  image_path: string;
  name: string;
  season: number;
  synopsis: string;
}
