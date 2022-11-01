import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import styles from "./FilmItem.module.css";
import notposter from "../../assets/images/notposter.svg";

const FilmItem = ({ id, imgUrl, name, year, genre, rating }) => {
  return (
    <Link to={`/${id}`} className={styles.film}>
      <div className={styles.img_block}>
        <img src={imgUrl || notposter} alt={"Film"} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{name || "Неизвестно"}</span>
        <span className={styles.subtitle}>
          {genre ? `${year}, ${genre}` : year}
        </span>
      </div>
      <Rating rating={rating} />
    </Link>
  );
};

export default FilmItem;
