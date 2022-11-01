import React from "react";
import styles from "./InfoContent.module.css";
import { ReactComponent as SaveIcon } from "../../icons/save.svg";
import { ReactComponent as MoreIcon } from "../../icons/more.svg";

const InfoContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_left}>
        <h1 className={styles.head}>Либерея: Охотники за сокровищами (2022)</h1>
        <div className={styles.age_rating}>
          <span>12+</span>
        </div>
        <div className={styles.save_buttons}>
          <button className={styles.save}>
            <SaveIcon color="#333" style={{ marginRight: "10px" }} />
            Буду смотреть
          </button>
          <button className={styles.more}>
            <MoreIcon color="#333" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoContent;
