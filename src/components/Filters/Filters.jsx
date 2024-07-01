import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css";
import { filterProducts, orderDishes } from "../../redux/actions";

const Filters = () => {

  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    type: "allTypes",
    price: "allPrices",
  });

  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    dispatch(filterProducts(filters.type));
    dispatch(orderDishes(filters.price));
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
            <option value="glutenFree">Sin gluten</option>
            <option value="dairyFree">Sin lacteos</option>
          </select>
        </div>

        <div className={styles.filter}>
          <span className={styles.label}>Ordenar por precio</span>
          <select
            name="price"
            className={styles.select}
            onChange={handleFilter}
          >
            <option value="allPrices">Todos los precios</option>
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
