import usePopularMovies from "../hooks/usePopularMovies1";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useNowPlayingMovies from "./../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
