import { Movie } from "../../types/filmTypes";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

interface MoviesSliderProps {
  movies: Movie[];

}

const MovieSlider = ({ movies}: MoviesSliderProps) => {
  return (
    <Slider
      items={movies}
      renderItem={(movie) => <Card movie={movie} />}
    />
  );
};

export default MovieSlider;
