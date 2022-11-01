import React from "react";
import styles from "./Footer.module.css";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Links from "./components/Links/Links";
import Apps from "./components/Apps/Apps";
import FooterBottom from "./components/FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <SocialMedia />
        <Links />
        <Apps />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
