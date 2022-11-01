import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FilmItem from "../FilmItem/FilmItem";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import FilmItem2 from "../FilmItem2/FilmItem2";
import styles from "./FilmsCarousel.module.css";

const itemComponents = (type, movie) => {
  switch (type) {
    case "year_film":
      return (
        <FilmItem
          id={movie.id}
          imgUrl={movie.poster?.previewUrl}
          name={movie.name}
          year={movie.year}
          genre={movie.genre && movie.genre[0].name}
          rating={movie.rating.imdb}
        />
      );
    case "watch_now":
      return (
        <FilmItem2
          id={movie.id}
          imgUrl={movie.poster?.previewUrl}
          rating={movie.rating.imdb}
        />
      );
    default:
      return "";
  }
};

const FilmsCarousel = ({ movies, breakpoints, type }) => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className={styles.slider}>
      <Swiper
        ref={sliderRef}
        style={{ padding: "0 5px" }}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}
        slidesPerView={6}
        breakpoints={breakpoints}
        onSwiper={() => {}}
        onSlideChange={() => {}}
      >
        {movies.map((movie, ind) => (
          <SwiperSlide key={ind}>{itemComponents(type, movie)}</SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigation}>
        <button className={styles.prev} onClick={handlePrev}>
          <ArrowIcon style={{ transform: "rotate(180deg)" }} />
        </button>
        <button className={styles.next} onClick={handleNext}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default FilmsCarousel;
