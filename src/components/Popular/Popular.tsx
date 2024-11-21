import { useNavigate } from "react-router-dom";
import { MediaType, Movie } from "../../types/filmTypes";
import { Swiper, SwiperSlide } from "swiper/react";

interface popularProps {
  movies: Movie[];
}
interface detailsProps {
  movie: Movie;
  media_type: MediaType;
}

const Popular = ({ movies }: popularProps) => {
  const navigate = useNavigate();
  const goToDetailPage = (movie: detailsProps) => {
    if (!movie.media_type) {
      return navigate(`/movie/${movie.id}`);
    }
    navigate(`/${movie.media_type}/${movie.id}`);
  };
  return (
    <Swiper slidesPerView={4} spaceBetween={10}>
      {movies.map((movie, index) => (
        <SwiperSlide key={movie.id}>
          <div onClick={()=> goToDetailPage(movie)} className="mt-4 cursor-pointer px-9 hover:text-active duration-150">
            <div className="flex items-center space-x-5 relative">
              <h1 className="absolute text-[156px] z-[-1] left-[-20%] italic">{index + 1}</h1>
            <div className="w-[250px] hover:border-secondary overflow-hidden border z-0 border-border rounded-lg shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className="w-full h-[365px]"
              />
            </div>
            </div>
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Popular;
