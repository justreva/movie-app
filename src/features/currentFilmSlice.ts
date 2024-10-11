import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilmState {
  countries: number[],
  genres,
  order,
  type: string,
}

const initialState: FilmState = {
  countries: [],
}

export const currentMovieSlice = createSlice({
  name: 'currentMovieSlice',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {} = currentMovieSlice.actions

export default currentMovieSlice.reducer