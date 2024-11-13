import { Link, useNavigate } from "react-router-dom";
import { MediaType, Movie } from "../../types/filmTypes";
import Actions from "../Actions/Actions";

interface MovieCardProps {
  movie: Movie;
  media_type:MediaType
}

const MovieCard = ({movie}: MovieCardProps) => {
  const navigate = useNavigate();
  const goToDetailPage = (movie: MovieCardProps) => {
    if(!movie.media_type) {
      return navigate(`/movie/${movie.id}`)
    }
    navigate(`/${movie.media_type}/${movie.id}`)
    console.log(movie)
  }
  return (
    <div
      className={`w-full border border-border rounded-lg shadow-lg overflow-hidden hover:border-secondary duration-150 relative group cursor-pointer`}
    >
      <div onClick={()=>goToDetailPage(movie)}>
      {movie.poster_path ? <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full"
        /> : <div className="bg-secondary animate-pulse w-full h-full"></div>}
        
      </div>
      <div className="actions hidden absolute space-x-2 bg-primary p-1 rounded-lg bg-opacity-80 top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:flex group-focus-within:flex text-secondary">
        <Actions />
      </div>
    </div>
  );
};

export default MovieCard;
