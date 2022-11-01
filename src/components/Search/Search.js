import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import styles from "./Search.module.css";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={!isFocused ? styles.search : styles.search_active}>
      <input
        type="text"
        placeholder="Фильмы, сериалы, персоны"
        className={styles.search_input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className={styles.search_button}>
        <SearchIcon width={18} height={18} />
      </button>
    </div>
  );
};

export default Search;
