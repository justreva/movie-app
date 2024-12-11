import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/filmTypes";

interface FavoritesState {
  favorites: Movie[];
  ratedMovies: (Movie & { rating: number })[];
}

const initialState: FavoritesState = {
  favorites: [],
  ratedMovies: [],
};

const favoriteSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setRating: (
      state,
      action: PayloadAction<{ movie: Movie; rating: number }>
    ) => {
      const { movie, rating } = action.payload;
      const existingIndex = state.ratedMovies.findIndex(
        (ratedMovie) => ratedMovie.id === movie.id
      );
      if (existingIndex !== -1) {
        state.ratedMovies[existingIndex].rating = rating;
      } else {
        state.ratedMovies.push({ ...movie, rating });
      }
    },
    toggleFavorite: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      const existingIndex = state.favorites.findIndex(
        (favMovie) => favMovie.id === movie.id
      );
      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
      } else {
        const ratedMovie = state.ratedMovies.find(
          (ratedMovie) => ratedMovie.id === movie.id
        );
        const movieWithRating = ratedMovie
          ? { ...movie, rating: ratedMovie.rating }
          : movie;
        state.favorites.push(movieWithRating);
      }
    },
    deleteMovie: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
      state.ratedMovies = state.ratedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});
export const { toggleFavorite, setRating, deleteMovie } = favoriteSlice.actions;
export default favoriteSlice.reducer;
