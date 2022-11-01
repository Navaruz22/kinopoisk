import React from "react";
import { useLocation } from "react-router-dom";
import NavList from "../NavList/NavList";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <div className={styles.sidebar}>
        <NavList sidebar />
      </div>
    );
  }
};

export default SideBar;
