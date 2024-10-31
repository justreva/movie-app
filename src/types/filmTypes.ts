
export interface Genre {
  genre_id: number;
  name: string;
}
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  tagline: string;
  genres: Genre[]
}
export interface Serial {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  tagline: string;
  genres: Genre[];
}