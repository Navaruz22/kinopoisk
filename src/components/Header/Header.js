import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as TVIcon } from "../../assets/icons/tv.svg";
import CustomLink from "../CustomLink.js/CustomLink";
import Search from "../Search/Search";
import TryButton from "../Buttons/TryButton/TryButton";
import { useWindowSize } from "../../hooks/useWindowSize";

const Header = () => {
  const [isDisable, setIsDisable] = useState(false);

  const [width] = useWindowSize();

  useEffect(() => {
    if (width < 998) {
      setIsDisable(true);
    }
    if (width > 998) {
      setIsDisable(false);
    }
  }, [width]);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Logo />
        <div className={styles.header_content}>
          {!isDisable && (
            <>
              <CustomLink
                path={"/"}
                title="Онлайн-кинотеатр"
                icon={<PlayIcon />}
                header
              />

              <CustomLink
                path={"/"}
                title="Установить на ТВ"
                icon={<TVIcon />}
                header
              />
              <Search />
            </>
          )}
        </div>
        <div className={styles.header_content}>
          {(!isDisable && <TryButton />) || <Search />}
          <CustomLink path={"*"} title={"Войти"} header />
        </div>
      </div>
    </header>
  );
};

export default Header;
