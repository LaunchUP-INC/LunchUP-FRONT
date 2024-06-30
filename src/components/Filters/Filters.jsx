import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css";
import { filterProducts } from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    type: "allTypes",
    price: "minor",
  });

  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    dispatch(filterProducts(filters.type, filters.price));
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <span className={styles.label}>Filtrar por tipo de comida</span>
        <select name="type" className={styles.select} onChange={handleFilter}>
          <option value="allTypes">Todos los tipos</option>
          <option value="convencional">Convencional</option>
          <option value="vegan">Vegano</option>
          <option value="vegetarian">Vegetariano</option>
          <option value="freeGluten">Libre de gluten</option>
        </select>
      </div>
      <div className={styles.filter}>
        <span className={styles.label}>Filtrar por precio</span>
        <div className={styles.radioContainer}>
          <label className={styles.radio}>
            <input
              type="radio"
              name="price"
              value="mayor"
              className={styles.radioInput}
              onChange={handleFilter}
            />
            <span className={styles.label}>Mayor Precio</span>
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="price"
              value="minor"
              className={styles.radioInput}
              defaultChecked
              onChange={handleFilter}
            />
            <span className={styles.label}>Menor Precio</span>
          </label>
          <label className={styles.radio}>
            <input
              type="radio"
              name="price"
              value="all"
              className={styles.radioInput}
              onChange={handleFilter}
            />
            <span className={styles.label}>Todos los precios</span>
          </label>
        </div>
      </div>
      <button onClick={applyFilters}>Aplicar Filtros</button>
    </div>
  );
};

export default Filters;
