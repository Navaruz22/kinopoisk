import React from "react";
import styles from "./InfoContent.module.css";
import { ReactComponent as SaveIcon } from "../../icons/save.svg";
import { ReactComponent as MoreIcon } from "../../icons/more.svg";
import AgeRating from "./AgeRating";
import About from "../About/About";
import Rating from "./Rating";
import Persons from "./Persons";

const InfoContent = ({ film }) => {
  return (
    <div className={styles.content}>
      <div className={styles.content_left}>
        <h1 className={styles.head}>{film.name}</h1>
        <AgeRating rating={film.ageRating} />
        <div className={styles.save_buttons}>
          <button className={styles.save}>
            <SaveIcon color="#333" style={{ marginRight: "10px" }} />
            Буду смотреть
          </button>
          <button className={styles.more}>
            <MoreIcon color="#333" />
          </button>
        </div>
        <About film={film} />
      </div>
      <div className={styles.content_right}>
        <Rating rating={film.rating?.imdb} votes={film.votes?.imdb} />
        <button className={styles.rate_btn}>Оценить фильм</button>
        <Persons persons={film.persons} />
      </div>
    </div>
  );
};

export default InfoContent;
