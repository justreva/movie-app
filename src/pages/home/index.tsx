import { useQuery } from "react-query";
import {
  fetchTrendingMovies,
  fetchTrendingSeries,
} from "../../api/tmdb";


import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Movie } from "../../types/filmTypes";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { useState } from "react";

const Home = () => {
  const [movieTimeWindow, setMovieTimeWindow] = useState("week");
  const [serialTimeWindow, setSerialTimeWindow] = useState("week");
  
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
  const trendingMovies = trendingMoviesQuery.data?.data.results || [];
  const trendingSerials: Movie[] = trendingSerialsQuery.data?.data.results || [];

  if (trendingMoviesQuery.isLoading || trendingSerialsQuery.isLoading)
    return <Loading></Loading>;
  if (trendingMoviesQuery.isError || trendingSerialsQuery.isError)
    return <Error></Error>;
  return (
    <main className="pt-[30px] container">
      <div className="text-center text-3xl mt-10 mb-10 text-secondary">
        Welcome back, <i>User</i>. Here’s what you can watch…
      </div>

      <div className="trending">
        <div className="text-secondary border-b border-secondary text-xl pb-1 mt-10 flex justify-between">
          <h1>Trending movies</h1>
          <select
            onChange={(e) => handleSelectChangeMovie(e.target.value)}
            className="text-base bg-primary border border-border rounded-lg p-1 hover:border-secondary cursor-pointer delay-150 hover:bg-primary active:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          >
            <option value="week">week</option>
            <option value="day">day</option>
          </select>
        </div>
        <div className="mt-2">
          <MovieSlider movies={trendingMovies} media_type="movie"/>
        </div>

        <div>
          <div className="text-secondary border-b border-secondary text-xl pb-1 mt-10 flex justify-between">
            <h1>Trending serials</h1>
            <select
            onChange={(e) => handleSelectChangeSerial(e.target.value)}
            className="text-base bg-primary border border-border rounded-lg p-1 hover:border-secondary cursor-pointer delay-150 hover:bg-primary active:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          >
            <option value="week">week</option>
            <option value="day">day</option>
          </select>
          </div>
          <div className="mt-2">
            <MovieSlider movies={trendingSerials} media_type="movie"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
