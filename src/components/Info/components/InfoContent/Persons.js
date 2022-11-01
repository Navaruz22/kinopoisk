import React from "react";
import styles from "./InfoContent.module.css";

const Persons = ({ persons }) => {
  return (
    persons.length > 0 && (
      <div className={styles.persons}>
        <h3 className={styles.persons_title}>В главных ролях</h3>
        <div className={styles.persons_block}>
          {persons.slice(0, 16).map((person, ind) => (
            <span className={styles.person} key={ind}>
              {person.name}
            </span>
          ))}
        </div>
      </div>
    )
  );
};

export default Persons;
