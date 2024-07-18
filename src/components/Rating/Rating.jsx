import styles from "./Rating.module.css";
import { useState } from "react";

const Rating = () => {
    const [stars, setStars] = useState(0);

    const handleClick = (e) => {
        setStars(e.target.value);
    };

    return (
        <div className={styles.rating}>
            <label className={styles.label} htmlFor="star5">
                <input
                    className={styles.input}
                    value={5}
                    name="rating"
                    id="star5"
                    type="radio"
                    onClick={handleClick}
                />
                
            </label>
            <label className={styles.label} htmlFor="star4">
                <input
                    className={styles.input}
                    value={4}
                    name="rating"
                    id="star4"
                    type="radio"
                    onClick={handleClick}
                />
                
            </label>
            <label className={styles.label} htmlFor="star3">
                <input
                    className={styles.input}
                    value={3}
                    name="rating"
                    id="star3"
                    type="radio"
                    onClick={handleClick}
                />
                
            </label>
            <label className={styles.label} htmlFor="star2">
                <input
                    className={styles.input}
                    value={2}
                    name="rating"
                    id="star2"
                    type="radio"
                    onClick={handleClick}
                />
                
            </label>
            <label className={styles.label} htmlFor="star1">
                <input
                    className={styles.input}
                    value={1}
                    name="rating"
                    id="star1"
                    type="radio"
                    onClick={handleClick}
                />
                
            </label>
        </div>
    );
};

export default Rating;
