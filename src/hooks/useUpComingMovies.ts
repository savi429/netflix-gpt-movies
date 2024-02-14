import { useEffect } from "react";
import { UP_COMING_MOVIES, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "./../redux/moviesSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
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
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
