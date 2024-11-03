import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/filmTypes";

const BASE_API_URL = "https://api.themoviedb.org/3/";

const API_TOKEN = "3a7bb0396f2431a1b8f0e73fc21205e6";

export const tmdbApi = axios.create({
  baseURL: BASE_API_URL,
  params: {
    language: "en-US",
  },
  headers: {
    accept: "application/json",
    Authorization: API_TOKEN,
  },
});

export const fetchMoviesInTheaters = () => tmdbApi.get("/movie/now_playing");

export const fetchMovieDetails = (id: number): Promise<AxiosResponse<Movie>> =>
  tmdbApi.get(`/movie/${id}`);

export const fetchMovieCast = (id: number): Promise<AxiosResponse<Movie>> =>
  tmdbApi.get(`/movie/${id}/credits?language=en-US`);

export const fetchRecommendations = (id: number): Promise<AxiosResponse<Movie>> => tmdbApi.get(`/movie/${id}/recommendations`)