import React from "react";
import { ReactComponent as Appstore } from "../../../../assets/images/appstore.svg";
import { ReactComponent as GooglePlay } from "../../../../assets/images/googleplay.svg";
import { ReactComponent as AppGallery } from "../../../../assets/images/appgallery.svg";
import { Link } from "react-router-dom";
import styles from "./Apps.module.css";

const apps = [
  {
    path: "/",
    icon: <Appstore />,
  },
  {
    path: "/",
    icon: <GooglePlay />,
  },
  {
    path: "/",
    icon: <AppGallery />,
  },
];

const Apps = () => {
  return (
    <div className={styles.apps}>
      {apps.map((app, ind) => (
        <Link to={app.path} key={ind}>
          {app.icon}
        </Link>
      ))}
    </div>
  );
};

export default Apps;
