import { Episode } from "../../types/filmTypes";
import { EpisodeCard } from "../EpisodeCard/EpisodeCard";
import Slider from "../Slider/Slider";

interface EpisodeSliderProps {
  season: Episode[];

}

const EpisodeSlider = ({season}: EpisodeSliderProps) => {
  return (
    <Slider
      items={season}
      renderItem={(episode) => <EpisodeCard episode={episode} />}
      spaceBetween={20}
      slidesPerView={4}
      responsive = {
        {640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },}
      }
    />
  );
};

export default EpisodeSlider;
