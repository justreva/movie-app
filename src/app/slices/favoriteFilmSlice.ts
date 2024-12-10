import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/filmTypes";

interface FavoritesState {
  rating: Record<number, number>;
  favorites: Movie[];
}

const initialState: FavoritesState = {
  rating: {},
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<{ movieId: number; rating: number }>) => {
      state.rating[action.payload.movieId] = action.payload.rating;
    },
    toggleFavorite: (state, action: PayloadAction<Movie>) => {
      const existingIndex = state.favorites.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (existingIndex !== -1) {
        // Если фильм уже в избранном, удаляем его
        state.favorites.splice(existingIndex, 1);
      } else {
        // Если фильма нет в избранном, добавляем его
        state.favorites.push(action.payload);
      }
    },
  },
});
export const { toggleFavorite, setRating } = favoriteSlice.actions;
export default favoriteSlice.reducer;
