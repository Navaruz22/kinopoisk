import React from "react";
import { ReactComponent as VKIcon } from "../../../../assets/icons/vk.svg";
import { ReactComponent as TwitterIcon } from "../../../../assets/icons/twitter.svg";
import { ReactComponent as TelegramIcon } from "../../../../assets/icons/telegram.svg";
import { ReactComponent as YoutubeIcon } from "../../../../assets/icons/youtube.svg";
import styles from "./SocialMedia.module.css";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "/",
    icon: <VKIcon />,
  },
  {
    path: "/",
    icon: <TwitterIcon />,
  },
  {
    path: "/",
    icon: <TelegramIcon />,
  },
  {
    path: "/",
    icon: <YoutubeIcon />,
  },
];

const SocialMedia = () => {
  return (
    <div className={styles.social_media}>
      {socialLinks.map((social, ind) => (
        <Link to={social.path} key={ind}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
