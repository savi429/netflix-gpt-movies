import MovieCard from "./MovieCard";
import { MovieType } from "../utils/typesFiile";

const MovieList = ({ title, movies }: any) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold py-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies?.length > 0 &&
          movies.map((movie: MovieType) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
