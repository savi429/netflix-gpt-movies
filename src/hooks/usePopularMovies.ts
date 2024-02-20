import { useEffect } from "react";
import { TOP_RATED, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "./../redux/moviesSlice";
import { RootState } from "../redux/store";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (store: RootState) => store.reducer.movies?.popularMovies
  );
  useEffect(() => {
    const getPopularMoviesList = async () => {
      try {
        const data = await fetch(TOP_RATED, options);
        const json = await data.json();
        console.log("pop->", json);
        if (json?.results?.length === 0) return null;
        dispatch(addPopularMovies(json.results));
      } catch (err) {
        console.log(err);
      }
    };
    !popularMovies && getPopularMoviesList();
  }, []);
};

export default usePopularMovies;
