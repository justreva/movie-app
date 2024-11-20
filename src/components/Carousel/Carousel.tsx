import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css/effect-fade";
import { Movie } from "../../types/filmTypes";
import TopRated from "../TopRated/TopRated";
import Error from "../Error/Error";


interface CarouselProps {
  movies: Movie[] | undefined;
}

const Carousel = ({ movies }: CarouselProps) => {
  

  return (
    <Swiper
      modules={[EffectFade, Autoplay, EffectCoverflow]}
      autoplay={{ delay: 5000 }}
      effect={"coverflow"}
      loop={true}
      coverflowEffect={{
        stretch: 50,
        rotate: 0,
        depth: 300, // Глубина для создания 3D-эффекта
        modifier: 1,
        slideShadows: false,
      }}
      slidesPerView={3}
    >
      {movies ? (
        movies.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <TopRated movie={movie} />
          </SwiperSlide>
        ))
      ) : (
        <Error></Error>
      )}
    </Swiper>
  );
};

export default Carousel;
