import React from "react";
import { Link } from "react-router-dom";
import styles from "./CustomLink.module.css";

const CustomLink = ({ path, title, icon, header, sidebar }) => {
  let classStyles =
    (header && styles.header_link) || (sidebar && styles.sidebar_link);
  return (
    <Link to={path} className={classStyles}>
      {icon}
      <p>{title}</p>
    </Link>
  );
};

export default CustomLink;
