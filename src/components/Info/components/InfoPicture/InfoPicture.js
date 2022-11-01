import React from "react";
import styles from "./InfoPicture.module.css";
import { ReactComponent as ArrowDownIcon } from "../../icons/arrowDown.svg";
import { ReactComponent as VKIcon } from "../../../../assets/icons/vk.svg";
import { ReactComponent as TwitterIcon } from "../../../../assets/icons/twitter.svg";
import { ReactComponent as TelegramIcon } from "../../../../assets/icons/telegram.svg";

const InfoPicture = ({ imgUrl }) => {
  return (
    <div className={styles.info_picture}>
      <div className={styles.picture_block}>
        <img src={imgUrl} alt="img" />
      </div>
      <div className={styles.buttons_block}>
        <button className={styles.watch}>+ Буду смотреть</button>
        <button className={styles.add}>
          <ArrowDownIcon />
        </button>
      </div>
      <div className={styles.social_links}>
        <a href="*" className={styles.vk}>
          <VKIcon color="#fff" />
        </a>
        <a href="*" className={styles.twitter}>
          <TwitterIcon color="#fff" />
        </a>
        <a href="*" className={styles.telegram}>
          <TelegramIcon color="#fff" />
        </a>
      </div>
    </div>
  );
};

export default InfoPicture;
