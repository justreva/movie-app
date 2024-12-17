import { Person } from "../../types/filmTypes";
import Slider from "../Slider/Slider";
import CastCard from "../PersonCard/PersonCard";
interface CastSliderProps {
  persons: Person[] | [];
}

const PersonSlider = ({ persons }: CastSliderProps) => {
  return (
    <Slider
      items={persons}
      renderItem={(cast) => <CastCard person={cast} />}
      slidesPerView={4}
      spaceBetween={5}
      responsive={{
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    />
  );
};

export default PersonSlider;
