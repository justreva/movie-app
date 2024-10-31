import { useQuery } from "react-query";
import { fetchMoviesInTheaters } from "../../api/tmdb";
import "./Home.css";
import Slider from "../../components/Slider/Slider";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Home = () => {

  const { data, error, isLoading } = useQuery(
    "movieNowPlaying",
    fetchMoviesInTheaters
  );
  const moviesInTheaters = data?.data.results || [];

  if(isLoading) return Loading
  if(error) return Error
  return (
    <main className="content container mx-auto">
      <div className="title">
        Welcome back, <i>User</i>. Here’s what you can watch…
      </div>

      <div className="recent-films">
        <div className="recent-films__title">Now playing in theatres</div>
        <div className="mt-2">
          <Slider slides={moviesInTheaters} />
        </div>
      </div>
    </main>
  );
};

export default Home;
