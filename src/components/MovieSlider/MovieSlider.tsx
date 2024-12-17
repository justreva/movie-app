import { MediaType, Movie } from "../../types/filmTypes";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

interface MoviesSliderProps {
  movies: Movie[];
  media_type: MediaType;
}

const MovieSlider = ({ movies }: MoviesSliderProps) => {
  return (
    <Slider
      items={movies}
      renderItem={(movie) => <Card movie={movie} media_type={"movie"} />}
    />
  );
};

export default MovieSlider;
