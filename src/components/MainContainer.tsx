import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.reducer.movies?.nowPlayingMovies
  );
  if (movies.length === 0) return null;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { title, overview, id } = mainMovie;
  return (
    <div>
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
