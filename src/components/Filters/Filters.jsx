import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { filterProducts, fetchProducts } from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    name: "",
    type: "0",
    price: "price-asc",
  });

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    dispatch(filterProducts(filters.name, Number(filters.type), filters.price));
  };

  const resetAllFilters = () => {
    setFilters({
      name: "",
      type: "0",
      price: "price-asc",
    });
    dispatch(fetchProducts());
  };

  return (
    <>
      <SearchBar 
        searchText={filters.name}
        onInputChange={(value) => handleFilterChange('name', value)}
        onSearch={applyFilters}
        onReset={resetAllFilters}
      />
      <div className={styles.container}>
        <div className={styles.filter}>
          <span className={styles.label}>Tipo de comida</span>
          <select name="type" className={styles.select} onChange={(e) => handleFilterChange(e.target.name, e.target.value)}>
            <option value="0">Todos</option>
            <option value="1">Convencional</option>
            <option value="2">Vegano</option>
            <option value="3">Vegetariano</option>
            <option value="4">Sin gluten</option>
            <option value="5">Sin lacteos</option>
          </select>
        </div>

        <div className={styles.filter}>
          <span className={styles.label}>Ordenar por precio</span>
          <select name="price" className={styles.select} onChange={(e) => handleFilterChange(e.target.name, e.target.value)}>
            <option value="price-desc">Mayor precio</option>
            <option value="price-asc">Menor precio</option>
          </select>
        </div>

        <button className={styles.apply} onClick={applyFilters}>
          Aplicar Filtros
        </button>
      </div>
    </>
  );
};

export default Filters;
