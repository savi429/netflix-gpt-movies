import { useEffect, useState } from "react";
import { TOP_RATED, options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";
import { RootState } from "../redux/store";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (store: RootState) => store.reducer.movies?.popularMovies
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const getPopularMoviesList = async () => {
      try {
        setLoading(true);
        const data = await fetch(TOP_RATED, options);
        const json = await data.json();
        if (json?.results?.length === 0) return null;
        dispatch(addPopularMovies(json.results));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    !popularMovies && getPopularMoviesList();
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
};

export default usePopularMovies;
