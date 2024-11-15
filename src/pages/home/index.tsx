import { useQuery } from "react-query";
import {
  fetchMoviesInTheaters,
  fetchTrendingMovies,
  fetchTrendingSeries,
} from "../../api/tmdb";
import "./Home.css";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Movie } from "../../types/filmTypes";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { useState } from "react";

const Home = () => {
  const [movieTimeWindow, setMovieTimeWindow] = useState("day");
  const [serialTimeWindow, setSerialTimeWindow] = useState("day");
  const trendingMoviesQuery = useQuery(
    ["trendingMovies", movieTimeWindow],
    () => fetchTrendingMovies(movieTimeWindow),
    { keepPreviousData: true }
  );
  const trendingSerialsQuery = useQuery(["trendingSerials", serialTimeWindow],
    () => fetchTrendingSeries(serialTimeWindow),
    { keepPreviousData: true }
  );
  const handleSelectChangeMovie = (value: string) => {
    setMovieTimeWindow(value);
  };
  const handleSelectChangeSerial = (value: string) => {
    setSerialTimeWindow(value);
  };
  const trendingMovies: Movie[] | [] = trendingMoviesQuery.data?.data.results;
  const trendingSerials: Movie[] | [] = trendingSerialsQuery.data?.data.results;

  if (trendingMoviesQuery.isLoading || trendingSerialsQuery.isLoading)
    return <Loading></Loading>;
  if (trendingMoviesQuery.isError || trendingSerialsQuery.isError)
    return <Error></Error>;
  return (
    <main className="content container">
      <div className="title">
        Welcome back, <i>User</i>. Here’s what you can watch…
      </div>

      <div className="trending">
        <div className="trending_title flex justify-between">
          <h1>Trending movies on this week</h1>
          <select
            onChange={(e) => handleSelectChangeMovie(e.target.value)}
            className="text-base bg-primary border border-border rounded-lg p-1 hover:border-secondary cursor-pointer delay-150 hover:bg-primary active:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          >
            <option value="day">day</option>
            <option value="week">week</option>
          </select>
        </div>
        <div className="mt-2">
          <MovieSlider movies={trendingMovies} />
        </div>

        <div>
          <div className="trending_title mt-10 flex justify-between">
            <h1>Trending serials on this week</h1>
            <select
            onChange={(e) => handleSelectChangeSerial(e.target.value)}
            className="text-base bg-primary border border-border rounded-lg p-1 hover:border-secondary cursor-pointer delay-150 hover:bg-primary active:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          >
            <option value="day">day</option>
            <option value="week">week</option>
          </select>
          </div>
          <div className="mt-2">
            <MovieSlider movies={trendingSerials} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
