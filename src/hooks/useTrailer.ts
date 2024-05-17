import { useEffect, useState } from "react";
import { GET_VIDEO_BY_MOVIE_ID, options } from "./../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "./../redux/moviesSlice";
import { RootState } from "../redux/store";

interface Video {
  id: string;
  key: string;
  type: string;
}
interface Movie {
  movieId: number;
}
const useTrailer = ({ movieId }: Movie) => {
  const dispatch = useDispatch();
  const trailer = useSelector(
    (store: RootState) => store.reducer.movies?.trailer
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = GET_VIDEO_BY_MOVIE_ID.replace(/\{movie_id\}/g, String(movieId));
    const getTrailer = async () => {
      try {
        const data = await fetch(url, options);
        const json = await data.json();
        const filteredTrailers = json.results.filter(
          (video: Video) => video.type === "Trailer"
        );
        const trailer =
          filteredTrailers.length === 0 ? json.results[0] : filteredTrailers[0];
        console.log(trailer);
        dispatch(addTrailer(trailer));
      } catch (err) {
        console.log("Error", err);
      } finally {
        setLoading(false);
      }
    };
    !trailer && getTrailer();
  }, []);
  return { loading, trailer };
};

export default useTrailer;
