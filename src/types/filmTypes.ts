
export interface Genre {
  id: number;
  name: string;
}

export type MediaType = "movie" | "tv"

export interface Season {
  id: number;
  name:string;
  episode_count: number;
  season_number: number;
}

export interface Movie {
  id: number;
  title: string;
  name:string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  tagline: string;
  status:string;
  genres: Genre[],
  seasons?: Season[]

}

export interface Person {
  id: number,
  name: string,
  profile_path: string,
  character?:string,
  biography?:string,
  birthday?:string,
  deathday?: string,
  known_for_department:string,
}


export interface Episode {
  id: number;
  still_path: string;
  runtime: number;
  season_number: number;
}