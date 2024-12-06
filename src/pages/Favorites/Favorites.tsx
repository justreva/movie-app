import { RootState } from "../../app/store";
import { useSelector } from "react-redux";



const Favorites = () => {
	const favorites = useSelector((state: RootState) => state.favorites.favorites)
	console.log(favorites)
  return (
    <div className="container text-secondary mt-10">
      <h1 className="text-xl font-medium border-b border-secondary pb-1">Your favorites list</h1>

			<div className="mt-2">
			{favorites.length > 0 ? "list" : "Not found any movie"}
			</div>
    </div>
  );
};

export default Favorites;
