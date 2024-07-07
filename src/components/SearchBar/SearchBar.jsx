import SearchIcon from "../Icons/SearchIcon";
import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    
  };

  return (
    <div className={styles.container}>
      <input
        placeholder="Encontrá lo que te gusta"
        type="text"
        id="search"
        value={search}
        onChange={handleSearch}
        className={styles.inputForm}
      />
      <button className={styles.button}>
        <SearchIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default SearchBar;
