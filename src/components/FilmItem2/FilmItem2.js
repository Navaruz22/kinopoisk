import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import styles from "./FilmItem2.module.css";
import notposter from "../../assets/images/notposter.svg";

const FilmItem2 = ({ id, imgUrl, rating }) => {
  return (
    <Link to={`/${id}`} className={styles.film}>
      <img src={imgUrl || notposter} alt={"Film"} />
      <Rating rating={rating} />
    </Link>
  );
};

export default FilmItem2;
