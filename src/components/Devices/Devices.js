import React from "react";
import styles from "./Devices.module.css";
import pult from "./images/pult.svg";
import samsungLogo from "./images/samsung-logo.svg";
import samsungLogoHover from "./images/samsung-logo-hover.svg";
import LGLogo from "./images/lg-logo.svg";
import LGLogoHover from "./images/lg-logo-hover.svg";
import android from "./images/android.svg";
import androidHover from "./images/android-hover.svg";
import singlePult from "./images/single-pult.svg";
import miLogo from "./images/mi-logo.svg";
import miLogoHover from "./images/mi-logo-hover.svg";
import sonyLogo from "./images/sony.svg";
import sonyLogoHover from "./images/sony-hover.svg";
import appleTVLogo from "./images/appletv-logo.svg";
import appleTVLogoHover from "./images/appletv-logo-hover.svg";
import appleTV from "./images/appletv.svg";

const Devices = () => {
  return (
    <div className={styles.device_container}>
      <h3 className={styles.maintitle}>Смотрите Кинопоиск на телевизоре</h3>
      <div className={styles.devices}>
        <a href="*" className={`${styles.simple_tv} ${styles.link}`}>
          <span className={styles.title}>Обычный телевизор</span>
          <span className={styles.subtitle}>
            Превратит ваш телевизор в Смарт ТВ
          </span>
          <img src={pult} alt="device" />
        </a>
        <a href="*" className={`${styles.single} ${styles.samsung}`}>
          <img src={samsungLogo} alt="samsung" />
          <img src={samsungLogoHover} alt="samsung" />
          <span className={styles.subtitle}>2013 г. и новее</span>
        </a>
        <a href="*" className={`${styles.single} ${styles.lg}`}>
          <img src={LGLogo} alt="samsung" />
          <img src={LGLogoHover} alt="samsung" />
          <span className={styles.subtitle}>2013 г. и новее</span>
        </a>
        <a href="*" className={`${styles.link} ${styles.android} `}>
          <img src={android} alt="samsung" className={styles.logo} />
          <img src={androidHover} alt="samsung" className={styles.logo} />
          <img src={singlePult} alt="samsung" className={styles.bg} />
          <span className={styles.subtitle}>Телевизоры и приставки</span>
        </a>
        <a href="*" className={`${styles.link} ${styles.mi}`}>
          <img src={miLogo} alt="Mi" className={styles.logo} />
          <img src={miLogoHover} alt="Mi" className={styles.logo} />
          <img src={singlePult} alt="pult" className={styles.bg} />
        </a>
        <a href="*" className={`${styles.link} ${styles.sony}`}>
          <img src={sonyLogo} alt="Mi" className={styles.logo} />
          <img src={sonyLogoHover} alt="Mi" className={styles.logo} />
          <img src={singlePult} alt="pult" className={styles.bg} />
        </a>
        <a href="*" className={`${styles.apple} ${styles.link}`}>
          <img src={appleTVLogo} alt="device" className={styles.logo} />
          <img src={appleTVLogoHover} alt="device" className={styles.logo} />
          <img src={appleTV} alt="apple" className={styles.bg} />
        </a>
      </div>
    </div>
  );
};

export default Devices;
