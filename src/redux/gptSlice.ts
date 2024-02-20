import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchResults: [],
    movieNames: [],
  },
  reducers: {
    addSearchResults: (state, action) => {
      const { movieNames, tmbResult } = action.payload;
      state.searchResults = tmbResult;
      state.movieNames = movieNames;
    },
  },
});
export const { addSearchResults } = gptSlice.actions;
export default gptSlice.reducer;
