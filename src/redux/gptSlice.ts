import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieType } from "../types/App.types";

interface SearchPayload {
  searchResults: MovieType[];
  movieNames: string[] | undefined;
}
const initialState: SearchPayload = {
  searchResults: [],
  movieNames: [],
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    addSearchResults: (state, action: PayloadAction<SearchPayload>) => {
      const { movieNames, searchResults } = action.payload;
      state.searchResults = searchResults;
      state.movieNames = movieNames;
    },
  },
});
export const { addSearchResults } = gptSlice.actions;
export default gptSlice.reducer;
