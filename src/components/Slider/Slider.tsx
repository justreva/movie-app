import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  responsive?: { [key: number]: { slidesPerView: number } };
}

const Slider = <T,>({
  items,
  renderItem,
  spaceBetween = 10,
  slidesPerView = 6,
  responsive = {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 6 },
  },
}: SliderProps<T>) => {
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={responsive}
      >
        {items.map((item, index) => 
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default Slider;
