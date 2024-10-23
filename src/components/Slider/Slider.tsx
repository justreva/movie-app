import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Slider = ({ slides }) => {
  console.log(slides);
  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={6} modules={[Pagination]}>
        {slides.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="w-[100%] h-[370px] border-2 border-primary rounded-lg overflow-hidden hover:border-active duration-150 relative group">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-[100%] w-[100%]"
              />
              <div className="actions hidden absolute space-x-2 bg-primary p-1 rounded-lg bg-opacity-80 top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:flex group-focus-within:flex text-secondary">
                <div className="rate flex">
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                  <FaStar size={24} />
                </div>
                <FaHeart size={24} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
