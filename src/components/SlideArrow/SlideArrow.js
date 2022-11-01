import React from "react";
import styles from "./SlideArrow.module.css";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

const SlideArrow = ({ onClick }) => {
  return (
    <div className={styles.arrow} onClick={onClick}>
      <ArrowIcon onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default SlideArrow;
