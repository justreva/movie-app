import { useQuery } from "react-query";
import { fetchMovies } from "../../api/tmdb";
import { Movie } from "../../types/filmTypes";
import Slider from "../../components/Slider/Slider";
import Loading from "../../components/Loading/Loading";
import TopRated from "../../components/TopRated/TopRated";

const Movies = () => {
  const topRatedQuery = useQuery(["topRated"], () => fetchMovies("top_rated"));
  const topRated: Movie[] | undefined = 
	topRatedQuery.data?.data.results.slice(0,5);

  if (topRatedQuery.isLoading) return <Loading></Loading>;
  return (
    <div className="container mx-auto text-secondary mt-10">
      <div className="w-[900px] mx-auto  shadow-lg ">
        <Slider
          items={topRated}
          renderItem={(movie) => <TopRated movie={movie}/>}
          slidesPerView={1}
          responsive={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            124: { slidesPerView: 1 },
          }}
        />
      </div>

      <div className="border-b border-secondary pb-1">
        <h1 className="text-xl">Now Playing</h1>
      </div>
    </div>
  );
};

export default Movies;
