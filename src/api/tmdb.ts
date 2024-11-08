import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/filmTypes";


const BASE_API_URL = "https://api.themoviedb.org/3/";


console.log(import.meta.env.VITE_API_TOKEN)
export const tmdbApi = axios.create({
  baseURL: BASE_API_URL,
  params: {
    language: "en-US",
  },
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_TOKEN,
  },
});

export const fetchMoviesInTheaters = () => tmdbApi.get("/movie/now_playing");

export const fetchMovieDetails = (id: number): Promise<AxiosResponse<Movie>> =>
  tmdbApi.get(`/movie/${id}`);

export const fetchMovieCast = (id: number): Promise<AxiosResponse<Movie>> =>
  tmdbApi.get(`/movie/${id}/credits?language=en-US`);

export const fetchRecommendations = (id: number): Promise<AxiosResponse<Movie>> => tmdbApi.get(`/movie/${id}/recommendations`)