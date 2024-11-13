import { useQuery } from "react-query";
import { fetchMoviesInTheaters, fetchTrendingMovies, fetchTrendingSeries } from "../../api/tmdb";
import "./Home.css";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Movie } from "../../types/filmTypes";
import MovieSlider from "../../components/MovieSlider/MovieSlider";

const Home = () => {
  const trendingMoviesQuery = useQuery(
    "trendingMovies",
    fetchTrendingMovies
  );
  const trendingMovies: Movie[] | [] = trendingMoviesQuery.data?.data.results;

  const trendingSerialsQuery = useQuery("trendingSerials", fetchTrendingSeries)
  const trendingSerials: Movie[] | [] = trendingSerialsQuery.data?.data.results

  if (trendingMoviesQuery.isLoading) return <Loading></Loading>;
  if (trendingMoviesQuery.isError) return <Error></Error>;
  return (
    <main className="content container">
      <div className="title">
        Welcome back, <i>User</i>. Here’s what you can watch…
      </div>

      <div className="trending">
        <div className="trending_title">Trending movies on this week</div>
        <div className="mt-2">
          <MovieSlider movies={trendingMovies} />
        </div>

        <div>
          <div className="trending_title mt-10">
            Trending serials on this week
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
