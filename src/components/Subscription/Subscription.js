import React from "react";
import styles from "./Subscription.module.css";
import plus from "../../assets/images/yandex-plus.svg";

const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <button className={styles.plus_button}>
        <img src={plus} alt="плюс" />
      </button>
      <p className={styles.title}>
        Фильмы и сериалы <br /> по подписке Яндекс Плюс
      </p>
      <p className={styles.subtitle}>Месяц всего за 599 сумов</p>
      <p className={styles.description}>
        Отменяйте в любой момент, напишем за 3 <br /> дня до первого списания
      </p>
      <button className={styles.button}>
        Оформить Месяц всего за 599 сумов
      </button>
    </div>
  );
};

export default Subscription;
