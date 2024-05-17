import React from "react";
import MovieList from "./Movies/MovieList";
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
    <div className="bg-black text-white">
      <div className="-mt-[0px] md:-mt-48 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Up Coming"} movies={upComingMovies} />
        <MovieList title={"trending"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
