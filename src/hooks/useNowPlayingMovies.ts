import { useEffect } from "react";
import { options, NOW_PLAYING_LIST } from "./../utils/constants";
import { storeMovies } from "../redux/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.reducer.movies?.nowPlayingMovies
  );
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(NOW_PLAYING_LIST, options);
        const json = await data.json();
        dispatch(storeMovies(json.results));
      } catch (err) {
        console.log("err", err);
      }
    };
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
