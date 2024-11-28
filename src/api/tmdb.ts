import axios, { AxiosResponse } from "axios";
import { MediaType, Movie, Person } from "../types/filmTypes";

const BASE_API_URL = "https://api.themoviedb.org/3/";
export const tmdbApi = axios.create({
  baseURL: BASE_API_URL,
  params: {
    language: "en-US",
  },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export const fetchMoviesInTheaters = () => tmdbApi.get("/movie/now_playing");

export const fetchMovieDetails = (
  mediaType: MediaType,
  id: number
): Promise<AxiosResponse<Movie>> => tmdbApi.get(`/${mediaType}/${id}`);

export const fetchMovieCast = (
  mediaType: MediaType,
  id: number
): Promise<AxiosResponse<Person>> =>
  tmdbApi.get(`/${mediaType}/${id}/credits?language=en-US`);

export const fetchRecommendations = (
  mediaType: MediaType,
  id: number
): Promise<AxiosResponse<Movie>> =>
  tmdbApi.get(`/${mediaType}/${id}/recommendations`);

export const fetchPersonDetails = (
  id: number
): Promise<AxiosResponse<Person>> => tmdbApi.get(`/person/${id}`);

export const fetchMoviesWithPerson = (
  id: number
): Promise<AxiosResponse<Movie>> =>
  tmdbApi.get(`/person/${id}/combined_credits`);

export const fetchTrendingMovies = (
  time_window: string
): Promise<AxiosResponse<Movie[]>> =>
  tmdbApi.get(`/trending/movie/${time_window}`);

export const fetchTrendingSeries = (
  time_window: string
): Promise<AxiosResponse> => tmdbApi.get(`/trending/tv/${time_window}`);

export const fetchSeasonsDetails = (
  series_id: number,
  season_number: number
): Promise<AxiosResponse> =>
  tmdbApi.get(`/tv/${series_id}/season/${season_number}`);

export const fetchMovies = (
  mediaType: string,
  request: string
): Promise<AxiosResponse> => tmdbApi.get(`/${mediaType}/${request}`);

export const fetchSearchQuery = (type: string, query: string): Promise<AxiosResponse> =>
  tmdbApi.get(`/search/${type}?query=${query}`);
