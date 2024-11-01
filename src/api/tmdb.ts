import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/filmTypes";

const BASE_API_URL = "https://api.themoviedb.org/3/";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdiYjAzOTZmMjQzMWExYjhmMGU3M2ZjMjEyMDVlNiIsIm5iZiI6MTcyOTQzNzIzOC4wNTY4MTMsInN1YiI6IjY1ZWYzMDU2YWY1OGNiMDE4NjJiZTU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BILQxPUesqrgQfTw2IIZhcjFOx9ZfZNcuI2w57l37R4";

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

