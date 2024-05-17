import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType, TrailerType } from "./../types/App.types";

interface stateType {
  nowPlayingMovies: MovieType[];
  trailer: TrailerType;
  popularMovies: MovieType[];
  upComingMovies: MovieType[];
}
const initialState: stateType = {
  nowPlayingMovies: [],
  trailer: { id: "", key: "", type: "" },
  popularMovies: [],
  upComingMovies: [],
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
    addPopularMovies: (state, action: PayloadAction<MovieType[]>) => {
      return {
        ...state,
        popularMovies: action.payload,
      };
    },
    addUpComingMovies: (state, action: PayloadAction<MovieType[]>) => {
      return {
        ...state,
        upComingMovies: action.payload,
      };
    },
  },
});
export const { storeMovies, addTrailer, addPopularMovies, addUpComingMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
