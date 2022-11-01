import React from "react";
import styles from "./InfoContent.module.css";

const AgeRating = ({ rating }) => {
  return (
    rating && (
      <div className={styles.age_rating}>
        <span>{rating}</span>
      </div>
    )
  );
};

export default AgeRating;
