import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SecondaryContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.reducer.movies.nowPlayingMovies
  );
  const popularMovies = useSelector(
    (store: RootState) => store.reducer.movies?.popularMovies
  );
  const upComingMovies = useSelector(
    (store: RootState) => store.reducer.movies?.upComingMovies
  );
  return (
    <div className="bg-black text-white pl-12">
      <div className="absolute -mt-[20%]">
        <MovieList title={"Now Playing"} movies={movies} />
      </div>
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Up Coming"} movies={upComingMovies} />
      <MovieList title={"trending"} movies={movies} />

      {/* 
    movies list -popular
        - Movie car*n
    movies list -trending
    movies list -documented
     */}
    </div>
  );
};

export default SecondaryContainer;
