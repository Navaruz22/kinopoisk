import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <div className={styles.footer_bottom}>
      <span>
        © 2003 — 2022, <Link to="*">Кинопоиск</Link> 18+
      </span>
      <div className={styles.footer_center}>
        <Link to="*">Телепрограмма</Link>
        <Link to="*">Музыка</Link>
        <Link to="*">Афиша</Link>
      </div>
      <span>
        Проект компании <Link to="*">Яндекс</Link>
      </span>
    </div>
  );
};

export default FooterBottom;
