import { useQuery } from "react-query";
import { fetchMovies } from "../../api/tmdb";
import { Movie } from "../../types/filmTypes";

import Loading from "../../components/Loading/Loading";
import Carousel from "../../components/Carousel/Carousel";

const Movies = () => {
  const topRatedQuery = useQuery(["topRated"], () => fetchMovies("top_rated"));
  const topRated: Movie[] | undefined = topRatedQuery.data?.data.results.slice(
    0,
    10
  );

  if (topRatedQuery.isLoading) return <Loading></Loading>;
  return (
    <div className="container text-secondary mt-10">
      <div className="">
        {topRated ? <Carousel movies={topRated} /> : <Loading></Loading>}
      </div>

      <div className="mt-5">
        <h1 className="text-xl border-b border-secondary pb-1">Popular</h1>
        
      </div>
    </div>
  );
};

export default Movies;
