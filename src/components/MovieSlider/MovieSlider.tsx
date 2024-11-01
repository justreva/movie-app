import { Movie } from "../../types/filmTypes";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "../Slider/Slider";

interface MoviesSliderProps {
  movies: Movie[];
}

const MovieSlider = ({ movies }: MoviesSliderProps) => {
  return (
    <Slider
      items={movies}
      renderItem={(movie) => <MovieCard movie={movie} />}
    />
  );
};

export default MovieSlider;
