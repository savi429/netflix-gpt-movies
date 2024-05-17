import MovieCard from "./MovieCard";
import { MovieType } from "./../../types/App.types";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

interface MovieListProps {
  title: string;
  movies: MovieType[];
}

const MovieList = ({ title, movies }: MovieListProps) => {
  const [slidesPerGroup, setSlidesPerGroup] = useState(2);

  const [currentHoveredMovie, setCurrentHoveredMovie] = useState<number | null>(
    null
  );
  const handleResize = () => {
    const slidesInView = Math.floor(window.innerWidth / 144); // Adjust 200 to your slide width
    setSlidesPerGroup(slidesInView);
  };
  const handleMouseEnter = (movieId: number) => {
    setCurrentHoveredMovie(movieId);
  };

  const handleMouseLeave = () => {
    setCurrentHoveredMovie(null);
  };
  return (
    <div className="pl-12 p-6 z-40">
      <h1 className="md:text-3xl text-2xl font-bold py-6">{title}</h1>
      <div className="">
        <div className="">
          <Swiper
            // slidesPerView={"auto"}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 4,
              },
              768: {
                // width: 768,
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 8,
              },
            }}
            grabCursor={true}
            // slidesPerView={5}
            // spaceBetween={5}
            // slidesPerGroup={1}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={{
              disabledClass: "disabled_swiper_button",
            }}
            modules={[Navigation]}
            onResize={handleResize}
            // className="mySwiper flex"
          >
            {movies?.length > 0 &&
              movies.map((movie, index: number) => (
                <SwiperSlide
                  key={index}
                  className="cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded"
                >
                  <div
                    onMouseEnter={() => handleMouseEnter(movie.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      currentHoveredMovie={currentHoveredMovie}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
