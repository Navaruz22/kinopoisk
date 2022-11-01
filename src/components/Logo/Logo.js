import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/images/logo.svg";
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import NavList from "../NavList/NavList";

const Logo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.logo}
      style={{ background: isOpen ? "#333333" : "transparent" }}
    >
      <button className={styles.burger_btn} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <BurgerIcon /> : <CloseIcon />}
      </button>
      <div className={styles.img_block}>
        <img src={logo} alt="logo" />
      </div>
      {isOpen && (
        <div className={styles.menu_list}>
          <NavList header />
        </div>
      )}
    </div>
  );
};

export default Logo;
