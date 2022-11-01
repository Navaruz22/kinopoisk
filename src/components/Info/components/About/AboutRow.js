import React from "react";
import styles from "./About.module.css";

const AboutRow = ({ title, value }) => {
  return (
    <div className={styles.about_row}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default AboutRow;
