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

export const fetchMovieDetails = (mediaType: MediaType, id: number): Promise<AxiosResponse<Movie>> =>
  tmdbApi.get(`/${mediaType}/${id}`);

export const fetchMovieCast = (id: number): Promise<AxiosResponse<Person>> =>
  tmdbApi.get(`/movie/${id}/credits?language=en-US`);

export const fetchRecommendations = (id: number): Promise<AxiosResponse<Movie>> => tmdbApi.get(`/movie/${id}/similar`)

export const fetchPersonDetails = (id: number): Promise<AxiosResponse<Person>> => tmdbApi.get(`/person/${id}`)

export const fetchMoviesWithPerson = (id: number): Promise<AxiosResponse<Movie>> => tmdbApi.get(`/person/${id}/movie_credits`)

export const fetchTrendingMovies = (): Promise<AxiosResponse<Movie>> => tmdbApi.get(`/trending/movie/week`)

export const fetchTrendingSeries = (): Promise<AxiosResponse> => tmdbApi.get(`/trending/tv/week`)