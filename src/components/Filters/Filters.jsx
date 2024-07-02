import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css";
import { filterProducts, fetchProducts } from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    type: "0",
    price: "price-asc",
  });

  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    if (filters.type === "0") {
      dispatch(fetchProducts());
    }
    dispatch(filterProducts(Number(filters.type), filters.price));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filter}>
          <span className={styles.label}>Tipo de comida</span>
          <select name="type" className={styles.select} onChange={handleFilter}>
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
          <select
            name="price"
            className={styles.select}
            onChange={handleFilter}
          >
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
