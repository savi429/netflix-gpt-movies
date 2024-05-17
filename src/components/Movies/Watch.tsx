import { useParams } from "react-router-dom";
import useHoveredTrailer from "../../hooks/useHoveredTrailer";

const Watch = () => {
  const params = useParams();
  const id: number = parseInt(params?.movieId || "0");
  const trailer = useHoveredTrailer(id);
  console.log("params", params.movieId);
  return (
    <div>
      <iframe
        className="aspect-video w-screen"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
