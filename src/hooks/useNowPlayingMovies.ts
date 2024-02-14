import { useEffect } from "react";
import { options, NOW_PLAYING_LIST } from "./../utils/constants";
import { storeMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
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
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
