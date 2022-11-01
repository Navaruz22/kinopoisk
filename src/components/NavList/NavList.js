import React from "react";
import styles from "./NavList.module.css";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as Play2Icon } from "../../assets/icons/play2.svg";
import { ReactComponent as MovieIcon } from "../../assets/icons/movie.svg";
import { ReactComponent as SerialsIcon } from "../../assets/icons/serials.svg";
import { ReactComponent as TicketIcon } from "../../assets/icons/ticket.svg";
import { ReactComponent as MediaIcon } from "../../assets/icons/media.svg";
import CustomLink from "../CustomLink.js/CustomLink";

const menuList = [
  {
    path: "*",
    title: "Главная",
    icon: <HomeIcon />,
  },
  {
    path: "*",
    title: "Онлайн-кинотеатр",
    icon: <Play2Icon />,
  },
  {
    path: "*",
    title: "Фильмы",
    icon: <MovieIcon />,
  },
  {
    path: "*",
    title: "Сериалы",
    icon: <SerialsIcon />,
  },
  {
    path: "*",
    title: "Билеты в кино",
    icon: <TicketIcon />,
  },
  {
    path: "*",
    title: "Медиа",
    icon: <MediaIcon />,
  },
];

const NavList = ({ header, sidebar }) => {
  return (
    <ul className={styles.list}>
      {menuList.map((menu, ind) => (
        <li key={ind}>
          <CustomLink
            icon={menu.icon}
            path={menu.path}
            title={menu.title}
            header={header}
            sidebar={sidebar}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavList;
