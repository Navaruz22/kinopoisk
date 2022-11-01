import React from "react";
import { Link } from "react-router-dom";
import styles from "./Links.module.css";

const links = [
  {
    path: "/",
    title: "Вакансии",
  },
  {
    path: "/",
    title: "Реклама",
  },
  {
    path: "/",
    title: "Соглашение",
  },
  {
    path: "/",
    title: "Справка",
  },
  {
    path: "/",
    title: "Блог",
  },
  {
    path: "/",
    title: "Предложения",
  },
  {
    path: "/",
    title: "Служба поддержки",
  },
];

const Links = () => {
  return (
    <div className={styles.links}>
      {links.map((link, ind) => (
        <Link to={link.path} key={ind}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
