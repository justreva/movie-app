import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/filmTypes";

const BASE_API_URL = "https://api.themoviedb.org/3/";

const API_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdiYjAzOTZmMjQzMWExYjhmMGU3M2ZjMjEyMDVlNiIsIm5iZiI6MTczMTA3MzA3MC45NTI0ODg3LCJzdWIiOiI2NWVmMzA1NmFmNThjYjAxODYyYmU1NGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jAFLrxX3seAFa11rA_tUOxxwc5pxxrq7kxtJ4xkS6NY";

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