import MovieCard from "./MovieCard";
import { MovieType } from "../utils/typesFiile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MovieList = ({ title, movies }: any) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold py-6">{title}</h1>
      <div className="flex ">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={2}
          slidesPerView={movies.length > 5 ? 5 : 2}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          //   onSlideChange={() => console.log("slide change")}
        >
          {movies?.length > 0 &&
            movies.map((movie: MovieType) => (
              <SwiperSlide>
                <MovieCard key={movie.id} movie={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
