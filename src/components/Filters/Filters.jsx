import styles from "./Filters.module.css"
import { useState } from "react";
const Filters = () => {

    const [filter, setFilter] = useState("allTypes");

    const handleFilter = (event) => {
        setFilter(event.target.value);
    }
    console.log(filter)
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <div className={styles.filter}>
                    <span className={styles.label}>Filtrar por tipo de comida</span>
                    <select id="" className={styles.select} onChange={handleFilter}>
                        <option value="allTypes">Todos los tipos</option>
                        <option value="convencional">Convencional</option>
                        <option value="vegan">Vegano</option>
                        <option value="vegetarian">Vegetariano</option>
                        <option value="freeGluten">Libre de gluten</option>
                    </select>
                </div>
            </div>
            <div className={styles.filter}>
                <span className={styles.label}>Filtrar por precio</span>
                <div className={styles.radioContainer}>
                    <label className={styles.radio}>
                        <input type="radio" name="price" value={"mayor"} className={styles.radioInput} size={50} />
                        <span className={styles.label}>Mayor Precio</span>
                    </label>
                    <label className={styles.radio}>
                        <input type="radio" name="price" value={"minor"} className={styles.radioInput} defaultChecked/>
                        <span className={styles.label}>Menor Precio</span>
                    </label>
                </div>
            </div>
        </div>
    )

}


export default Filters;