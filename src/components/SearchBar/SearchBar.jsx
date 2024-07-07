import { fetchProducts, searchProduct } from "../../redux/actions";
import SearchIcon from "../Icons/SearchIcon";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (event) => {

    const value = event.target.value;
    setSearch(value);
    if (value === "") {
      dispatch(fetchProducts());
    } else {
      dispatch(searchProduct(value));
    }

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
