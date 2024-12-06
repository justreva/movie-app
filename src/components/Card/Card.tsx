import { PhotoIcon } from "@heroicons/react/24/solid";
import { MediaType, Movie } from "../../types/filmTypes";
import { ratingStyle, useNavigator } from "../../utils/utils";

import Actions from "../Actions/Actions";

interface MovieCardProps {
  movie: Movie;
  media_type: MediaType;
}

const Card = ({ movie }: MovieCardProps) => {
  const navigateToMovie = useNavigator();
  return (
    <div
      onClick={() => navigateToMovie(movie)}
      className={`w-[210px] border border-border rounded-lg shadow-lg overflow-hidden hover:border-secondary duration-150 relative group cursor-pointer`}
    >
      <div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[312px]"
          />
        ) : (
          <div className="w-full h-[312px] flex justify-center items-center"> 
            <PhotoIcon className="size-44 animate-pulse" />
          </div>
        )}
      </div>
      <div className="absolute bg-opacity-80 top-0 left-0 ">
        {ratingStyle(movie.vote_average)}
      </div>
      <div className="actions hidden absolute space-x-2 bg-primary p-1 rounded-lg bg-opacity-80 top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:flex group-focus-within:flex text-secondary">
        <Actions />
      </div>
    </div>
  );
};

export default Card;
