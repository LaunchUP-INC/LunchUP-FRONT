import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Filters.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { filterProducts, fetchProducts } from "../../redux/actions";
import {
  FaHamburger,
  FaLeaf,
  FaCarrot,
  FaBreadSlice,
  FaCheese,
} from "react-icons/fa"; // Ejemplo usando react-icons

const Filters = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    name: "",
    type: "0",
    price: "price-asc",
  });

  useEffect(() => {
    dispatch(filterProducts(filters.name, Number(filters.type), filters.price));
  }, [filters, dispatch]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const resetAllFilters = () => {
    setFilters({
      name: "",
      type: "0",
      price: "price-asc",
    });
    dispatch(fetchProducts());
  };

  const foodTypes = [
    { id: "0", name: "Todos", icon: null },
    {
      id: "1",
      name: "Convencional",
      icon: <FaHamburger className={styles.icon} />,
    },
    { id: "2", name: "Vegano", icon: <FaLeaf className={styles.icon} /> },
    {
      id: "3",
      name: "Vegetariano",
      icon: <FaCarrot className={styles.icon} />,
    },
    {
      id: "4",
      name: "Sin gluten",
      icon: <FaBreadSlice className={styles.icon} />,
    },
    {
      id: "5",
      name: "Sin lacteos",
      icon: <FaCheese className={styles.icon} />,
    },
  ];

  return (
    <>
      <SearchBar
        searchText={filters.name}
        onInputChange={(value) => handleFilterChange("name", value)}
        onSearch={() => {}}
        onReset={resetAllFilters}
      />
      <div className={styles.container}>
        <div className={styles.filter}>
          <select
            name="type"
            className={styles.select}
            value={filters.type}
            onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
          >
            {foodTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          <div className={styles.filterOptions}>
            {foodTypes.map((type) => (
              <div
                key={type.id}
                className={`${styles.filterCard} ${
                  filters.type === type.id ? styles.selected : ""
                }`}
                onClick={() => handleFilterChange("type", type.id)}
              >
                {type.icon}
                <span>{type.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.filter}>
          <select
            name="price"
            className={styles.select}
            value={filters.price}
            onChange={(e) => handleFilterChange(e.target.name, e.target.value)}
          >
            <option value="price-desc">Mayor precio</option>
            <option value="price-asc">Menor precio</option>
          </select>
          <div className={styles.filterOptions}>
            <div
              className={`${styles.filterCard} ${
                filters.price === "price-desc" ? styles.selected : ""
              }`}
              onClick={() => handleFilterChange("price", "price-desc")}
            >
              <span>Mayor precio</span>
            </div>
            <div
              className={`${styles.filterCard} ${
                filters.price === "price-asc" ? styles.selected : ""
              }`}
              onClick={() => handleFilterChange("price", "price-asc")}
            >
              <span>Menor precio</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
