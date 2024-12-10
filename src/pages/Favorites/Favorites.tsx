import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/24/solid";
const Favorites = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
	const rating = useSelector((state: RootState) => state.favorites.rating)
	console.log(rating)
  return (
    <div className="container text-secondary mt-10">
      <h1 className="text-xl font-medium border-b border-secondary pb-1">
        Your favorites list
      </h1>

      <ul className="mt-2">
        {favorites.length > 0
          ? favorites.map((fav) => (
              <li
                className="p-3 hover:bg-border rounded-lg duration-150 flex cursor-pointer justify-between items-center"
                key={fav.id}
              >
                <div className="flex">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${fav.poster_path}`}
                    alt=""
                    className="w-[80px]"
                  />
                  <div className="ml-5">
                    <h1>{fav.name || fav.title}</h1>
										<h1>{rating[fav.id]}</h1>
                  </div>
                </div>
                <TrashIcon className="size-10 hover:text-active duration-150" />
              </li>
            ))
          : "Not found any movie"}
      </ul>
    </div>
  );
};

export default Favorites;
