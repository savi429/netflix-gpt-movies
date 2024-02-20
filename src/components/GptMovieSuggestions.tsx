import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MovieList from "./MovieList";

const GptMovieSuggestions = ({ movies }: any) => {
  const { searchResults, movieNames } = useSelector(
    (store: RootState) => store.reducer.gpt
  );
  if (!movieNames) return null;
  return (
    <div className="bg-black p-4 m-4 text-white bg-opacity-90">
      {movieNames.map((movie, index) => (
        <MovieList
          title={movie}
          key={movie}
          movies={searchResults[index].results}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
