import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/filmTypes";

interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoriteSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<Movie>) => {
			state.favorites.push(action.payload)
		}
	}
});

export const {addFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer