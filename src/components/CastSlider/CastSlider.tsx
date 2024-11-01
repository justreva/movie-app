import { Cast } from "../../types/filmTypes";
import Slider from "../Slider/Slider";
import CastCard from "../CastCard/CastCard";
interface CastSliderProps {
  casts: Cast[];
}

const CastSlider = ({ casts }: CastSliderProps) => {
  return (
    <Slider
      items={casts}
      renderItem={(cast) => <CastCard cast={cast} />}
      slidesPerView={4}
      spaceBetween={5}
      responsive={{
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    />
  );
};

export default CastSlider;
