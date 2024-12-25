import { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { HeartIcon, StarIcon, TrashIcon } from "@heroicons/react/24/solid";
import { getYear, useNavigator } from "../../utils/utils";
import { deleteMovie } from "../../app/slices/favoriteFilmSlice";
import { Movie } from "../../types/filmTypes";


const Profile = () => {
  const navigateToMovie = useNavigator();
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.movies.favorites);
  const rating = useSelector((state: RootState) => state.movies.ratedMovies);
  const allMovies = [...favorites, ...rating].reduce((acc: Movie[], movie: Movie) => {
    if (!acc.some((item: Movie) => item.id === movie.id)) {
      acc.push(movie);
    }
    return acc;
  }, []);

  const handleDelete = (id: number) => {
    dispatch(deleteMovie(id))
  }
  console.log(allMovies)

  return (
    <div className="container text-secondary mt-10">
      <h1 className="text-xl font-medium border-b border-secondary pb-1">
        Your activity
      </h1>

      <ul className="mt-2">
        {allMovies.length > 0
          ? allMovies.map((fav: Movie) => (
              <li
                onClick={()=> navigateToMovie(fav)}
                className="p-3 hover:bg-border duration-150 flex cursor-pointer justify-between items-center border-b border-border"
                key={fav.id}
              >
                <div className="flex">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${fav.poster_path}`}
                    alt=""
                    className="w-[80px] border border-border rounded-lg shadow-lg"
                  />
                  <div className="ml-5">
                    <div className="flex items-center space-x-2">
                      <h1>{fav.name || fav.title}</h1>
                      {favorites.some((item) => item.id === fav.id) ? (
                        <HeartIcon className="size-5 text-active" />
                      ) : (
                        ""
                      )}
                    </div>
                      <h1 className="mt-1 text-description text-sm">{getYear(fav)}</h1>
                    <div className="flex mt-4">
                      {fav?.rating ?[...Array(fav.rating)].map((_, index) => (
                        <StarIcon
                          key={index}
                          className="size-5 text-yellow-500"
                        />
                      )) : ""}
                    </div>
                  </div>
                </div>
                <TrashIcon className="size-10 hover:text-active duration-150" onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(fav.id)
                }}/>
              </li>
            ))
          : "Not found any movie"}
      </ul>
    </div>
  );
};

export default Profile;
