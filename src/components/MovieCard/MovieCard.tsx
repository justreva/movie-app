import { Link } from "react-router-dom";
import { Movie } from "../../types/filmTypes";
import Actions from "../Actions/Actions";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="w-[300px] border border-border rounded-lg shadow-lg overflow-hidden hover:border-secondary duration-150 relative group cursor-pointer">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-[100%] w-[100%]"
        />
      </Link>
      <div className="actions hidden absolute space-x-2 bg-primary p-1 rounded-lg bg-opacity-80 top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:flex group-focus-within:flex text-secondary">
        <Actions />
      </div>
    </div>
  );
};

export default MovieCard;
