import React from "react";
import AgeRating from "../InfoContent/AgeRating";
import styles from "./About.module.css";
import AboutRow from "./AboutRow";

const returnProfession = (persons, profession) => {
  return persons.filter((person) => person.enProfession === profession)[0];
};

const About = ({ film }) => {
  return (
    <div className={styles.about}>
      <h3 className={styles.head}>О фильме</h3>
      <div className={styles.about_rows}>
        <AboutRow title={"Год производства"} value={film.year} />
        <AboutRow title={"Страна"} value={film.countries[0].name} />
        <AboutRow title={"Жанр"} value={film.genres[0].name} />
        <AboutRow title={"Слоган"} value={film.slogan} />
        <AboutRow
          title={"Режиссер"}
          value={returnProfession(film.persons, "director").name}
        />
        <AboutRow
          title={"Сценарий"}
          value={returnProfession(film.persons, "writer").name}
        />
        <AboutRow
          title={"Продюсер"}
          value={returnProfession(film.persons, "producer").name}
        />
        <AboutRow
          title={"Оператор"}
          value={returnProfession(film.persons, "operator").name}
        />
        <AboutRow
          title={"Композитор"}
          value={returnProfession(film.persons, "composer").name}
        />
        <AboutRow
          title={"Художник"}
          value={returnProfession(film.persons, "designer").name}
        />
        <AboutRow
          title={"Бюджет"}
          value={`${film.budget.currency} ${film.budget.value}`}
        />
        <AboutRow
          title={"Премьера"}
          value={new Date(film.premiere.world).toLocaleDateString("ru-RU")}
        />
        <AboutRow
          title={"Возраст"}
          value={<AgeRating rating={`${film.ageRating}+`} />}
        />
        <AboutRow title={"Время"} value={`${film.movieLength} мин.`} />
      </div>
    </div>
  );
};

export default About;
