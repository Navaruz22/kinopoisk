import React from "react";
import styles from "./InfoContent.module.css";

const Rating = ({ rating, votes }) => {
  return (
    <div className={styles.rating}>
      <h3 className={styles.rate}>{rating}</h3>
      <p className={styles.votes}>{votes} оценки</p>
    </div>
  );
};

export default Rating;
