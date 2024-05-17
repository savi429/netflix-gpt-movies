import { RootState } from "../redux/store";
import useTrailer from "../hooks/useTrailer";
import { FC } from "react";
import { useSelector } from "react-redux";

interface VideoBgProps {
  movieId: number;
  muteStatus: boolean;
}
const VideoBackground = ({ movieId, muteStatus }: VideoBgProps) => {
  const { loading } = useTrailer({ movieId });
  const trailerVideo = useSelector(
    (store: RootState) => store.reducer.movies?.trailer
  );
  // if (loading) {
  //   return <h2>Loading....</h2>;
  // }

  return (
    <div className="overflow-hidden video">
      <iframe
        className="w-full object-cover aspect-video"
        src={`https://www.youtube.com/embed/${
          trailerVideo?.key
        }?autoplay=1&mute=${
          muteStatus === true ? 1 : 0
        }&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
        loading="lazy"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
