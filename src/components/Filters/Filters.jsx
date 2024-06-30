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
    <>
      <div className={styles.container}>
        <div className={styles.filter}>
          <span className={styles.label}>Tipo de comida</span>
          <select name="type" className={styles.select} onChange={handleFilter}>
            <option value="allTypes">Todos los tipos</option>
            <option value="convencional">Convencional</option>
            <option value="vegan">Vegano</option>
            <option value="vegetarian">Vegetariano</option>
            <option value="freeGluten">Libre de gluten</option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles.label}>Precio</span>
          <select
            name="price"
            className={styles.select}
            onChange={handleFilter}
          >
            <option value="all">Todos los precios</option>
            <option value="mayor">Mayor precio</option>
            <option value="minor">Menor precio</option>
          </select>
        </div>
        <button className={styles.apply} onClick={applyFilters}>Aplicar Filtros</button>
      </div>
    </>
  );
};

export default Filters;
