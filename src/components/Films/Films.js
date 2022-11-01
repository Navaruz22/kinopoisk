import React from "react";
import FilmsCarousel from "../FilmsCarousel/FilmsCarousel";
import styles from "./Films.module.css";

const Films = ({ title, color, background, breakpoints, movies, type }) => {
  return (
    <div
      className={styles.films}
      style={{ color: color, backgroundColor: background }}
    >
      <h3 className={styles.title}>{title}</h3>
      {movies.length > 0 && (
        <FilmsCarousel breakpoints={breakpoints} movies={movies} type={type} />
      )}
    </div>
  );
};

export default Films;
