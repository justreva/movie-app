import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from "./slices/favoriteFilmSlice"
export const store = configureStore({
  reducer: {
    movies: favoriteReducer
  },
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
