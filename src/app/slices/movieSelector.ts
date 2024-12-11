import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Movie } from "../../types/filmTypes";

const selectFavorite = (state: RootState) => state.movies.favorites;
const selectRated = (state: RootState) => state.movies.rating;

export const selectRatedAndFavoriteMovies = createSelector(
  [selectFavorite, selectRated],
  (favorite, ratings) => {
    const ratedMovies = Object.keys(ratings).map((id) => ({
      id: Number(id),
      rating: ratings[Number(id)],
    }));

    const allMovies = [...favorite, ...ratedMovies.map((ratedMovie)=>{
			const favoriteMovie =favorite.find((fav) => fav.id === rated)
		})].reduce((acc, movie) => {
			if(!acc.some((item) => item.id == movie.id)){
				acc.push(movie)
			}
			return acc
		},
    [] as (Movie & {rating?: number})[]);
		return allMovies;
  }
);
