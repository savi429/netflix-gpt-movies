import { useEffect } from "react";
import { TOP_RATED, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "./../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPopularMoviesList = async () => {
      try {
        const data = await fetch(TOP_RATED, options);
        const json = await data.json();
        console.log("pop->", json);
        if (json?.results.length === 0) return null;
        dispatch(addPopularMovies(json.results));
      } catch (err) {
        console.log(err);
      }
    };
    getPopularMoviesList();
  }, []);
};

export default usePopularMovies;
