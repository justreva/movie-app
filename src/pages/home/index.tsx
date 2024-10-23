import { useQuery } from "react-query";
import { fetchMoviesInTheaters } from "../../api/tmdb";
import "./Home.css";
import Slider from "../../components/Slider/Slider";
const Home = () => {
  const { data, error, isLoading } = useQuery(
    "movieNowPlaying",
    fetchMoviesInTheaters
  );
  const movies = data?.data.results || []
  return (
    <main className="content">
      <div className="title">
        Welcome back, <i>User</i>. Here’s what you can watch…
      </div>

      <div className="recent-films">
        <div className="recent-films__title">
          <a href="#" className="">
            Recent films released
          </a>
        </div>

        {/* <ul className="recent-films-grid">
          {data?.data.results.map((movie) => (
            <FilmCard key={movie.id} movie={movie} />
          ))}
        </ul> */}
         <Slider slides={movies}/> 
        
      </div>
    </main>
  );
};

export default Home;
