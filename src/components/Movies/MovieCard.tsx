import { MovieType } from "./../../types/App.types";
import { IMAGE_URL } from "../../utils/constants";
import { useRef, useState } from "react";
import MovieCardHover from "./MovieCardHover";

interface MovieCardType {
  movie: MovieType;
  currentHoveredMovie: any;
}
interface CardPosition {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
const MovieCard = ({ movie, currentHoveredMovie }: MovieCardType) => {
  const { title, id, poster_path } = movie;
  const [hovered, setHovered] = useState<boolean>(false);
  const [centerPosition, setCenterPosition] = useState<CardPosition>({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  const cardRef = useRef<HTMLDivElement>(null);
  if (!poster_path) return null;

  let hoverTimeout: ReturnType<typeof setTimeout>;
  const hadleMouseOver = () => {
    hoverTimeout = setTimeout(() => {
      setHovered(true);
      if (cardRef.current instanceof Node) {
        const mousePOints = cardRef.current.getBoundingClientRect();
        const offsetFromTop = window.scrollY + mousePOints.top;
        const rightPosition = window.innerWidth - mousePOints.right;
        setCenterPosition({
          left: mousePOints.left,
          top: offsetFromTop,
          bottom: offsetFromTop + mousePOints.height / 2,
          right: rightPosition,
        });
      }
    }, 1000);
  };
  const handleLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered(false);
  };
  return (
    <div
      className="w-48 m-2 relative rounded-lg"
      id={`movieCard-${id}`}
      style={{ position: "relative" }}
      onMouseEnter={hadleMouseOver}
      onMouseLeave={handleLeave}
      ref={cardRef}
    >
      <img src={`${IMAGE_URL}/${poster_path}`} alt={title} className="" />
      {hovered && (
        <MovieCardHover
          data={movie}
          centerPosition={centerPosition}
          hovered={true}
        />
      )}
    </div>
  );
};

export default MovieCard;
