import styles from "./SearchBar.module.css"
import { useState } from "react";

const SearchBar = () =>{
    const [search, setSearch] = useState("");

    const handleSearch = (event) =>{  
        setSearch(event.target.value);
    }

    return (

        <div className={styles.container}>
            <label htmlFor="search" className={styles.label}>Food Search</label>
            <input type="text" id="search" className={styles.inputForm}/>
            <button className={styles.button}>Search</button>
        </div>
    )

}

export default SearchBar;