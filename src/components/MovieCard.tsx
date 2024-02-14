import { MovieType } from "../utils/typesFiile";
import { IMAGE_URL } from "../utils/constants";

type MovieCardType = {
  movie: MovieType;
};
const MovieCard = ({ movie }: MovieCardType) => {
  const { title, id, overview, poster_path } = movie;
  return (
    <div>
      <div className="w-48 pr-6">
        <img
          src={`${IMAGE_URL}/${poster_path}`}
          alt={title}
          //   width="100"
          //   height="100"
        />
      </div>
    </div>
  );
};

export default MovieCard;
