import { Movie } from "../../types/filmTypes";
import { getYear, ratingStyle } from "../../utils/utils";
interface topRatedProps {
  movie: Movie;
}

const TopRated = ({ movie }: topRatedProps) => {
  console.log(movie);
  return (
    <div className="w-[650px] border relative border-border rounded-lg overflow-hidden cursor-pointer shadow-lg">
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="w-[1000px]"
        />
      </div>
      <div className="absolute left-0 top-0 bg-black/60 w-full h-full">
        <div className="absolute top-[60%] left-5 ">
          <div className="flex space-x-3">
            <h1 className="text-xl font-medium">{movie.title}</h1>
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
