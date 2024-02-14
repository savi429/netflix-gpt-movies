import useNowPlayingMovies from "./../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
      {/* 
    Main Container
     -videoBackground
     -video title
    Secondary container
     - Movies List *n
       - Cards*n
     
     */}
    </div>
  );
};

export default Browse;
