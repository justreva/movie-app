import { useQuery } from "react-query";
import { fetchMovies } from "../../api/tmdb";
import { Movie } from "../../types/filmTypes";

import Loading from "../../components/Loading/Loading";
import TopRated from "../../components/TopRated/TopRated";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css/effect-fade";

const Movies = () => {
  const topRatedQuery = useQuery(["topRated"], () => fetchMovies("top_rated"));
  const topRated: Movie[] | undefined = topRatedQuery.data?.data.results.slice(
    0,
    5
  );

  if (topRatedQuery.isLoading) return <Loading></Loading>;
  return (
    <div className="container mx-auto text-secondary mt-10">
      <div className="w-[900px] mx-auto  shadow-lg ">
        <Swiper modules={[EffectFade, Autoplay]} autoplay={{delay: 5000}} effect={"fade"}>
          {topRated
            ? topRated.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <TopRated movie={movie} />
                </SwiperSlide>
              ))
            : "Error"}
        </Swiper>
      </div>

      <div className="border-b border-secondary pb-1">
        <h1 className="text-xl">Now Playing</h1>
      </div>
    </div>
  );
};

export default Movies;
