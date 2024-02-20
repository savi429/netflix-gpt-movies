import React, { useEffect } from "react";
import { GET_VIDEO_BY_MOVIE_ID, options } from "./../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "./../redux/moviesSlice";
import { RootState } from "../redux/store";

type VideoType = {
  id: string;
  key: string;
  type: string;
};
const useTrailer = ({ movieId }: any) => {
  const dispatch = useDispatch();
  const trailer = useSelector(
    (store: RootState) => store.reducer.movies?.trailer
  );
  useEffect(() => {
    const url = GET_VIDEO_BY_MOVIE_ID.replace(/\{movie_id\}/g, String(movieId));
    const getTrailer = async () => {
      try {
        const data = await fetch(url, options);
        const json = await data.json();
        const filteredTrailers = json.results.filter(
          (video: VideoType) => video.type === "Trailer"
        );
        const trailer =
          filteredTrailers.length === 0 ? json.results[0] : filteredTrailers[0];
        console.log(trailer);
        dispatch(addTrailer(trailer));
      } catch (err) {
        console.log("Error", err);
      }
    };
    !trailer && getTrailer();
  }, []);
};

export default useTrailer;
