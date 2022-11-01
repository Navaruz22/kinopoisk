import React from "react";
import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
  const setRatingColor = () => {
    if (rating < 5) {
      return "red";
    }
    if (rating >= 5 && rating < 7) {
      return "#777";
    }
    if (rating) {
      return "#3bb33b";
    }
  };

  return (
    <div
      style={{ backgroundColor: setRatingColor() }}
      className={styles.rating}
    >
      {rating}
    </div>
  );
};

export default Rating;
