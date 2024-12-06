import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const Actions = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [favorite, setFavorite] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center">
      <div className="mr-2 flex">
        {[...Array(5)].map((star, index) => {
          const currentRating: number = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rate"
                className="hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setRating(currentRating);
                }}
              />
              <StarIcon
                className={`${
                  currentRating <= (hover ?? rating ?? 0)
                    ? "text-yellow-500"
                    : ""
                } size-6 text-secondary cursor-pointer`}
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
          onClick={() => setFavorite(!favorite)}
        />
        <HeartIcon className={`${favorite ? "text-active" : "text-secondary "} size-6 cursor-pointer duration-150`} />
      </label>
    </div>
  );
};

export default Actions;
