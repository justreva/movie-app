import { useNavigate } from "react-router-dom";
import { MediaType, Movie } from "../../types/filmTypes";
import { getYear, ratingStyle } from "../../utils/utils";
interface topRatedProps {
  movie: Movie;
}
interface detailsProps {
  movie: Movie;
  media_type: MediaType;
  first_air_date: string
  id: string
  
}
const TopRated = ({ movie }: topRatedProps) => {
  console.log(movie)
  const navigate = useNavigate();
  const goToDetailPage = (movie: detailsProps) => {
    if (!movie.first_air_date) {
      return navigate(`/movie/${movie.id}`);
    }
    navigate(`/tv/${movie.id}`);
  };

  return (
    <div onClick={() => goToDetailPage(movie)} className=" w-[650px] border relative border-border hover:border-secondary duration-150 rounded-lg overflow-hidden cursor-pointer shadow-lg">
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="w-[1000px]"
        />
      </div>
      <div className="absolute left-0 top-0 bg-black/60 w-full h-full">
        <div className="absolute top-[60%] left-5 ">
          <div className="flex space-x-3">
            <h1 className="text-2xl font-medium">{movie?.title || movie?.name}</h1>
            <h1>{ratingStyle(movie.vote_average)}</h1>
          </div>
          <h1 className="text-sm">{getYear(movie)}</h1>
          <h1 className="text-sm w-[300px]">{movie.overview.slice(0, 100)}...</h1>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
