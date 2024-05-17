import React from "react";
import useHoveredTrailer from "../../hooks/useHoveredTrailer";

const TrailerComponent = ({ movieId }: { movieId: number }) => {
  const trailer = useHoveredTrailer(movieId);

  return (
    <div className="overflow-hidden aspect-w-16 aspect-h-9">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <p>{trailer?.type}</p>
    </div>
  );
};

export default TrailerComponent;
