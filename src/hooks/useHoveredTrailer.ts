import { useEffect, useState } from "react";
import { GET_VIDEO_BY_MOVIE_ID, options } from "../utils/constants";

type VideoType = {
  id: string;
  key: string;
  type: string;
};

const useHoveredTrailer = (movie: number): VideoType | null => {
  const [trailer, setTrailer] = useState<VideoType | null>(null);

  useEffect(() => {
    const getTrailer = async () => {
      const url = GET_VIDEO_BY_MOVIE_ID.replace(/\{movie_id\}/g, String(movie));
      try {
        const data = await fetch(url, options);
        const json = await data.json();
        const filteredTrailers = json.results.filter(
          (video: VideoType) => video.type === "Trailer"
        );
        const selectedTrailer =
          filteredTrailers.length === 0 ? json.results[0] : filteredTrailers[0];
        console.log("trailer", selectedTrailer);
        setTrailer(selectedTrailer);
      } catch (err) {
        console.log("Error", err);
      }
    };
    getTrailer();
  }, []);
  return trailer;
};

export default useHoveredTrailer;
