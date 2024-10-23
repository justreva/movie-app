import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/filmTypes";

const BASE_API_URL = "https://api.themoviedb.org/3/";
const BASE_IMG_API = "https://image.tmdb.org/t/p/";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdiYjAzOTZmMjQzMWExYjhmMGU3M2ZjMjEyMDVlNiIsIm5iZiI6MTcyOTQzNzIzOC4wNTY4MTMsInN1YiI6IjY1ZWYzMDU2YWY1OGNiMDE4NjJiZTU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BILQxPUesqrgQfTw2IIZhcjFOx9ZfZNcuI2w57l37R4";

export const tmdbApi = axios.create({
  baseURL: BASE_API_URL,
  params: {
    language: "en-US",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdiYjAzOTZmMjQzMWExYjhmMGU3M2ZjMjEyMDVlNiIsIm5iZiI6MTcyOTY4ODU2NC40NDc2MDgsInN1YiI6IjY1ZWYzMDU2YWY1OGNiMDE4NjJiZTU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iAJJlc9oZUKmb0bL6ENm6O9h3aV_BmSLToU8VNqhvwU",
  },
});

export const fetchMoviesInTheaters = () => tmdbApi.get('/movie/now_playing');

export const fetchMovieDetails = (id: string): Promise<AxiosResponse<Movie>> =>
  tmdbApi.get(`/movie/${id}`);
