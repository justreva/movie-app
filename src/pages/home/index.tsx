import { useQuery } from "react-query";
import { fetchMoviesInTheaters } from "../../api/tmdb";
import "./Home.css";
import Slider from "../../components/Slider/Slider";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Movie } from "../../types/filmTypes";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = () => {

  const { data, error, isLoading } = useQuery(
    "movieNowPlaying",
    fetchMoviesInTheaters
  );
  const moviesInTheaters : Movie[] | [] = data?.data.results;

  if(isLoading) return <Loading></Loading> 
  if(error) return <Error></Error>
  return (
    <main className="content container mx-auto">
      <div className="title">
        Welcome back, <i>User</i>. Here’s what you can watch…
      </div>

      <div className="recent-films">
        <div className="recent-films__title">Now playing in theatres</div>
        <div className="mt-2">
          {moviesInTheaters.map((movie) => {
            return <MovieCard movie={movie}/>
          }
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
