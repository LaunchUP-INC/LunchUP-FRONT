import SearchIcon from "../Icons/SearchIcon";
import ResetIcon from "../Icons/ResetIcon";
import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ searchText, onInputChange, onSearch, onReset }) => {
  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Encontrá lo que te gusta"
        className={styles.inputForm}
      />
      <button className={styles.button} onClick={onSearch}>
        <SearchIcon className={styles.icon} />
      </button>
      {searchText && (
        <button className={styles.resetButton} onClick={onReset}>
          <ResetIcon className={styles.resetIcon} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
