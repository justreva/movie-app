import { Movie } from "../../types/filmTypes";
import { getYear, ratingStyle } from "../../utils/utils";
interface topRatedProps {
  movie: Movie;
}

const TopRated = ({ movie }: topRatedProps) => {
  console.log(movie);
  return (
    <div className="border relative border-border rounded-lg overflow-hidden group cursor-pointer ">
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className=""
        />
      </div>
      <div className="absolute hidden left-0 top-0 bg-black/60 w-full h-full group-hover:block group-focus-within:block ">
        <div className="absolute top-[70%] left-5 space-y-1">
          <div className="flex space-x-3">
            <h1 className="text-3xl font-medium">{movie.title}</h1>
            <h1>{ratingStyle(movie.vote_average)}</h1>
          </div>
          <h1>{getYear(movie)}</h1>
          <h1 className="w-[300px]">{movie.overview.slice(0, 100)}...</h1>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
