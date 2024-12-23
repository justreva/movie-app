import { useNavigate } from "react-router-dom";
import { Movie, Person } from "../types/filmTypes";

export const getYear = (movie: Movie) => {
  if (movie.first_air_date) {
    if (movie.last_air_date) {
      if (
        new Date(movie.first_air_date).getFullYear() ===
        new Date(movie.last_air_date).getFullYear()
      ) {
        return new Date(movie.first_air_date).getFullYear();
      }
      return `${new Date(movie.first_air_date).getFullYear()} - ${new Date(
        movie.last_air_date
      ).getFullYear()}`;
    }
    return new Date(movie.first_air_date).getFullYear();
  }
  return new Date(movie.release_date).getFullYear();
};

export const ratingStyle = (vote_average: number) => {
  const rating = vote_average.toFixed(1);
  if (Number(rating) >= 7)
    return (
      <span className="text-xl text-secondary bg-green-700 py-1 px-2 rounded-lg font-medium">
        {rating}
      </span>
    );
  if (Number(rating) < 7 && Number(rating) >= 6)
    return (
      <span className="text-2xl text-secondary bg-orange-500 py-1 px-2 rounded-lg font-medium">
        {rating}
      </span>
    );
  if (Number(rating) < 6)
    return (
      <span className="text-2xl text-secondary bg-red-500 py-1 px-2 rounded-lg font-medium">
        {rating}
      </span>
    );
  else return "0";
};

export const convertDate = (birthday: string, deathday?: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = (date: string) =>
    months.find((item, index) => {
      if (index == Number(new Date(date).getMonth())) {
        return item;
      }
    });

  if (!deathday) {
    return `${new Date(birthday).getDate()} ${month(birthday)} ${new Date(
      birthday
    ).getFullYear()}`;
  } else {
    return `${new Date(birthday).getDate()} ${month(birthday)} ${new Date(
      birthday
    ).getFullYear()} - ${new Date(deathday).getDate()} ${month(
      deathday
    )} ${new Date(deathday).getFullYear()}`;
  }
};

export const useNavigator = () => {
  const navigate = useNavigate();

  return (movie: Movie | Person) => {
    if (!movie || !movie.id) {
      throw new Error("Invalid movie object or missing movie ID");
    }

    const path = movie.media_type
      ? `/${movie.media_type}/${movie.id}`
      : `/movie/${movie.id}`;

    navigate(path);
  };
};

export function isMovie(item: Movie | Person): item is Movie {
  return item.media_type === "movie" || item.media_type === "tv";
}

export function isPerson(item: Movie | Person): item is Person {
  return item.media_type === "person";
}