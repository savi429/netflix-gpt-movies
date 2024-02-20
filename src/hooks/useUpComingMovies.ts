import { useEffect } from "react";
import { UP_COMING_MOVIES, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "./../redux/moviesSlice";
import { RootState } from "../redux/store";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector(
    (store: RootState) => store.reducer.movies?.upComingMovies
  );
  useEffect(() => {
    const getUpComingMovies = async () => {
      try {
        const data = await fetch(UP_COMING_MOVIES, options);
        const json = await data.json();
        if (json?.results.length === 0) return null;
        dispatch(addUpComingMovies(json.results));
      } catch (err) {
        console.log(err);
      }
    };
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
