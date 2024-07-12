import styles from "./Rating.module.css";
import { useState } from "react";


const Rating = () => {
const [stars, setStars] = useState(0);
const handleClick = (e) => {
    setStars(e.target.value);
}

    return (
        <div className={styles.rating}>
            <input className={styles.input} value="5" name="rating" id="star5" type="radio">
                <label className={styles.label} for="star5"></label>
            </input>
            <input className={styles.input} value="4" name="rating" id="star4" type="radio">
                <label className={styles.label} for="star4"></label>
            </input>
            <input className={styles.input} value="3" name="rating" id="star3" type="radio">
                <label className={styles.label} for="star3"></label>
            </input>
            <input className={styles.input} value="2" name="rating" id="star2" type="radio">
                <label className={styles.label} for="star2"></label>
            </input>
            <input className={styles.input} value="1" name="rating" id="star1" type="radio">
                <label className={styles.label} for="star1"></label>
            </input>

        </div>
            )

}

export default Rating