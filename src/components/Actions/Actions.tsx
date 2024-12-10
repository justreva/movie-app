import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { setRating ,toggleFavorite } from "../../app/slices/favoriteFilmSlice";
import { Movie } from "../../types/filmTypes";
interface ActionsProps {
  movie: Movie;
}

const Actions = ({ movie }: ActionsProps) => {
  const dispatch = useDispatch();
  // const rating = useSelector(
  //   (state: RootState) => state.favorites.rating[movie.id]
  // );
  const rating = useSelector(
    (state: RootState) => state.favorites.rating[movie.id]
  );
  const [hover, setHover] = useState<number | null>(null);
  const isFavorite = useSelector((state: RootState) =>
    state.favorites.favorites.some((fav) => fav.id == movie.id)
  );
  console.log(isFavorite);
  const handleFavorite = () => {
    dispatch(toggleFavorite(movie));
  };
  const handleRating =(newRating: number) => {
    dispatch(setRating({movieId: movie.id , rating: newRating}))
  }

  return (
    <div className="flex items-center justify-center">
      <div className="mr-2 flex">
        {[...Array(5)].map((_, index) => {
          const currentRating: number = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rate"
                className="hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRating(currentRating);
                }}
              />
              <StarIcon
                className={`${
                  currentRating <= (hover ?? rating ?? 0)
                    ? "text-yellow-500"
                    : ""
                } size-6 text-secondary cursor-pointer duration-150`}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      <label>
        <input
          type="radio"
          name="favorite"
          className="hidden"
          onClick={handleFavorite}
        />
        <HeartIcon
          className={`${
            isFavorite ? "text-active" : "text-secondary "
          } size-6 cursor-pointer duration-150 hover:text-active`}
        />
      </label>
    </div>
  );
};

export default Actions;
