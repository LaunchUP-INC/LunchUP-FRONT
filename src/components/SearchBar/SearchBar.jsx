import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchIcon from "../Icons/SearchIcon";
import ResetIcon from "../Icons/ResetIcon";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchText, onInputChange, onSearch, onReset }) => {
  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <InputGroup className={styles.container}>
      <FormControl
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Encontrá lo que te gusta"
        className={styles.inputForm}
      />
      <Button variant="outline-secondary" className={styles.button} onClick={onSearch}>
        <SearchIcon className={styles.icon} />
      </Button>
      {searchText && (
        <Button variant="outline-secondary" className={styles.resetButton} onClick={onReset}>
          <ResetIcon className={styles.resetIcon} />
        </Button>
      )}
    </InputGroup>
  );
};

export default SearchBar;