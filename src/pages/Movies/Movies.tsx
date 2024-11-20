import { useQuery } from "react-query";
import { fetchMovies } from "../../api/tmdb";
import { MediaType, Movie } from "../../types/filmTypes";

import Loading from "../../components/Loading/Loading";
import Carousel from "../../components/Carousel/Carousel";
import Popular from "../../components/Popular/Popular";

interface MoviesProps {
  mediaType: MediaType;
}

const Movies = (props: MoviesProps) => {
  const topRatedQuery = useQuery(["topRated"], () =>
    fetchMovies(props.mediaType, "top_rated")
  );
  const popularQuery = useQuery("popular", () =>
    fetchMovies(props.mediaType, "popular")
  );

  const popularMovies: Movie[] | undefined =
    popularQuery.data?.data.results.slice(0, 8);
  const topRated: Movie[] | undefined = topRatedQuery.data?.data.results.slice(
    0,
    10
  );

  if (topRatedQuery.isLoading || popularQuery.isLoading)
    return <Loading></Loading>;

  return (
    <div className="container text-secondary mt-10">
      {topRated ? <Carousel movies={topRated} /> : <Loading></Loading>}
      <div className="mt-5">
        <h1 className="text-xl border-b border-secondary pb-1">Popular</h1>
        {popularMovies ? (
          <Popular movies={popularMovies} />
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};

export default Movies;
