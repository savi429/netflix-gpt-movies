import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useState } from "react";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.reducer.movies?.nowPlayingMovies
  );
  const [muteStatus, setMuteStatus] = useState(true);

  if (movies.length === 0) return null;
  const mainMovie = movies[1];
  console.log(mainMovie);
  const { title, overview, id } = mainMovie;
  const handleMuteStatus = (flag: boolean) => {
    setMuteStatus(flag);
  };
  return (
    <>
      <VideoBackground movieId={id} muteStatus={muteStatus} />
      <VideoTitle
        title={title}
        overview={overview}
        handleMuteStatus={handleMuteStatus}
        muteStatus={muteStatus}
        movieId={id}
      />
    </>
  );
};

export default MainContainer;
