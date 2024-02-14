import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

type MovieType = {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
};
type TrailerType = {
  id: string;
  key: string;
  type: string;
};
type stateType = {
  nowPlayingMovies: MovieType[];
  trailer: TrailerType;
};
const initialState: stateType = {
  nowPlayingMovies: [],
  trailer: { id: "", key: "", type: "" },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    storeMovies: (state: stateType, action: PayloadAction<MovieType[]>) => {
      console.log("act", action.payload);
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    },
    addTrailer: (state, action: PayloadAction<TrailerType>) => {
      return {
        ...state,
        trailer: action.payload,
      };
    },
  },
});
export const { storeMovies, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
