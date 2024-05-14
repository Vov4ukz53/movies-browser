export interface Person {
  name?: string;
  job?: string;
  id?: number;
  profile_path?: string;
  character?: string;
  birthday?: string;
  place_of_birth?: string;
  biography?: string;
}

export interface Genre {
  id: number;
  name: number;
}

export interface Country {
  name: string;
  id: number;
}

export interface Movie {
  backdrop_path?: string;
  original_title?: string;
  vote_average?: number;
  vote_count?: number;
  poster_path?: string;
  release_date?: string;
  genres?: Genre[];
  production_countries?: Country[];
  overview?: string;
  id?: number;
  title?: string;
  genre_ids?: number[];
}